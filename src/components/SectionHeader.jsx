import React from 'react';

const SectionHeader = ({ title, description, action }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
                {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
            </div>
            {action && <div className="w-full md:w-auto">{action}</div>}
        </div>
    );
};

export default SectionHeader;
