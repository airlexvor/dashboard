import React from 'react';
import {
    TrendingUp,
    Users,
    ShoppingCart,
    Activity,
    AlertTriangle,
    CheckCircle,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import Card from '../components/Card';
import StatCard from '../components/StatCard';
import SectionHeader from '../components/SectionHeader';

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <SectionHeader
                title="Dashboard"
                description="A high-level overview of everything the business cares about."
                action={
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Ask AiR
                    </button>
                }
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* AI Insights Summary - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                    <Card className="h-full border-blue-100 dark:border-gray-700 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                <Sparkles className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Insights Summary</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-blue-100 dark:border-gray-600 shadow-sm">
                                <p className="text-gray-700 dark:text-gray-300 text-sm"><span className="font-semibold text-blue-600 dark:text-blue-400">Traffic Spike:</span> Organic traffic is up 24% this week, primarily driven by the "Summer Collection" blog post.</p>
                            </div>
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-blue-100 dark:border-gray-600 shadow-sm">
                                <p className="text-gray-700 dark:text-gray-300 text-sm"><span className="font-semibold text-blue-600 dark:text-blue-400">Inventory Alert:</span> 3 top-selling items are predicted to go out of stock within 5 days based on current sales velocity.</p>
                            </div>
                            <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border border-blue-100 dark:border-gray-600 shadow-sm">
                                <p className="text-gray-700 dark:text-gray-300 text-sm"><span className="font-semibold text-blue-600 dark:text-blue-400">Customer Sentiment:</span> Positive sentiment has increased by 12% following the new automated support responses.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Top Opportunities */}
                <div className="lg:col-span-1">
                    <Card title="Top Opportunities" className="h-full">
                        <div className="space-y-4">
                            {[
                                { title: "Recover 12 abandoned carts", value: "$1,240 potential", icon: ShoppingCart, color: "text-orange-600", bg: "bg-orange-50 dark:bg-orange-900/20" },
                                { title: "Re-engage dormant users", value: "450 users", icon: Users, color: "text-purple-600", bg: "bg-purple-50 dark:bg-purple-900/20" },
                                { title: "Optimize 5 underperforming ads", value: "Save $300/mo", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer group">
                                    <div className="flex items-center">
                                        <div className={`p-2 rounded-lg ${item.bg} mr-3`}>
                                            <item.icon className={`w-4 h-4 ${item.color}`} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.value}</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            {/* Snapshots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total Sales"
                    value="$124,592"
                    trend={12.5}
                    icon={ShoppingCart}
                    color="blue"
                />
                <StatCard
                    title="Active Visitors"
                    value="1,234"
                    trend={-2.4}
                    icon={Users}
                    color="purple"
                />
                <StatCard
                    title="Conversion Rate"
                    value="3.2%"
                    trend={0.8}
                    icon={Activity}
                    color="green"
                />
                <StatCard
                    title="Avg. Order Value"
                    value="$85.00"
                    trend={5.1}
                    icon={TrendingUp}
                    color="orange"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Active Campaigns */}
                <Card title="Active Campaigns Overview"
                    action={<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>}
                >
                    <div className="space-y-4">
                        {[
                            { name: "Summer Sale 2025", status: "Active", reach: "12k", conversion: "4.5%" },
                            { name: "New User Welcome", status: "Active", reach: "5.4k", conversion: "12%" },
                            { name: "Retargeting - Cart", status: "Paused", reach: "8.2k", conversion: "2.1%" },
                        ].map((campaign, idx) => (
                            <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-50 dark:border-gray-700 last:border-0">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">{campaign.name}</p>
                                    <div className="flex items-center mt-1">
                                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${campaign.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">{campaign.status}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{campaign.conversion}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Conv. Rate</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Catalog Health & AI Flags */}
                <div className="space-y-6">
                    <Card title="Catalog Health Status">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">98% Healthy</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">452 products synced</p>
                                </div>
                            </div>
                            <button className="text-sm text-blue-600 font-medium">Optimize</button>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Missing Descriptions</span>
                                <span className="font-medium text-gray-900 dark:text-white">4</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-orange-400 h-1.5 rounded-full" style={{ width: '5%' }}></div>
                            </div>

                            <div className="flex justify-between text-sm mt-3">
                                <span className="text-gray-600 dark:text-gray-400">Low Quality Images</span>
                                <span className="font-medium text-gray-900 dark:text-white">12</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-900/30">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-red-900 dark:text-red-200">Action Required</h3>
                                <p className="text-sm text-red-700 dark:text-red-300 mt-1">2 payment gateways need re-authentication. This may affect checkout.</p>
                                <button className="mt-3 text-sm font-medium text-red-700 dark:text-red-300 hover:text-red-800 dark:hover:text-red-200 underline">Fix Issue</button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
