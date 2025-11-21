import React from 'react';

const AITraining = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Training</h1>
            <p className="text-gray-600 dark:text-gray-400">This is where businesses teach AiR about their brand, tone, policies, products, and FAQs.</p>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-900/30">
                <p className="text-purple-800 dark:text-purple-200 font-medium">📌 Purpose: This trains the business’s personal AiR agent to handle sales, support, and messaging exactly the way they want.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Brand Voice & Style', 'Business Bio & Identity', 'Products + Service Details', 'FAQ Training', 'Do/Don’t Response Rules', 'Upload Knowledge Docs', 'Customer Objection Handling'].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item}</h3>
                        <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500">
                            Training Module
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AITraining;
