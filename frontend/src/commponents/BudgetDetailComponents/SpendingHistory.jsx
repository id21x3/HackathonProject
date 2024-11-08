import React, { useState } from 'react';
import { FaShoppingCart, FaFilm, FaGasPump } from 'react-icons/fa';

const SpendingHistory = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Monthly");

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);
    };

    const transactions = [
        { id: 1, name: 'Supermarket Purchase', date: 'Apr 5, 5:30 PM', amount: -50, icon: <FaShoppingCart />, color: '#f44336' },
        { id: 2, name: 'Movie Tickets', date: 'Apr 3, 8:00 PM', amount: -30, icon: <FaFilm />, color: '#3f51b5' },
        { id: 3, name: 'Gas Station', date: 'Apr 1, 2:15 PM', amount: -40, icon: <FaGasPump />, color: '#ffb74d' },
    ];

    return (
        <section className="spending-history">
            <h2>Spending History</h2>
            <div className="period-buttons">
                {["Daily", "Weekly", "Monthly"].map((period) => (
                    <button
                        key={period}
                        className={`period-button ${selectedPeriod === period ? 'active' : ''}`}
                        onClick={() => handlePeriodChange(period)}
                    >
                        {period}
                    </button>
                ))}
            </div>
            <div className="transaction-list">
                {transactions.map(transaction => (
                    <div key={transaction.id} className="transaction">
                        <div className="transaction-icon" style={{ color: transaction.color }}>
                            {transaction.icon}
                        </div>
                        <div className="transaction-details">
                            <h3>{transaction.name}</h3>
                            <span className="transaction-date">{transaction.date}</span>
                        </div>
                        <span className={`transaction-amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
                            ${Math.abs(transaction.amount)}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpendingHistory;
