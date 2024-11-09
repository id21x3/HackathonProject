package com.example.backend.controllers;

import com.example.backend.services.AIAssistantService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/openai")
public class AIAssistantController {

    private final AIAssistantService aiAssistantService;

    public AIAssistantController(AIAssistantService aiAssistantService) {
        this.aiAssistantService = aiAssistantService;
    }

    @PostMapping("/ask")
    public String askOpenAI(@RequestBody String message) {
        return aiAssistantService.getOpenAIResponse(message);
    }
}
