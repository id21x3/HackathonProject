import React, { useState } from 'react';

const BudgetSummary = () => {
    const [plannedBudget, setPlannedBudget] = useState(3000); // начальный бюджет
    const [totalSpending, setTotalSpending] = useState(1800); // начальная сумма расходов
    const [isEditing, setIsEditing] = useState(false); // состояние редактирования
    const [newBudget, setNewBudget] = useState(plannedBudget); // новое значение бюджета

    const spendingPercentage = (totalSpending / plannedBudget) * 100;

    const handleEditClick = () => {
        setIsEditing(true); // включаем режим редактирования
    };

    const handleSaveClick = () => {
        setPlannedBudget(newBudget); // обновляем бюджет
        setIsEditing(false); // выключаем режим редактирования
    };

    const handleInputChange = (e) => {
        setNewBudget(Number(e.target.value)); // обновляем новое значение бюджета
    };

    return (
        <section className="budget-summary">
            <div className="budget-header">
                <div>
                    <h3>Planned Budget</h3>
                    {isEditing ? (
                        <input
                            type="number"
                            value={newBudget}
                            onChange={handleInputChange}
                            className="budget-input"
                            autoFocus // Автофокус при входе в режим редактирования
                        />
                    ) : (
                        <p className="budget-amount">${plannedBudget.toLocaleString()}</p>
                    )}
                </div>
                <button
                    className="edit-button"
                    onClick={isEditing ? handleSaveClick : handleEditClick}
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
            <div className="budget-info">
                <h3>Total Spending</h3>
                <p className="budget-amount">${totalSpending.toLocaleString()}</p>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${spendingPercentage}%` }}
                ></div>
            </div>
        </section>
    );
};

export default BudgetSummary;
