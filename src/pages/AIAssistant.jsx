// AI Assistant Page
import React, { useState, useRef, useEffect } from 'react';
import { Mic } from 'lucide-react';

const AIAssistant = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your AI assistant. I can help you with analyzing trends, managing your catalog, pulling data insights, and much more. How can I assist you today?",
            sender: 'ai',
            timestamp: new Date(Date.now() - 60000)
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                text: generateAIResponse(inputMessage),
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const generateAIResponse = (userInput) => {
        const responses = {
            catalog: "I can help you manage your catalog. You can add, edit, or remove items, analyze product performance, and get recommendations for inventory optimization.",
            trends: "Based on recent data, I've noticed some interesting trends in your sales patterns. Would you like me to provide a detailed analysis?",
            data: "I have access to your comprehensive data. What specific metrics or insights would you like me to pull for you?",
            help: "I can assist with answering questions, analyzing trends, suggesting actions, pulling data, managing your catalog, and providing market insights. What would you like to explore?",
            default: "I understand. Let me help you with that. Could you provide more specific details about what you'd like to know or accomplish?"
        };

        const lowerInput = userInput.toLowerCase();
        if (lowerInput.includes('catalog') || lowerInput.includes('inventory')) return responses.catalog;
        if (lowerInput.includes('trend') || lowerInput.includes('pattern')) return responses.trends;
        if (lowerInput.includes('data') || lowerInput.includes('metric')) return responses.data;
        if (lowerInput.includes('help') || lowerInput.includes('what can you')) return responses.help;
        return responses.default;
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    const capabilities = [
        'Answer questions',
        'Analyze trends',
        'Suggest actions',
        'Pull data',
        'Manage catalog',
        'Market insights'
    ];

    return (
        <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto w-full md:w-1/2">
                <div className="w-full mb-4">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Assistant (Live Chat)</h1>
                    <p className="text-gray-600 dark:text-gray-400">Businesses can talk directly to THEIR AI.</p>
                </div>
                <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col flex-1 overflow-hidden h-full">
                    {/* Chat Messages Area */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 p-4 overflow-y-auto space-y-4"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-start gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                            >
                                {/* Avatar */}
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${message.sender === 'ai'
                                    ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                                    : 'bg-gradient-to-br from-green-500 to-teal-600'
                                    }`}>
                                    {message.sender === 'ai' ? '🤖' : '👤'}
                                </div>
                                {/* Message Bubble */}
                                <div className={`flex flex-col max-w-[70%] ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`rounded-2xl px-4 py-2.5 ${message.sender === 'ai'
                                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-sm'
                                        : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-sm'
                                        }`}>
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-1">
                                        {formatTime(message.timestamp)}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                                    🤖
                                </div>
                                <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-sm px-4 py-3">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    {/* Capabilities Bar */}
                    <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-medium">AI Capabilities:</div>
                        <div className="flex flex-wrap gap-2">
                            {capabilities.map((cap) => (
                                <span
                                    key={cap}
                                    className="px-2.5 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-xs text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 transition-colors cursor-default"
                                >
                                    {cap}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <div className="flex gap-3 items-center">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-full text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!inputMessage.trim()}
                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 dark:disabled:from-gray-600 dark:disabled:to-gray-700 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:transform-none shadow-lg disabled:shadow-none"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4 w-full md:w-1/2">
                <div className="relative w-32 h-32 flex items-center justify-center">
                    <button className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform z-10">
                        <Mic className="h-10 w-10 text-white" />
                    </button>
                    <div className="absolute inset-0 rounded-full bg-purple-300 opacity-50 animate-pulse"></div>
                    <div className="absolute inset-2 rounded-full bg-purple-400 opacity-70 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute inset-4 rounded-full bg-purple-500 opacity-90 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <div className="mt-4 text-gray-600 dark:text-gray-300">Click to speak</div>
            </div>
        </div>
    );
};

export default AIAssistant;
