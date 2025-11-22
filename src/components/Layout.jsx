import React, { useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ sidebarRef }) => {
  const mainRef = useRef(null);

  // Global Tab handler - always go to navbar
  useEffect(() => {
    const handleGlobalTab = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        // Always focus the navbar when Tab is pressed
        const navElement = document.querySelector('nav[tabindex="0"]');
        if (navElement) {
          navElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalTab);
    return () => window.removeEventListener('keydown', handleGlobalTab);
  }, []);

  const handleMainClick = (e) => {
    // Don't interfere with clicks on interactive elements
    const target = e.target;
    const isInteractive = target.tagName === 'INPUT' ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.tagName === 'A' ||
      target.closest('button') !== null ||
      target.closest('a') !== null;

    if (isInteractive) {
      return; // Let the click go through normally
    }

    // When clicking non-interactive content, blur navbar and enable scrolling
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
        tabIndex={-1}
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


