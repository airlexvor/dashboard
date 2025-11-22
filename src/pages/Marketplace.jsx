import React, { useState } from 'react';
import { Search, Filter, Star, Download, ExternalLink, CheckCircle } from 'lucide-react';

const Marketplace = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Creators', 'Templates', 'Workflows', 'Services'];

    const items = [
        {
            id: 1,
            title: 'UGC Creators Bundle',
            description: 'Access a network of top-tier UGC creators for your next campaign.',
            price: '$49.99',
            rating: 4.8,
            reviews: 124,
            category: 'Creators',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'CreativeHub',
            authorAvatar: 'https://ui-avatars.com/api/?name=Creative+Hub&background=0D8ABC&color=fff'
        },
        {
            id: 2,
            title: 'High-Converting Ad Templates',
            description: 'Pack of 50+ tested ad templates optimized for conversion.',
            price: '$29.99',
            rating: 4.9,
            reviews: 89,
            category: 'Templates',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'AdMaster',
            authorAvatar: 'https://ui-avatars.com/api/?name=Ad+Master&background=random'
        },
        {
            id: 3,
            title: 'Premium AI Workflows',
            description: 'Automate your content creation with these advanced AI workflows.',
            price: '$99.00',
            rating: 5.0,
            reviews: 42,
            category: 'Workflows',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'AutoAI',
            authorAvatar: 'https://ui-avatars.com/api/?name=Auto+AI&background=random'
        },
        {
            id: 4,
            title: 'AI-Powered Campaign Manager',
            description: 'Full-suite dashboard to manage and optimize your AI campaigns.',
            price: '$149.99',
            rating: 4.7,
            reviews: 215,
            category: 'Services',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'GrowthTech',
            authorAvatar: 'https://ui-avatars.com/api/?name=Growth+Tech&background=random'
        },
        {
            id: 5,
            title: 'Verified Freelancer Network',
            description: 'Connect with vetted freelancers specialized in AI and marketing.',
            price: 'Free',
            rating: 4.6,
            reviews: 310,
            category: 'Services',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'TalentPool',
            authorAvatar: 'https://ui-avatars.com/api/?name=Talent+Pool&background=random'
        },
        {
            id: 6,
            title: 'Social Media Strategy Guide',
            description: 'Comprehensive guide to growing your brand on social media.',
            price: '$19.99',
            rating: 4.5,
            reviews: 76,
            category: 'Templates',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            author: 'SocialGuru',
            authorAvatar: 'https://ui-avatars.com/api/?name=Social+Guru&background=random'
        }
    ];

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-8 pb-12">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marketplace</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Discover premium assets, creators, and AI workflows.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium">
                        My Library
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium shadow-sm">
                        Sell Item
                    </button>
                </div>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search marketplace..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 overflow-hidden flex flex-col">
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-semibold text-gray-900 dark:text-white shadow-sm">
                                {item.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 flex-1">
                                {item.description}
                            </p>

                            {/* Author & Rating */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <img src={item.authorAvatar} alt={item.author} className="w-6 h-6 rounded-full" />
                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.author}</span>
                                </div>
                                <div className="flex items-center gap-1 text-amber-400">
                                    <Star className="w-3 h-3 fill-current" />
                                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{item.rating}</span>
                                    <span className="text-xs text-gray-400">({item.reviews})</span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                                <span className="font-bold text-lg text-gray-900 dark:text-white">{item.price}</span>
                                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                                    {item.price === 'Free' ? 'Get Now' : 'Buy Now'}
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
                <div className="text-center py-20">
                    <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No items found</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                        className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default Marketplace;
