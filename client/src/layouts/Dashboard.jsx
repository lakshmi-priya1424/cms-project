import React from 'react';
import { useNavigate } from 'react-router-dom';

const dashboardOptions = [
  { label: 'Intro', emoji: '🏠', route: '/Intro' },
  { label: 'Add Item', emoji: '➕', route: '/AddItem' },
  { label: 'About Us', emoji: 'ℹ️', route: '/About' },
  { label: 'Developer', emoji: '👨‍💻', route: '/Developer' },
];

function Dashboard(){
  const navigate = useNavigate();

return (
    <div className="h-screen bg-zinc-900 text-white flex">
        <nav className="flex flex-col items-center bg-zinc-800 py-8 px-2 w-16 hover:w-48 transition-all duration-300 relative group">
            {dashboardOptions.map((option) => (
                <button
                    key={option.label}
                    onClick={() => navigate(option.route)}
                    className="flex items-center w-full my-2 py-3 px-2 rounded-lg hover:bg-zinc-700 transition-colors duration-200 group"
                >
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:block hidden">
                        {option.label}
                    </span>
                </button>
            ))}
        </nav>
        <div className="flex-1 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        </div>
    </div>
);
};

export default Dashboard;