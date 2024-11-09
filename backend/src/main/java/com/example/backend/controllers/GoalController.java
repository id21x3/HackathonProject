package com.example.backend.controllers;

import com.example.backend.enitys.Goal;
import com.example.backend.services.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/goals")
public class GoalController {

    @Autowired
    private GoalService goalService;

    @GetMapping("/{familyId}/")
    public List<Goal> getGoals( @PathVariable Long familyId ) {
        return goalService.getGoalsByFamilyId(familyId);
    }

    @PostMapping("/{familyId}/")
    public Goal createGoal( @PathVariable Long familyId, @RequestBody Goal goal ) {
        goal.setFamilyId(familyId);
        return goalService.createGoal(goal);
    }
}
