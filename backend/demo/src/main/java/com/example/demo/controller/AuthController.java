package com.example.demo.controller;

import com.example.demo.dto.UserLoginDTO;
import com.example.demo.dto.UserRegisterDTO;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // Permitir peticiones desde tu frontend React
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    // 🧱 Registro
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegisterDTO userDTO) {
        try {
            User newUser = User.builder()
                    .name(userDTO.getName())
                    .email(userDTO.getEmail())
                    .password(userDTO.getPassword())
                    .role(Role.valueOf(userDTO.getRole().toUpperCase()))
                    .build();

            User savedUser = userService.register(newUser);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // 🔐 Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDTO loginDTO) {
        try {
            User user = userService.login(loginDTO.getEmail(), loginDTO.getPassword());
            return ResponseEntity.ok(user);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
