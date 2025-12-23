import React from 'react';
import { Feature } from '../types';

export const FeatureCard: React.FC<Feature> = ({ title, description, icon: Icon, isNew }) => {
  return (
    <div className="group relative p-6 bg-white/50 backdrop-blur-sm dark:bg-brand-surface rounded-2xl border border-black/5 hover:border-brand-accent/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md">
      
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accentDim to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-black/5 group-hover:bg-brand-accent/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-amber-600" />
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-mono flex items-center gap-2 transition-colors">
          {title}
          {isNew && (
            <span className="text-[10px] uppercase tracking-wider bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
              New
            </span>
          )}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-sm transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
};