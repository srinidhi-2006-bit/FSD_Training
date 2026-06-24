package com.studentmanagement;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {
    private UserService service;
    public UserController(UserService service) {
        this.service = service;
    }
    @PostMapping("/register")
    public User register(@RequestBody User user) {

        return service.register(user);
    }
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser =
                service.login(user.getUsername());
        if(dbUser != null &&
           dbUser.getPassword()
                 .equals(user.getPassword())) {
            return "Login Success";
        }
        return "Invalid Credentials";
    }
    @GetMapping("/count")
    public long count() {
        return service.count();
    }
}