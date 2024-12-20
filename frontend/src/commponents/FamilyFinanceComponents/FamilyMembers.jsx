import React, { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import BankCard from './BankCard';

const FamilyMembers = () => {
    const [expandedMember, setExpandedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [transferAmount, setTransferAmount] = useState('');
    const [selectedChild, setSelectedChild] = useState(null);
    const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);

    const [members, setMembers] = useState([
        {
            name: 'John Robinson',
            amount: 1200,
            initials: 'JR',
            color: '#4caf50',
            role: 'Parent',
            phone: '123-456-7890',
            cardNumber: '**** **** **** 1234',
            expiryDate: '12/24',
            address: '123 Main St, Springfield'
        },
        {
            name: 'Alice Robinson',
            amount: 950,
            initials: 'AR',
            color: '#ff5722',
            role: 'Child',
            phone: '234-567-8901',
            cardNumber: '**** **** **** 2345',
            expiryDate: '08/25',
            address: '123 Main St, Springfield'
        },
        {
            name: 'Sam Robinson',
            amount: 450,
            initials: 'SR',
            color: '#ff9800',
            role: 'Child',
            phone: '345-678-9012',
            cardNumber: '**** **** **** 3456',
            expiryDate: '05/23',
            address: '123 Main St, Springfield'
        },
    ]);

    const [newMember, setNewMember] = useState({
        name: '',
        role: 'Child',
        cardNumber: '',
    });

    const recentExpenses = [
        { item: 'Groceries', amount: -50, type: 'expense', date: '2024-11-05' },
        { item: 'Fuel', amount: -30, type: 'expense', date: '2024-11-04' },
        { item: 'Restaurant', amount: -25, type: 'expense', date: '2024-11-03' },
        { item: 'Salary', amount: 500, type: 'income', date: '2024-11-01' },
        { item: 'Gift', amount: 100, type: 'income', date: '2024-10-29' }
    ];

    const productCategories = [
        'Alcoholic Beverages',
        'Non-Alcoholic Beverages',
        'Cigarettes',
        'Groceries',
        'Household Supplies',
    ];

    const handleMemberClick = (member) => {
        setExpandedMember(expandedMember === member.name ? null : member.name);
    };

    const handleAddMoneyClick = (member) => {
        setIsModalOpen(true);
        setSelectedChild(member);
    };

    const handleConfirmTransfer = () => {
        const parentIndex = members.findIndex((m) => m.role === 'Parent');
        const childIndex = members.findIndex((m) => m.name === selectedChild.name);

        if (parentIndex >= 0 && childIndex >= 0 && transferAmount > 0) {
            const updatedMembers = [...members];
            updatedMembers[parentIndex].amount -= parseFloat(transferAmount);
            updatedMembers[childIndex].amount += parseFloat(transferAmount);

            setMembers(updatedMembers);
        }

        setIsModalOpen(false);
        setTransferAmount('');
        setSelectedChild(null);
    };

    const handleAddNewMember = () => {
        if (newMember.name && newMember.cardNumber) {
            setMembers([
                ...members,
                {
                    name: newMember.name,
                    amount: 0,
                    initials: newMember.name
                        .split(' ')
                        .map((n) => n[0])
                        .join(''),
                    color: '#4caf50',
                    role: newMember.role,
                    cardNumber: newMember.cardNumber,
                    expiryDate: '12/25',
                    address: 'Unknown Address',
                    phone: 'Unknown Phone',
                },
            ]);
            setNewMember({ name: '', role: 'Child', cardNumber: '' });
            setIsAddMemberModalOpen(false);
        }
    };

    return (
        <section className="family-members">
            <h3>Family Members</h3>
            {members.map((member) => (
                <div
                    key={member.name}
                    className={`member-card ${expandedMember === member.name ? 'expanded' : ''}`}
                    onClick={() => handleMemberClick(member)}
                >
                    <div className="member-initials" style={{ backgroundColor: member.color }}>
                        {member.initials}
                    </div>
                    <div className="member-info">
                        <h4>{member.name} <span className="member-role">({member.role})</span></h4>
                        <p>${member.amount}</p>
                    </div>

                    {expandedMember === member.name && (
                        <>
                            <BankCard
                                cardNumber={member.cardNumber}
                                ownerName={member.name}
                                expiryDate={member.expiryDate}
                            />
                            <div className="additional-info">
                                <p>Phone: {member.phone}</p>
                                <p>Address: {member.address}</p>
                                {member.role === 'Child' && (
                                    <button
                                        className="add-money-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddMoneyClick(member);
                                        }}
                                    >
                                        Add Money
                                    </button>
                                )}
                            </div>
                            <AdditionalInfo
                                recentExpenses={recentExpenses}
                                productCategories={productCategories}
                            />
                        </>
                    )}
                </div>
            ))}
            <button className="add-member-button" onClick={() => setIsAddMemberModalOpen(true)}>
                Add New Member
            </button>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h4>Enter amount to transfer</h4>
                        <input
                            type="number"
                            value={transferAmount}
                            onChange={(e) => setTransferAmount(e.target.value)}
                            placeholder="Amount"
                        />
                        <button className="confirm-button" onClick={handleConfirmTransfer}>
                            Confirm
                        </button>
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {isAddMemberModalOpen && (
                <div className="modal-overlay" onClick={() => setIsAddMemberModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h4>Add New Family Member</h4>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={newMember.cardNumber}
                            onChange={(e) => setNewMember({ ...newMember, cardNumber: e.target.value })}
                        />
                        <div className="role-buttons">
                            <button
                                className={`role-button ${newMember.role === 'Parent' ? 'active' : ''}`}
                                onClick={() => setNewMember({ ...newMember, role: 'Parent' })}
                            >
                                Parent
                            </button>
                            <button
                                className={`role-button ${newMember.role === 'Child' ? 'active' : ''}`}
                                onClick={() => setNewMember({ ...newMember, role: 'Child' })}
                            >
                                Child
                            </button>
                        </div>
                        <button className="confirm-button" onClick={handleAddNewMember}>
                            Add Member
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FamilyMembers;
