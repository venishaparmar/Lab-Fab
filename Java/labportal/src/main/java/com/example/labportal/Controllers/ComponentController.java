package com.example.labportal.Controllers;

import com.example.labportal.Beans.Component;
import com.example.labportal.Repositories.ComponentRepo;



import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/components")
@CrossOrigin(origins = "http://localhost:5173")
public class ComponentController {

    @Autowired
    ComponentRepo componentRepository;

    @PostMapping("/")
    public ResponseEntity<Component> createComponent(@RequestBody Component component) {
        Component savedComponent = componentRepository.save(component);
        return new ResponseEntity<>(savedComponent, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Component>> getAllComponents() {
        List<Component> components = componentRepository.findAll();
        return new ResponseEntity<>(components, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Component> getComponentById(@PathVariable("id") ObjectId id) {
        Optional<Component> optionalComponent = componentRepository.findById(id);
        return optionalComponent.map(component -> new ResponseEntity<>(component, HttpStatus.OK))
                                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Component> updateComponent(@PathVariable("id") ObjectId id, @RequestBody Component component) {
        Optional<Component> optionalComponent = componentRepository.findById(id);
        if (optionalComponent.isPresent()) {
            component.setId(id);
            Component updatedComponent = componentRepository.save(component);
            return new ResponseEntity<>(updatedComponent, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteComponent(@PathVariable("id") ObjectId id) {
        try {
            componentRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getComponentCount() {
        long count = componentRepository.count();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    
}