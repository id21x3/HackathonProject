import React from 'react';
import '../styles/NotificationModal.css';

const NotificationModal = ({ notification, onClose }) => {
    const { details } = notification;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Purchase Details</h3>
                <p><strong>Message:</strong> {notification.message}</p>
                <p><strong>Place:</strong> {details.place}</p>
                <p><strong>Date:</strong> {details.date}</p>
                <p><strong>Amount:</strong> ${details.amount}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default NotificationModal;
