package com.example.userdemo;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
@Service
public class UserService {
    private UserRepository userRepository;
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    // INSERT
    public User save(User user) {
        return userRepository.save(user);
    }
    // FIND BY ID
    public Optional<User> find(int id) {
        return userRepository.findById(id);
    }
    // FIND ALL
    public List<User> findAll() {
        return userRepository.findAll();
    }
    // UPDATE
    public User update(User user) {
        return userRepository.save(user);
    }
    // DELETE
    public void delete(int id) {
        userRepository.deleteById(id);
    }
}