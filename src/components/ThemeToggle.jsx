import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            aria-label="Toggle theme"
        >
            <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
            >
                {theme === 'dark' ? (
                    <Moon className="w-3.5 h-3.5 text-blue-500" />
                ) : (
                    <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
