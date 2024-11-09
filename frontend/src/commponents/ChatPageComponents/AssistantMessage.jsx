import React from 'react';
import ersteLogo from '../../assets/ersteLogo.png'; // Импортируем изображение

const AssistantMessage = ({ text }) => {
    return (
        <div className="assistant-message">
            <div className="assistant-avatar">
                <img src={ersteLogo} alt="Assistant Avatar" className="avatar-image" />
            </div>
            <div className="assistant-text">{text}</div>
        </div>
    );
};

export default AssistantMessage;
