import React from 'react';
import Header from './BudgetDetails/Header';
import BudgetSummary from './BudgetDetails/BudgetSummary';
import SpendingHistory from './BudgetDetails/SpendingHistory';
import SpendingStatistics from './BudgetDetails/SpendingStatistics';
import GraphicalAnalysis from './BudgetDetails/GraphicalAnalysis';
import './BudgetDetails/BudgetDetails.css';

const BudgetDetails = () => {
    return (
        <div className="budget-details">
            <Header />
            <BudgetSummary />
            <SpendingHistory />
            <SpendingStatistics />
            <GraphicalAnalysis />
        </div>
    );
};

export default BudgetDetails;
