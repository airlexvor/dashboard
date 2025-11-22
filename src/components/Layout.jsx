import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import logo from '../assets/logo-black.png';

const Layout = () => {
  const mainRef = useRef(null);
  const location = useLocation();
  const [navControls, setNavControls] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Global Tab handler - always go to navbar
  useEffect(() => {
    const handleGlobalTab = (e) => {
      if (e.key === 'Tab' && navControls) {
        e.preventDefault();
        // Focus the navbar first
        navControls.focusNav();
        // Then move to next/prev item
        if (e.shiftKey) {
          navControls.movePrev();
        } else {
          navControls.moveNext();
        }
      }
    };

    window.addEventListener('keydown', handleGlobalTab);
    return () => window.removeEventListener('keydown', handleGlobalTab);
  }, [navControls]);

  // Focus main content on mount and when route changes
  useEffect(() => {
    if (mainRef.current) {
      // Small delay to ensure content has rendered
      setTimeout(() => {
        mainRef.current?.focus();
      }, 100);
    }
  }, [location.pathname]);

  // Handle arrow keys for scrolling when main has focus
  const handleMainKeyDown = (e) => {
    const scrollAmount = 50;
    const pageScrollAmount = mainRef.current?.clientHeight ? mainRef.current.clientHeight - 100 : 500;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        mainRef.current?.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        break;
      case 'ArrowUp':
        e.preventDefault();
        mainRef.current?.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        break;
      case 'PageDown':
        e.preventDefault();
        mainRef.current?.scrollBy({ top: pageScrollAmount, behavior: 'smooth' });
        break;
      case 'PageUp':
        e.preventDefault();
        mainRef.current?.scrollBy({ top: -pageScrollAmount, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

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
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img src={logo} alt="AiR Logo" className="h-8 block dark:hidden" />
          <img src={logo} alt="AiR Logo" className="h-8 hidden dark:block filter invert" />
        </div>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <Sidebar
        onTabNavigate={setNavControls}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main
        ref={mainRef}
        tabIndex={0}
        onClick={handleMainClick}
        onKeyDown={handleMainKeyDown}
        className="flex-1 overflow-y-auto relative md:mt-4 md:mr-4 md:mb-4 rounded-none md:rounded-2xl bg-white dark:bg-gray-800 shadow-none md:shadow-xl focus:outline-none"
      >
        <div className="py-6 px-4 md:px-8" style={{ height: '100%' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;


