import React from 'react';
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import '/src/styles/Notification/NotificationItem.css';

const NotificationItem = ({ notification, onClick }) => {
    const { message, type, status, details } = notification;
    const isRestricted = type === 'restricted';
    const date = new Date(details.date).toLocaleDateString();

    return (
        <div
            className={`notification-item ${status === 'read' ? 'read' : 'unread'} ${
                isRestricted ? 'restricted' : ''
            }`}
            onClick={onClick}
        >
            <div className="icon">
                {status === 'read' ? <FaEnvelopeOpen /> : <FaEnvelope />}
            </div>
            <div className="message-content">
                <p>{message}</p>
                <p className="notification-date">{date}</p>
            </div>
        </div>
    );
};

export default NotificationItem;
