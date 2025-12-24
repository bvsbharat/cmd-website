
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

const AppIcon = ({ className }: { className?: string }) => (
  <div className={`bg-brand-accent rounded-lg flex items-center justify-center ${className}`}>
    <span className="text-black font-mono font-bold leading-none select-none text-[15px]">&gt;_</span>
  </div>
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
               <AppIcon className="w-8 h-8 shadow-sm group-hover:scale-105 transition-transform shrink-0" />
               <span className="text-2xl font-hand text-black leading-none mt-1 drop-shadow-sm">commander</span>
            </div>
            <div className="hidden md:flex gap-6 text-[13px] text-black/60 font-medium">
              <a href="https://github.com/bvsbharat/Commander-" target="_blank" className="hover:text-black transition-colors drop-shadow-sm">GitHub</a>
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
            
            {/* Installation Section */}
            <section className="py-24 px-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Installation</h2>
              <div className="bg-black rounded-3xl p-10 text-white font-mono text-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-6 right-8 text-gray-600 uppercase text-[10px] tracking-widest font-bold">Terminal</div>
                <p className="text-gray-400 mb-4 opacity-60"># Install via Homebrew</p>
                <div className="flex items-center gap-3 group-hover:text-brand-accent transition-colors">
                  <span className="text-brand-accent">$</span>
                  <code className="flex-1 text-base">brew tap bvsbharat/commander && brew install --cask commander</code>
                </div>
              </div>
            </section>
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
