import React from 'react';

const Marketplace = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
            <p className="text-gray-600 dark:text-gray-400">Businesses can buy UGC creators, ad templates, premium AI workflows, and more.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['UGC Creators', 'Ad Templates', 'Premium AI Workflows', 'AI-Powered Campaigns', 'Verified Freelancers'].map((item) => (
                    <div key={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                        <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-400 dark:text-gray-500">
                            Image
                        </div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">{item}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Description of {item}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="font-bold text-blue-600 dark:text-blue-400">$XX.XX</span>
                            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
