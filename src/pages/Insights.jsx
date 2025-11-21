import React from 'react';
import {
    Sparkles,
    TrendingUp,
    TrendingDown,
    AlertCircle,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    ShoppingBag,
    Activity,
    Target,
    Newspaper,
    ExternalLink,
    Globe
} from 'lucide-react';

import newsEcommerce from '../assets/news-ecommerce.png';
import newsCompetitorAi from '../assets/news-competitor-ai.png';
import newsSupplyChain from '../assets/news-supply-chain.png';

const Insights = () => {
    // Mock data for AI Insights
    const aiInsights = [
        {
            id: 1,
            type: 'opportunity',
            title: 'Revenue Opportunity Detected',
            description: 'Customers who bought "Premium Plan" are 45% more likely to purchase "Add-on X" within 7 days.',
            action: 'Launch Campaign',
            icon: TrendingUp,
            color: 'text-green-500',
            bg: 'bg-green-50 dark:bg-green-900/20'
        },
        {
            id: 2,
            type: 'alert',
            title: 'Inventory Risk Alert',
            description: 'Stock levels for "Wireless Earbuds" are predicted to deplete in 3 days based on current velocity.',
            action: 'Reorder Now',
            icon: AlertCircle,
            color: 'text-red-500',
            bg: 'bg-red-50 dark:bg-red-900/20'
        },
        {
            id: 3,
            type: 'info',
            title: 'Audience Shift',
            description: 'Significant increase in traffic from mobile devices (up 12%) suggests optimizing mobile checkout flow.',
            action: 'View Report',
            icon: Users,
            color: 'text-blue-500',
            bg: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            id: 4,
            type: 'opportunity',
            title: 'High Value Cohort',
            description: 'New "Tech Enthusiast" segment showing 3x higher LTV than average users.',
            action: 'Target Segment',
            icon: Target,
            color: 'text-purple-500',
            bg: 'bg-purple-50 dark:bg-purple-900/20'
        },
        {
            id: 5,
            type: 'alert',
            title: 'Cart Abandonment Spike',
            description: 'Unusual spike in cart abandonment at payment step for international users.',
            action: 'Investigate',
            icon: AlertCircle,
            color: 'text-orange-500',
            bg: 'bg-orange-50 dark:bg-orange-900/20'
        },
        {
            id: 6,
            type: 'info',
            title: 'Seasonal Trend',
            description: 'Search volume for "Winter Gear" is up 200% week-over-week.',
            action: 'Update Homepage',
            icon: TrendingUp,
            color: 'text-blue-500',
            bg: 'bg-blue-50 dark:bg-blue-900/20'
        }
    ];

    // Mock data for News
    const newsItems = [
        {
            id: 1,
            source: 'TechCrunch',
            title: 'E-commerce trends for Q4 2025: What to expect',
            time: '2 hours ago',
            category: 'Market Trends',
            image: newsEcommerce
        },
        {
            id: 2,
            source: 'Retail Dive',
            title: 'Competitor "ShopifyPlus" launches new AI features',
            time: '5 hours ago',
            category: 'Competitor Watch',
            image: newsCompetitorAi
        },
        {
            id: 3,
            source: 'Bloomberg',
            title: 'Global supply chain disruptions ease, lowering shipping costs',
            time: '1 day ago',
            category: 'Logistics',
            image: newsSupplyChain
        }
    ];

    return (
        <div className="space-y-8 pb-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                        <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        Discoveries
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        AI-powered analysis of your business performance and opportunities.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        Export Report
                    </button>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-purple-600/20">
                        Ask AI Assistant
                    </button>
                </div>
            </div>

            {/* AI Daily Briefing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Daily Briefing</h2>
                    <div className="space-y-4 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                        {aiInsights.map((insight) => (
                            <div key={insight.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${insight.bg}`}>
                                        <insight.icon className={`w-6 h-6 ${insight.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{insight.title}</h3>
                                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                                {insight.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                                            {insight.description}
                                        </p>
                                        <button className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 flex items-center gap-1 transition-colors">
                                            {insight.action} <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Metrics / Trends */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Market Pulse</h2>

                    {/* Market Sentiment Card */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-gray-700 dark:text-gray-300">Customer Sentiment</h3>
                            <span className="text-green-500 flex items-center text-sm font-medium">
                                <ArrowUpRight className="w-4 h-4 mr-1" /> +12%
                            </span>
                        </div>
                        <div className="flex items-end gap-2 h-32 mb-4">
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} className="flex-1 bg-purple-100 dark:bg-purple-900/30 rounded-t-sm relative group">
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-purple-500 rounded-t-sm transition-all duration-500 group-hover:bg-purple-400"
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Sentiment is overwhelmingly positive this week following the new feature launch.
                        </p>
                    </div>

                    {/* Conversion Funnel Mini */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                        <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Conversion Funnel</h3>
                        <div className="space-y-3">
                            {[
                                { label: 'Visitors', val: '12,450', pct: 100, color: 'bg-blue-500' },
                                { label: 'Add to Cart', val: '3,200', pct: 25, color: 'bg-blue-400' },
                                { label: 'Checkout', val: '1,800', pct: 14, color: 'bg-blue-300' },
                                { label: 'Purchase', val: '1,150', pct: 9, color: 'bg-purple-500' },
                            ].map((step) => (
                                <div key={step.label}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600 dark:text-gray-400">{step.label}</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{step.val}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${step.color} rounded-full`}
                                            style={{ width: `${step.pct}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Dive Grid */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Deep Dives</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Retention Rate', value: '84%', change: '+2.4%', trend: 'up', icon: Users },
                        { title: 'Avg Order Value', value: '$124', change: '-1.2%', trend: 'down', icon: ShoppingBag },
                        { title: 'Server Uptime', value: '99.9%', change: '0.0%', trend: 'neutral', icon: Activity },
                        { title: 'Goal Completion', value: '92%', change: '+5.1%', trend: 'up', icon: Target },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <stat.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                </div>
                                {stat.trend === 'up' && <span className="text-green-500 text-sm font-medium flex items-center"><ArrowUpRight className="w-4 h-4 mr-1" /> {stat.change}</span>}
                                {stat.trend === 'down' && <span className="text-red-500 text-sm font-medium flex items-center"><ArrowDownRight className="w-4 h-4 mr-1" /> {stat.change}</span>}
                                {stat.trend === 'neutral' && <span className="text-gray-500 text-sm font-medium flex items-center"><Activity className="w-4 h-4 mr-1" /> {stat.change}</span>}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Industry Monitor (News) */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <Globe className="w-5 h-5 text-gray-500" />
                        Industry Monitor
                    </h2>
                    <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                        Customize Feed
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                            <div className="h-32 overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-gray-400">
                                    <Newspaper className="w-3 h-3" />
                                    <span>{item.source}</span>
                                    <span>•</span>
                                    <span>{item.time}</span>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Read Article <ExternalLink className="w-3 h-3 ml-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
