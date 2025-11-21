import React from 'react';

const AIAssistant = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Assistant (Live Chat)</h1>
            <p className="text-gray-600 dark:text-gray-400">Businesses can talk directly to THEIR AI.</p>

            <div className="bg-white dark:bg-gray-800 h-[500px] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
                <div className="flex-1 p-6 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    Chat Interface Placeholder
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Capabilities:</div>
                    <div className="flex flex-wrap gap-2">
                        {['Answer questions', 'Analyze trends', 'Suggest actions', 'Pull data', 'Manage catalog', 'Market insights'].map((cap) => (
                            <span key={cap} className="px-2 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded text-xs text-gray-600 dark:text-gray-300">
                                {cap}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIAssistant;
