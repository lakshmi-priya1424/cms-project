import React from 'react';

import { useNavigate, Outlet, useLocation } from 'react-router-dom';


const dashboardOptions = [
  { label: 'Intro', emoji: '🏠', route: '/dashboard/intro' },
  { label: 'Add Item', emoji: '➕', route: '/dashboard/additem' },
  { label: 'View Items', emoji: '👁️', route: '/dashboard/view' },
  { label: 'About Us', emoji: 'ℹ️', route: '/dashboard/about' },
  { label: 'Developer', emoji: '👨‍💻', route: '/dashboard/developer' },
  { label: 'My Favorites', emoji: '⭐', route: '/dashboard/myfavorites' },
];


function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (

    <div className="h-screen bg-zinc-900 flex">
      <nav className="flex flex-col items-center text-white bg-zinc-800 py-8 px-2 w-16 hover:w-48 transition-all duration-300 relative group">
        {dashboardOptions.map((option) => {
          const isActive = location.pathname === option.route;
          return (
            <button
              key={option.label}
              onClick={() => navigate(option.route)}
              className={`flex items-center w-full my-2 py-3 px-2 rounded-lg transition-colors duration-200 group
                ${isActive ? 'bg-zinc-700 font-bold' : 'hover:bg-zinc-700'}
              `}
            >
              <span className="text-2xl">{option.emoji}</span>
              <span className="ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:block hidden">
                {option.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
