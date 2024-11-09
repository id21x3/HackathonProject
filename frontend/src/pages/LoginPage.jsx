import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [pin, setPin] = useState("");
    const navigate = useNavigate();

    const handleButtonClick = (value) => {
        if (pin.length < 4) {
            setPin(pin + value);
        }
    };

    const handleDelete = () => {
        setPin(pin.slice(0, -1));
    };

    const handleSubmit = () => {
        // Предположим, что правильный PIN - "1234" для примера
        if (pin === "1234") {
            navigate("/register"); // Перенаправляем на страницу регистрации
        } else {
            alert("Incorrect PIN. Please try again.");
            setPin(""); // Очищаем PIN после неверного ввода
        }
    };

    return (
        <div className="login-container">
            <h2>Enter PIN</h2>
            <div className="pin-display">
                {Array(4).fill("").map((_, index) => (
                    <span key={index} className="pin-dot">
                        {index < pin.length ? "•" : ""}
                    </span>
                ))}
            </div>
            <div className="keypad">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number, index) => (
                    <button
                        key={index}
                        className="keypad-button"
                        onClick={() => handleButtonClick(number)}
                    >
                        {number}
                    </button>
                ))}
                <button className="keypad-button delete-button" onClick={handleDelete}>
                    ⌫
                </button>
            </div>
            <button className="submit-button" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default LoginPage;
