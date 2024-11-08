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
    private String firstName;
    private String lastName;


}
