import React from 'react';

const Billing = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Billing + Usage</h1>
            <p className="text-gray-600">Simple, transparent billing for plans and AI usage.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Current Plan</h3>
                    <div className="text-2xl font-bold text-gray-900 mb-2">Pro Plan</div>
                    <p className="text-gray-500 mb-4">$99/month</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-xs text-gray-500">45% of credits used</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                        {['Top-up Credits', 'Manage Payment Methods', 'View Billing History', 'Upgrade Plan'].map((action) => (
                            <button key={action} className="w-full text-left px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;
