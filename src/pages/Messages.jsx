import React from 'react';

const Messages = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">A central inbox for all AI-handled communication.</p>

            <div className="flex h-[600px] bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="w-1/3 border-r border-gray-200 bg-gray-50 p-4">
                    <div className="space-y-2">
                        {['All Messages', 'Customer Conversations', 'Pending AI Reviews', 'Automated Flows', 'Outbound Campaigns', 'AI Draft Messages'].map((folder) => (
                            <div key={folder} className="p-2 hover:bg-white rounded cursor-pointer text-sm font-medium text-gray-700">
                                {folder}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 p-6 flex items-center justify-center text-gray-400">
                    Select a conversation
                </div>
            </div>
        </div>
    );
};

export default Messages;
