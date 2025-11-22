import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ sidebarRef }) => {
  const mainRef = useRef(null);
  const location = useLocation();

  // Global Tab handler - always go to navbar
  useEffect(() => {
    const handleGlobalTab = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        // Always focus the navbar when Tab is pressed
        const navElement = document.querySelector('nav[tabindex="0"]');
        if (navElement) {
          // If navbar doesn't have focus, focus it first
          if (document.activeElement !== navElement) {
            navElement.focus();
          }
          // Dispatch a Tab key event to the navbar to trigger navigation
          const tabEvent = new KeyboardEvent('keydown', {
            key: 'Tab',
            code: 'Tab',
            keyCode: 9,
            which: 9,
            shiftKey: e.shiftKey,
            bubbles: true,
            cancelable: true
          });
          navElement.dispatchEvent(tabEvent);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalTab);
    return () => window.removeEventListener('keydown', handleGlobalTab);
  }, []);

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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar />
      <main
        ref={mainRef}
        tabIndex={0}
        onClick={handleMainClick}
        onKeyDown={handleMainKeyDown}
        className="flex-1 overflow-y-auto relative mt-4 mr-4 mb-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl focus:outline-none"
      >
        <div className="py-6 px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;


