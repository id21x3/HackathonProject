import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Supermarket Purchase', value: 50, color: '#f44336' },
    { name: 'Movie Tickets', value: 30, color: '#3f51b5' },
    { name: 'Gas Station', value: 40, color: '#ffb74d' },
];

const SpendingChart = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Spending Chart</h3>
            <PieChart width={300} height={300}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default SpendingChart;
