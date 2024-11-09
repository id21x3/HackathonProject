package com.example.backend.enitys;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Category {
    @Id
    @GeneratedValue
    private Long categoryId;
    private String categoryName;
    private String categoryType;
    @OneToOne(mappedBy = "category")
    private Transaction transaction;
}
