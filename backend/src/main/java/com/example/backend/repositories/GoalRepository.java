package com.example.backend.repositories;

import com.example.backend.enitys.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Long> { }