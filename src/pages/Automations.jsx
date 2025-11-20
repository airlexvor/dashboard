import React from 'react';

const Automations = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Automations</h1>
            <p className="text-gray-600">Where businesses set up AI workflows.</p>

            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <p className="text-green-800 font-medium">Example Rule: If inventory &lt; 20 → notify AiR → auto-create “low stock urgency” message.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['SMS Campaigns', 'AI Sales Follow-ups', 'Abandoned Cart Recovery', 'Lead Qualification', 'AI Customer Service', 'Scheduled Campaigns', 'Business Rules Engine'].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-semibold text-lg mb-2">{item}</h3>
                        <div className="h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            Workflow Config
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Automations;
