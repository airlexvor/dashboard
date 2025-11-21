import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
