package com.example.backend.repositories;

import com.example.backend.enitys.FamilyAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FamilyAccountRepository extends JpaRepository<FamilyAccount, Integer> { }