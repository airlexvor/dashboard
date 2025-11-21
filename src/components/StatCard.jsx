import React from 'react';
import Card from './Card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, trend, trendLabel, icon: Icon, color = "blue" }) => {
    const isPositive = trend >= 0;

    const colorClasses = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
        red: "bg-red-50 text-red-600",
    };

    return (
        <Card>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value}</h3>
                    </div>
                    <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
                        <Icon className="w-5 h-5" />
                    </div>
                </div>
                <div className="mt-4 flex items-center">
                    <span className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                        {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {trend}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">vs last month</span>
                </div>
            </div>
        </Card>
    );
};

export default StatCard;
