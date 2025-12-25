import React from 'react';
import { Settings, Clock } from 'lucide-react';

const Careers = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image - GTA 5 War/Battle Theme */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80"
          alt="FED:V Rebelation - Bakımda"
          className="w-full h-full object-cover"
        />
        {/* Dark overlays for better text readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-orange-900/20" />
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Maintenance Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse">
              <Settings className="w-16 h-16 text-white animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div className="absolute -inset-4 bg-red-500/20 rounded-full blur-xl animate-pulse" />
          </div>
        </div>

        {/* BAKIMDA Text - Large */}
        <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-wider">
          <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
            BAKIMDA
          </span>
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8 gap-3">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-red-500 rounded-full" />
          <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-orange-500 rotate-45 rounded-sm" />
          <div className="h-1 w-32 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full" />
          <div className="w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rotate-45 rounded-sm" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-red-500 rounded-full" />
        </div>

        {/* Subtitle */}
        <div className="space-y-4 mb-12">
          <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Yakında Geliyoruz
          </p>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            FED:V Rebelation deneyimi için hazırlanıyoruz
          </p>
        </div>

        {/* Info Box */}
        <div className="inline-block bg-black/60 backdrop-blur-md border border-red-500/40 rounded-2xl p-8 shadow-2xl shadow-red-500/20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-red-400 animate-pulse" />
            <span className="text-red-400 font-semibold text-lg">Çok Yakında</span>
          </div>
          <p className="text-gray-400 text-base max-w-md">
            Aksiyon, savaş ve mücadele dolu dünyamız son hazırlıklarını tamamlıyor. 
            Duyurular için Discord sunucumuzu takip etmeyi unutmayın!
          </p>
        </div>

        {/* Discord Button */}
        <div className="mt-10">
          <a
            href="https://discord.gg/fedvsocial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord'a Katıl
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Careers;
