// BankCard.jsx
import React from 'react';
import '../../styles/BankCard.css';

const BankCard = ({ cardNumber, ownerName, expiryDate }) => {
    return (
        <div className="bank-card">
            <div className="card-chip"></div>
            <div className="card-number">{cardNumber}</div>
            <div className="card-details">
                <div className="card-owner">
                    <span className="label">Card Holder</span>
                    <span>{ownerName}</span>
                </div>
                <div className="card-expiry">
                    <span className="label">Expires</span>
                    <span>{expiryDate}</span>
                </div>
            </div>
        </div>
    );
};

export default BankCard;
