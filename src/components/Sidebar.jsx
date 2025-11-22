import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import {
  LayoutDashboard,
  ShoppingBag,
  GraduationCap,
  Bot,
  Palette,
  LineChart,
  Workflow,
  MessageSquare,
  Store,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

import logo from '../assets/logo-black.png';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0, opacity: 0 });
  const navRefs = useRef({});

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Catalog', path: '/catalog', icon: ShoppingBag },
    { name: 'AI Training', path: '/ai-training', icon: GraduationCap },
    { name: 'AI Assistant', path: '/ai-assistant', icon: Bot },
    { name: 'Content Studio', path: '/content-studio', icon: Palette },
    { name: 'Discoveries', path: '/insights', icon: LineChart },
    { name: 'Automations', path: '/automations', icon: Workflow },
    { name: 'Messages', path: '/messages', icon: MessageSquare },
    { name: 'Marketplace', path: '/marketplace', icon: Store },
    { name: 'Billing', path: '/billing', icon: CreditCard },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Help Center', path: '/help', icon: HelpCircle },
  ];

  useEffect(() => {
    // Find the active nav item
    const activeItem = navItems.find(item => {
      if (item.path === '/') {
        return location.pathname === '/';
      }
      return location.pathname.startsWith(item.path);
    });

    if (activeItem && navRefs.current[activeItem.path]) {
      const element = navRefs.current[activeItem.path];
      const rect = element.getBoundingClientRect();
      const parentRect = element.parentElement.getBoundingClientRect();

      setIndicatorStyle({
        top: element.offsetTop,
        height: rect.height,
        opacity: 1
      });
    }
  }, [location.pathname]);

  return (
    <div className="h-[calc(100vh-2rem)] w-64 bg-white dark:bg-gray-800 m-4 rounded-2xl shadow-xl flex flex-col transition-colors duration-200">
      <div className="p-6 flex justify-center">
        <img src={logo} alt="AiR Logo" className="h-8 block dark:hidden" />
        {/* You might want a white version of the logo for dark mode, or filter it */}
        <img src={logo} alt="AiR Logo" className="h-8 hidden dark:block filter invert" />
      </div>
      <nav className="flex-1 overflow-y-auto px-4 space-y-1 relative">
        {/* Animated background indicator */}
        <div
          className="absolute left-4 right-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-all duration-300 ease-in-out pointer-events-none"
          style={{
            top: `${indicatorStyle.top}px`,
            height: `${indicatorStyle.height}px`,
            opacity: indicatorStyle.opacity
          }}
        />

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            ref={(el) => (navRefs.current[item.path] = el)}
            className={({ isActive }) =>
              `relative flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors z-10 ${isActive
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 pb-3">
        <div className="flex justify-center">
          <ThemeToggle />
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate w-24">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate w-24">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            title="Sign out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
