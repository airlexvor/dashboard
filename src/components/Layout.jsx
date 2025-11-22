import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative mt-4 mr-4 mb-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
        <div className="py-6 px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
