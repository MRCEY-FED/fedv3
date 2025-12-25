import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { journeyData, galleryImages, videos, adminTeam, faqData } from '../mockData';
import { Youtube, Twitter, ChevronLeft, ChevronRight, Shield, MessageCircle, X, Users } from 'lucide-react';
import VideoModal from '../components/VideoModal';

const Home = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  const openVideoModal = (index) => {
    setSelectedVideo(index);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  const nextVideo = () => {
    setSelectedVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen">
      {/* Video Modal */}
      <VideoModal 
        video={selectedVideo !== null ? videos[selectedVideo] : null}
        isOpen={isModalOpen}
        onClose={closeVideoModal}
      />

      {/* Hero Banner - Server Selection */}
      <section className="relative pt-24 pb-16 px-4 min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images7.alphacoders.com/853/853456.jpg"
            alt="Los Santos - GTA V"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png" 
                alt="FED:V Logo" 
                className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Subtitle */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-2xl">
              Hangi roleplay evrenimize katılmak istersin?
            </h2>

            {/* Divider Line */}
            <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-6"></div>
            
            {/* Info Text - Styled Banner */}
            <div className="max-w-2xl mx-auto px-4">
              <div className="relative bg-gradient-to-r from-purple-500/10 via-violet-500/15 to-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 py-4 shadow-lg shadow-purple-500/10">
                {/* Decorative elements */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-purple-400 to-violet-500 rounded-full" />
                <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium text-center">
                  FED:V projesi sunucularımızda almış olduğunuz yasaklar 
                  <span className="text-purple-400 font-semibold"> her sunucumuz </span> 
                  için geçerlidir.
                </p>
              </div>
            </div>
          </div>

          {/* Server Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Server Card */}
            <Link to="/roster" className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30 border-2 border-purple-500/40 hover:scale-105 transition-transform duration-500 backdrop-blur-sm bg-black/20">
              <img
                src="https://images.unsplash.com/photo-1751998689590-f7ae39d9d218"
                alt="FED:V Social"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  FED:V Social
                </h3>
                <p className="text-gray-200 mb-6 text-xl drop-shadow-lg">Sosyal yaşam, eğlence ve roleplay deneyimi</p>
                <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/80 transform group-hover:scale-110">
                  Sunucuya Katıl
                </button>
              </div>
            </Link>

            {/* Rebelation Server Card */}
            <Link to="/careers" className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/30 border-2 border-red-500/40 hover:scale-105 transition-transform duration-500 backdrop-blur-sm bg-black/20">
              <img
                src="https://images.unsplash.com/photo-1759167625075-ee6173d53f8f"
                alt="FED:V Rebelation"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                  FED:V Rebelation
                </h3>
                <p className="text-gray-200 mb-6 text-xl drop-shadow-lg">Aksiyon, savaş ve mücadele dolu bir dünya</p>
                <button className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-2xl shadow-red-500/50 group-hover:shadow-red-500/80 transform group-hover:scale-110">
                  Sunucuya Katıl
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Admin Team Section - Modern LoL Style Cards (Purple Theme) */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/15 rounded-full blur-[80px] animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-[120px]" />
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium tracking-wider uppercase">
                Ekip
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Yönetim Ekibimiz
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Sunucumuzu yöneten, tutkulu ve deneyimli ekibimizle tanışın. 
              Her biri alanında uzman, topluluk için çalışan kahramanlar.
            </p>
            {/* Modern Decorative Line */}
            <div className="flex items-center justify-center mt-8 gap-3">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-500" />
              <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-violet-500 rotate-45 rounded-sm" />
              <div className="h-[2px] w-24 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500" />
              <div className="w-3 h-3 bg-gradient-to-br from-violet-400 to-fuchsia-500 rotate-45 rounded-sm" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-purple-500" />
            </div>
          </div>

          {/* Cards Grid - 5 Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {adminTeam.map((admin, index) => (
              <div
                key={admin.id}
                className="group relative"
              >
                {/* Modern LoL Card */}
                <div className="relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-3">
                  
                  {/* Outer Glow on Hover */}
                  <div className="absolute -inset-[3px] bg-gradient-to-b from-purple-500 via-violet-600 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                  
                  {/* Card Frame - Purple Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-400 via-violet-500 to-purple-700 p-[2px]">
                    <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-b from-gray-900 via-[#0d0015] to-black" />
                  </div>

                  {/* Card Content */}
                  <div className="relative h-full rounded-2xl overflow-hidden">
                    
                    {/* Character Image */}
                    <div className="absolute inset-0">
                      <img
                        src={admin.avatar}
                        alt={admin.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                      />
                      {/* Multi-layer Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0015] via-purple-900/40 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-purple-900/60" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,0,21,0.4)_100%)]" />
                    </div>

                    {/* Top Left - Rank Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="relative group/badge">
                        <div className="w-11 h-11 bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center border border-purple-300/50 shadow-lg shadow-purple-500/40 transform transition-transform group-hover/badge:rotate-12">
                          <Shield className="w-5 h-5 text-white drop-shadow-lg" />
                        </div>
                        <div className="absolute inset-0 w-11 h-11 bg-purple-500 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                      </div>
                    </div>

                    {/* Top Right - Rarity Indicator */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex flex-col items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-2 border border-purple-500/20">
                        {[...Array(index === 0 ? 5 : index === 1 ? 4 : index === 2 ? 4 : index === 3 ? 3 : 3)].map((_, i) => (
                          <div key={i} className="relative">
                            <svg className="w-3.5 h-3.5 text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Info Panel */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      {/* Glass Card for Info */}
                      <div className="bg-black/60 backdrop-blur-md rounded-xl border border-purple-500/30 p-3 space-y-2.5">
                        {/* Name */}
                        <div className="relative">
                          <h3 className="text-white text-base md:text-lg font-bold tracking-wide text-center truncate">
                            {admin.name}
                          </h3>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        </div>

                        {/* Role Badge */}
                        <div className="flex justify-center">
                          <div className="bg-gradient-to-r from-purple-600/40 via-violet-500/50 to-purple-600/40 border border-purple-400/30 rounded-lg px-3 py-1">
                            <p className="text-purple-200 text-[10px] md:text-xs font-semibold tracking-wider uppercase text-center truncate">
                              {admin.role}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-[10px] md:text-xs text-center leading-relaxed line-clamp-2 px-1">
                          {admin.description}
                        </p>

                        {/* Discord */}
                        <div className="flex items-center justify-center space-x-2 bg-purple-500/10 rounded-lg px-2 py-1.5 border border-purple-500/20">
                          <MessageCircle className="w-3.5 h-3.5 text-purple-400" />
                          <span className="text-purple-300/90 text-[10px] md:text-xs font-mono">{admin.discord}</span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out pointer-events-none" />

                    {/* Modern Corner Accents */}
                    <div className="absolute top-3 left-3 w-6 h-6">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-transparent" />
                      <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-purple-400 to-transparent" />
                    </div>
                    <div className="absolute top-3 right-3 w-6 h-6">
                      <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-purple-400 to-transparent" />
                      <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-purple-400 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section - Oyundan Kesitler */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              OYUNDAN KESİTLER
            </span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12">
            En son videolarımızı ve canlı yayın kayıtlarımızı izleyin
          </p>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => openVideoModal(index)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 transform group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-white text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              SOSYAL MEDYA HESAPLARIMIZ
            </span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-12">
            Bizi takip edin ve topluluğumuzun bir parçası olun!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YouTube Card */}
            <a
              href="https://www.youtube.com/@fedvofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/50">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                  YouTube
                </h3>
                <p className="text-gray-400 mb-4">
                  En son videolarımızı izleyin ve canlı yayınlarımıza katılın
                </p>
                <span className="text-red-400 font-semibold group-hover:underline">
                  Abone Ol →
                </span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/50">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                  Instagram
                </h3>
                <p className="text-gray-400 mb-4">
                  Günlük içeriklerimizi ve hikayelerimizi takip edin
                </p>
                <span className="text-pink-400 font-semibold group-hover:underline">
                  Takip Et →
                </span>
              </div>
            </a>

            {/* TikTok Card */}
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-cyan-500/10 to-pink-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  TikTok
                </h3>
                <p className="text-gray-400 mb-4">
                  Kısa videolarımızı keşfedin ve eğlenceli anları kaçırmayın
                </p>
                <span className="text-cyan-400 font-semibold group-hover:underline">
                  İzle →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                Sıkça Sorulan Sorular
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              FED:V Hakkında merak ettiğiniz her şey
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqData.slice(0, 6).map((faq, index) => (
              <div
                key={faq.id}
                className="group bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-start p-6 gap-4">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden md:block flex-shrink-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-full h-full text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Daha fazla sorunuz mu var?</h3>
              <p className="text-gray-400 mb-6">
                Detaylı bilgi için Discord sunucumuza katılın veya forum sayfamızı ziyaret edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50">
                  Discord'a Katıl
                </button>
                <button className="px-8 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 font-bold rounded-lg transition-all duration-300 hover:scale-105">
                  Tüm SSS'leri Gör
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Join Notice */}
      {showCookieNotice && (
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom duration-500">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-[#5865F2]/20 to-[#7289DA]/20 backdrop-blur-xl border border-[#5865F2]/40 rounded-2xl p-5 shadow-2xl shadow-[#5865F2]/20 max-w-sm">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5865F2] to-[#7289DA] rounded-2xl blur-lg opacity-20 -z-10" />
            
            {/* Close Button */}
            <button
              onClick={() => setShowCookieNotice(false)}
              className="absolute -top-2 -right-2 w-7 h-7 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              {/* Discord Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#5865F2] rounded-xl flex items-center justify-center shadow-lg shadow-[#5865F2]/40 animate-pulse">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-lg mb-1">
                  Discord'a Katıl! 🎮
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  Topluluğumuza katıl, yeni arkadaşlar edin ve eğlenceye ortak ol!
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>1.2K Online</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Users className="w-3.5 h-3.5" />
                    <span>5K+ Üye</span>
                  </div>
                </div>

                {/* Join Button */}
                <a
                  href="https://discord.gg/fedvsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hemen Katıl</span>
                </a>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] rounded-b-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;