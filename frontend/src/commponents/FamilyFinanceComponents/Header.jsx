import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <h1>Family Finance</h1>
            <div className="profile-icon">
                <FaUserCircle size={24} />
            </div>
        </header>
    );
};

export default Header;
