import React from 'react';
import Header from '../commponents/BudgetDetailComponents/Header.jsx';
import BudgetSummary from '../commponents/BudgetDetailComponents/BudgetSummary';
import SpendingHistory from '../commponents/BudgetDetailComponents/SpendingHistory';
import SpendingStatistics from '../commponents/BudgetDetailComponents/SpendingStatistics';
import Footer from '../commponents/FamilyFinanceComponents/Footer.jsx'
import '../styles/BudgetDetails.css';

const BudgetPage = () => {
    return (
        <div className="family-finance-app">
            <Header />
            <BudgetSummary />
            <SpendingHistory />
            <SpendingStatistics />
            <Footer/>
        </div>
    );
};

export default BudgetPage;
