import React from 'react';
import NotificationItem from './NotificationItem';

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
