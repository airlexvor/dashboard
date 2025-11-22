import React from 'react';

const Billing = () => {
    const plans = [
        {
            name: 'Started',
            marketingCredits: '$50-$1000/m',
            costPerDiscovery: '$.0.25',
            commission: '10%',
            multiplier: '1X',
            perks: 'Basic discovery placement in search results',
            idealFor: 'Local or Small online shops testing AiR or with small budgets.'
        },
        {
            name: 'Growth',
            marketingCredits: '$1,001-$10,000/m',
            costPerDiscovery: '$.0.20',
            commission: '10%',
            multiplier: '2X',
            perks: 'Featured listings, priority recommendations',
            idealFor: 'Expanding regional or e-commerce brands'
        },
        {
            name: 'Prime',
            marketingCredits: '$10,001-$50,000/m',
            costPerDiscovery: '$.0.10',
            commission: '5%',
            multiplier: '3X',
            perks: 'A.I. learns customer intent to predict likely buyers',
            idealFor: 'Established businesses scaling nationally'
        },
        {
            name: 'Elite',
            marketingCredits: '$50,001-$100,000/m',
            costPerDiscovery: '$.0.10',
            commission: '5%',
            multiplier: '4X',
            perks: 'Top-ranked search visibility',
            idealFor: 'Major brands or established franchises'
        },
        {
            name: 'Enterprise',
            marketingCredits: '$100,001/m +',
            costPerDiscovery: '$.0.05',
            commission: '2%',
            multiplier: '5X',
            perks: 'Guaranteed top placement, A.I. model trained on your brand',
            idealFor: 'Enterprises seeking maximum visibility'
        },
        {
            name: 'Ambassador',
            marketingCredits: '$1 million/m +',
            costPerDiscovery: 'Negotiable',
            commission: 'Negotiable',
            multiplier: 'Negotiable',
            perks: 'Fully customized A.I. built for all of your business needs',
            idealFor: 'Those who want more than our current plan options'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Billing + Usage</h1>
                <p className="text-gray-600 dark:text-gray-400">Simple, transparent billing for plans and AI usage.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Current Plan</h3>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pro Plan</div>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">$99/month</p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">45% of credits used</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Quick Actions</h3>
                        <div className="space-y-2">
                            {['Top-up Credits', 'Manage Payment Methods', 'View Billing History', 'Upgrade Plan'].map((action) => (
                                <button key={action} className="w-full text-left px-4 py-2 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                                    {action}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Available Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div key={plan.name} className="bg-black text-white p-8 rounded-xl flex flex-col h-full border border-gray-800 hover:border-gray-600 transition-colors">
                            <h3 className="text-3xl font-bold mb-8 text-center">{plan.name}</h3>

                            <div className="space-y-6 flex-grow">
                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Marketing Credits</p>
                                    <p className="font-medium">{plan.marketingCredits}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Cost Per Discovery</p>
                                    <p className="font-medium">{plan.costPerDiscovery}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">Commission on Sales</p>
                                    <p className="font-medium">{plan.commission}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">User Point Multiplier</p>
                                    <p className="font-medium">{plan.multiplier}</p>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-400 mb-1">A.I. Visibility and Perks</p>
                                    <p className="font-medium text-sm">{plan.perks}</p>
                                </div>

                                <div className="text-center pt-4 border-t border-gray-800">
                                    <p className="text-sm text-gray-400 mb-2">Ideal For</p>
                                    <p className="text-sm text-gray-300">{plan.idealFor}</p>
                                </div>
                            </div>

                            <button className="w-full mt-8 bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Billing;
