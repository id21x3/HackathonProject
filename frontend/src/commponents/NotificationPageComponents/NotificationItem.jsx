import React from 'react';
import { FaEnvelope, FaEnvelopeOpen } from 'react-icons/fa';
import '../styles/NotificationItem.css';

const NotificationItem = ({ notification, onClick }) => {
    const isRestricted = notification.type === 'restricted';
    const isUnread = notification.status === 'unread';

    return (
        <div
            className={`notification-item ${isRestricted ? 'restricted' : ''} ${isUnread ? 'unread' : 'read'}`}
            onClick={onClick}
        >
            {isUnread ? (
                <FaEnvelope className="icon envelope-icon" />
            ) : (
                <FaEnvelopeOpen className="icon envelope-icon" />
            )}
            <p>{notification.message}</p>
        </div>
    );
};

export default NotificationItem;
