import React from 'react';

const ContentStudio = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Content Studio</h1>
            <p className="text-gray-600">AI-generated content ideas and ready-to-use marketing assets.</p>

            <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                <p className="text-pink-800 font-medium">📌 Purpose: A full AI marketing department producing ideas, scripts, captions, and strategies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['AI-Suggested Posts', 'Ad Creatives', 'SMS Scripts & Drip Flows', 'UGC Script Writer', 'Product Descriptions', 'SEO Keywords', 'Seasonal Campaign Ideas'].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-semibold text-lg mb-2">{item}</h3>
                        <div className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            Content Generator
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentStudio;
