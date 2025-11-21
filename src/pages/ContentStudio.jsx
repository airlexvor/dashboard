import React from 'react';

const ContentStudio = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Content Studio</h1>
            <p className="text-gray-600 dark:text-gray-400">AI-generated content ideas and ready-to-use marketing assets.</p>

            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-100 dark:border-pink-900/30">
                <p className="text-pink-800 dark:text-pink-200 font-medium">📌 Purpose: A full AI marketing department producing ideas, scripts, captions, and strategies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['AI-Suggested Posts', 'Ad Creatives', 'SMS Scripts & Drip Flows', 'UGC Script Writer', 'Product Descriptions', 'SEO Keywords', 'Seasonal Campaign Ideas'].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item}</h3>
                        <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500">
                            Content Generator
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentStudio;
