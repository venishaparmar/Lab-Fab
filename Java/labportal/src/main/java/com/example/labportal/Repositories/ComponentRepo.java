package com.example.labportal.Repositories;



import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.labportal.Beans.Component;

import java.util.List;
import java.util.Optional;

@Repository
public interface ComponentRepo extends MongoRepository<Component, ObjectId> {
    List<Component> findByComponentName(String componentName);
    Optional<Component> findById(String id);
    long count();
}