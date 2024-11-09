import React from 'react';
import { FaHome, FaComments, FaIdBadge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../styles/Footer.css'
const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <button className="footer-icon-button" onClick={() => navigate('/home')}>
                <FaHome size={24} color="#4a90e2" />
            </button>
            <button className="footer-icon-button" onClick={() => navigate('/chat')}>
                <FaComments size={24} color="#4a90e2" />
            </button>
            <button className="footer-icon-button" onClick={() => navigate('/profile')}>
                <FaIdBadge size={24} color="#333" />
            </button>
        </footer>
    );
};

export default Footer;
