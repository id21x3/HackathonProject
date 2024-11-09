import React from 'react';
import { FaUserCircle, FaEnvelope } from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <h1>Family Finance</h1>
            <div className="icons-container">
                <button className="icon-button" onClick={() => navigate('/message')}>
                    <FaEnvelope size={24} />
                </button>
                <button className="icon-button">
                    <FaUserCircle size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
