import React from 'react';
import '../../styles/BudgetOverview.css';
import { FaShoppingCart, FaFilm, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BudgetOverview = () => {
    const navigate = useNavigate();

    const totalBudget = 12500;
    const availableBudget = 3250;

    const categories = [
        { name: 'Groceries', amount: 500, color: '#4a90e2', icon: <FaShoppingCart /> },
        { name: 'Entertainment', amount: 300, color: '#f06292', icon: <FaFilm /> },
        { name: 'Utilities', amount: 200, color: '#ffb74d', icon: <FaLightbulb /> },
    ];

    const totalSpent = categories.reduce((sum, category) => sum + category.amount, 0);
    const remainingBudget = totalBudget - totalSpent; // Сколько осталось после расходов

    const handleClick = () => {
        navigate('/budget');
    };

    return (
        <section className="budget-overview button-like" onClick={handleClick}>
            <h2>${totalBudget.toLocaleString()}</h2>
            <p>Available Budget: ${availableBudget.toLocaleString()}</p>

            <div className="progress-bar-container">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="progress-bar-segment"
                        style={{
                            width: `${(category.amount / totalBudget) * 100}%`,
                            backgroundColor: category.color,
                        }}
                    ></div>
                ))}
                {/* Добавим сегмент для оставшихся средств */}
                <div
                    className="progress-bar-segment"
                    style={{
                        width: `${(remainingBudget / totalBudget) * 100}%`,
                        backgroundColor: '#ddd', // Серый цвет для неиспользованного бюджета
                    }}
                ></div>
            </div>

            <div className="categories">
                {categories.map((category) => (
                    <span key={category.name} className="category-item">
                        <span className="category-icon" style={{ color: category.color }}>
                            {category.icon}
                        </span>
                        <span style={{ color: category.color }}>
                            {category.name}: ${category.amount}
                        </span>
                    </span>
                ))}
            </div>
        </section>
    );
};

export default BudgetOverview;
