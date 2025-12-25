import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, X, ChevronLeft, ChevronRight, Star, DollarSign, Maximize, MapPin, Bed } from 'lucide-react';

const VipEvMalikaneVilla = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mulkler = [
    {
      id: 1,
      isim: "Modern Villa",
      resim: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200",
      aciklama: "Minimalist tasarımlı modern villa. Geniş cam cepheler, infinity havuz ve akıllı ev sistemleri.",
      fiyat: "2.500.000$",
      metrekare: "350 m²",
      oda: "4+1",
      konum: "Vinewood Hills",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Bahçeli Aile Villası",
      resim: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      aciklama: "Geniş bahçeli aile villası. Çocuk oyun alanı, barbekü köşesi ve 3 araçlık garaj.",
      fiyat: "1.800.000$",
      metrekare: "280 m²",
      oda: "5+1",
      konum: "Rockford Hills",
      yildiz: 5
    },
    {
      id: 3,
      isim: "Tepede Villa",
      resim: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      aciklama: "Şehir manzaralı tepe villa. 360 derece panoramik manzara ve özel yürüyüş yolları.",
      fiyat: "3.200.000$",
      metrekare: "400 m²",
      oda: "5+2",
      konum: "Vinewood Hills",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Havuzlu Villa",
      resim: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      aciklama: "Büyük havuzlu lüks villa. Jakuzi, sauna ve açık hava mutfağı ile mükemmel yaşam.",
      fiyat: "2.200.000$",
      metrekare: "320 m²",
      oda: "4+1",
      konum: "Richman Glen",
      yildiz: 5
    },
    {
      id: 5,
      isim: "Klasik Amerikan Villa",
      resim: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      aciklama: "Geleneksel Amerikan mimarisi. Geniş veranda, şömine ve klasik iç tasarım.",
      fiyat: "1.500.000$",
      metrekare: "250 m²",
      oda: "4+1",
      konum: "Mirror Park",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Akıllı Ev Villa",
      resim: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
      aciklama: "Tam otomasyon akıllı ev sistemi. Ses kontrolü, güvenlik ve enerji yönetimi.",
      fiyat: "2.800.000$",
      metrekare: "380 m²",
      oda: "5+1",
      konum: "Eclipse Boulevard",
      yildiz: 5
    },
    {
      id: 7,
      isim: "Müstakil Villa",
      resim: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
      aciklama: "Bağımsız giriş ve geniş arazi. Özel bahçe düzenlemesi ve misafir evi.",
      fiyat: "1.900.000$",
      metrekare: "300 m²",
      oda: "4+2",
      konum: "West Vinewood",
      yildiz: 4
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedItem(mulkler[index]);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % mulkler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(mulkler[newIndex]);
  };

  const prevItem = () => {
    const newIndex = (currentIndex - 1 + mulkler.length) % mulkler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(mulkler[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black">
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <X className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prevItem(); }} className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); nextItem(); }} className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-emerald-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <Maximize className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Metrekare</p>
                  <p className="text-white font-bold text-lg">{selectedItem.metrekare}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Oda Sayısı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.oda}</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <span>Satın Al</span>
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">Satın almak için Discord sunucumuza yönlendirileceksiniz</p>
              <div className="text-center text-gray-500 text-sm mt-2">
                {currentIndex + 1} / {mulkler.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/evmalikane" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>Ev & Malikane Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-2xl shadow-emerald-500/40">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                VİLLALAR
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Lüks bahçeli villalar - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mulkler.map((mulk, index) => (
              <div 
                key={mulk.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={mulk.resim} alt={mulk.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{mulk.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-400 font-semibold">{mulk.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(mulk.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-emerald-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{mulk.aciklama}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-emerald-400">{mulk.metrekare}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-emerald-400">{mulk.oda}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipEvMalikaneVilla;
