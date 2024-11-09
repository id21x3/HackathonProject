package com.example.backend.repositories;

import com.example.backend.enitys.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> { }