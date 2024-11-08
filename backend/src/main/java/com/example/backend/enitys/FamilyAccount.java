package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class FamilyAccount {
    @Id
    @Generated
    private int familyId;
    private String familyName;

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
