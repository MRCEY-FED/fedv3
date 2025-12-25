import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building, X, ChevronLeft, ChevronRight, Star, DollarSign, Maximize, MapPin, Car, Bed } from 'lucide-react';

const VipEvMalikaneDaire = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mulkler = [
    {
      id: 1,
      isim: "Studio Daire",
      resim: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200",
      aciklama: "Kompakt ve modern studio daire. Genç profesyoneller için ideal, şehir merkezinde stratejik konum.",
      fiyat: "300.000$",
      metrekare: "45 m²",
      oda: "1+0",
      konum: "Downtown",
      yildiz: 3
    },
    {
      id: 2,
      isim: "Modern 1+1 Daire",
      resim: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
      aciklama: "Şık tasarımlı 1+1 daire. Açık mutfak, geniş salon ve balkon. Merkezi lokasyon.",
      fiyat: "450.000$",
      metrekare: "65 m²",
      oda: "1+1",
      konum: "Pillbox Hill",
      yildiz: 4
    },
    {
      id: 3,
      isim: "Lüks 2+1 Daire",
      resim: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
      aciklama: "Geniş ve ferah 2+1 daire. Master yatak odası, çalışma odası ve panoramik manzara.",
      fiyat: "650.000$",
      metrekare: "95 m²",
      oda: "2+1",
      konum: "Alta Street",
      yildiz: 4
    },
    {
      id: 4,
      isim: "Premium 3+1 Daire",
      resim: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
      aciklama: "Aile için ideal 3+1 daire. Geniş odalar, 2 banyo ve kapalı otopark.",
      fiyat: "850.000$",
      metrekare: "130 m²",
      oda: "3+1",
      konum: "Del Perro",
      yildiz: 5
    },
    {
      id: 5,
      isim: "Dublex Daire",
      resim: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      aciklama: "İki katlı dublex daire. Alt katta salon ve mutfak, üst katta yatak odaları.",
      fiyat: "1.100.000$",
      metrekare: "160 m²",
      oda: "3+1 Dublex",
      konum: "Vinewood",
      yildiz: 5
    },
    {
      id: 6,
      isim: "Bahçe Katı Daire",
      resim: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      aciklama: "Özel bahçeli zemin kat dairesi. Geniş teras, bahçe kullanımı ve barbekü alanı.",
      fiyat: "750.000$",
      metrekare: "110 m²",
      oda: "2+1",
      konum: "Mirror Park",
      yildiz: 4
    },
    {
      id: 7,
      isim: "Çatı Katı Daire",
      resim: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
      aciklama: "Geniş teras ve şehir manzaralı çatı katı. Açık alan yaşamı sevenler için.",
      fiyat: "950.000$",
      metrekare: "140 m²",
      oda: "2+1",
      konum: "Hawick",
      yildiz: 5
    },
    {
      id: 8,
      isim: "Rezidans Daire",
      resim: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200",
      aciklama: "5 yıldızlı rezidans kompleksinde daire. Havuz, spor salonu ve 24 saat güvenlik.",
      fiyat: "1.200.000$",
      metrekare: "120 m²",
      oda: "2+1",
      konum: "Eclipse Tower",
      yildiz: 5
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <Maximize className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Metrekare</p>
                  <p className="text-white font-bold text-lg">{selectedItem.metrekare}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Oda Sayısı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.oda}</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/evmalikane" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>Ev & Malikane Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl shadow-blue-500/40">
              <Building className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                DAİRELER
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Şehir merkezinde modern daireler - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mulkler.map((mulk, index) => (
              <div 
                key={mulk.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={mulk.resim} alt={mulk.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{mulk.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">{mulk.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(mulk.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-blue-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{mulk.aciklama}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-blue-400">{mulk.metrekare}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-blue-400">{mulk.oda}</span>
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

export default VipEvMalikaneDaire;
