package com.schoolmanagement.backend.controller;

import com.schoolmanagement.backend.model.User;
import com.schoolmanagement.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Handles: POST http://localhost:8080/api/auth/register
    // Creates a new user with a securely hashed password
    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        Map<String, String> response = new HashMap<>();
        response.put("message", "User registered successfully");
        return response;
    }

    // Handles: POST http://localhost:8080/api/auth/login
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User loginRequest) {
        Map<String, Object> response = new HashMap<>();

        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());

        if (userOpt.isEmpty()) {
            response.put("success", false);
            response.put("message", "Invalid email or password");
            return response;
        }

        User user = userOpt.get();
        boolean passwordMatches = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());

        if (!passwordMatches) {
            response.put("success", false);
            response.put("message", "Invalid email or password");
            return response;
        }

        response.put("success", true);
        response.put("fullName", user.getFullName());
        response.put("role", user.getRole());
        return response;
    }
}