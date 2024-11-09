package com.example.backend.controllers;

import com.example.backend.enitys.User;
import com.example.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/main")
public class MainController {

    private final UserService userService;

    public MainController(UserService userService) {
        this.userService = userService;
    }

    // Главная страница (главный экран приложения)
    @GetMapping("/home")
    public String getHomePage() {
        return "Welcome to Erste Family Finance Manager!";
    }

    // Получение информации о бюджете (например, доступный баланс)
    @GetMapping("/budget/overview")
    public String getBudgetOverview() {
        // Пример реализации возвращает информацию о бюджете
        return "Current Budget Overview: \nTotal Budget: $5000\nRemaining Budget: $2500";
    }

    // Получение списка всех пользователей
    @GetMapping("/users")
    public Iterable<User> getAllUsers() {
        return userService.getAllUsers();
    }

    // Пример другого эндпоинта для получения информации о пользователе по ID
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Пример добавления нового пользователя
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    // Пример обновления информации о пользователе
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        return userService.updateUser(id, userDetails);
    }

    // Пример удаления пользователя
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
