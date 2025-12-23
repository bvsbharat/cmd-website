import React, { useState } from 'react';
import { 
  Terminal, 
  Shield, 
  Cpu, 
  Zap, 
  Book, 
  Mic, 
  Bot, 
  Lock, 
  Eye, 
  Brain, 
  ChevronRight,
  Code,
  Download,
  Info
} from 'lucide-react';

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    icon: Book,
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Commander is an agentic AI assistant designed specifically for macOS. Unlike traditional chatbots, Commander is deeply integrated into the operating system, allowing it to perform real actions like sending emails, managing files, and controlling system settings through voice and vision.
        </p>
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-2xl p-6 flex gap-4">
          <Info className="w-6 h-6 text-brand-accent shrink-0" />
          <p className="text-sm text-gray-700">
            <strong>Pro Tip:</strong> Use <kbd className="bg-white px-1.5 py-0.5 rounded border shadow-sm font-mono text-xs">Cmd + Shift + C</kbd> to activate Commander from anywhere.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'installation',
    title: 'Getting Started',
    icon: Download,
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold">Installation</h3>
        <p className="text-gray-600">The easiest way to install Commander is via Homebrew:</p>
        <div className="bg-black rounded-xl p-4 font-mono text-sm text-white group relative">
          <code className="text-brand-accent">$</code> brew tap bvsbharat/commander && brew install --cask commander
        </div>
        <h3 className="text-xl font-bold mt-8">First Run</h3>
        <p className="text-gray-600">
          On first launch, macOS will ask for Accessibility and Screen Recording permissions. These are required for Commander to "see" your screen and perform actions.
        </p>
      </div>
    )
  },
  {
    id: 'features',
    title: 'Core Features',
    icon: Zap,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
          <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-blue-500">
            <Bot className="w-6 h-6" />
          </div>
          <h4 className="font-bold mb-2">Agentic Execution</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Commander translates natural language into executable Shell or AppleScripts, automating multi-step workflows.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 text-amber-500">
            <Eye className="w-6 h-6" />
          </div>
          <h4 className="font-bold mb-2">Visual Intelligence</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Using OCR and Vision models, Commander can summarize long documents or explain code errors currently visible on your screen.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
          <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-purple-500">
            <Brain className="w-6 h-6" />
          </div>
          <h4 className="font-bold mb-2">Long-term Memory</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Remembers key context like people you frequently email, active projects, and your workspace preferences.
          </p>
        </div>
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
          <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-green-500">
            <Mic className="w-6 h-6" />
          </div>
          <h4 className="font-bold mb-2">Offline Voice</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            High-accuracy transcription using local Whisper models. Your voice never leaves your device.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    icon: Shield,
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <Lock className="w-6 h-6 text-gray-400 shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Subprocess Sandboxing</h4>
            <p className="text-sm text-gray-600">
              All shell commands are executed in a temporary, isolated sandbox. Destructive commands require manual confirmation.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <Cpu className="w-6 h-6 text-gray-400 shrink-0" />
          <div>
            <h4 className="font-bold mb-1">Local Processing</h4>
            <p className="text-sm text-gray-600">
              Where possible, tasks are handled by local ML models. Sensitive data stays on your Mac.
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      {/* Sidebar Nav */}
      <aside className="lg:w-64 shrink-0">
        <nav className="sticky top-32 space-y-1">
          <h2 className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest px-4 mb-4">Documentation</h2>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeSection === section.id 
                  ? 'bg-black text-white shadow-lg shadow-black/5' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-black'
              }`}
            >
              <section.icon className={`w-4 h-4 ${activeSection === section.id ? 'text-brand-accent' : 'opacity-60'}`} />
              {section.title}
              {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-auto opacity-40" />}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 max-w-3xl">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`${activeSection === section.id ? 'block' : 'hidden'} animate-in fade-in slide-in-from-bottom-4 duration-500`}
          >
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-brand-accent">
                  <section.icon className="w-6 h-6" />
                </div>
                <div>
                   <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Chapter {sections.findIndex(s => s.id === section.id) + 1}</span>
                   <h1 className="text-4xl font-sans font-black tracking-tight text-black">{section.title}</h1>
                </div>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>
            
            <div className="prose prose-slate max-w-none">
              {section.content}
            </div>

            {/* Next Chapter Link */}
            {sections.findIndex(s => s.id === section.id) < sections.length - 1 && (
              <button 
                onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === section.id) + 1].id)}
                className="mt-16 flex items-center justify-between w-full p-6 border-2 border-dashed border-gray-200 rounded-3xl group hover:border-black transition-colors"
              >
                <div className="text-left">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Next Chapter</span>
                  <div className="text-xl font-bold text-gray-400 group-hover:text-black transition-colors">
                    {sections[sections.findIndex(s => s.id === section.id) + 1].title}
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};