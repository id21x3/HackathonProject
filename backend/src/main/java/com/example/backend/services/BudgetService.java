package com.example.backend.services;

import com.example.backend.enitys.Budget;
import com.example.backend.enitys.Transaction;
import com.example.backend.repositories.BudgetRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public Budget getBudgetById(Long budgetId) {
        return budgetRepository.findById(budgetId)
                .orElseThrow(() -> new RuntimeException("Budget not found"));
    }

    public List<Transaction> getBudgetTransactions(Long budgetId) {
        Budget budget = getBudgetById(budgetId);
        return budget.getTransactions();
    }

    public List<Transaction> getTransactionsByType(Long familyId, Long budgetId, String type) {
        Budget budget = getBudgetById(budgetId);
        return budget.getTransactions().stream()
                .filter(t -> t.getTransactionType().equals(type))
                .collect(Collectors.toList());
    }

    public BudgetOverviewDTO getBudgetOverview(Long budgetId) {
        Budget budget = getBudgetById(budgetId);
        int totalSpent = budget.getTransactions().stream()
                .mapToInt(Transaction::getAmount)
                .sum();

        return new BudgetOverviewDTO(
                budget.getBudgetAmount(),
                budget.getBudgetAmount() - totalSpent,
                getCategoryExpenses(budget)
        );
    }

    private List<CategoryExpenseDTO> getCategoryExpenses(Budget budget) {
        return budget.getTransactions().stream()
                .collect(Collectors.groupingBy(
                        transaction -> transaction.getCategory(),
                        Collectors.summingInt(Transaction::getAmount)
                ))
                .entrySet().stream()
                .map(entry -> new CategoryExpenseDTO(
                        entry.getKey().getCategoryName(),
                        entry.getValue(),
                        entry.getKey().getCategoryType()
                ))
                .collect(Collectors.toList());
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class BudgetOverviewDTO {
        private int totalBudget;
        private int availableBudget;
        private List<CategoryExpenseDTO> categories;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class CategoryExpenseDTO {
        private String name;
        private int amount;
        private String type;
    }
}