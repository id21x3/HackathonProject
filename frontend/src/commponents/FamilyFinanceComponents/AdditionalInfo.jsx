import React, { useState } from 'react';

const AdditionalInfo = ({ recentExpenses, productCategories }) => {
    const [restrictedCategories, setRestrictedCategories] = useState([]);

    const handleCategoryClick = (category, event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        setRestrictedCategories((prevCategories) =>
            prevCategories.includes(category)
                ? prevCategories.filter((c) => c !== category)
                : [...prevCategories, category]
        );
    };

    // Группируем транзакции по дате
    const groupedTransactions = recentExpenses.reduce((acc, transaction) => {
        if (!acc[transaction.date]) {
            acc[transaction.date] = [];
        }
        acc[transaction.date].push(transaction);
        return acc;
    }, {});

    return (
        <div className="additional-info-section">
            <div className="recent-expenses">
                <h4>Recent Transactions</h4>
                {Object.keys(groupedTransactions).map((date, index) => (
                    <div key={index} className="transaction-group">
                        <h5 className="transaction-date">{date}</h5>
                        <ul>
                            {groupedTransactions[date].map((transaction, idx) => (
                                <li key={idx}>
                                    {transaction.item} -
                                    <span className={`amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                                        ${Math.abs(transaction.amount)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="product-categories">
                <h4>Product Categories</h4>
                <div className="category-buttons">
                    {productCategories.map((category, index) => (
                        <button
                            key={index}
                            className={`category-button ${
                                restrictedCategories.includes(category) ? 'restricted' : ''
                            }`}
                            onClick={(e) => handleCategoryClick(category, e)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdditionalInfo;
