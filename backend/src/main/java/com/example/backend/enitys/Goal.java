package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Goal {
    @Id
    @GeneratedValue
    private Long goalId;
    private String goalName;
    private int goalAmount;
    private int actualAmount;
    @ManyToOne
    private FamilyAccount family;

    public Goal() {
    }

    public Goal(String goalName, int goalAmount) {
        this.goalName = goalName;
        this.goalAmount = goalAmount;
    }

    @Override
    public String toString() {
        return goalName;
    }
}
