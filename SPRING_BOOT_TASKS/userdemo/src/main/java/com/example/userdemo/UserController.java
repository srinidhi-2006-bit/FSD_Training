package com.example.userdemo;

import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    // INSERT
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User save(@RequestBody User user) {
        return userService.save(user);
    }
    // FIND BY ID
    @GetMapping("/{id}")
    public Optional<User> find(@PathVariable int id) {
        return userService.find(id);
    }
    // FIND ALL
    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }
    // UPDATE
    @PutMapping("/{id}")
    public User update(@PathVariable int id,@RequestBody User user) {
        user.setId(id);
        return userService.update(user);
    }
    // DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        userService.delete(id);
        return "User Deleted Successfully";
    }
}