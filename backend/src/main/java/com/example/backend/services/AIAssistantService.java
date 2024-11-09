package com.example.backend.services;

import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;

@Service
public class AIAssistantService {

    private final String pythonApiUrl = "http://fastapi:5000/get-response";

    public String getOpenAIResponse(String message) {
        String jsonRequest = "{\"message\": \"" + message + "\"}";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> request = new HttpEntity<>(jsonRequest, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(pythonApiUrl, HttpMethod.POST, request, String.class);

        return response.getBody();
    }
}