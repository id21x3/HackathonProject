import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FamilyFinance from "./pages/FamilyFinanceApp.jsx";
import BudgetPage from "./pages/BudgetPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import NotificationsPage from "./pages/NotificationPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<FamilyFinance />} />
                <Route path="/budget" element={<BudgetPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/message" element={<NotificationsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
