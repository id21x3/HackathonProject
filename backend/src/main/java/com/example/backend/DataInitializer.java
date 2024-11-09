package com.example.backend;

import com.example.backend.enitys.*;
import com.example.backend.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private FamilyAccountRepository familyAccountRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BudgetRepository budgetRepository;

    @Autowired
    private GoalRepository goalRepository;

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public void run(String... args) throws Exception {
        // Создание бюджета
        Budget budget = new Budget(5000);
        budgetRepository.save(budget);

        // Создание категории
        Category categoryFood = new Category();
        categoryFood.setCategoryName("Food");
        categoryFood.setCategoryType("Expense");
        categoryRepository.save(categoryFood);

        Category categoryEntertainment = new Category();
        categoryEntertainment.setCategoryName("Entertainment");
        categoryEntertainment.setCategoryType("Expense");
        categoryRepository.save(categoryEntertainment);

        // Создание семьи
        FamilyAccount familyAccount = new FamilyAccount("The Smith Family");
        familyAccount.setBudget(budget);
        familyAccountRepository.save(familyAccount);

        // Создание пользователей
        User father = new User("John", "Smith");
        father.setFamily(familyAccount);
        father.setIsParent(true);
        userRepository.save(father);

        User mother = new User("Jane", "Smith");
        mother.setFamily(familyAccount);
        mother.setIsParent(true);
        userRepository.save(mother);

        User daughter = new User("Emily", "Smith");
        daughter.setFamily(familyAccount);
        daughter.setIsParent(false);
        userRepository.save(daughter);

        User son = new User("Jack", "Smith");
        son.setFamily(familyAccount);
        son.setIsParent(false);
        userRepository.save(son);

        // Создание цели для семьи
        Goal goalVacation = new Goal("Vacation", 2000);
        goalVacation.setFamily(familyAccount);
        goalRepository.save(goalVacation);

        Goal goalNewCar = new Goal("New Car", 10000);
        goalNewCar.setFamily(familyAccount);
        goalRepository.save(goalNewCar);

        // Создание транзакций
        Transaction transaction1 = new Transaction();
        transaction1.setAmount(100);
        transaction1.setTransactionDate(new Date());
        transaction1.setDescription("Grocery Shopping");
        transaction1.setFamily(familyAccount);
        transaction1.setCategory(categoryFood);
        transaction1.setUser(father);
        transactionRepository.save(transaction1);

        Transaction transaction2 = new Transaction();
        transaction2.setAmount(50);
        transaction2.setTransactionDate(new Date());
        transaction2.setDescription("Movie Night");
        transaction2.setFamily(familyAccount);
        transaction2.setCategory(categoryEntertainment);
        transaction2.setUser(mother);
        transactionRepository.save(transaction2);

        // Печать сообщений
        System.out.println("Data has been initialized");
    }
}
