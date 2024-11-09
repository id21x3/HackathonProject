package com.example.backend.controllers;

import com.example.backend.enitys.Transaction;
import com.example.backend.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {
    @Autowired
    private BudgetService budgetService;

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

//    @GetMapping("/{budgetId}/transactions/summary")
//    public ResponseEntity<Map<Category, BigDecimal>> getTransactionsSummary(
//            @PathVariable Long budgetId) {
//        return ResponseEntity.ok(
//                budgetService.getTransactionsSummaryByCategory(budgetId));
//    }
}
