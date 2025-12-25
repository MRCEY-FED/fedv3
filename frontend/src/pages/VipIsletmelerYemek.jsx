import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, UtensilsCrossed, X, ChevronLeft, ChevronRight, Star, DollarSign, Users, TrendingUp, MapPin } from 'lucide-react';

const VipIsletmelerYemek = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isletmeler = [
    {
      id: 1,
      isim: "Lüks Restoran",
      resim: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
      aciklama: "Şehrin en prestijli restoranı. Fine dining deneyimi, özel şef menüsü ve VIP bölümler ile üst düzey müşteri kitlesine hitap edin.",
      fiyat: "1.200.000$",
      gelir: "Günlük 15.000$",
      kapasite: "120 Kişi",
      konum: "Vinewood",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Fast Food Zinciri",
      resim: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
      aciklama: "Yoğun müşteri trafiği olan fast food restoranı. Drive-thru hizmeti, hızlı servis ve yüksek cirolu işletme.",
      fiyat: "600.000$",
      gelir: "Günlük 8.000$",
      kapasite: "80 Kişi",
      konum: "Downtown",
      yildiz: 4
    },
    {
      id: 3,
      isim: "Deniz Ürünleri Restoranı",
      resim: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
      aciklama: "Sahil kenarında muhteşem manzaralı deniz ürünleri restoranı. Taze ürünler, romantik atmosfer ve özel etkinlikler.",
      fiyat: "950.000$",
      gelir: "Günlük 12.000$",
      kapasite: "100 Kişi",
      konum: "Vespucci Beach",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Cafe & Bistro",
      resim: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200",
      aciklama: "Şık ve modern cafe. Kahve çeşitleri, hafif yemekler ve tatlılar. Genç ve dinamik müşteri kitlesi.",
      fiyat: "450.000$",
      gelir: "Günlük 5.000$",
      kapasite: "60 Kişi",
      konum: "Legion Square",
      yildiz: 4
    },
    {
      id: 5,
      isim: "Steakhouse",
      resim: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1200",
      aciklama: "Premium et restoranı. Dry-aged etler, özel şarap mahzeni ve iş yemekleri için ideal ortam.",
      fiyat: "1.100.000$",
      gelir: "Günlük 14.000$",
      kapasite: "90 Kişi",
      konum: "Rockford Hills",
      yildiz: 5
    },
    {
      id: 6,
      isim: "Rooftop Bar",
      resim: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200",
      aciklama: "Şehir manzaralı çatı katı bar. Kokteyl menüsü, DJ performansları ve VIP masa rezervasyonu.",
      fiyat: "800.000$",
      gelir: "Günlük 10.000$",
      kapasite: "150 Kişi",
      konum: "Downtown",
      yildiz: 5
    },
    {
      id: 7,
      isim: "Pizza & İtalyan",
      resim: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
      aciklama: "Otantik İtalyan mutfağı. Odun fırınında pizza, ev yapımı makarna ve aile dostu atmosfer.",
      fiyat: "550.000$",
      gelir: "Günlük 6.500$",
      kapasite: "70 Kişi",
      konum: "Little Seoul",
      yildiz: 4
    },
    {
      id: 8,
      isim: "Sushi Bar",
      resim: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200",
      aciklama: "Japon mutfağı uzmanı. Taze sushi, sashimi ve teppanyaki gösterileri ile benzersiz deneyim.",
      fiyat: "750.000$",
      gelir: "Günlük 9.000$",
      kapasite: "50 Kişi",
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

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedItem.resim} alt={selectedItem.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedItem.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedItem.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.aciklama}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedItem.fiyat}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <TrendingUp className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Gelir</p>
                  <p className="text-white font-bold text-lg">{selectedItem.gelir}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Kapasite</p>
                  <p className="text-white font-bold text-lg">{selectedItem.kapasite}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Konum</p>
                  <p className="text-white font-bold text-lg">{selectedItem.konum}</p>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/isletmeler" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-orange-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>İşletme Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/40">
              <UtensilsCrossed className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                YEME & İÇME
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Restoran, kafe ve bar işletmeleri - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isletmeler.map((isletme, index) => (
              <div 
                key={isletme.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{isletme.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-orange-400 font-semibold">{isletme.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(isletme.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-orange-400 fill-current" />
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

export default VipIsletmelerYemek;
