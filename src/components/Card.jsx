import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, title, action }) => {
    return (
        <div className={twMerge(clsx("bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden", className))}>
            {(title || action) && (
                <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
                    {title && <h3 className="font-semibold text-gray-800">{title}</h3>}
                    {action && <div>{action}</div>}
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default Card;
