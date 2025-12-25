import React, { useEffect, useState } from 'react';
import { 
  Terminal, Wifi, Battery, Bot, Sparkles, CheckCircle2, 
  Moon, Mail, AppWindow, Command, Globe, 
  Lock, ChevronLeft, ChevronRight, RefreshCw, 
  Send, Paperclip, Image as ImageIcon, Smile, 
  Trash2, FileText, Folder, FileImage,
  MoreVertical
} from 'lucide-react';

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const CommanderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="metal-bezel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="50%" stopColor="#9CA3AF" />
        <stop offset="100%" stopColor="#4B5563" />
      </linearGradient>
      <filter id="green-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Side Tabs */}
    <rect x="0" y="38" width="8" height="24" rx="3" fill="#76D695" />
    <rect x="92" y="38" width="8" height="24" rx="3" fill="#76D695" />

    {/* Metallic Outer Frame */}
    <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#metal-bezel)" />
    <rect x="12" y="12" width="76" height="76" rx="18" fill="white" fillOpacity="0.1" />
    
    {/* Inner Screen */}
    <rect x="18" y="18" width="64" height="64" rx="14" fill="#000000" />
    <rect x="18" y="18" width="64" height="64" rx="14" fill="white" fillOpacity="0.05" />
    
    {/* Glyph Face: > < and - */}
    <g stroke="#76D695" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#green-glow)">
      {/* Left Eye > */}
      <path d="M32 38 L42 48 L32 58" />
      {/* Right Eye < */}
      <path d="M68 38 L58 48 L68 58" />
      {/* Mouth - */}
      <path d="M44 68 L56 68" />
    </g>
  </svg>
);

const TryItArrow = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
  <div className="w-[85%] max-w-2xl bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-500 pointer-events-auto">
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
          <p>Best,<br/>SuperAgents AI Assistant</p>
        </div>
      </div>
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

