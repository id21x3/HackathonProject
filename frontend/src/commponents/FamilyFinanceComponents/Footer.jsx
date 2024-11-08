import React from 'react';
import { FaHome, FaStore, FaIdBadge } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icon">
                <FaHome size={24} color="#4a90e2" />
            </div>
            <div className="footer-icon">
                <FaStore size={24} color="#333" />
            </div>
            <div className="footer-icon">
                <FaIdBadge size={24} color="#333" />
            </div>
        </footer>
    );
};

export default Footer;
