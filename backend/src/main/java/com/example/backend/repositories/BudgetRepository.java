package com.example.backend.repositories;

import com.example.backend.enitys.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget, Long> { }
