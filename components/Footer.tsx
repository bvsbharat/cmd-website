import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 flex flex-col items-center gap-12 border-t border-gray-200/50">
        
        {/* Creator Pill - Updated for Solo Tech */}
        <a 
          href="https://www.getsolo.tech/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full pl-1.5 pr-4 py-1.5 hover:shadow-md hover:border-brand-accent/30 transition-all cursor-pointer group"
        >
           <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-inner">
             {/* Simple geometric 'S' representation for Solo Tech */}
             <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
               <path d="M15 9c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2 .9 2 2-.9 2-2 2h-2c-1.1 0-2-.9-2-2" stroke="white" fill="none"/>
             </svg>
           </div>
           <span className="text-xs font-bold text-gray-700 group-hover:text-black transition-colors">
             By Solo Tech <span className="text-gray-300 group-hover:text-brand-accent ml-1 transition-colors">↗</span>
           </span>
        </a>

        <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8 text-[13px] text-gray-400 font-medium">
                <a href="https://github.com/bvsbharat/Commander-" target="_blank" className="hover:text-black transition-colors">GitHub</a>
                <a href="#" className="hover:text-black transition-colors">Documentation</a>
                <a href="#" className="hover:text-black transition-colors">MIT License</a>
            </div>
            
            <p className="text-[11px] text-gray-400 font-medium tracking-tight">
               &copy; 2025 Commander AI. All rights reserved. Notarized by Apple.
            </p>
        </div>
    </footer>
  );
};