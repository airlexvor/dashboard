import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  const mainRef = useRef(null);
  const location = useLocation();
  const [navControls, setNavControls] = useState(null);

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
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Sidebar onTabNavigate={setNavControls} />
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


