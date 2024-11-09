package com.example.backend.controllers;

import com.example.backend.enitys.Transaction;
import com.example.backend.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budget")
@CrossOrigin(origins = "http://localhost:3000")
public class BudgetController {
    @Autowired
    private BudgetService budgetService;

    @GetMapping("/{budgetId}/overview")
    public ResponseEntity<BudgetService.BudgetOverviewDTO> getBudgetOverview(@PathVariable Long budgetId) {
        return ResponseEntity.ok(budgetService.getBudgetOverview(budgetId));
    }

    @GetMapping("/{budgetId}/transactions")
    public ResponseEntity<List<Transaction>> getBudgetTransactions(
            @PathVariable Long budgetId,
            @RequestParam(required = false) String type) {
        if (type != null) {
            return ResponseEntity.ok(
                    budgetService.getTransactionsByType(null, budgetId, type));
        }
        return ResponseEntity.ok(budgetService.getBudgetTransactions(budgetId));
    }
}