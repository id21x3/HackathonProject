package com.example.backend.services;

import com.example.backend.enitys.Goal;
import com.example.backend.repositories.GoalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalService {
    @Autowired
    private GoalRepository goalRepository;

    public List<Goal> getGoalsByFamilyId(Long familyId) {
        return goalRepository.findByFamilyId(familyId);
    }
}
