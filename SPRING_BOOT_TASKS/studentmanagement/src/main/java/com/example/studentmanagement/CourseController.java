package com.example.studentmanagement;

import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/courses")
public class CourseController {
    private CourseService service;
    public CourseController(CourseService service) {
        this.service = service;
    }
    @PostMapping
    public Course save(@RequestBody Course course) {
        return service.save(course);
    }
    @GetMapping
    public List<Course> findAll() {
        return service.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Course> find(@PathVariable int id) {
        return service.find(id);
    }
    @PutMapping("/{id}")
    public Course update(@PathVariable int id,
                         @RequestBody Course course) {
        course.setCourseId(id);
        return service.update(course);
    }
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        service.delete(id);
        return "Course Deleted";
    }
}