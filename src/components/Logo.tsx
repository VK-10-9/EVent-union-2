import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 relative">
        <img 
          src="/logo.svg" 
          alt="Event Union Logo" 
          className="w-full h-full object-contain"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white leading-tight">
          Event Union
        </span>
        <span className="text-xs text-gray-400">
          Connecting Global Minds
        </span>
      </div>
    </div>
  );
}