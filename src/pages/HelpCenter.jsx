import React, { useState } from 'react';
import { Search, BookOpen, Video, MessageCircle, Mail, FileText, Lightbulb, Zap, Settings, ShoppingCart, Bot, TrendingUp, ChevronDown, ChevronRight, Clock, ExternalLink } from 'lucide-react';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const categories = [
        {
            id: 'getting-started',
            name: 'Getting Started',
            icon: Lightbulb,
            description: 'Learn the basics',
            articleCount: 12,
            color: 'blue'
        },
        {
            id: 'ai-training',
            name: 'AI Training',
            icon: Bot,
            description: 'Train your AI assistant',
            articleCount: 8,
            color: 'purple'
        },
        {
            id: 'automations',
            name: 'Automations',
            icon: Zap,
            description: 'Workflow automation',
            articleCount: 15,
            color: 'yellow'
        },
        {
            id: 'catalog',
            name: 'Catalog Management',
            icon: ShoppingCart,
            description: 'Manage your products',
            articleCount: 10,
            color: 'green'
        },
        {
            id: 'insights',
            name: 'Insights & Analytics',
            icon: TrendingUp,
            description: 'Data analysis tools',
            articleCount: 9,
            color: 'indigo'
        },
        {
            id: 'settings',
            name: 'Settings & Account',
            icon: Settings,
            description: 'Configure your account',
            articleCount: 7,
            color: 'gray'
        }
    ];

    const articles = [
        {
            id: 1,
            title: 'Getting Started with AiR Dashboard',
            description: 'Learn how to navigate the dashboard and access key features',
            category: 'getting-started',
            readTime: '5 min',
            featured: true
        },
        {
            id: 2,
            title: 'How to Train Your AI Assistant',
            description: 'Step-by-step guide to training your AI with custom data',
            category: 'ai-training',
            readTime: '10 min',
            featured: true
        },
        {
            id: 3,
            title: 'Creating Your First Automation',
            description: 'Automate repetitive tasks with intelligent workflows',
            category: 'automations',
            readTime: '8 min',
            featured: true
        },
        {
            id: 4,
            title: 'Importing Products to Your Catalog',
            description: 'Bulk upload and manage your product inventory',
            category: 'catalog',
            readTime: '6 min',
            featured: true
        },
        {
            id: 5,
            title: 'Understanding Analytics Dashboard',
            description: 'Make data-driven decisions with insights and reports',
            category: 'insights',
            readTime: '7 min',
            featured: true
        },
        {
            id: 6,
            title: 'Setting Up Email Notifications',
            description: 'Configure alerts and notification preferences',
            category: 'settings',
            readTime: '4 min',
            featured: false
        },
        {
            id: 7,
            title: 'AI Response Customization',
            description: 'Personalize how your AI assistant responds to customers',
            category: 'ai-training',
            readTime: '12 min',
            featured: false
        },
        {
            id: 8,
            title: 'Advanced Automation Triggers',
            description: 'Set up complex conditional automation workflows',
            category: 'automations',
            readTime: '15 min',
            featured: false
        }
    ];

    const faqs = [
        {
            id: 1,
            category: 'General',
            question: 'What is AiR Dashboard?',
            answer: 'AiR Dashboard is an AI-powered platform that helps you manage your e-commerce operations, automate workflows, train custom AI assistants, and gain actionable insights from your data.'
        },
        {
            id: 2,
            category: 'AI Training',
            question: 'How long does it take to train my AI?',
            answer: 'Initial AI training typically takes 5-10 minutes depending on the amount of data provided. The AI continues to learn and improve over time as it processes more interactions.'
        },
        {
            id: 3,
            category: 'AI Training',
            question: 'Can I update my AI training data?',
            answer: 'Yes! You can update your AI training data at any time through the AI Training page. Simply add new documents, FAQs, or brand guidelines, and the AI will incorporate the new information.'
        },
        {
            id: 4,
            category: 'Automations',
            question: 'How many automations can I create?',
            answer: 'The number of automations depends on your plan. Starter plans include up to 5 active automations, while Growth and higher plans support unlimited automations.'
        },
        {
            id: 5,
            category: 'Billing',
            question: 'Can I change my plan at any time?',
            answer: 'Absolutely! You can upgrade or downgrade your plan at any time from the Billing page. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle.'
        },
        {
            id: 6,
            category: 'Catalog',
            question: 'What file formats are supported for product imports?',
            answer: 'We support CSV, Excel (.xlsx), and JSON formats for product imports. You can also connect directly to Shopify, WooCommerce, or use our API for custom integrations.'
        },
        {
            id: 7,
            category: 'Security',
            question: 'How is my data protected?',
            answer: 'We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. All data is stored in secure, SOC 2 compliant data centers with regular security audits.'
        },
        {
            id: 8,
            category: 'Integration',
            question: 'What third-party integrations are available?',
            answer: 'AiR integrates with popular platforms including Shopify, WooCommerce, Stripe, Google Analytics, Mailchimp, Slack, and many more. Check the Marketplace for the full list of integrations.'
        }
    ];

    const videoTutorials = [
        {
            id: 1,
            title: 'Platform Overview',
            duration: '3:45',
            difficulty: 'Beginner',
            thumbnail: 'overview'
        },
        {
            id: 2,
            title: 'AI Training Walkthrough',
            duration: '8:20',
            difficulty: 'Intermediate',
            thumbnail: 'training'
        },
        {
            id: 3,
            title: 'Building Automations',
            duration: '12:15',
            difficulty: 'Intermediate',
            thumbnail: 'automations'
        },
        {
            id: 4,
            title: 'Advanced Analytics',
            duration: '6:30',
            difficulty: 'Advanced',
            thumbnail: 'analytics'
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleFaq = (id) => {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    const getCategoryColor = (color) => {
        const colors = {
            blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
            purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
            yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
            green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
            indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
            gray: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-600'
        };
        return colors[color] || colors.gray;
    };

    const getDifficultyColor = (difficulty) => {
        const colors = {
            Beginner: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
            Intermediate: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
            Advanced: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
        };
        return colors[difficulty] || colors.Beginner;
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Help & Training Center</h1>
                <p className="text-gray-600 dark:text-gray-400">Everything you need to master AiR Dashboard</p>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search for help articles, guides, FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all"
                />
            </div>

            {/* Categories */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`p-6 rounded-lg border-2 transition-all text-left group hover:shadow-lg ${selectedCategory === category.id
                                        ? getCategoryColor(category.color) + ' shadow-md'
                                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className={`p-3 rounded-lg ${selectedCategory === category.id ? '' : 'bg-gray-100 dark:bg-gray-700'} transition-colors`}>
                                        <Icon className={`w-6 h-6 ${selectedCategory === category.id ? '' : 'text-gray-600 dark:text-gray-400'}`} />
                                    </div>
                                    <span className={`text-sm px-2 py-1 rounded-full ${selectedCategory === category.id ? 'bg-white/50 dark:bg-black/20' : 'bg-gray-100 dark:bg-gray-700'} text-gray-600 dark:text-gray-400`}>
                                        {category.articleCount} articles
                                    </span>
                                </div>
                                <h3 className={`font-semibold mb-1 ${selectedCategory === category.id ? '' : 'text-gray-900 dark:text-white'}`}>
                                    {category.name}
                                </h3>
                                <p className={`text-sm ${selectedCategory === category.id ? 'opacity-90' : 'text-gray-600 dark:text-gray-400'}`}>
                                    {category.description}
                                </p>
                            </button>
                        );
                    })}
                </div>
                {selectedCategory !== 'all' && (
                    <button
                        onClick={() => setSelectedCategory('all')}
                        className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← View all categories
                    </button>
                )}
            </div>

            {/* Popular Articles */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {searchQuery ? 'Search Results' : selectedCategory !== 'all' ? 'Articles in this Category' : 'Popular Articles'}
                </h2>
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredArticles.map((article) => {
                            const category = categories.find(c => c.id === article.category);
                            return (
                                <div
                                    key={article.id}
                                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer group"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <span className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(category?.color || 'gray')}`}>
                                            {category?.name}
                                        </span>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Clock className="w-4 h-4 mr-1" />
                                            {article.readTime}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                                        Read article
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
                        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 dark:text-gray-400">No articles found matching your search</p>
                    </div>
                )}
            </div>

            {/* Video Tutorials */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Video Tutorials</h2>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                        View all
                        <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {videoTutorials.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                        >
                            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center">
                                <Video className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {video.duration}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {video.title}
                                </h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(video.difficulty)}`}>
                                    {video.difficulty}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {searchQuery ? 'Matching FAQs' : 'Frequently Asked Questions'}
                </h2>
                {filteredFaqs.length > 0 ? (
                    <div className="space-y-3">
                        {filteredFaqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                                                {faq.category}
                                            </span>
                                        </div>
                                        <h3 className="font-medium text-gray-900 dark:text-white">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {expandedFaq === faq.id && (
                                    <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
                        <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 dark:text-gray-400">No FAQs found matching your search</p>
                    </div>
                )}
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-gray-700 rounded-lg p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Still need help?</h2>
                    <p className="text-gray-600 dark:text-gray-400">Our support team is here to assist you</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Available 24/7</p>
                        <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">
                            Start chat
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Support</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Response in 2-4 hours</p>
                        <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:underline">
                            Send email
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-all cursor-pointer group">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Documentation</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Detailed guides</p>
                        <button className="text-sm text-green-600 dark:text-green-400 font-medium hover:underline">
                            View docs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
