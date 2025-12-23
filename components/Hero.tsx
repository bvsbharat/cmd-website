import React, { useEffect, useState } from 'react';
import { 
  Terminal, Wifi, Battery, Bot, Sparkles, Play, Code, CheckCircle2, 
  Eye, Moon, Mail, User, MousePointer, AppWindow, Command, Globe, 
  Search, MoreVertical, Send, Paperclip, Image as ImageIcon, Smile, 
  Trash2, Lock, ChevronLeft, ChevronRight, RefreshCw 
} from 'lucide-react';

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const TryItArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
    <path d="M80,10 Q60,10 40,40" />
    <path d="M35,30 L40,40 L50,35" />
  </svg>
);

const RotatingCircularText = () => (
  <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 opacity-[0.03] pointer-events-none select-none animate-spin-slow">
    <svg viewBox="0 0 200 200" className="w-[800px] h-[800px]">
      <path
        id="circlePath"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        fill="transparent"
      />
      <text className="font-sans text-[8px] uppercase tracking-[0.2em] font-bold fill-black">
        <textPath href="#circlePath">
          what's going on so can you tell me what's going on so can you tell me what's going on so can you tell me
        </textPath>
      </text>
    </svg>
  </div>
);

const ChromeGmailDraft = () => (
  <div className="w-[85%] max-w-2xl bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-500 pointer-events-auto">
    {/* Chrome Header */}
    <div className="h-10 bg-[#dee1e6] flex items-center px-3 gap-2">
      <div className="flex gap-1.5 shrink-0 mr-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div className="bg-white h-7 rounded-t-lg px-3 flex items-center gap-2 text-[10px] font-medium text-gray-700 min-w-[140px] shadow-sm">
        <Mail className="w-3 h-3 text-red-500" />
        <span className="truncate">Gmail - Draft Pitch</span>
      </div>
      <div className="w-5 h-5 flex items-center justify-center text-gray-500 hover:bg-gray-300 rounded cursor-default">+</div>
    </div>
    {/* Address Bar */}
    <div className="h-9 bg-white border-b border-gray-200 flex items-center px-4 gap-4">
      <div className="flex gap-3 text-gray-400">
        <ChevronLeft className="w-3 h-3" />
        <ChevronRight className="w-3 h-3 opacity-30" />
        <RefreshCw className="w-3 h-3" />
      </div>
      <div className="flex-1 bg-[#f1f3f4] h-6 rounded-full flex items-center px-4 gap-2 text-[10px] text-gray-500">
        <Lock className="w-2.5 h-2.5 text-green-600" />
        <span>mail.google.com/u/0/#drafts</span>
      </div>
    </div>
    {/* Gmail Content */}
    <div className="p-6 bg-white min-h-[300px]">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <h2 className="text-lg font-bold text-gray-800">New Message</h2>
        <div className="flex gap-3 text-gray-400">
          <Trash2 className="w-4 h-4" />
          <MoreVertical className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex gap-4 text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-400 font-medium w-12">To:</span>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium text-gray-700">Alex Chen &lt;alex@chen.com&gt;</span>
        </div>
        <div className="flex gap-4 text-sm border-b border-gray-100 pb-2">
          <span className="text-gray-400 font-medium w-12">Subject:</span>
          <span className="text-gray-800 font-medium">Drafting our pitch regarding Series A...</span>
        </div>
        <div className="py-4 text-sm text-gray-700 leading-relaxed font-sans">
          <p className="mb-4">Hi Alex,</p>
          <p className="mb-4">I noticed your recent announcement regarding the Series A funding and wanted to reach out. We've been following your progress and believe there's a great synergy between our platforms...</p>
          <p>Best,<br/>Commander AI Assistant</p>
        </div>
      </div>
      {/* Action Bar */}
      <div className="mt-8 flex items-center gap-4 pt-4 border-t border-gray-100">
        <button className="bg-[#1a73e8] text-white px-6 py-2 rounded-md font-bold text-xs flex items-center gap-2 hover:bg-blue-600 transition-colors">
          Send <Send className="w-3 h-3" />
        </button>
        <div className="flex gap-4 text-gray-500">
          <Paperclip className="w-4 h-4" />
          <ImageIcon className="w-4 h-4" />
          <Smile className="w-4 h-4" />
        </div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [focusMode, setFocusMode] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  
  const commands = [
    { 
      prompt: "Open Gmail and draft a pitch email to Alex", 
      cmd: "open -a 'Google Chrome' --args 'https://mail.google.com'", 
      output: "Drafted personalized pitch for Alex Chen in Gmail.", 
      icon: Mail,
      action: () => { setFocusMode(false); setShowIcons(true); } 
    },
    { 
      prompt: "Hide my desktop icons", 
      cmd: "killall Finder", 
      output: "Desktop clutter hidden. Focus mode prepared.", 
      icon: AppWindow,
      action: () => setShowIcons(false) 
    },
    { 
      prompt: "Enter deep work mode", 
      cmd: "open -a 'Commander' --focus", 
      output: "Distractions silenced. Desktop tint applied.", 
      icon: Command,
      action: () => setFocusMode(true) 
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((p) => {
        const next = (p + 1) % 4;
        if (next === 3) commands[currentIdx].action();
        return next;
      });
      if (phase === 3) setCurrentIdx((i) => (i + 1) % commands.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [phase, currentIdx]);

  return (
    <section className="relative pt-32 pb-32 px-4 flex flex-col items-center overflow-hidden">
      
      {/* Background Decorative Wallpaper Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-100/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-100/20 blur-[100px] rounded-full"></div>
        <RotatingCircularText />
      </div>

      {/* Central Brand Identity */}
      <div className="flex flex-col items-center mb-4 text-center max-w-xl relative z-10">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-xl bg-black shadow-xl flex items-center justify-center relative z-10 select-none">
            <span className="text-white font-mono font-bold text-4xl mt-[-4px]">&gt;_</span>
          </div>
          <div className="absolute inset-0 bg-brand-accent/30 blur-2xl rounded-full scale-150 -z-10"></div>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-hand text-black mb-4 select-none tracking-tight">
          commander
        </h1>
        
        <p className="text-lg text-gray-500 mb-8 font-medium">
          Your personal Jarvis for macOS.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 relative z-10">
          <button className="bg-black text-white px-8 py-3.5 rounded-2xl flex items-center gap-3 font-bold text-sm shadow-xl hover:scale-105 transition-transform active:scale-95">
             <AppleLogo className="w-4 h-4" />
             Download now
          </button>
        </div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">macOS 14.0+ • UNIVERSAL APP</span>
      </div>

      {/* Main Feature: macOS Window Simulation */}
      <div className="relative w-full max-w-5xl perspective-1000 mt-2 group z-20">
          
          <div className="absolute top-[-80px] left-[55%] hidden md:flex flex-col items-start pointer-events-none z-[60]">
             <span className="font-hand text-2xl text-slate-700 ml-12 rotate-[5deg] whitespace-nowrap">Try it now!</span>
             <TryItArrow className="w-20 h-12 text-gray-300 -mt-2 -ml-2" />
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10 aspect-[16/10] ring-1 ring-white/5">
              
              {/* Wallpaper - macOS High Quality Texture */}
              <div className="absolute inset-0 -z-10 transition-all duration-1000 overflow-hidden">
                <img 
                  src="https://dynamicwallpaper.club/landing-vids/1.png" 
                  alt="macOS Wallpaper" 
                  className="w-full h-full object-cover opacity-90"
                />
                
                {/* Surface Grain for texture */}
                <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
              </div>

              {/* Desktop Icons */}
              <div className={`absolute inset-0 p-12 transition-all duration-1000 z-10 ${showIcons ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="grid grid-cols-1 gap-8 w-24">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 group/icon">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/10 flex items-center justify-center transition-transform hover:scale-110 cursor-default">
                        <div className="w-6 h-6 rounded bg-white/20"></div>
                      </div>
                      <div className="w-8 h-1.5 bg-white/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Focus Mode Overlay */}
              <div className={`absolute inset-0 bg-black/50 backdrop-blur-3xl z-30 transition-opacity duration-1000 flex items-center justify-center pointer-events-none ${focusMode ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="text-white font-sans text-4xl font-light opacity-40 flex flex-col items-center gap-6 animate-pulse tracking-widest">
                    <Moon className="w-20 h-20 mb-2" strokeWidth={1} />
                    ZEN MODE
                 </div>
              </div>

              {/* Menu Bar */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-4 bg-white/10 backdrop-blur-2xl z-40 border-b border-white/5">
                 <div className="flex items-center gap-3 text-white text-[11px] font-bold">
                    <AppleLogo className="w-3 h-3 fill-current" />
                    <span>Commander</span>
                    <span className="opacity-40 font-medium">File</span>
                    <span className="opacity-40 font-medium">Agent</span>
                    <span className="opacity-40 font-medium">Window</span>
                 </div>
                 <div className="flex items-center gap-4 text-white text-[11px] font-bold">
                    <Wifi className="w-3.5 h-3.5" />
                    <div className="flex items-center gap-1">
                      <Battery className="w-3.5 h-3.5 rotate-90" />
                      <span className="text-[9px]">84%</span>
                    </div>
                    <span className="opacity-70">Mon 10:24 AM</span>
                 </div>
              </div>

              {/* Interaction Notch (Dynamic Island) - SLIM & TRANSCRIPT FOCUS */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
                  <div className={`bg-black rounded-b-[1.75rem] px-5 py-2.5 flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all justify-center border-x border-b border-white/10 ${phase === 1 || phase === 2 ? 'min-w-[400px]' : 'min-w-[120px]'}`}>
                      <div className="w-7 h-7 rounded-lg bg-brand-accent/20 flex items-center justify-center border border-brand-accent/30 shadow-inner shrink-0">
                         <Bot className={`w-4 h-4 text-brand-accent ${phase === 1 || phase === 2 ? 'animate-pulse' : ''}`} />
                      </div>
                      
                      <div className="flex items-center justify-start flex-1 overflow-hidden">
                          {phase === 0 && (
                            <div className="flex items-center gap-1.5 opacity-20">
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                            </div>
                          )}
                          
                          {(phase === 1 || phase === 2) && (
                            <div className="flex items-center gap-3 w-full animate-in fade-in duration-300 overflow-hidden">
                                <div className="flex-1 overflow-hidden">
                                  <p className="text-white/90 font-sans font-medium text-[10px] tracking-tight truncate leading-tight">
                                    {phase === 1 ? commands[currentIdx].prompt : "Analyzing system state..."}
                                  </p>
                                </div>
                                {phase === 1 && (
                                  <div className="flex items-center gap-1 h-3 shrink-0 pr-1">
                                    {[0.3, 0.8, 0.4, 0.6, 0.2].map((h, i) => (
                                        <div key={i} className="w-[1.5px] bg-brand-accent rounded-full animate-bounce" 
                                          style={{
                                            height: `${h * 10}px`,
                                            animationDelay: `${i * 0.1}s`
                                          }}
                                        ></div>
                                    ))}
                                  </div>
                                )}
                                {phase === 2 && <Sparkles className="w-3 h-3 text-brand-accent shrink-0 animate-pulse" />}
                            </div>
                          )}

                          {phase === 3 && (
                            <div className="flex items-center gap-2 text-green-400 animate-in zoom-in-50 duration-300">
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-[9px] font-mono font-bold tracking-widest uppercase opacity-60">Verified</span>
                            </div>
                          )}
                      </div>
                  </div>
              </div>

              {/* Central Window Display (for Chrome/Gmail) */}
              <div className="absolute inset-0 flex items-center justify-center pt-16 z-30 pointer-events-none">
                 {phase === 3 && currentIdx === 0 && <ChromeGmailDraft />}
              </div>

              {/* Automation Action Result at the Bottom */}
              <div className="absolute bottom-12 left-0 right-0 px-12 z-40">
                  <div className={`mx-auto max-w-lg bg-black/40 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center p-4 gap-5 transition-all duration-700 transform ${phase === 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-lg">
                        {React.createElement(commands[currentIdx].icon, { className: "w-6 h-6 text-brand-accent" })}
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] font-mono font-black text-white/40 uppercase tracking-widest">Action Performed</span>
                          <span className="text-[9px] font-mono font-bold text-brand-accent/60 truncate max-w-[120px] font-mono">$ {commands[currentIdx].cmd.substring(0, 30)}...</span>
                        </div>
                        <p className="text-white font-sans font-bold text-sm tracking-tight leading-none truncate">
                          {commands[currentIdx].output}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                  </div>
              </div>

              {/* Simplified Central Indicator */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${phase === 1 ? 'opacity-20' : 'opacity-0'}`}>
                 <div className="w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px] animate-pulse"></div>
              </div>
          </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}} />

      {/* Narrative Section */}
      <div className="max-w-5xl w-full text-center mt-24 mb-32 space-y-12 relative z-10">
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-2xl text-gray-700 font-bold leading-relaxed tracking-tight">An assistant that works in the background, executing native commands with the flick of a voice.</p>
          </div>
          
          <div className="absolute bottom-0 right-0 md:mb-[-40px] hidden md:block select-none pointer-events-none transform hover:rotate-[5deg] transition-transform duration-700">
             <div className="font-hand text-4xl md:text-5xl text-black leading-tight">
               Agentic AI.<br/>
               <span className="ml-8 italic text-slate-400 underline decoration-brand-accent/50 underline-offset-8">Not just chat.</span>
             </div>
          </div>
      </div>
    </section>
  );
};