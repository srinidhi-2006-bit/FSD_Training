package com.studentmanagement;

import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
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
    public List<Student> getAll() {
        return service.findAll();
    }
    @GetMapping("/{id}")
    public Student getById(@PathVariable int id) {
        return service.findById(id);
    }
    @PutMapping("/{id}")
    public Student update(@PathVariable int id,@RequestBody Student student) {
        student.setStudentId(id);
        return service.update(student);
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        service.delete(id);
        return "Student Deleted";
    }
    @GetMapping("/count")
    public long count() {
        return service.count();
    }
    @GetMapping("/search/{name}")
    public List<Student> search(@PathVariable String name) {
        return service.search(name);
    }
}