import React, { useState } from 'react';
import {
    Search,
    Phone,
    Video,
    Info,
    MoreVertical,
    Smile,
    Paperclip,
    Send,
    Check,
    CheckCheck,
    Circle,
    Instagram,
    Facebook,
    Twitter,
    Linkedin,
    MessageCircle
} from 'lucide-react';

const Messages = () => {
    const [activeConversation, setActiveConversation] = useState(1);
    const [messageInput, setMessageInput] = useState('');

    // Dummy Data
    const conversations = [
        {
            id: 1,
            name: 'Sarah Wilson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastMessage: 'The AI suggestions for the new campaign look great! 🚀',
            time: '2m ago',
            unread: 2,
            status: 'online',
            platform: 'instagram'
        },
        {
            id: 2,
            name: 'Tech Support Bot',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastMessage: 'Ticket #4291 has been resolved automatically.',
            time: '1h ago',
            unread: 0,
            status: 'online',
            platform: 'facebook'
        },
        {
            id: 3,
            name: 'Marcus Chen',
            avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastMessage: 'Can we schedule a demo for the enterprise plan?',
            time: '3h ago',
            unread: 0,
            status: 'offline',
            platform: 'linkedin'
        },
        {
            id: 4,
            name: 'Emma Davis',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastMessage: 'Thanks for the quick update!',
            time: '1d ago',
            unread: 0,
            status: 'online',
            platform: 'whatsapp'
        },
        {
            id: 5,
            name: 'Alex Thompson',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastMessage: 'Is the API documentation updated?',
            time: '2d ago',
            unread: 0,
            status: 'offline',
            platform: 'twitter'
        }
    ];

    const messages = [
        {
            id: 1,
            senderId: 1,
            text: 'Hi there! I was looking at the analytics report.',
            time: '10:30 AM',
            isMe: false
        },
        {
            id: 2,
            senderId: 0, // Me
            text: 'Hello Sarah! Yes, the new AI-driven insights are pretty powerful. Did you notice the conversion trend?',
            time: '10:32 AM',
            isMe: true,
            status: 'read'
        },
        {
            id: 3,
            senderId: 1,
            text: 'Yes! That\'s exactly what I wanted to talk about. The prediction model seems very accurate.',
            time: '10:33 AM',
            isMe: false
        },
        {
            id: 4,
            senderId: 1,
            text: 'The AI suggestions for the new campaign look great! 🚀',
            time: '10:35 AM',
            isMe: false
        }
    ];

    // Social Media Logo Components
    const InstagramLogo = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
    );

    const FacebookLogo = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );

    const TwitterLogo = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );

    const LinkedInLogo = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );

    const WhatsAppLogo = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );

    const getPlatformConfig = (platform) => {
        const configs = {
            instagram: { icon: InstagramLogo, color: 'bg-gradient-to-br from-purple-500 to-pink-500', name: 'Instagram' },
            facebook: { icon: FacebookLogo, color: 'bg-blue-600', name: 'Facebook' },
            twitter: { icon: TwitterLogo, color: 'bg-black dark:bg-white', textColor: 'text-white dark:text-black', name: 'X' },
            linkedin: { icon: LinkedInLogo, color: 'bg-blue-700', name: 'LinkedIn' },
            whatsapp: { icon: WhatsAppLogo, color: 'bg-green-500', name: 'WhatsApp' }
        };
        return configs[platform] || configs.facebook;
    };

    const activeChat = conversations.find(c => c.id === activeConversation);

    return (
        <div className="h-[calc(100vh-6rem)] flex flex-col">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Messages</h1>
                <p className="text-gray-600 dark:text-gray-400">Manage your conversations and AI interactions.</p>
            </div>

            <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden flex">
                {/* Sidebar */}
                <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        {conversations.map((chat) => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveConversation(chat.id)}
                                className={`p-4 flex items-center gap-3 cursor-pointer transition-colors border-l-2 ${activeConversation === chat.id
                                    ? 'bg-white dark:bg-gray-800 border-blue-500'
                                    : 'hover:bg-gray-100 dark:hover:bg-gray-800/50 border-transparent'
                                    }`}
                            >
                                <div className="relative">
                                    <img
                                        src={chat.avatar}
                                        alt={chat.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    {chat.status === 'online' && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <div className="flex items-center gap-2 flex-1 min-w-0">
                                            {(() => {
                                                const platformConfig = getPlatformConfig(chat.platform);
                                                const PlatformIcon = platformConfig.icon;
                                                return (
                                                    <div className={`${platformConfig.color} ${platformConfig.textColor || 'text-white'} px-2 py-1 rounded-md flex items-center gap-1 flex-shrink-0`}>
                                                        <PlatformIcon />
                                                    </div>
                                                );
                                            })()}
                                            <h3 className={`text-sm font-semibold truncate ${activeConversation === chat.id ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                                                }`}>
                                                {chat.name}
                                            </h3>
                                        </div>
                                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{chat.time}</span>
                                    </div>
                                    <p className={`text-xs truncate ${chat.unread > 0
                                        ? 'text-gray-900 dark:text-white font-medium'
                                        : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {chat.lastMessage}
                                    </p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="w-5 h-5 bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                        {chat.unread}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col bg-white dark:bg-gray-800">
                    {/* Chat Header */}
                    <div className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <img
                                    src={activeChat?.avatar}
                                    alt={activeChat?.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                {activeChat?.status === 'online' && (
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                )}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    {activeChat && (() => {
                                        const platformConfig = getPlatformConfig(activeChat.platform);
                                        const PlatformIcon = platformConfig.icon;
                                        return (
                                            <div className={`${platformConfig.color} ${platformConfig.textColor || 'text-white'} px-2.5 py-1 rounded-md flex items-center gap-1.5 text-xs font-medium`}>
                                                <PlatformIcon />
                                                <span>{platformConfig.name}</span>
                                            </div>
                                        );
                                    })()}
                                    <h2 className="text-sm font-bold text-gray-900 dark:text-white">{activeChat?.name}</h2>
                                </div>
                                <p className="text-xs text-green-500 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-400">
                            <button className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <Phone className="w-5 h-5" />
                            </button>
                            <button className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <Video className="w-5 h-5" />
                            </button>
                            <button className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                                <Info className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages List */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30 dark:bg-gray-900/10">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex max-w-[70%] ${msg.isMe ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                                    {!msg.isMe && (
                                        <img
                                            src={activeChat?.avatar}
                                            alt={activeChat?.name}
                                            className="w-8 h-8 rounded-full object-cover mt-1"
                                        />
                                    )}
                                    <div>
                                        <div
                                            className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.isMe
                                                ? 'bg-blue-600 text-white rounded-tr-none'
                                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-600'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <div className={`flex items-center gap-1 mt-1 text-[10px] text-gray-400 ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                                            <span>{msg.time}</span>
                                            {msg.isMe && (
                                                msg.status === 'read' ? <CheckCheck className="w-3 h-3 text-blue-500" /> : <Check className="w-3 h-3" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <div className="flex items-center gap-3">
                            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                                <Paperclip className="w-5 h-5" />
                            </button>
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full pl-4 pr-10 py-3 bg-gray-100 dark:bg-gray-900 border-transparent focus:bg-white dark:focus:bg-gray-800 border focus:border-blue-500 rounded-full text-sm focus:outline-none transition-all"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>
                            <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20 transition-all transform hover:scale-105 active:scale-95">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