const DesktopItems = [
  { type: 'app', name: 'Chrome', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png' },
  { type: 'app', name: 'Slack', icon: 'https://img.icons8.com/color/512/slack-new.png' },
  { type: 'app', name: 'Zoom', icon: 'https://img.icons8.com/color/512/zoom.png' },
  { type: 'app', name: 'Spotify', icon: 'https://img.icons8.com/color/512/spotify--v1.png' },
  { type: 'folder', name: 'Projects' },
  { type: 'folder', name: 'Assets' },
  { type: 'image', name: 'Mockup.png' },
  { type: 'doc', name: 'Pitch.pdf' },
  { type: 'folder', name: 'Work' },
  { type: 'image', name: 'Logo.svg' },
  { type: 'folder', name: 'Personal' },
  { type: 'doc', name: 'Budget.xls' },
];

/**
 * Updated to match native macOS desktop icons:
 * - White text with dark drop shadow for legibility.
 * - Removed background pill for a cleaner, native look.
 */
const DesktopIcon: React.FC<{ item: typeof DesktopItems[0] }> = ({ item }) => {
  const isApp = item.type === 'app';
  const isFolder = item.type === 'folder';
  const isImage = item.type === 'image';

  return (
    <div className="flex flex-col items-center gap-1 group/icon cursor-default w-20">
      <div className={`relative w-12 h-12 flex items-center justify-center transition-all group-hover:brightness-110 drop-shadow-md active:scale-95`}>
        {isApp ? (
          <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
        ) : isFolder ? (
          <div className="text-sky-500 drop-shadow-sm">
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
               <path d="M20 18H4V8h16v10zm-2-12H6v2h12V6z" opacity=".2"/>
               <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
            </svg>
          </div>
        ) : isImage ? (
           <div className="w-10 h-12 bg-white/80 rounded border border-white/20 flex flex-col items-center justify-center overflow-hidden">
              <FileImage className="w-6 h-6 text-gray-400" />
           </div>
        ) : (
           <div className="w-10 h-12 bg-white/90 rounded-sm border border-white/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-500" />
           </div>
        )}
      </div>
      <span className="text-[10px] font-sans font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] text-center line-clamp-2 px-1 rounded-sm transition-all group-hover:bg-blue-600/60">
        {item.name}
      </span>
    </div>
  );
};

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
      cmd: "open -a 'SuperAgents' --focus", 
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
    <section className="relative pt-32 pb-32 px-4 flex flex-col items-center overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/5 blur-[120px] rounded-full animate-float"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-black/5 blur-[100px] rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <RotatingCircularText />
      </div>

      <div className="flex flex-col items-center mb-4 text-center max-w-4xl relative z-10">
        {/* App Icon with Gradient Backdrop */}
        <div className="relative mb-8 group flex flex-col items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-brand-accent to-emerald-400 blur-3xl opacity-40 scale-110 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative w-32 h-32 rounded-[28px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/images/app-icon/hero-app.png" 
                alt="SuperAgents App Icon" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-robotic font-normal text-black">Optimus 1.0</h2>
        </div>

        <p className="text-xl text-brand-accent mb-10 font-sans font-medium">
          Jarvis Finally Real—Your Autonomous AI Agent in Action.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 relative z-10">
          <button className="bg-black text-white px-10 py-4 rounded-2xl flex items-center gap-3 font-bold text-base shadow-2xl hover:scale-105 transition-transform active:scale-95">
             <AppleLogo className="w-5 h-5" />
             Download now
          </button>
        </div>
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">macOS 14.0+ • UNIVERSAL APP</span>
      </div>

      <div className="relative w-full max-w-5xl perspective-1000 mt-2 group z-20">
          <div className="absolute top-[-85px] left-[62%] hidden md:flex flex-col items-start pointer-events-none z-[60]">
             <span className="font-hand text-3xl font-bold text-black ml-12 rotate-[5deg] whitespace-nowrap drop-shadow-sm">Try it now!</span>
             <TryItArrow className="w-24 h-14 text-gray-200 -mt-2 -ml-2 drop-shadow-sm" />
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-black/5 aspect-[16/10] ring-1 ring-black/5">
              <div className="absolute inset-0 -z-10 transition-all duration-1000 overflow-hidden">
                <img 
                  src="https://wallpapercave.com/wp/wp12201600.jpg" 
                  alt="macOS Wallpaper" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
              </div>

              {/* Enhanced Desktop Grid */}
              <div className={`absolute inset-0 p-12 pt-16 transition-all duration-1000 z-10 flex flex-wrap content-start items-start justify-end gap-x-4 gap-y-12 ${showIcons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 max-w-[340px] pointer-events-auto">
                   {DesktopItems.map((item, i) => (
                      <DesktopIcon key={i} item={item} />
                   ))}
                </div>
              </div>

              <div className={`absolute inset-0 bg-blue-900/10 backdrop-blur-3xl z-30 transition-opacity duration-1000 flex items-center justify-center pointer-events-none ${focusMode ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="absolute inset-0 bg-black/5" />
                 <div className="relative z-10 text-white flex flex-col items-center gap-6 animate-in fade-in zoom-in-90 duration-700">
                    <Moon className="w-24 h-24 mb-2 text-white/60 drop-shadow-2xl" strokeWidth={1} />
                    <span className="text-4xl font-sans font-light tracking-[0.3em] uppercase drop-shadow-xl text-white/80">ZEN MODE</span>
                 </div>
              </div>

              {/* Toolbar updated with white text and glass effect */}
              <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-between px-4 bg-black/10 backdrop-blur-3xl z-40 border-b border-white/10">
                 <div className="flex items-center gap-3 text-white text-[11px] font-bold drop-shadow-sm">
                    <AppleLogo className="w-3 h-3 fill-current" />
                    <span>SuperAgents</span>
                    <span className="opacity-70 font-medium">File</span>
                    <span className="opacity-70 font-medium">Agent</span>
                    <span className="opacity-70 font-medium">Window</span>
                 </div>
                 <div className="flex items-center gap-4 text-white text-[11px] font-bold drop-shadow-sm">
                    <Wifi className="w-3.5 h-3.5" />
                    <div className="flex items-center gap-1">
                      <Battery className="w-3.5 h-3.5 rotate-90" />
                      <span className="text-[9px]">84%</span>
                    </div>
                    <span className="opacity-80 font-mono">Mon 10:24 AM</span>
                 </div>
              </div>

              {/* Interaction Notch - Reverted to balanced sizing */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
                  <div className={`bg-black rounded-b-[1.75rem] px-5 py-2.5 flex items-center shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all justify-center border-x border-b border-white/5 ${phase === 1 || phase === 2 ? 'min-w-[340px] gap-4' : 'min-w-[120px] gap-3'}`}>
                      {/* Brand Icon Container in Notch */}
                      <div className="w-9 h-9 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform">
                        <CommanderIcon className="w-6 h-6 shrink-0" />
                      </div>
                      
                      <div className="flex items-center justify-start flex-1 overflow-hidden">
                          {phase === 0 && (
                            <div className="flex items-center gap-2 opacity-30 ml-2">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                          )}
                          
                          {(phase === 1 || phase === 2) && (
                            <div className="flex items-center gap-4 w-full animate-in fade-in duration-300 overflow-hidden">
                                <div className="flex-1 overflow-hidden">
                                  <p className="text-white/90 font-sans font-medium text-[10px] tracking-tight truncate leading-tight">
                                    {phase === 1 ? commands[currentIdx].prompt : "Analyzing system..."}
                                  </p>
                                </div>
                                {phase === 1 && (
                                  <div className="flex items-center gap-1 h-3.5 shrink-0 pr-1">
                                    {[0.3, 0.8, 0.4, 0.6, 0.2].map((h, i) => (
                                        <div key={i} className="w-[1.5px] bg-brand-accent rounded-full animate-bounce" 
                                          style={{
                                            height: `${h * 12}px`,
                                            animationDelay: `${i * 0.1}s`
                                          }}
                                        ></div>
                                    ))}
                                  </div>
                                )}
                                {phase === 2 && <Sparkles className="w-3.5 h-3.5 text-brand-accent shrink-0 animate-pulse" />}
                            </div>
                          )}

                          {phase === 3 && (
                            <div className="flex items-center gap-2 text-green-400 animate-in zoom-in-50 duration-300">
                              <CheckCircle2 className="w-4 h-4" />
                              <span className="text-[9px] font-mono font-bold tracking-[0.1em] uppercase opacity-70">Verified</span>
                            </div>
                          )}
                      </div>
                  </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pt-16 z-30 pointer-events-none">
                 {phase === 3 && currentIdx === 0 && <ChromeGmailDraft />}
              </div>

              <div className="absolute bottom-12 left-0 right-0 px-12 z-40">
                  <div className={`mx-auto max-w-lg bg-black/40 backdrop-blur-3xl rounded-[2.2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center p-4 gap-5 transition-all duration-700 transform ${phase === 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-lg">
                        {phase === 3 && React.createElement(commands[currentIdx].icon, { className: "w-6 h-6 text-brand-accent" })}
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
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      </div>
                  </div>
              </div>

              {/* Focus Glow Overlay */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-1000 ${phase === 1 ? 'opacity-30' : 'opacity-0'}`}>
                 <div className="w-80 h-80 bg-brand-accent/10 rounded-full blur-[120px] animate-pulse"></div>
              </div>
          </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-5xl w-full text-center mt-12 mb-32 space-y-12 relative z-10">
          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-2xl text-gray-800 font-bold leading-relaxed tracking-tight">An assistant that works in the background, executing native commands with the flick of a voice.</p>
          </div>
          
          <div className="absolute bottom-0 right-0 md:mb-[-40px] hidden md:block select-none pointer-events-none transform hover:rotate-[5deg] transition-transform duration-700">
             <div className="font-hand text-4xl md:text-5xl text-black leading-tight">
               Agentic AI.<br/>
               <span className="ml-8 italic text-gray-400 underline decoration-brand-accent/30 underline-offset-8">Not just chat.</span>
             </div>
          </div>
      </div>
    </section>
  );
};