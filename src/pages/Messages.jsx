import React from 'react';

const Messages = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
            <p className="text-gray-600 dark:text-gray-400">A central inbox for all AI-handled communication.</p>

            <div className="flex h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-4">
                    <div className="space-y-2">
                        {['All Messages', 'Customer Conversations', 'Pending AI Reviews', 'Automated Flows', 'Outbound Campaigns', 'AI Draft Messages'].map((folder) => (
                            <div key={folder} className="p-2 hover:bg-white dark:hover:bg-gray-700 rounded cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                                {folder}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 p-6 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    Select a conversation
                </div>
            </div>
        </div>
    );
};

export default Messages;
