package com.example.backend.enitys;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.type.descriptor.jdbc.JdbcTypeFamilyInformation;

import java.util.Date;

@Getter
@Setter
@Entity
public class Transaction {
    @Id
    @GeneratedValue
    private Long transactionId;
    private Long familyId;
    private Long categoryId;
    private int amount;
    private Date transactionDate;
    private String description;
    private int budgetId;
    private String transactionType;
    @ManyToOne
    private User user;
    @ManyToOne
    private Budget budget;
    @ManyToOne
    private FamilyAccount family;
    @OneToOne
    private Category category;

    public Transaction() {
    }

    @Override
    public String toString() {
        return description;
    }
}
