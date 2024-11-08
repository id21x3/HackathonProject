import React, { useState } from 'react';
import '../../styles/FamilyGoals.css';

const FamilyGoals = () => {
    const [goals, setGoals] = useState([
        { name: 'TV Purchase', current: 800, target: 2000, color: '#3f51b5' },
        { name: 'Family Vacation', current: 1500, target: 5000, color: '#f44336' }
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGoalName, setNewGoalName] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');

    const handleAddGoal = () => {
        if (newGoalName && newGoalTarget) {
            setGoals([...goals, { name: newGoalName, current: 0, target: parseFloat(newGoalTarget), color: '#4caf50' }]);
            setNewGoalName('');
            setNewGoalTarget('');
            setIsModalOpen(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="family-goals">
            <h3>Family Goals</h3>
            {goals.map((goal, index) => (
                <div key={index} className="goal-card">
                    <div className="goal-header">
                        <span>{goal.name}</span>
                        <span>${goal.current} / ${goal.target}</span>
                    </div>
                    <div className="goal-progress-bar">
                        <div
                            className="goal-progress"
                            style={{
                                width: `${(goal.current / goal.target) * 100}%`,
                                backgroundColor: goal.color,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
            <button className="add-goal-button" onClick={() => setIsModalOpen(true)}>Add New Goal</button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Add New Goal</h3>
                        <input
                            type="text"
                            placeholder="Goal Name"
                            value={newGoalName}
                            onChange={(e) => setNewGoalName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Target Amount"
                            value={newGoalTarget}
                            onChange={(e) => setNewGoalTarget(e.target.value)}
                        />
                        <button className="modal-add-button" onClick={handleAddGoal}>Add</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FamilyGoals;
