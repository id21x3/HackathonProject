package com.example.backend.services;

import com.example.backend.enitys.Category;
import com.example.backend.enitys.Transaction;
import com.example.backend.repositories.BudgetRepository;
import com.example.backend.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class BudgetService {
    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getTransactionsByType(Long familyId, Long budgetId, String transactionType) {
        return transactionRepository.findByFamily_IdAndBudget_IdAndTransactionType(
                familyId, budgetId, transactionType);
    }

    // Get all transactions for a specific budget
    public List<Transaction> getBudgetTransactions(Long budgetId) {
        return transactionRepository.findByBudget_Id(budgetId);
    }

    // Get transactions summary by category
//    public Map<Category, BigDecimal> getTransactionsSummaryByCategory(Long budgetId) {
//        List<Transaction> transactions = transactionRepository.findByBudget_Id(budgetId);
//        return transactions.stream()
//                .collect(Collectors.groupingBy(
//                        Transaction::getCategory,
//                        Collectors.reducing(BigDecimal.ZERO,
//                                Transaction::getAmount,
//                                BigDecimal::add)
//                ));
//    }
}
