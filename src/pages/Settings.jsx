import React from 'react';

const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-gray-600 dark:text-gray-400">Everything administrative.</p>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-700">
                    {['Business Profile', 'Integrations', 'API Keys', 'Team Roles & Permissions', 'Notification Rules', 'Security & Access Logs'].map((setting) => (
                        <div key={setting} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex justify-between items-center transition-colors">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{setting}</span>
                            <span className="text-gray-400 dark:text-gray-500">→</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
