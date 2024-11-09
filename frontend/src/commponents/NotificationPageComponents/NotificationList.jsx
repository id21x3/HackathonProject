import React from 'react';
import NotificationItem from '../NotificationPageComponents/NotificationItem.jsx';

const NotificationList = ({ notifications, onNotificationClick }) => {
    return (
        <div className="notification-list">
            {notifications.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                    onClick={() => onNotificationClick(notification)}
                />
            ))}
        </div>
    );
};

export default NotificationList;
