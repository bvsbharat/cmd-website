import React, { useState, useEffect } from 'react';
import { enhanceText } from '../services/geminiService';
import { Terminal, RefreshCw, AlertCircle, Play, Mail, BookOpen, User, Eye, Sparkles, Brain, Bot, MousePointer, AppWindow } from 'lucide-react';

const scenarios = [
  {
    id: 'pitch',
    label: 'The Demo Pitch',
    icon: Sparkles,
    prompt: 'Open Gmail and draft a pitch email to the lead on my screen',
    context: 'Vision: Scanning CRM page in Chrome. Memory: Found "Alex Chen" as primary contact. Previous tone: Professional.',
    thought: 'Extracting Alex\'s bio... Opening Gmail.app... Structuring a value-driven pitch based on their recent series A...',
    isFeatured: true
  },
  {
    id: 'email',
    label: 'Quick Write',
    icon: Mail,
    prompt: 'Write an email to Sarah about our launch',
    context: 'Memory: Sarah is the Head of Growth. We worked on the landing page yesterday.',
    thought: 'Accessing Contacts... Retrieving project context... Drafting in Mail.app',
    isFeatured: false
  },
  {
    id: 'notes',
    label: 'Live Notes',
    icon: BookOpen,
    prompt: 'Open notes and summarize my current screen',
    context: 'Vision: Viewing a draft proposal in Safari.app.',
    thought: 'OCR scanning active... Extracting key points... Appending to Apple Notes',
    isFeatured: false
  },
  {
    id: 'system',
    label: 'Deep Focus',
    icon: User,
    prompt: 'Hide desktop and turn on focus mode',
    context: 'Memory: User prefers 80% opacity and Blue tint for focus sessions.',
    thought: 'Toggling Finder icons... Triggering FocusMode.overlay... Silencing notifications',
    isFeatured: false
  }
];

