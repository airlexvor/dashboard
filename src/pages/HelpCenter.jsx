import React from 'react';

const HelpCenter = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Help & Training Center</h1>
            <p className="text-gray-600 dark:text-gray-400">Tutorials, guides, and best practices.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Tutorials', 'How to Train Your AiR', 'Best Practices', 'AI Playbooks', 'Case Studies'].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item}</h3>
                        <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500">
                            Video/Article
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpCenter;
