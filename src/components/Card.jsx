import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, title, action, ...props }) => {
    return (
        <div
            className={twMerge(
                clsx(
                    "bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200",
                    className
                )
            )}
            {...props}
        >
            {(title || action) && (
                <div className="px-4 py-3 md:px-6 md:py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    {title && <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-4 md:p-6">
                {children}
            </div>
        </div>
    );
};

export default Card;
