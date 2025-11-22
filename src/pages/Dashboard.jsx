import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    // Pie chart data
    const pieChartData = [
        { label: 'Electronics', value: 42500, color: '#3b82f6' },
        { label: 'Clothing', value: 35800, color: '#8b5cf6' },
        { label: 'Home & Garden', value: 28200, color: '#10b981' },
        { label: 'Sports', value: 18092, color: '#f59e0b' }
    ];

    const total = pieChartData.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -90;

    const createPieSlice = (percentage, startAngle, color) => {
        const angle = (percentage / 100) * 360;
        const endAngle = startAngle + angle;

        const x1 = 50 + 45 * Math.cos(Math.PI * startAngle / 180);
        const y1 = 50 + 45 * Math.sin(Math.PI * startAngle / 180);
        const x2 = 50 + 45 * Math.cos(Math.PI * endAngle / 180);
        const y2 = 50 + 45 * Math.sin(Math.PI * endAngle / 180);

        const largeArc = angle > 180 ? 1 : 0;

        const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 45 45 0 ${largeArc} 1 ${x2} ${y2}`,
            'Z'
        ].join(' ');

        return pathData;
    };

    return (
        <div>
            <SectionHeader
                title="Dashboard"
                description="A high-level overview of everything the business cares about."
                action={
                    <button
                        onClick={() => navigate('/ai-assistant')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Ask AiR
                    </button>
                }
            />

            {/* Key Metrics Grid - Moved to Top */}
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* AI Insights Summary - Takes up 2 columns on large screens */}
                <div className="lg:col-span-2">
                    <Card className="h-full border-blue-100 dark:border-gray-700 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center">
                                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mr-3 shadow-lg shadow-blue-500/30">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI Insights Summary</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Real-time intelligence</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                                    Live
                                </span>
                            </div>
                        </div>

                        {/* Scrollable container */}
                        <div className="space-y-3 max-h-[320px] overflow-y-auto overflow-x-visible pr-2 custom-scrollbar">
                            {[
                                {
                                    type: "Traffic Spike",
                                    icon: TrendingUp,
                                    iconColor: "text-emerald-600",
                                    iconBg: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
                                    borderColor: "border-emerald-200 dark:border-emerald-800/40",
                                    accentColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
                                    message: "Organic traffic is up 24% this week, primarily driven by the \"Summer Collection\" blog post.",
                                    time: "2m ago",
                                    priority: "high"
                                },
                                {
                                    type: "Inventory Alert",
                                    icon: AlertTriangle,
                                    iconColor: "text-orange-600",
                                    iconBg: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
                                    borderColor: "border-orange-200 dark:border-orange-800/40",
                                    accentColor: "bg-gradient-to-r from-orange-500 to-red-500",
                                    message: "3 top-selling items are predicted to go out of stock within 5 days based on current sales velocity.",
                                    time: "15m ago",
                                    priority: "urgent"
                                },
                                {
                                    type: "Customer Sentiment",
                                    icon: Users,
                                    iconColor: "text-blue-600",
                                    iconBg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
                                    borderColor: "border-blue-200 dark:border-blue-800/40",
                                    accentColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
                                    message: "Positive sentiment has increased by 12% following the new automated support responses.",
                                    time: "1h ago",
                                    priority: "medium"
                                },
                                {
                                    type: "Conversion Opportunity",
                                    icon: Activity,
                                    iconColor: "text-purple-600",
                                    iconBg: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
                                    borderColor: "border-purple-200 dark:border-purple-800/40",
                                    accentColor: "bg-gradient-to-r from-purple-500 to-pink-500",
                                    message: "Peak conversion hours detected: 2PM-5PM EST. Consider scheduling priority campaigns during this window.",
                                    time: "2h ago",
                                    priority: "medium"
                                },
                                {
                                    type: "Cost Optimization",
                                    icon: ShoppingCart,
                                    iconColor: "text-cyan-600",
                                    iconBg: "bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20",
                                    borderColor: "border-cyan-200 dark:border-cyan-800/40",
                                    accentColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
                                    message: "Ad spend efficiency improved by 18% after pausing 3 underperforming campaigns. Reallocate budget to top performers.",
                                    time: "3h ago",
                                    priority: "high"
                                }
                            ].map((insight, index) => (
                                <div
                                    key={index}
                                    className={`group relative p-4 bg-white dark:bg-gray-700/50 rounded-xl border ${insight.borderColor} hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                                >
                                    {/* Accent bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${insight.accentColor} rounded-l-xl`}></div>

                                    <div className="flex items-start ml-2">
                                        <div className={`flex-shrink-0 p-2.5 ${insight.iconBg} rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300`}>
                                            <insight.icon className={`w-4 h-4 ${insight.iconColor}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <h4 className="text-sm font-bold text-gray-900 dark:text-white">{insight.type}</h4>
                                                <div className="flex items-center space-x-2">
                                                    {insight.priority === "urgent" && (
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                                                            Urgent
                                                        </span>
                                                    )}
                                                    <span className="text-xs text-gray-400 dark:text-gray-500">{insight.time}</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{insight.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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

            {/* Active Campaigns - Full Width */}
            <div className="mb-8">
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
            </div>

            {/* Sales by Category and Catalog Health Status - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Sales by Category Pie Chart */}
                <Card title="Sales by Category">
                    <div className="flex items-center justify-between">
                        {/* Pie Chart */}
                        <div className="flex-shrink-0">
                            <svg viewBox="0 0 100 100" className="w-40 h-40 transform -rotate-90">
                                {pieChartData.map((item, index) => {
                                    const percentage = (item.value / total) * 100;
                                    const slice = createPieSlice(percentage, currentAngle, item.color);
                                    const previousAngle = currentAngle;
                                    currentAngle += (percentage / 100) * 360;

                                    return (
                                        <path
                                            key={index}
                                            d={slice}
                                            fill={item.color}
                                            className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                                            style={{
                                                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
                                            }}
                                        />
                                    );
                                })}
                            </svg>
                        </div>

                        {/* Legend */}
                        <div className="flex-1 ml-6 space-y-3">
                            {pieChartData.map((item, index) => {
                                const percentage = ((item.value / total) * 100).toFixed(1);
                                return (
                                    <div key={index} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div
                                                className="w-3 h-3 rounded-sm mr-2"
                                                style={{ backgroundColor: item.color }}
                                            ></div>
                                            <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                ${(item.value / 1000).toFixed(1)}k
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Card>

                {/* Catalog Health Status */}
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
            </div>

            {/* Action Required Alert */}
            <div className="mb-8">
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
    );
};

export default Dashboard;
