package com.example.labportal.Beans;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "component")
public class Component {
    @Id
    private ObjectId id;

    @NotBlank(message = "Component name is mandatory")
    @Field(name = "component_name")
    private String componentName;

    @NotBlank(message = "Description is mandatory")
    @Field(name = "description")
    private String description;

    @NotBlank(message = "Location is mandatory")
    @Field(name = "location")
    private String location;

    @NotNull(message = "Start time is mandatory")
    @Field(name = "start_time")
    private String startTime;

    @NotNull(message = "End time is mandatory")
    @Field(name = "end_time")
    private String endTime;

    @NotNull(message = "Image name is mandatory")
    @Field(name = "image_name")
    private String imageName;

    @Field(name = "video_url")
    private String videoUrl;

    public Component() {}

    public Component(String componentName, String description, String location, String startTime, String endTime, String imageName, String videoUrl) {
        this.componentName = componentName;
        this.description = description;
        this.location = location;
        this.startTime = startTime;
        this.endTime = endTime;
        this.imageName = imageName;
        this.videoUrl = videoUrl;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public ObjectId getId() {
        return id;
    }

    public void setComponentName(String componentName) {
        this.componentName = componentName;
    }

    public String getComponentName() {
        return componentName;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLocation() {
        return location;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }


    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

}
