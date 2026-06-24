package com.studentmanagement;

import java.util.List;
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
    public Student findById(int id) {
        return repository.findById(id).orElse(null);
    }
    public Student update(Student student) {
        return repository.save(student);
    }
    public void delete(int id) {
        repository.deleteById(id);
    }
    public long count() {
        return repository.count();
    }
    public List<Student> search(String name) {
        return repository.findByNameContaining(name);
    }
}