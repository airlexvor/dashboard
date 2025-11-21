import React, { useState } from 'react';
import {
    Layout,
    PenTool,
    FileText,
    MessageSquare,
    Mail,
    Video,
    Search,
    Plus,
    Clock,
    MoreHorizontal,
    Sparkles,
    CheckCircle,
    Loader2,
    X
} from 'lucide-react';

const ContentStudio = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [projects, setProjects] = useState([
        { id: 1, title: 'Summer Sale Instagram Captions', type: 'Social Post', date: '2 mins ago', status: 'Completed' },
        { id: 2, title: 'Q3 Marketing Strategy Blog', type: 'Blog Article', date: '1 hour ago', status: 'Draft' },
        { id: 3, title: 'Welcome Email Sequence', type: 'Email', date: 'Yesterday', status: 'Completed' },
    ]);

    const templates = [
        { id: 'social', title: 'Social Media Post', icon: MessageSquare, color: 'bg-blue-500', desc: 'Generate engaging captions for Instagram, Twitter, and LinkedIn.' },
        { id: 'blog', title: 'Blog Article', icon: FileText, color: 'bg-purple-500', desc: 'Write SEO-optimized blog posts and articles.' },
        { id: 'ad', title: 'Ad Copy', icon: PenTool, color: 'bg-orange-500', desc: 'High-converting copy for Facebook, Google, and Instagram ads.' },
        { id: 'email', title: 'Email Newsletter', icon: Mail, color: 'bg-green-500', desc: 'Create professional newsletters and email sequences.' },
        { id: 'video', title: 'Video Script', icon: Video, color: 'bg-red-500', desc: 'Scripts for TikTok, Reels, and YouTube videos.' },
        { id: 'seo', title: 'SEO Keywords', icon: Search, color: 'bg-indigo-500', desc: 'Find high-ranking keywords for your niche.' },
    ];

    const filteredTemplates = activeTab === 'all'
        ? templates
        : templates.filter(t => t.id === activeTab || t.title.toLowerCase().includes(activeTab));

    const handleOpenModal = (template) => {
        setSelectedTemplate(template);
        setIsModalOpen(true);
    };

    const handleCreateProject = (newProject) => {
        setProjects([newProject, ...projects]);
        setIsModalOpen(false);
    };

    return (
        <div className="flex h-[calc(100vh-6rem)] -m-6 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col hidden md:flex">
                <div className="p-6">
                    <button
                        onClick={() => handleOpenModal(null)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <Plus size={20} />
                        New Project
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 space-y-1">
                    <SidebarItem icon={Layout} label="All Templates" active={activeTab === 'all'} onClick={() => setActiveTab('all')} />
                    <div className="pt-4 pb-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Categories</div>
                    <SidebarItem icon={MessageSquare} label="Social Media" active={activeTab === 'social'} onClick={() => setActiveTab('social')} />
                    <SidebarItem icon={FileText} label="Blog & Articles" active={activeTab === 'blog'} onClick={() => setActiveTab('blog')} />
                    <SidebarItem icon={PenTool} label="Ad Copy" active={activeTab === 'ad'} onClick={() => setActiveTab('ad')} />
                    <SidebarItem icon={Mail} label="Emails" active={activeTab === 'email'} onClick={() => setActiveTab('email')} />
                    <SidebarItem icon={Video} label="Video & Audio" active={activeTab === 'video'} onClick={() => setActiveTab('video')} />
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Studio</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Create, manage, and schedule your AI-generated content.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-y-auto p-6">

                    {/* Templates Grid */}
                    <section className="mb-10">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Sparkles className="text-yellow-500" size={20} />
                            Start Creating
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredTemplates.map((template) => (
                                <div
                                    key={template.id}
                                    onClick={() => handleOpenModal(template)}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
                                >
                                    <div className={`w-12 h-12 rounded-lg ${template.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <template.icon className={`text-${template.color.split('-')[1]}-600 dark:text-${template.color.split('-')[1]}-400`} size={24} />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{template.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{template.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Recent Projects */}
                    <section>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Clock className="text-blue-500" size={20} />
                            Recent Projects
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{project.title}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{project.type}</td>
                                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{project.date}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Completed'
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                                <button className="hover:text-blue-500 transition-colors">
                                                    <MoreHorizontal size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>

            {/* Creation Modal */}
            {isModalOpen && (
                <CreationModal
                    template={selectedTemplate}
                    onClose={() => setIsModalOpen(false)}
                    onCreate={handleCreateProject}
                />
            )}
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
    >
        <Icon size={18} />
        {label}
    </button>
);

const CreationModal = ({ template, onClose, onCreate }) => {
    const [step, setStep] = useState('input'); // input, generating, result
    const [topic, setTopic] = useState('');
    const [generatedContent, setGeneratedContent] = useState('');

    const handleGenerate = () => {
        if (!topic) return;
        setStep('generating');

        // Mock generation
        setTimeout(() => {
            setGeneratedContent(`Here is a generated ${template?.title || 'content'} about "${topic}".\n\n1. First engaging point about the topic.\n2. Second interesting fact or benefit.\n3. Call to action that drives conversion.`);
            setStep('result');
        }, 2000);
    };

    const handleSave = () => {
        onCreate({
            id: Date.now(),
            title: topic,
            type: template?.title || 'Custom Content',
            date: 'Just now',
            status: 'Completed'
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        {template?.icon && <template.icon className="text-blue-500" size={24} />}
                        {step === 'result' ? 'Content Ready!' : `New ${template?.title || 'Project'}`}
                    </h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                    {step === 'input' && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    What should this content be about?
                                </label>
                                <textarea
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    placeholder="E.g., A summer sale announcement for our new swimwear collection..."
                                    className="w-full h-32 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Tone of Voice
                                </label>
                                <select className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option>Professional</option>
                                    <option>Casual</option>
                                    <option>Excited</option>
                                    <option>Witty</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 'generating' && (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Generating Magic...</h4>
                            <p className="text-gray-500 dark:text-gray-400">Our AI is crafting the perfect content for you.</p>
                        </div>
                    )}

                    {step === 'result' && (
                        <div className="space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                                <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200 text-sm">
                                    {generatedContent}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 flex justify-end gap-3">
                    {step === 'input' && (
                        <>
                            <button onClick={onClose} className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                Cancel
                            </button>
                            <button
                                onClick={handleGenerate}
                                disabled={!topic}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Sparkles size={18} />
                                Generate
                            </button>
                        </>
                    )}

                    {step === 'result' && (
                        <>
                            <button onClick={() => setStep('input')} className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                Try Again
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
                            >
                                <CheckCircle size={18} />
                                Save Project
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContentStudio;
