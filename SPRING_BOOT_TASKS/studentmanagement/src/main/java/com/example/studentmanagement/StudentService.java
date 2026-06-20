package com.example.studentmanagement;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
@Service
public class StudentService {
    private StudentRepository repository;
    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }
    public Student save(Student student) {
        return repository.save(student);
    }
    public List<Student> findAll() {
        return repository.findAll();
    }
    public Optional<Student> find(int id) {
        return repository.findById(id);
    }
    public Student update(Student student) {
        return repository.save(student);
    }
    public void delete(int id) {
        repository.deleteById(id);
    }
}