import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerEglence = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Mega Gece Kulübü",
      resim: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200",
      aciklama: "Şehrin en büyük gece kulübü. 3 dans pisti, VIP lojlar, dünyaca ünlü DJ'ler ve özel etkinlikler.",
      fiyat: "5.000.000$",
      gelir: "Günlük 50.000$",
      kapasite: "2000 Kişi",
      konum: "Downtown",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Diamond Casino",
      resim: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1200",
      aciklama: "Lüks casino kompleksi. Poker, blackjack, rulet masaları, slot makineleri ve high-roller odaları.",
      fiyat: "15.000.000$",
      gelir: "Günlük 150.000$",
      kapasite: "5000 Kişi",
      konum: "Vinewood",
      yildiz: 5
    },
    {
      id: 3,
      isim: "Strip Club",
      resim: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200",
      aciklama: "Premium yetişkin eğlence mekanı. Özel odalar, bar servisi ve VIP deneyimi.",
      fiyat: "2.500.000$",
      gelir: "Günlük 25.000$",
      kapasite: "300 Kişi",
      konum: "Strawberry",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Karaoke Bar",
      resim: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200",
      aciklama: "Eğlenceli karaoke deneyimi. Özel odalar, geniş şarkı arşivi ve parti paketleri.",
      fiyat: "800.000$",
      gelir: "Günlük 8.000$",
      kapasite: "150 Kişi",
      konum: "Little Seoul",
      yildiz: 4
    },
    {
      id: 5,
      isim: "Bowling Salonu",
      resim: "https://images.unsplash.com/photo-1545232979-60f2e527c115?w=1200",
      aciklama: "Modern bowling merkezi. 20 pist, arcade bölümü, snack bar ve turnuva organizasyonları.",
      fiyat: "1.200.000$",
      gelir: "Günlük 12.000$",
      kapasite: "250 Kişi",
      konum: "Mission Row",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Sinema Kompleksi",
      resim: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200",
      aciklama: "Çoklu salon sinema. IMAX, 4DX deneyimi, VIP salonlar ve özel gösterimler.",
      fiyat: "3.500.000$",
      gelir: "Günlük 35.000$",
      kapasite: "1500 Kişi",
      konum: "Vinewood",
      yildiz: 5
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedItem(isletmeler[index]);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const newIndex = (currentIndex + 1) % isletmeler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(isletmeler[newIndex]);
  };

  const prevItem = () => {
    const newIndex = (currentIndex - 1 + isletmeler.length) % isletmeler.length;
    setCurrentIndex(newIndex);
    setSelectedItem(isletmeler[newIndex]);
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-purple-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Kapasite</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
                <span>Satın Al</span>
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">Satın almak için Discord sunucumuza yönlendirileceksiniz</p>
              <div className="text-center text-gray-500 text-sm mt-2">
                {currentIndex + 1} / {isletmeler.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl shadow-purple-500/40">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                EĞLENCE MEKANLARI
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Gece kulübü, casino ve eğlence merkezleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-purple-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{isletme.aciklama}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">{isletme.gelir}</span>
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

export default VipIsletmelerEglence;
