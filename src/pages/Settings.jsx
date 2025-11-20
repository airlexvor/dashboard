import React from 'react';

const Settings = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600">Everything administrative.</p>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 divide-y divide-gray-200">
                    {['Business Profile', 'Integrations', 'API Keys', 'Team Roles & Permissions', 'Notification Rules', 'Security & Access Logs'].map((setting) => (
                        <div key={setting} className="p-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center">
                            <span className="font-medium text-gray-700">{setting}</span>
                            <span className="text-gray-400">→</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Settings;
