import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Shield, Bot, Terminal, Camera, Mic, MousePointer, Lock, Zap, Sliders, Brain, Eye } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Notch Integration",
    description: "The UI lives in your MacBook notch. Seamless hover detection, spring animations, and multi-screen support.",
    icon: MousePointer,
  },
  {
    title: "Jarvis Memory Layer",
    description: "SuperAgents remembers who Sarah is, your occupation, and project context to make commands relevant.",
    icon: Brain,
    isNew: true
  },
  {
    title: "Visual Intelligence",
    description: "View the front-most app to extract data, explain errors, or summarize content instantly.",
    icon: Eye,
    isNew: true
  },
  {
    title: "Agentic Execution",
    description: "Not just a chatbot. It structures multi-step shell or AppleScripts to perform work in other apps.",
    icon: Bot,
  },
  {
    title: "Local Whisper STT",
    description: "Push-to-talk recording with 99% accuracy. Fully offline transcription via Local Whisper models.",
    icon: Mic,
  },
  {
    title: "Isolated Sandbox",
    description: "Terminal commands run in a subprocess sandbox with full environment inheritance and 30s timeouts.",
    icon: Terminal,
  },
  {
    title: "Destructive Shield",
    description: "Automatic detection and confirmation for dangerous operations like 'rm -rf' or 'sudo' requests.",
    icon: Lock,
  },
  {
    title: "Deep Focus Mode",
    description: "Customizable distraction-free overlay with blur, grain, and tint controls for deep work sessions.",
    icon: Zap,
  },
  {
    title: "Custom Hotkeys",
    description: "Map custom shell scripts or AppleScripts to hotkeys (Ctrl+1-9) for instant automation.",
    icon: Sliders,
  }
];

export const Features: React.FC = () => {
  return (
    <section className="pt-10 pb-32 px-4 sm:px-6 lg:px-8 bg-transparent border-y border-black/5 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {/* App Icon with Name */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-brand-accent to-emerald-400 blur-3xl opacity-40 scale-110 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="relative w-20 h-20 rounded-[18px] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/images/app-icon/hero-app.png" 
                  alt="Optimus App Icon" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-robotic font-normal text-black">Optimus 1.0</h2>
          </div>
          
          <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-3 font-mono">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 transition-colors tracking-tight">The ultimate Agent</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};