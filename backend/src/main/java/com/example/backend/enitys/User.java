package com.example.backend.enitys;

import jakarta.persistence.*;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "users")
public class User {
    @Id
    @Generated
    private Long id;
    private Long familyAccountId;
    private Boolean isParent;
    private String firstName;
    private String lastName;
    @OneToMany(mappedBy = "user")
    private List<Transaction> transactions;
    @ManyToOne
    private FamilyAccount family;

    public User( String firstName, String lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public User() {

    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

}
