import React from 'react';

const Insights = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Insights & Discovery</h1>
            <p className="text-gray-600">Your “Discoveries” page. AI tells the business exactly what is happening AND why it matters.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Sales Insights', 'Traffic Insights', 'SMS Engagement', 'Conversion Funnels', 'Audience Personas', 'Behavioral Trends', 'Drop-off Analysis', 'Heatmaps'].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-semibold text-lg mb-2">{item}</h3>
                        <div className="h-32 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                            Chart/Graph
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Insights;
