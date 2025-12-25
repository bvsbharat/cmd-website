import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Documentation } from './components/Documentation';
import { Pricing } from './components/Pricing';

const AppleLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const CommanderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="metal-bezel-nav" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E5E7EB" />
        <stop offset="100%" stopColor="#4B5563" />
      </linearGradient>
    </defs>
    
    {/* Side Tabs for Mini Logo */}
    <rect x="0" y="40" width="6" height="20" rx="2" fill="#76D695" />
    <rect x="94" y="40" width="6" height="20" rx="2" fill="#76D695" />

    <rect x="8" y="8" width="84" height="84" rx="18" fill="url(#metal-bezel-nav)" />
    <rect x="18" y="18" width="64" height="64" rx="12" fill="#000000" />
    
    <g stroke="#76D695" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M35 40 L45 50 L35 60" />
      <path d="M65 40 L55 50 L65 60" />
      <path d="M45 70 L55 70" />
    </g>
  </svg>
);

type View = 'home' | 'docs';

function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="min-h-screen bg-brand-bg text-gray-900 selection:bg-black selection:text-white font-sans">
      
      {/* Fully Glass Floating Pill Navbar - Adjusted for white background visibility */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl">
        <div className="bg-white/40 backdrop-blur-2xl border border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div 
              onClick={() => setView('home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
               <CommanderIcon className="w-8 h-8 shadow-sm group-hover:scale-105 transition-transform shrink-0" />
               <span className="text-2xl font-hand text-black leading-none mt-1 drop-shadow-sm">commander</span>
            </div>
            <div className="hidden md:flex gap-6 text-[13px] text-black/60 font-medium">
              <button 
                onClick={() => setView('docs')}
                className={`${view === 'docs' ? 'text-black font-bold' : 'text-black/60'} hover:text-black transition-colors drop-shadow-sm`}
              >
                Documentation
              </button>
              <a href="#" className="hover:text-black transition-colors drop-shadow-sm">Changelog</a>
            </div>
          </div>
          
          <button className="bg-black text-white text-[12px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg">
            <AppleLogo className="w-3 h-3" />
            Download
          </button>
        </div>
      </nav>

      <main className="relative">
        {view === 'home' ? (
          <div className="animate-in fade-in duration-500">
            <Hero />
            <Features />
            <Pricing />
          </div>
        ) : (
          <Documentation />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;