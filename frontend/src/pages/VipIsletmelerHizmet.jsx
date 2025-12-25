import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hotel, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerHizmet = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "5 Yıldızlı Otel",
      resim: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      aciklama: "Lüks otel kompleksi. Spa, havuz, restoran ve konferans salonları dahil. Premium müşteri kitlesi.",
      fiyat: "8.000.000$",
      gelir: "Günlük 80.000$",
      kapasite: "200 Oda",
      konum: "Vinewood Hills",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Butik Otel",
      resim: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
      aciklama: "Şık ve samimi butik otel. Kişiselleştirilmiş hizmet, özel tasarım odalar.",
      fiyat: "2.500.000$",
      gelir: "Günlük 25.000$",
      kapasite: "50 Oda",
      konum: "Del Perro",
      yildiz: 4
    },
    {
      id: 3,
      isim: "Özel Hastane",
      resim: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
      aciklama: "Modern özel sağlık merkezi. Acil servis, ameliyathane ve yoğun bakım üniteleri.",
      fiyat: "12.000.000$",
      gelir: "Günlük 120.000$",
      kapasite: "100 Yatak",
      konum: "Pillbox Hill",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Güzellik Salonu",
      resim: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200",
      aciklama: "Premium güzellik ve bakım merkezi. Saç, makyaj, cilt bakımı ve spa hizmetleri.",
      fiyat: "800.000$",
      gelir: "Günlük 8.000$",
      kapasite: "15 İstasyon",
      konum: "Rockford Hills",
      yildiz: 4
    },
    {
      id: 5,
      isim: "Fitness Center",
      resim: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
      aciklama: "Modern spor salonu. Kardiyo, ağırlık, grup dersleri ve kişisel antrenör hizmetleri.",
      fiyat: "1.500.000$",
      gelir: "Günlük 15.000$",
      kapasite: "300 Üye",
      konum: "Vespucci",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Spa & Wellness",
      resim: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200",
      aciklama: "Lüks spa merkezi. Masaj, hamam, sauna ve detoks programları.",
      fiyat: "2.000.000$",
      gelir: "Günlük 20.000$",
      kapasite: "20 Oda",
      konum: "Chumash",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-amber-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Kapasite</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-2xl shadow-amber-500/40">
              <Hotel className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                HİZMET SEKTÖRÜ
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Otel, hastane ve güzellik salonu - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
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

export default VipIsletmelerHizmet;
