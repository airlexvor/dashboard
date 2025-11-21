import React from 'react';

const Automations = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Automations</h1>
            <p className="text-gray-600 dark:text-gray-400">Where businesses set up AI workflows.</p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                <p className="text-green-800 dark:text-green-200 font-medium">Example Rule: If inventory &lt; 20 → notify AiR → auto-create “low stock urgency” message.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['SMS Campaigns', 'AI Sales Follow-ups', 'Abandoned Cart Recovery', 'Lead Qualification', 'AI Customer Service', 'Scheduled Campaigns', 'Business Rules Engine'].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{item}</h3>
                        <div className="h-20 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-400 dark:text-gray-500">
                            Workflow Config
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Automations;
