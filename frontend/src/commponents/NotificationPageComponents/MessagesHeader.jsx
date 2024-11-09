import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../styles/Notification/MessagesHeader.css'

const MessagesHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="messages-header">
            <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft size={20} />
            </button>
            <h1>Messages</h1>
        </div>
    );
};

export default MessagesHeader;
