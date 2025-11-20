import React from 'react';

const HelpCenter = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Help & Training Center</h1>
            <p className="text-gray-600">Tutorials, guides, and best practices.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Tutorials', 'How to Train Your AiR', 'Best Practices', 'AI Playbooks', 'Case Studies'].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-semibold text-lg mb-2">{item}</h3>
                        <div className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            Video/Article
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpCenter;
