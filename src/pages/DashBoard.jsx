import React from 'react';

function Dashboard() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
                <div className="text-xl font-bold">0</div>
            </div>
        </div>
    );
}

export default Dashboard;
