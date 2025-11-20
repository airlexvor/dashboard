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
        <Card className="h-full">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                    <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
                </div>
                {Icon && (
                    <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
                        <Icon className="w-5 h-5" />
                    </div>
                )}
            </div>

            {(trend !== undefined) && (
                <div className="flex items-center text-sm">
                    <span className={`flex items-center font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {Math.abs(trend)}%
                    </span>
                    <span className="text-gray-400 ml-2">{trendLabel || 'vs last month'}</span>
                </div>
            )}
        </Card>
    );
};

export default StatCard;
