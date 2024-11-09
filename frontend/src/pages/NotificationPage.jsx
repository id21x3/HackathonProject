import React, { useState } from 'react';
import NotificationList from '../components/NotificationList';
import NotificationModal from '../components/NotificationModal';
import '../styles/NotificationPage.css';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Alice purchased Alcoholic Beverages', type: 'restricted', status: 'unread', details: { place: 'Store A', date: '2024-11-10', amount: 50 } },
        { id: 2, message: 'Sam purchased Cigarettes', type: 'restricted', status: 'unread', details: { place: 'Store B', date: '2024-11-09', amount: 30 } },
        { id: 3, message: 'Alice purchased Groceries', type: 'normal', status: 'read', details: { place: 'Store C', date: '2024-11-08', amount: 20 } },
        { id: 4, message: 'Sam purchased Fuel', type: 'normal', status: 'read', details: { place: 'Store D', date: '2024-11-07', amount: 25 } },
    ]);

    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleNotificationClick = (notification) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((n) =>
                n.id === notification.id ? { ...n, status: 'read' } : n
            )
        );
        setSelectedNotification(notification);
    };

    const closeModal = () => {
        setSelectedNotification(null);
    };

    return (
        <div className="notification-page">
            <h1>Notifications</h1>
            <NotificationList
                notifications={notifications}
                onNotificationClick={handleNotificationClick}
            />
            {selectedNotification && (
                <NotificationModal
                    notification={selectedNotification}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default NotificationPage;
