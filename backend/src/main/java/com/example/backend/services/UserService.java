package com.example.backend.services;

import com.example.backend.enitys.User;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Метод для получения всех пользователей
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Метод для получения пользователя по ID
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    // Метод для создания нового пользователя
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Метод для обновления информации о пользователе
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setIsParent(userDetails.getIsParent());
        user.setFamilyAccountId(userDetails.getFamilyAccountId());
        return userRepository.save(user);
    }

    // Метод для удаления пользователя
    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        userRepository.delete(user);
    }
}
