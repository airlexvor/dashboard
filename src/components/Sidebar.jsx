import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
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

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-200">
      <div className="p-6 flex justify-center">
        <img src={logo} alt="AiR Logo" className="h-8 block dark:hidden" />
        {/* You might want a white version of the logo for dark mode, or filter it */}
        <img src={logo} alt="AiR Logo" className="h-8 hidden dark:block filter invert" />
      </div>
      <nav className="flex-1 overflow-y-auto px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
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
