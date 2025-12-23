import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 flex flex-col items-center gap-12 border-t border-gray-200/50">
        
        {/* Creator Pill */}
        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 shadow-sm rounded-full pl-1.5 pr-4 py-1.5 hover:shadow-md transition-shadow cursor-pointer">
           <img 
             src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bharat" 
             className="w-8 h-8 rounded-full bg-gray-100" 
             alt="Creator"
           />
           <span className="text-xs font-medium text-gray-600">
             By Bharat Bhavnasi <span className="text-gray-300 ml-1">↗</span>
           </span>
        </div>

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