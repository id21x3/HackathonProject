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

    return (
        <div className="additional-info-section">
            <div className="recent-expenses">
                <h4>Recent Transactions</h4>
                <ul>
                    {recentExpenses.map((transaction, index) => (
                        <li key={index}>
                            {transaction.item} -
                            <span className={`amount ${transaction.amount < 0 ? 'expense' : 'income'}`}>
                                ${Math.abs(transaction.amount)}
                            </span>
                        </li>
                    ))}
                </ul>
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
