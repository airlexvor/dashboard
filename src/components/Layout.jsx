import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ sidebarRef }) => {
  const mainRef = useRef(null);

  const handleMainClick = () => {
    // When main content is clicked, explicitly blur the sidebar nav
    const navElement = document.querySelector('nav[tabindex="0"]');
    if (navElement && document.activeElement === navElement) {
      navElement.blur();
    }
    // Focus the main content for keyboard scrolling
    if (mainRef.current) {
      mainRef.current.focus();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main
        ref={mainRef}
        tabIndex={0}
        onClick={handleMainClick}
        className="flex-1 overflow-y-auto relative mt-4 mr-4 mb-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl focus:outline-none cursor-pointer"
      >
        <div className="py-6 px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;


