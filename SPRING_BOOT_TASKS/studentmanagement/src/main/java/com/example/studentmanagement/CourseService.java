package com.example.studentmanagement;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
@Service
public class CourseService {
    private CourseRepository repository;
    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }
    public Course save(Course course) {
        return repository.save(course);
    }
    public List<Course> findAll() {
        return repository.findAll();
    }
    public Optional<Course> find(int id) {
        return repository.findById(id);
    }
    public Course update(Course course) {
        return repository.save(course);
    }
    public void delete(int id) {
        repository.deleteById(id);
    }
}