import React from 'react';
import Header from '../commponents/FamilyFinanceComponents/Header.jsx';
import BudgetOverview from '../commponents/FamilyFinanceComponents/BudgetOverview';
import FamilyMembers from '../commponents/FamilyFinanceComponents/FamilyMembers';
import FamilyGoals from '../commponents/FamilyFinanceComponents/FamilyGoals';
import Footer from '../commponents/FamilyFinanceComponents/Footer';
import '../styles/FamilyFinanceApp.css';

const FamilyFinanceApp = () => {
    return (
        <div className="family-finance-app">
            <Header />
            <BudgetOverview />
            <FamilyMembers />
            <FamilyGoals />
            <Footer />
        </div>
    );
};

export default FamilyFinanceApp;