export const Demo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [output, setOutput] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showJarvisLayer, setShowJarvisLayer] = useState(false);

  const handleExecute = async () => {
    setLoading(true);
    setError(null);
    setShowJarvisLayer(true);
    try {
      const result = await enhanceText(activeScenario.prompt);
      setOutput(result);
    } catch (err) {
      setError("Agent error. Check internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo-section" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-brand-accent tracking-widest uppercase mb-4 font-mono">Real-world AI Action</h2>
          <h3 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight mb-6">Jarvis for your Mac</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            SuperAgents doesn't just talk. It sees what you see, remembers what you know, and operates your apps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sidebar Scenarios */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">Agent Scenarios</p>
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => { setActiveScenario(s); setOutput(null); setShowJarvisLayer(false); }}
                className={`w-full flex items-center gap-4 p-5 rounded-2xl transition-all border ${
                  activeScenario.id === s.id 
                    ? 'bg-brand-accent/15 border-brand-accent text-brand-accent shadow-[0_0_20px_rgba(255,179,64,0.1)]' 
                    : 'bg-white/5 border-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeScenario.id === s.id ? 'bg-brand-accent/20' : 'bg-white/5'}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-sm block leading-none mb-1">{s.label}</span>
                  {s.isFeatured && <span className="text-[10px] uppercase opacity-60 font-mono">Power Demo</span>}
                </div>
              </button>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/10">
               <div className="flex items-center gap-3 text-brand-accent mb-4">
                 <Brain className="w-5 h-5" />
                 <span className="text-xs font-bold uppercase tracking-widest">Memory Context</span>
               </div>
               <p className="text-xs text-gray-400 leading-relaxed font-mono">
                 [DATABASE_SCAN]: User context loaded. Sarah (Growth), Alex (Sales Lead), Preferred focus: 80% opacity.
               </p>
            </div>
          </div>

          {/* Main Demo Console */}
          <div className="lg:col-span-8">
            <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-1 shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="bg-[#111111] rounded-[2.2rem] overflow-hidden">
                {/* Console Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                    </div>
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">SuperAgents System Interface</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                       <Eye className={`w-4 h-4 transition-colors ${loading ? 'text-brand-accent' : 'text-gray-700'}`} />
                       <span className="text-[9px] font-mono text-gray-700">VISION</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <Brain className={`w-4 h-4 transition-colors ${loading ? 'text-blue-400' : 'text-gray-700'}`} />
                       <span className="text-[9px] font-mono text-gray-700">MEMORY</span>
                    </div>
                  </div>
                </div>

                {/* Console Content */}
                <div className="p-10 min-h-[480px] flex flex-col relative">
                  {/* User Request */}
                  <div className="flex items-start gap-5 mb-12">
                    <div className="w-12 h-12 rounded-[22%] bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                       <User className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
                       <p className="text-white text-xl font-medium tracking-tight">"{activeScenario.prompt}"</p>
                    </div>
                  </div>

                  {/* Jarvis Processing Layer */}
                  {showJarvisLayer && (
                    <div className="flex flex-col gap-6 mb-10 animate-in fade-in slide-in-from-left-4 duration-500">
                      <div className="flex items-center gap-3 text-brand-accent text-xs font-mono font-bold tracking-widest uppercase">
                        <Sparkles className="w-4 h-4 animate-spin-slow" />
                        Agent Thought Process
                      </div>
                      <div className="pl-8 space-y-4">
                        <div className="flex items-start gap-4 text-gray-400 text-sm border-l border-white/10 pl-6 py-1">
                          <Eye className="w-4 h-4 mt-0.5 text-brand-accent/60" />
                          <span className="font-mono">{activeScenario.context}</span>
                        </div>
                        <div className="flex items-start gap-4 text-gray-500 text-sm italic border-l border-white/10 pl-6 py-1">
                          <Terminal className="w-4 h-4 mt-0.5 text-blue-400/60" />
                          <span className="font-mono">{activeScenario.thought}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Agent Response */}
                  {output && !loading && (
                    <div className="animate-in zoom-in-95 duration-500 mt-auto">
                      <div className="bg-brand-accent/10 rounded-2xl p-8 border border-brand-accent/20 flex gap-6">
                        <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center shrink-0 shadow-lg shadow-brand-accent/20">
                          <Bot className="w-7 h-7 text-black" />
                        </div>
                        <div className="space-y-5 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-brand-accent font-bold text-xs uppercase tracking-widest">Action Structuring Complete</p>
                            <div className="px-2 py-0.5 bg-green-500/20 rounded text-[9px] text-green-400 font-bold border border-green-500/20">VERIFIED</div>
                          </div>
                          <div className="bg-black/60 rounded-xl p-5 border border-white/10 font-mono text-xs text-gray-300 relative group overflow-hidden">
                             <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                               <Terminal className="w-3 h-3" />
                             </div>
                             <span className="text-brand-accent">$</span> {output.cmd}
                          </div>
                          <div className="text-gray-300 text-base leading-relaxed font-sans">
                             {output.result}
                          </div>
                          <div className="flex gap-3 pt-2">
                             <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase">
                               <AppWindow className="w-3 h-3" />
                               Mail.app
                             </div>
                             <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase">
                               <MousePointer className="w-3 h-3" />
                               System Event
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {loading && (
                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                      <div className="relative">
                        <div className="w-24 h-24 border-2 border-brand-accent/20 rounded-full animate-ping absolute inset-0"></div>
                        <div className="w-24 h-24 border-b-2 border-brand-accent rounded-full animate-spin absolute inset-0"></div>
                        <Bot className="w-24 h-24 text-brand-accent p-4" />
                      </div>
                      <div className="text-center space-y-2">
                        <p className="text-brand-accent font-mono text-sm tracking-widest animate-pulse font-bold">REASONING...</p>
                        <p className="text-gray-600 font-mono text-[10px] uppercase">Integrating vision & memory buffers</p>
                      </div>
                    </div>
                  )}

                  {!loading && !output && (
                    <div className="mt-auto flex justify-center">
                      <button 
                        onClick={handleExecute}
                        className="group bg-brand-accent text-black px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-brand-accent/30 active:scale-95"
                      >
                        <Play className="w-5 h-5 fill-current" />
                        Test Pitch Workflow
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};