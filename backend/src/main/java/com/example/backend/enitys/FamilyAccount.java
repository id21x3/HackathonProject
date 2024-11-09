package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class FamilyAccount {
    @Id
    @Generated
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

    private FamilyAccount(String familyName) {
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
