package com.example.backend.repositories;

import com.example.backend.enitys.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByFamily_IdAndBudget_IdAndTransactionType(
            Long familyId, Long budgetId, String transactionType);

    List<Transaction> findByBudget_Id(Long budgetId);

    // Get transactions by date range
    @Query("SELECT t FROM Transaction t WHERE t.budget.budgetId = :budgetId " +
            "AND t.transactionDate BETWEEN :startDate AND :endDate")
    List<Transaction> findByBudgetIdAndDateRange(
            @Param("budgetId") Long budgetId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate);
}
