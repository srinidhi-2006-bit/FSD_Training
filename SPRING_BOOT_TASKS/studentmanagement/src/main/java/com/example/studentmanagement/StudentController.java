package com.example.studentmanagement;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/students")
public class StudentController {
    private StudentService service;
    public StudentController(StudentService service) {
        this.service = service;
    }
    @PostMapping
    public Student save(@RequestBody Student student) {
        return service.save(student);
    }
    @GetMapping
    public List<Student> findAll() {
        return service.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Student> find(@PathVariable int id) {
        return service.find(id);
    }
    @PutMapping("/{id}")
    public Student update(@PathVariable int id,
                          @RequestBody Student student) {
        student.setStudentId(id);
        return service.update(student);
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        service.delete(id);
        return "Student Deleted";
    }
}