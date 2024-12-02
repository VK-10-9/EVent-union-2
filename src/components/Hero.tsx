import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            <span className="block mb-2">Connect with Global</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Event Enthusiasts
            </span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the world's largest community for event enthusiasts. Discover,
            share, and create memorable experiences together.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/GpRcsFdMKXgCQxhxNj0Oin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}