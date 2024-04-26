package com.example.labportal.Repositories;

import com.example.labportal.Beans.Subject;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SubjectRepo extends MongoRepository<Subject, ObjectId> {
    Optional<Subject> findById(ObjectId id);
    List<Subject> findBySubjectName(String subjectName);
}

