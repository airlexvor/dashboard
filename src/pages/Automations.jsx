import React, { useState } from 'react';
import {
    Zap,
    Plus,
    MessageSquare,
    ShoppingCart,
    Users,
    Calendar,
    Settings,
    TrendingUp,
    Mail,
    Bell,
    PlayCircle,
    PauseCircle,
    Edit,
    Copy,
    Trash2,
    CheckCircle,
    AlertTriangle,
    Clock,
    X,
    Sparkles
} from 'lucide-react';
import Card from '../components/Card';
import SectionHeader from '../components/SectionHeader';

const Automations = () => {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newAutomation, setNewAutomation] = useState({
        name: '',
        description: '',
        template: null
    });
    const [automations, setAutomations] = useState([
        {
            id: 1,
            name: 'SMS Campaigns',
            description: 'Automated SMS marketing campaigns to engaged customers',
            icon: MessageSquare,
            enabled: true,
            lastRun: '2 hours ago',
            successRate: 94,
            totalRuns: 1250,
            color: 'blue'
        },
        {
            id: 2,
            name: 'AI Sales Follow-ups',
            description: 'Smart follow-up messages for potential leads',
            icon: TrendingUp,
            enabled: true,
            lastRun: '15 minutes ago',
            successRate: 87,
            totalRuns: 843,
            color: 'purple'
        },
        {
            id: 3,
            name: 'Abandoned Cart Recovery',
            description: 'Recover lost sales with personalized cart reminders',
            icon: ShoppingCart,
            enabled: true,
            lastRun: '1 hour ago',
            successRate: 68,
            totalRuns: 445,
            color: 'orange'
        },
        {
            id: 4,
            name: 'Lead Qualification',
            description: 'Automatically qualify and score incoming leads',
            icon: Users,
            enabled: false,
            lastRun: '5 days ago',
            successRate: 91,
            totalRuns: 234,
            color: 'green'
        },
        {
            id: 5,
            name: 'AI Customer Service',
            description: '24/7 automated customer support responses',
            icon: Bell,
            enabled: true,
            lastRun: '5 minutes ago',
            successRate: 96,
            totalRuns: 3420,
            color: 'pink'
        },
        {
            id: 6,
            name: 'Scheduled Campaigns',
            description: 'Time-based marketing campaigns and newsletters',
            icon: Calendar,
            enabled: true,
            lastRun: '3 hours ago',
            successRate: 89,
            totalRuns: 567,
            color: 'indigo'
        }
    ]);

    const templates = [
        {
            name: 'Welcome Series',
            description: 'Onboard new customers with a welcome email sequence',
            icon: Mail,
            color: 'blue'
        },
        {
            name: 'Win-Back Campaign',
            description: 'Re-engage inactive customers automatically',
            icon: TrendingUp,
            color: 'purple'
        },
        {
            name: 'Inventory Alert',
            description: 'Get notified when stock levels are low',
            icon: Bell,
            color: 'orange'
        },
        {
            name: 'Business Rules',
            description: 'Custom if-then automation rules',
            icon: Settings,
            color: 'green'
        },
        {
            name: 'Custom Workflow',
            description: 'Build your own automation from scratch',
            icon: Sparkles,
            color: 'indigo'
        }
    ];

    const handleCreateAutomation = () => {
        if (!newAutomation.name || !newAutomation.description) {
            alert('Please fill in all fields');
            return;
        }

        const template = templates.find(t => t.name === newAutomation.template) || templates[4];
        const newId = Math.max(...automations.map(a => a.id)) + 1;

        const automation = {
            id: newId,
            name: newAutomation.name,
            description: newAutomation.description,
            icon: template.icon,
            enabled: true,
            lastRun: 'Never',
            successRate: 0,
            totalRuns: 0,
            color: template.color
        };

        setAutomations([...automations, automation]);
        setShowCreateModal(false);
        setNewAutomation({ name: '', description: '', template: null });
    };

    const toggleAutomation = (id) => {
        setAutomations(automations.map(auto =>
            auto.id === id ? { ...auto, enabled: !auto.enabled } : auto
        ));
    };

    const handleTemplateSelect = (templateName) => {
        const template = templates.find(t => t.name === templateName);
        setNewAutomation({
            ...newAutomation,
            template: templateName,
            name: templateName !== 'Custom Workflow' ? templateName : '',
            description: templateName !== 'Custom Workflow' ? template.description : ''
        });
    };

    const getColorClasses = (color, type = 'bg') => {
        const colors = {
            blue: {
                bg: 'bg-blue-50 dark:bg-blue-900/20',
                border: 'border-blue-100 dark:border-blue-900/30',
                text: 'text-blue-600 dark:text-blue-400',
                icon: 'text-blue-600',
                gradient: 'from-blue-600 to-cyan-600'
            },
            purple: {
                bg: 'bg-purple-50 dark:bg-purple-900/20',
                border: 'border-purple-100 dark:border-purple-900/30',
                text: 'text-purple-600 dark:text-purple-400',
                icon: 'text-purple-600',
                gradient: 'from-purple-600 to-pink-600'
            },
            orange: {
                bg: 'bg-orange-50 dark:bg-orange-900/20',
                border: 'border-orange-100 dark:border-orange-900/30',
                text: 'text-orange-600 dark:text-orange-400',
                icon: 'text-orange-600',
                gradient: 'from-orange-600 to-red-600'
            },
            green: {
                bg: 'bg-green-50 dark:bg-green-900/20',
                border: 'border-green-100 dark:border-green-900/30',
                text: 'text-green-600 dark:text-green-400',
                icon: 'text-green-600',
                gradient: 'from-green-600 to-emerald-600'
            },
            pink: {
                bg: 'bg-pink-50 dark:bg-pink-900/20',
                border: 'border-pink-100 dark:border-pink-900/30',
                text: 'text-pink-600 dark:text-pink-400',
                icon: 'text-pink-600',
                gradient: 'from-pink-600 to-rose-600'
            },
            indigo: {
                bg: 'bg-indigo-50 dark:bg-indigo-900/20',
                border: 'border-indigo-100 dark:border-indigo-900/30',
                text: 'text-indigo-600 dark:text-indigo-400',
                icon: 'text-indigo-600',
                gradient: 'from-indigo-600 to-purple-600'
            }
        };
        return colors[color] || colors.blue;
    };

    const activeAutomations = automations.filter(a => a.enabled).length;
    const totalRuns = automations.reduce((sum, a) => sum + a.totalRuns, 0);
    const avgSuccessRate = Math.round(
        automations.reduce((sum, a) => sum + a.successRate, 0) / automations.length
    );

    return (
        <div className="max-w-7xl mx-auto">
            <SectionHeader
                title="Automations"
                description="Intelligent workflows that run your business on autopilot"
                action={
                    <button
                        onClick={() => setShowCreateModal(true)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Create Automation
                    </button>
                }
            />

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Active Automations</p>
                            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{activeAutomations}</p>
                        </div>
                        <div className="p-3 bg-blue-100 dark:bg-blue-800/30 rounded-xl">
                            <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-900/30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-1">Total Runs Today</p>
                            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{totalRuns.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-purple-100 dark:bg-purple-800/30 rounded-xl">
                            <PlayCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-100 dark:border-green-900/30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-1">Avg Success Rate</p>
                            <p className="text-3xl font-bold text-green-900 dark:text-green-100">{avgSuccessRate}%</p>
                        </div>
                        <div className="p-3 bg-green-100 dark:bg-green-800/30 rounded-xl">
                            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Example Rule Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-xl border border-green-100 dark:border-green-900/30 mb-8 shadow-sm">
                <div className="flex items-start">
                    <div className="p-2 bg-green-100 dark:bg-green-800/30 rounded-lg mr-4">
                        <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-green-900 dark:text-green-100 font-semibold mb-1">Example Workflow</h3>
                        <p className="text-green-800 dark:text-green-200 text-sm">
                            <span className="font-medium">If</span> inventory &lt; 20
                            <span className="mx-2">→</span>
                            <span className="font-medium">notify AiR</span>
                            <span className="mx-2">→</span>
                            auto-create "low stock urgency" message
                        </p>
                    </div>
                </div>
            </div>

            {/* Automation Templates */}
            <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Start Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {templates.map((template, index) => {
                        const colors = getColorClasses(template.color);
                        const Icon = template.icon;
                        return (
                            <div
                                key={index}
                                className={`${colors.bg} ${colors.border} p-5 rounded-xl border cursor-pointer hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 group`}
                            >
                                <div className={`p-3 bg-white dark:bg-gray-800 rounded-lg w-fit mb-3 group-hover:shadow-md transition-shadow`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>
                                <h3 className={`font-semibold ${colors.text} mb-1`}>{template.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Active Automations */}
            <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Automations</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {automations.map((automation) => {
                        const colors = getColorClasses(automation.color);
                        const Icon = automation.icon;

                        return (
                            <Card key={automation.id} className="relative overflow-hidden group hover:shadow-xl transition-all">
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 flex items-center gap-2">
                                    {automation.enabled ? (
                                        <span className="flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                            Active
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-xs font-medium">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                            Paused
                                        </span>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 ${colors.bg} rounded-xl`}>
                                            <Icon className={`w-6 h-6 ${colors.icon}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {automation.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {automation.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-gray-100 dark:border-gray-700">
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Success Rate</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">{automation.successRate}%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Runs</p>
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">{automation.totalRuns}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            Last Run
                                        </p>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{automation.lastRun}</p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => toggleAutomation(automation.id)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${automation.enabled
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${automation.enabled ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {automation.enabled ? 'Enabled' : 'Disabled'}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        </button>
                                        <button
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                            title="Duplicate"
                                        >
                                            <Copy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        </button>
                                        <button
                                            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Create Automation Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowCreateModal(false)}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        {/* Header */}
                        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-t-2xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/20 rounded-lg">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Create New Automation</h2>
                                        <p className="text-purple-100 text-sm">Build intelligent workflows in minutes</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Template Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    Choose a Template
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    {templates.map((template) => {
                                        const Icon = template.icon;
                                        const colors = getColorClasses(template.color);
                                        const isSelected = newAutomation.template === template.name;

                                        return (
                                            <button
                                                key={template.name}
                                                onClick={() => handleTemplateSelect(template.name)}
                                                className={`p-4 rounded-xl border-2 text-left transition-all ${isSelected
                                                    ? `${colors.border} ${colors.bg} shadow-lg scale-105`
                                                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-md'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white dark:bg-gray-800' : colors.bg}`}>
                                                        <Icon className={`w-5 h-5 ${colors.icon}`} />
                                                    </div>
                                                    <span className={`font-semibold text-sm ${isSelected ? colors.text : 'text-gray-700 dark:text-gray-300'
                                                        }`}>
                                                        {template.name}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    {template.description}
                                                </p>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Automation Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Automation Name *
                                </label>
                                <input
                                    type="text"
                                    value={newAutomation.name}
                                    onChange={(e) => setNewAutomation({ ...newAutomation, name: e.target.value })}
                                    placeholder="e.g., Welcome New Customers"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    value={newAutomation.description}
                                    onChange={(e) => setNewAutomation({ ...newAutomation, description: e.target.value })}
                                    placeholder="Describe what this automation will do..."
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                />
                            </div>

                            {/* Info Box */}
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-1">AI-Powered Setup</h4>
                                        <p className="text-xs text-blue-700 dark:text-blue-300">
                                            After creating, AiR will help you configure the workflow, set triggers, and define actions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-900/50 p-6 rounded-b-2xl border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-end gap-3">
                                <button
                                    onClick={() => setShowCreateModal(false)}
                                    className="px-5 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateAutomation}
                                    className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    <Zap className="w-4 h-4" />
                                    Create Automation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Automations;
