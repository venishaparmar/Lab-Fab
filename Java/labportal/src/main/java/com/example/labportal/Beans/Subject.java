package com.example.labportal.Beans;

import javax.validation.constraints.NotBlank;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "subject")
public class Subject {
    @Id
    private ObjectId id;

    @NotBlank(message = "Subject name is mandatory")
    @Field(name = "subject_name")
    private String subjectName;

    @NotBlank(message = "Semester is mandatory")
    @Field(name = "semester")
    private String semester;

    @NotBlank(message = "Lab name is mandatory")
    @Field(name = "lab_name")
    private String labName;

    public Subject() {}

    public Subject(String subjectName, String semester, String labName) {
        this.subjectName = subjectName;
        this.semester = semester;
        this.labName = labName;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getId() {
        return id;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getSemester() {
        return semester;
    }

    public void setLabName(String labName) {
        this.labName = labName;
    }

    public String getLabName() {
        return labName;
    }
}
