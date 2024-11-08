package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private int transactionId;
    private int familyId;
    private int userId;
    private int categoryId;
    private int amount;
    private Date transactionDate;
    private String description;
    private int budgetId;
    private String transactionType;

    public Transaction() {
    }

    @Override
    public String toString() {
        return "";
    }
}
