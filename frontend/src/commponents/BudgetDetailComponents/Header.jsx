import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

const Header = () => {
    const navigate = useNavigate(); // Инициализация хука useNavigate

    const handleBackClick = () => {
        navigate(-1); // Переход на предыдущую страницу
    };

    return (
        <header className="header">
            <div className="header-left" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
                <FaArrowLeft className="back-icon" />
                <h1>Budget Details</h1>
            </div>
            <div className="header-right">
                <span className="date">April 2023</span>
                <button className="edit-button">Edit</button>
            </div>
        </header>
    );
};

export default Header;
