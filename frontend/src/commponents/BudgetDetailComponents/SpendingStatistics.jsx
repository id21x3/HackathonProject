import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

const SpendingStatistics = () => {
    const pieData = [
        { name: 'Supermarket Purchase', value: 50, color: '#f44336' },
        { name: 'Movie Tickets', value: 30, color: '#3f51b5' },
        { name: 'Gas Station', value: 40, color: '#ffb74d' },
    ];

    const lineData = [
        { date: 'Apr 1', spending: 40 },
        { date: 'Apr 3', spending: 30 },
        { date: 'Apr 5', spending: 50 },
    ];

    return (
        <section className="spending-statistics">
            <h2>Spending Statistics</h2>
            <div className="statistics">
                <div className="stat-item">
                    <p>Total Transactions</p>
                    <span className="stat-value">15</span>
                </div>
                <div className="stat-item">
                    <p>Avg Daily Spending</p>
                    <span className="stat-value">$60</span>
                </div>
                <div className="stat-item">
                    <p>Largest Expense</p>
                    <span className="stat-value">$200</span>
                </div>
            </div>

            <div className="charts">
                <div className="spending-chart">
                    <h3>Spending Distribution</h3>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                <div className="line-chart">
                    <h3>Daily Spending</h3>
                    <LineChart width={300} height={300} data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="spending" stroke="#4a90e2" strokeWidth={2} />
                    </LineChart>
                </div>
            </div>
        </section>
    );
};

export default SpendingStatistics;
