package com.example.backend.enitys;

import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class FamilyAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Или GenerationType.AUTO, если хотите, чтобы Hibernate сам выбрал стратегию
    private int familyId;
    private String familyName;
    @OneToMany
    private List<Transaction> transactions;
    @OneToMany(mappedBy = "family")
    private List<User> users;
    @OneToMany(mappedBy = "family")
    private List<Goal> goals;
    @OneToOne
    private Budget budget;

    public FamilyAccount(String familyName) {
        this.familyName = familyName;
    }

    public FamilyAccount(){

    }

    @Override
    public String toString() {
        return "FamilyAccount{" +
                "familyId=" + familyId +
                ", familyName='" + familyName + '\'' +
                '}';
    }
}
