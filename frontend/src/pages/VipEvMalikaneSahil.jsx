import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palmtree, X, ChevronLeft, ChevronRight, Star, DollarSign, Maximize, MapPin, Bed } from 'lucide-react';

const VipEvMalikaneSahil = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const mulkler = [
    {
      id: 1,
      isim: "Sahil Villası",
      resim: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200",
      aciklama: "Denize sıfır muhteşem villa. Özel plaj, iskele ve tekne bağlama yeri.",
      fiyat: "3.500.000$",
      metrekare: "400 m²",
      oda: "5+1",
      konum: "Vespucci Beach",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Beach House",
      resim: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
      aciklama: "Modern beach house tasarımı. Geniş cam cepheler ve okyanus manzarası.",
      fiyat: "2.800.000$",
      metrekare: "320 m²",
      oda: "4+1",
      konum: "Del Perro Beach",
      yildiz: 5
    },
    {
      id: 3,
      isim: "Deniz Manzaralı Ev",
      resim: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      aciklama: "Yüksek konumda deniz manzaralı ev. Infinity havuz ve gün batımı terası.",
      fiyat: "2.200.000$",
      metrekare: "280 m²",
      oda: "4+1",
      konum: "Pacific Bluffs",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Koy Evi",
      resim: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      aciklama: "Gizli koyda özel ev. Mahremiyet, doğa ve huzur bir arada.",
      fiyat: "4.000.000$",
      metrekare: "350 m²",
      oda: "4+2",
      konum: "Chumash",
      yildiz: 5
    },
    {
      id: 5,
      isim: "Marina Evi",
      resim: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200",
      aciklama: "Marina içinde lüks ev. Yat parkı, denizci kulübü üyeliği dahil.",
      fiyat: "3.000.000$",
      metrekare: "300 m²",
      oda: "3+1",
      konum: "Puerto Del Sol",
      yildiz: 4
    },
    {
      id: 6,
      isim: "Tropikal Villa",
      resim: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
      aciklama: "Tropikal bahçeli sahil villası. Palmiye ağaçları, hamak alanı ve dış mekan duşu.",
      fiyat: "2.500.000$",
      metrekare: "270 m²",
      oda: "3+1",
      konum: "Vespucci",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <Maximize className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Metrekare</p>
                  <p className="text-white font-bold text-lg">{selectedItem.metrekare}</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <Bed className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Oda Sayısı</p>
                  <p className="text-white font-bold text-lg">{selectedItem.oda}</p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/evmalikane" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>Ev & Malikane Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl shadow-2xl shadow-cyan-500/40">
              <Palmtree className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                SAHİL EVLERİ
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Deniz manzaralı sahil evleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mulkler.map((mulk, index) => (
              <div 
                key={mulk.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={mulk.resim} alt={mulk.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{mulk.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">{mulk.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(mulk.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-cyan-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2 mb-2">{mulk.aciklama}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-cyan-400">{mulk.metrekare}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-cyan-400">{mulk.oda}</span>
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

export default VipEvMalikaneSahil;
