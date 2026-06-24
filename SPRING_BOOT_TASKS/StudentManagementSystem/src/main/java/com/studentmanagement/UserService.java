package com.studentmanagement;

import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository repository;
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
    public User register(User user) {
        return repository.save(user);
    }
    public User login(String username) {
        return repository.findByUsername(username);
    }
    public long count() {
        return repository.count();
    }
}