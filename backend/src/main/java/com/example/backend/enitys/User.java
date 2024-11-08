package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class User {
    @Id
    @Generated
    private Long id;
    private Long family_account_id;
    private Boolean is_parent;
    private String firstName;
    private String lastName;

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
