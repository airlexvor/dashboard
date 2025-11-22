import React, { useState } from 'react';

const AITraining = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const [trainingData, setTrainingData] = useState({
        brandVoice: { tone: '', values: '', personality: '', completed: false },
        businessBio: { name: '', description: '', tagline: '', mission: '', completed: false },
        products: { items: '', services: '', pricing: '', completed: false },
        faqs: { questions: '', completed: false },
        responseRules: { dos: '', donts: '', restrictions: '', completed: false },
        knowledgeDocs: { files: [], completed: false },
        objectionHandling: { objections: '', completed: false }
    });

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const handleInputChange = (section, field, value) => {
        setTrainingData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleSave = (section) => {
        setTrainingData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                completed: true
            }
        }));
        alert(`${getSectionTitle(section)} saved successfully!`);
    };

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setTrainingData(prev => ({
            ...prev,
            knowledgeDocs: {
                files: [...prev.knowledgeDocs.files, ...files.map(f => f.name)],
                completed: files.length > 0
            }
        }));
    };

    const getSectionTitle = (section) => {
        const titles = {
            brandVoice: 'Brand Voice & Style',
            businessBio: 'Business Bio & Identity',
            products: 'Products + Service Details',
            faqs: 'FAQ Training',
            responseRules: 'Do/Don\'t Response Rules',
            knowledgeDocs: 'Upload Knowledge Docs',
            objectionHandling: 'Customer Objection Handling'
        };
        return titles[section];
    };

    const getCompletionPercentage = () => {
        const sections = Object.keys(trainingData);
        const completed = sections.filter(key => trainingData[key].completed).length;
        return Math.round((completed / sections.length) * 100);
    };

    const TrainingSection = ({ sectionKey, icon, title, description, children }) => {
        const isExpanded = expandedSection === sectionKey;
        const isCompleted = trainingData[sectionKey].completed;

        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all">
                <button
                    onClick={() => toggleSection(sectionKey)}
                    className="w-full p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                    <div className="flex items-center gap-4 flex-1 text-left">
                        <div className="text-2xl">{icon}</div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>
                        </div>
                        {isCompleted && (
                            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                                <span className="text-green-600 dark:text-green-400 text-sm font-medium">✓ Completed</span>
                            </div>
                        )}
                    </div>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isExpanded && (
                    <div className="p-5 pt-0 border-t border-gray-100 dark:border-gray-700">
                        {children}
                        <button
                            onClick={() => handleSave(sectionKey)}
                            className="mt-4 w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                        >
                            Save {title}
                        </button>
                    </div>
                )}
            </div>
        );
    };

    const completionPercentage = getCompletionPercentage();

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Training</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Train your AI assistant to represent your brand perfectly</p>
            </div>

            {/* Progress Overview */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-900/30">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <p className="text-purple-800 dark:text-purple-200 font-semibold text-lg">📚 Training Progress</p>
                        <p className="text-purple-600 dark:text-purple-300 text-sm mt-1">Complete all sections to fully train your AI</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-purple-700 dark:text-purple-300">{completionPercentage}%</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400">Complete</div>
                    </div>
                </div>
                <div className="w-full bg-purple-200 dark:bg-purple-900/40 rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-full transition-all duration-500 rounded-full"
                        style={{ width: `${completionPercentage}%` }}
                    />
                </div>
            </div>

            {/* Training Sections */}
            <div className="space-y-4">
                <TrainingSection
                    sectionKey="brandVoice"
                    icon="🎨"
                    title="Brand Voice & Style"
                    description="Define your brand's personality, tone, and communication style"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tone of Voice
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Friendly, Professional, Casual, Authoritative"
                                value={trainingData.brandVoice.tone}
                                onChange={(e) => handleInputChange('brandVoice', 'tone', e.target.value)}
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Brand Values
                            </label>
                            <textarea
                                placeholder="What are your core values? (e.g., Innovation, Customer-first, Sustainability)"
                                value={trainingData.brandVoice.values}
                                onChange={(e) => handleInputChange('brandVoice', 'values', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Personality Traits
                            </label>
                            <textarea
                                placeholder="How should your AI behave? (e.g., Helpful, empathetic, solution-oriented)"
                                value={trainingData.brandVoice.personality}
                                onChange={(e) => handleInputChange('brandVoice', 'personality', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="businessBio"
                    icon="🏢"
                    title="Business Bio & Identity"
                    description="Tell your AI about your company, mission, and what makes you unique"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Business Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your company name"
                                value={trainingData.businessBio.name}
                                onChange={(e) => handleInputChange('businessBio', 'name', e.target.value)}
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tagline
                            </label>
                            <input
                                type="text"
                                placeholder="Your catchy tagline or slogan"
                                value={trainingData.businessBio.tagline}
                                onChange={(e) => handleInputChange('businessBio', 'tagline', e.target.value)}
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Business Description
                            </label>
                            <textarea
                                placeholder="What does your business do? Who do you serve?"
                                value={trainingData.businessBio.description}
                                onChange={(e) => handleInputChange('businessBio', 'description', e.target.value)}
                                rows="4"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Mission Statement
                            </label>
                            <textarea
                                placeholder="What's your company's mission and vision?"
                                value={trainingData.businessBio.mission}
                                onChange={(e) => handleInputChange('businessBio', 'mission', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="products"
                    icon="📦"
                    title="Products + Service Details"
                    description="Teach your AI about what you offer, pricing, and key features"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Products/Services Overview
                            </label>
                            <textarea
                                placeholder="List your main products or services with brief descriptions"
                                value={trainingData.products.items}
                                onChange={(e) => handleInputChange('products', 'items', e.target.value)}
                                rows="5"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Key Features & Benefits
                            </label>
                            <textarea
                                placeholder="What are the standout features? What problems do they solve?"
                                value={trainingData.products.services}
                                onChange={(e) => handleInputChange('products', 'services', e.target.value)}
                                rows="4"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Pricing Information
                            </label>
                            <textarea
                                placeholder="Price ranges, packages, or pricing tiers"
                                value={trainingData.products.pricing}
                                onChange={(e) => handleInputChange('products', 'pricing', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="faqs"
                    icon="❓"
                    title="FAQ Training"
                    description="Add frequently asked questions and their answers"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Questions & Answers
                            </label>
                            <textarea
                                placeholder="Format: Q: Question here? A: Answer here. (Add multiple Q&A pairs, one per line)"
                                value={trainingData.faqs.questions}
                                onChange={(e) => handleInputChange('faqs', 'questions', e.target.value)}
                                rows="10"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Example: Q: Do you offer refunds? A: Yes, we offer a 30-day money-back guarantee.
                            </p>
                        </div>
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="responseRules"
                    icon="✅"
                    title="Do/Don't Response Rules"
                    description="Set boundaries and guidelines for AI responses"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                ✅ Things AI Should Do
                            </label>
                            <textarea
                                placeholder="e.g., Always greet warmly, Offer solutions proactively, Empathize with concerns"
                                value={trainingData.responseRules.dos}
                                onChange={(e) => handleInputChange('responseRules', 'dos', e.target.value)}
                                rows="4"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                ❌ Things AI Should NOT Do
                            </label>
                            <textarea
                                placeholder="e.g., Never make promises we can't keep, Avoid technical jargon, Don't discuss competitors"
                                value={trainingData.responseRules.donts}
                                onChange={(e) => handleInputChange('responseRules', 'donts', e.target.value)}
                                rows="4"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                🚫 Topic Restrictions
                            </label>
                            <textarea
                                placeholder="Topics the AI should avoid or redirect (e.g., political discussions, medical advice)"
                                value={trainingData.responseRules.restrictions}
                                onChange={(e) => handleInputChange('responseRules', 'restrictions', e.target.value)}
                                rows="3"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="knowledgeDocs"
                    icon="📄"
                    title="Upload Knowledge Docs"
                    description="Upload PDFs, docs, or files to train your AI on your content"
                >
                    <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                            <div className="text-4xl mb-3">📁</div>
                            <input
                                type="file"
                                multiple
                                onChange={handleFileUpload}
                                className="hidden"
                                id="file-upload"
                                accept=".pdf,.doc,.docx,.txt"
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer inline-block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                            >
                                Choose Files
                            </label>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                                PDF, DOC, DOCX, TXT accepted
                            </p>
                        </div>
                        {trainingData.knowledgeDocs.files.length > 0 && (
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Uploaded Files:</p>
                                {trainingData.knowledgeDocs.files.map((file, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="text-purple-600 dark:text-purple-400">📄</span>
                                        <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{file}</span>
                                        <span className="text-xs text-green-600 dark:text-green-400">✓</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </TrainingSection>

                <TrainingSection
                    sectionKey="objectionHandling"
                    icon="🛡️"
                    title="Customer Objection Handling"
                    description="Train your AI how to handle common objections and concerns"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Common Objections & Responses
                            </label>
                            <textarea
                                placeholder="Format: Objection: [Customer concern] → Response: [How to address it]"
                                value={trainingData.objectionHandling.objections}
                                onChange={(e) => handleInputChange('objectionHandling', 'objections', e.target.value)}
                                rows="8"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Example: Objection: &quot;It&apos;s too expensive&quot; → Response: &quot;I understand budget is important. Let me show you our payment plans and the ROI you&apos;ll see...&quot;
                            </p>
                        </div>
                    </div>
                </TrainingSection>
            </div>

            {/* Bottom Action */}
            {completionPercentage === 100 && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-900/30 text-center">
                    <div className="text-4xl mb-3">🎉</div>
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                        Training Complete!
                    </h3>
                    <p className="text-green-700 dark:text-green-300 mb-4">
                        Your AI is now fully trained and ready to represent your brand.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                        Test Your AI Assistant →
                    </button>
                </div>
            )}
        </div>
    );
};

export default AITraining;
