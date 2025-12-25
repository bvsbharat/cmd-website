import React, { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero, DemoSection } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Documentation } from './components/Documentation';
import { About } from './components/About';
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

type View = 'home' | 'docs' | 'about';

function App() {
  const [view, setView] = useState<View>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Left side logic: Dark text if scrolled OR not on home page
  // On Home (Top): Text White (Left side is Black)
  const isLogoTextDark = isScrolled || view !== 'home';

  // Right side logic: Always Dark text (Gray or Black)
  // On Home (Top): Text Gray (Right side is White)
  // On Other (Top): Text Gray
  // On Scrolled: Text Black
  // const isMenuTextDark = true; // This variable is not directly used in the provided snippet, following the snippet's logic.

  return (
    <div className="min-h-screen bg-brand-bg text-gray-900 selection:bg-black selection:text-white font-sans">

      {/* Top Navigation Bar */}
      <motion.nav
        initial={false}
        animate={{
          top: isScrolled ? '1.5rem' : '0rem',
          width: isScrolled ? '90%' : '100%',
          maxWidth: isScrolled ? '64rem' : '100%',
          borderRadius: isScrolled ? '9999px' : '0px',
          // Changed to light glass (white with opacity)
          backgroundColor: isScrolled ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          borderWidth: isScrolled ? '1px' : '0px',
          // Subtle dark border for the light pill
          borderColor: isScrolled ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0)',
          boxShadow: isScrolled ? '0 20px 40px -4px rgba(0, 0, 0, 0.1)' : 'none',
          paddingTop: isScrolled ? '0.75rem' : '1.5rem',
          paddingBottom: isScrolled ? '0.75rem' : '1.5rem',
          left: isScrolled ? '50%' : '0%',
          x: isScrolled ? '-50%' : '0%'
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }} // iOS fluid easing
        className="fixed z-[10000]"
      >
        <div className={`w-full flex items-center justify-between transition-all duration-500 ${isScrolled ? 'px-6' : 'px-6 lg:px-20'
          }`}>
          {/* Left: Logo and App Name */}
          <div
            onClick={() => setView('home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <CommanderIcon className={`transition-all duration-300 shrink-0 ${isScrolled ? 'w-8 h-8' : 'w-8 h-8 group-hover:scale-105'}`} />
            <motion.span
              layout
              className={`font-robotic leading-none drop-shadow-sm transition-colors duration-300 ${isScrolled ? 'text-base' : 'text-lg'} ${isLogoTextDark ? 'text-black' : 'text-white'}`}
            >
              SuperAgents
            </motion.span>
            <motion.span
              layout
              className={`ml-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full tracking-wide transition-colors duration-300 ${isLogoTextDark
                ? 'bg-black text-white'
                : 'bg-white text-black'
                }`}
            >
              BETA
            </motion.span>
          </div>

          {/* Right: Menu Items */}
          <div className="flex items-center gap-6">
            <div className={`hidden md:flex gap-6 text-[13px] font-medium transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-gray-600'}`}>
              <button
                onClick={() => setView('docs')}
                className={`${view === 'docs' ? 'font-bold' : ''} hover:text-black transition-colors`}
              >
                Documentation
              </button>
              <button
                onClick={() => setView('about')}
                className={`${view === 'about' ? 'font-bold' : ''} hover:text-black transition-colors`}
              >
                About
              </button>
              <a href="#" className="hover:text-black transition-colors">Changelog</a>
              <a href="#" className="hover:text-black transition-colors">Download</a>
            </div>
            <div className={`flex items-center gap-3 transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-gray-600'}`}>
              <button className="text-[12px] font-medium hover:text-black transition-colors flex items-center gap-0.5">
                EN
                <ChevronDown className="w-3 h-3" />
              </button>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${isScrolled
                    ? 'border-gray-300 hover:border-gray-900 hover:bg-white/50'
                    : 'border-gray-300 hover:border-gray-900 hover:bg-gray-100'
                    }`}>
                    <User className="w-4 h-4" />
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedOut>
                <SignUpButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-[12px] font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 bg-black text-white hover:bg-gray-800 cursor-pointer`}
                  >
                    Join Us
                  </motion.button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="relative">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <DemoSection />
              <Features />
              <Pricing />
            </motion.div>
          ) : view === 'docs' ? (
            <motion.div
              key="docs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Documentation />
            </motion.div>
          ) : (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;