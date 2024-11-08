import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FamilyFinance from "./pages/FamilyFinanceApp.jsx";
import BudgetPage from "./pages/BudgetPage.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<FamilyFinance />} />
                <Route path="/budget" element={<BudgetPage />} />
            </Routes>
        </Router>
    );
}

export default App;
