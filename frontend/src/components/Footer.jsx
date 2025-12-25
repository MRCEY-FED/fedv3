import React from 'react';
import { Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" className="text-white" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-wider">FED:V</span>
                <span className="text-purple-400 text-xs tracking-widest">PROJECT</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Hikayelerin canlandığı bir dünyanın parçası olun. 2016'dan beri sürükleyici rol yapma deneyimleri yaratıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Hizmet Şartları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Topluluk Kuralları
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm">
                  Destek
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@fedvofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/fedvtweets"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Daha fazla epik anlar ve kamera arkası içerikleri için YouTube kanalımızı ve sosyal medya hesaplarımızı takip edin.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} FED:V Projesi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;