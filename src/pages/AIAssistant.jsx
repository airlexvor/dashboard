import React from 'react';

const AIAssistant = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">AI Assistant (Live Chat)</h1>
            <p className="text-gray-600">Businesses can talk directly to THEIR AI.</p>

            <div className="bg-white h-[500px] rounded-lg shadow-sm border border-gray-200 flex flex-col">
                <div className="flex-1 p-6 flex items-center justify-center text-gray-400">
                    Chat Interface Placeholder
                </div>
                <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <div className="text-sm text-gray-500 mb-2">Capabilities:</div>
                    <div className="flex flex-wrap gap-2">
                        {['Answer questions', 'Analyze trends', 'Suggest actions', 'Pull data', 'Manage catalog', 'Market insights'].map((cap) => (
                            <span key={cap} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-600">
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
