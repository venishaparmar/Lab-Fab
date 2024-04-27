package com.example.labportal.Controllers;

import com.example.labportal.Beans.Subject;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.labportal.Repositories.SubjectRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/subjects")
@CrossOrigin(origins = "http://localhost:5173")
public class SubjectController {

    @Autowired
    private SubjectRepo subjectRepository;

    @GetMapping("/")
    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Subject>> getSubjectById(@PathVariable("id") ObjectId id) {
        Optional<Subject> subject = subjectRepository.findById(id);
        if (subject != null) {
            return ResponseEntity.ok(subject);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/")
    public ResponseEntity<Subject> createSubject(@Valid @RequestBody Subject subject) {
        Subject createdSubject = subjectRepository.save(subject);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSubject);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Subject> updateSubject(@PathVariable("id") ObjectId id,
            @Valid @RequestBody Subject updatedSubject) {
        updatedSubject.setId(id);
        Subject savedSubject = subjectRepository.save(updatedSubject);
        return ResponseEntity.ok(savedSubject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubject(@PathVariable("id") ObjectId id) {
        subjectRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Subject>> searchSubjectsByName(@RequestParam("name") String subjectName) {
        List<Subject> subjects = subjectRepository.findBySubjectName(subjectName);
        if (!subjects.isEmpty()) {
            return ResponseEntity.ok(subjects);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
