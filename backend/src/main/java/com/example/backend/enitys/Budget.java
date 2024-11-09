package com.example.backend.enitys;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Budget {
    @Id
    @GeneratedValue
    private Long budgetId;
    private int budgetAmount;
    private int actualAmount;
    @OneToOne
    private FamilyAccount family;
    @OneToMany(mappedBy = "budget")
    private List<Transaction> transactions;

    public Budget() {

    }

    public Budget(int budgetAmount) {
        this.budgetAmount = budgetAmount;
    }

    @Override
    public String toString() {
        return budgetAmount + "";
    }
}
