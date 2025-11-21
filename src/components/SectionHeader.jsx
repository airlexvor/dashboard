import React from 'react';

const SectionHeader = ({ title, description, action }) => {
    return (
        <div className="flex justify-between items-end mb-6">
            <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
                {description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
            </div>
            {action && <div>{action}</div>}
        </div>
    );
};

export default SectionHeader;
