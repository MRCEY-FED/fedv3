import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Sparkles, Swords, HelpCircle, BookOpen, Users, Crown, Shield, FileText } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on portal pages
  const isRebelationPage = location.pathname === '/careers';
  const isRosterPage = location.pathname === '/roster';
  const isRulesPage = location.pathname === '/rules';
  const isSocialKurallarPage = location.pathname === '/social-kurallar' || location.pathname.startsWith('/kurallar/');
  const isVipStorePage = location.pathname === '/vip-store' || location.pathname.startsWith('/vip-store/');
  const isYonetimPage = location.pathname === '/yonetim' || location.pathname.startsWith('/yonetim/');
  const isOyuncuBasvuruPage = location.pathname === '/oyuncu-basvuru';
  const isToplulukPage = location.pathname === '/topluluk';

  const isActive = (path) => location.pathname === path;

  // Discord Icon Component
  const DiscordIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/90 via-purple-950/80 to-black/90 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          
          {/* Left Side - Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png"
                alt="FED:V Logo"
                className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-wider bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">FED:V</span>
              <span className="text-purple-400 text-[10px] tracking-[0.3em] font-medium">PROJECT</span>
            </div>
          </Link>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {isRebelationPage ? (
              // Rebelation (Bakımda) page - only Ana Sayfa button
              <Link
                to="/"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-500/40 rounded-xl text-red-400 hover:text-red-300 font-semibold transition-all duration-300 hover:scale-105"
              >
                <Home className="w-4 h-4" />
                <span>Ana Sayfa</span>
              </Link>
            ) : (isRosterPage || isSocialKurallarPage || isVipStorePage || isYonetimPage || isOyuncuBasvuruPage || isToplulukPage) ? (
              // FED:V Social page - Custom menu: Kurallar, Topluluk, V.I.P, Yönetim (Right aligned)
              null
            ) : isRulesPage ? (
              // Rules page
              <Link
                to="/"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 hover:text-purple-300 font-medium transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                <span>Ana Sayfa</span>
              </Link>
            ) : (
              // Home page navigation - Beautiful styled links
              <>
                <Link
                  to="/"
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive('/')
                      ? 'bg-gradient-to-r from-purple-500/30 to-violet-500/30 text-white border border-purple-400/50 shadow-lg shadow-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Home className={`w-4 h-4 ${isActive('/') ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'} transition-colors`} />
                  <span>Ana Sayfa</span>
                </Link>

                <Link
                  to="/roster"
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive('/roster')
                      ? 'bg-gradient-to-r from-purple-500/30 to-violet-500/30 text-white border border-purple-400/50 shadow-lg shadow-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${isActive('/roster') ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'} transition-colors`} />
                  <span>FED:V Social</span>
                </Link>

                <Link
                  to="/careers"
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive('/careers')
                      ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30 text-white border border-red-400/50 shadow-lg shadow-red-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Swords className={`w-4 h-4 ${isActive('/careers') ? 'text-red-400' : 'text-gray-400 group-hover:text-red-400'} transition-colors`} />
                  <span>FED:V Rebelation</span>
                </Link>

                <Link
                  to="/faq"
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive('/faq')
                      ? 'bg-gradient-to-r from-purple-500/30 to-violet-500/30 text-white border border-purple-400/50 shadow-lg shadow-purple-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <HelpCircle className={`w-4 h-4 ${isActive('/faq') ? 'text-purple-400' : 'text-gray-400 group-hover:text-purple-400'} transition-colors`} />
                  <span>SSS</span>
                </Link>
              </>
            )}
          </div>

          {/* Right Side - Discord Button or Social Menu */}
          {(isRosterPage || isSocialKurallarPage || isVipStorePage || isYonetimPage || isOyuncuBasvuruPage || isToplulukPage) ? (
            // FED:V Social page - Custom menu on right side
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 text-gray-300 hover:text-white hover:bg-white/5"
              >
                <Home className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span>Ana Sayfa</span>
              </Link>

              <Link
                to="/social-kurallar"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 text-gray-300 hover:text-white hover:bg-purple-500/10 border border-transparent hover:border-purple-500/30"
              >
                <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                <span>Kurallar</span>
              </Link>

              <Link
                to="/topluluk"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 text-gray-300 hover:text-white hover:bg-violet-500/10 border border-transparent hover:border-violet-500/30"
              >
                <Users className="w-4 h-4 text-gray-400 group-hover:text-violet-400 transition-colors" />
                <span>Topluluk</span>
              </Link>

              <Link
                to="/vip-store"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 text-gray-300 hover:text-white hover:bg-amber-500/10 border border-transparent hover:border-amber-500/30"
              >
                <Crown className="w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors" />
                <span>V.I.P</span>
              </Link>

              <Link
                to="/yonetim"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 text-gray-300 hover:text-white hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/30"
              >
                <Shield className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                <span>Yönetim</span>
              </Link>

              <Link
                to="/oyuncu-basvuru"
                className="group flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-400 hover:text-green-300 border border-green-500/40 hover:border-green-500/60 shadow-lg shadow-green-500/10 hover:shadow-green-500/20"
              >
                <FileText className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                <span>Başvuru Yap</span>
              </Link>
            </div>
          ) : !(isRosterPage || isSocialKurallarPage || isVipStorePage || isYonetimPage || isOyuncuBasvuruPage || isToplulukPage) && (
            <div className="hidden md:flex items-center">
              <a
                href="https://discord.gg/fedvsocial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-bold text-white text-sm transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 border border-purple-400/30"
              >
                <DiscordIcon className="w-5 h-5 group-hover:animate-bounce" />
                <span>Discord'a Katıl</span>
              </a>
            </div>
          )}

          {/* Empty div for spacing when Discord button is hidden */}
          {(isRosterPage || isSocialKurallarPage || isVipStorePage || isYonetimPage || isOyuncuBasvuruPage || isToplulukPage) && <div className="hidden md:block" />}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20">
          <div className="px-4 py-4 space-y-2">
            {isRebelationPage ? (
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 bg-red-500/10 rounded-xl text-red-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Ana Sayfa</span>
              </Link>
            ) : (isRosterPage || isSocialKurallarPage || isVipStorePage || isYonetimPage || isOyuncuBasvuruPage || isToplulukPage) ? (
              // FED:V Social mobile menu
              <>
                <Link
                  to="/"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-purple-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Ana Sayfa</span>
                </Link>

                <Link
                  to="/social-kurallar"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-purple-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span>Kurallar</span>
                </Link>

                <Link
                  to="/topluluk"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-violet-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="w-5 h-5 text-violet-400" />
                  <span>Topluluk</span>
                </Link>

                <Link
                  to="/vip-store"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-amber-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Crown className="w-5 h-5 text-amber-400" />
                  <span>V.I.P</span>
                </Link>

                <Link
                  to="/yonetim"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-300 hover:bg-emerald-500/10"
                  onClick={() => setIsOpen(false)}
                >
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span>Yönetim</span>
                </Link>

                <Link
                  to="/oyuncu-basvuru"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  <FileText className="w-5 h-5 text-green-400" />
                  <span>Başvuru Yap</span>
                </Link>
              </>
            ) : isRulesPage ? (
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 bg-purple-500/10 rounded-xl text-purple-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Ana Sayfa</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/') ? 'bg-purple-500/20 text-purple-400' : 'text-gray-300 hover:bg-purple-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="w-5 h-5" />
                  <span>Ana Sayfa</span>
                </Link>

                <Link
                  to="/roster"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/roster') ? 'bg-purple-500/20 text-purple-400' : 'text-gray-300 hover:bg-purple-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>FED:V Social</span>
                </Link>

                <Link
                  to="/careers"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/careers') ? 'bg-red-500/20 text-red-400' : 'text-gray-300 hover:bg-red-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Swords className="w-5 h-5" />
                  <span>FED:V Rebelation</span>
                </Link>

                <Link
                  to="/faq"
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    isActive('/faq') ? 'bg-purple-500/20 text-purple-400' : 'text-gray-300 hover:bg-purple-500/10'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>SSS</span>
                </Link>

                <div className="h-px bg-purple-500/20 my-3" />

                {/* Discord Button - Mobile (not on roster page) */}
                <a
                  href="https://discord.gg/fedvsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <DiscordIcon className="w-5 h-5" />
                  <span>Discord'a Katıl</span>
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
