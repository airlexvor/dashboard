import React from 'react';

const SectionHeader = ({ title, description, action }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                {description && <p className="text-gray-500 mt-1">{description}</p>}
            </div>
            {action && (
                <div className="flex-shrink-0">
                    {action}
                </div>
            )}
        </div>
    );
};

export default SectionHeader;
