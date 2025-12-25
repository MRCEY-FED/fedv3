import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, X, ChevronLeft, ChevronRight, Star, DollarSign, Gauge, Fuel, Settings } from 'lucide-react';

const VipAraclarSpor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const araclar = [
    {
      id: 1,
      isim: "Lamborghini Aventador",
      resim: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200",
      aciklama: "V12 motor, 700+ beygir gücü ile rüzgar gibi geçin. Dikkat çekici tasarımı ve muhteşem performansıyla sunucunun en prestijli aracı.",
      fiyat: "450.000$",
      hiz: "350 km/h",
      motor: "V12 6.5L",
      yildiz: 5
    },
    {
      id: 2,
      isim: "Ferrari 488 GTB",
      resim: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200",
      aciklama: "İtalyan mühendisliğinin zirvesi. Twin-turbo V8 motor ile muhteşem hızlanma ve eşsiz yol tutuş performansı.",
      fiyat: "380.000$",
      hiz: "330 km/h",
      motor: "V8 3.9L Twin-Turbo",
      yildiz: 5
    },
    {
      id: 3,
      isim: "McLaren 720S",
      resim: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200",
      aciklama: "Aerodinamik tasarım ve karbon fiber gövde. Yarış pistlerinden ilham alan teknoloji ile üstün performans.",
      fiyat: "420.000$",
      hiz: "341 km/h",
      motor: "V8 4.0L Twin-Turbo",
      yildiz: 5
    },
    {
      id: 4,
      isim: "Porsche 911 GT3 RS",
      resim: "https://images.unsplash.com/photo-1614162692292-7ac56d7f373e?w=1200",
      aciklama: "Pist odaklı tasarım, yüksek devirli atmosferik motor. Virajlarda rakipsiz hakimiyet ve keskin direksiyon hissi.",
      fiyat: "320.000$",
      hiz: "312 km/h",
      motor: "Flat-6 4.0L",
      yildiz: 4
    },
    {
      id: 5,
      isim: "Aston Martin DBS",
      resim: "https://images.unsplash.com/photo-1596994836684-64b766d76a0c?w=1200",
      aciklama: "İngiliz zarafeti ve güç bir arada. Gran Turismo ruhuyla uzun yolculuklar için ideal, lüks ve performans dengesi.",
      fiyat: "350.000$",
      hiz: "340 km/h",
      motor: "V12 5.2L Twin-Turbo",
      yildiz: 5
    },
    {
      id: 6,
      isim: "Nissan GT-R Nismo",
      resim: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200",
      aciklama: "Japon efsanesi Godzilla. AWD sistemi ile her koşulda üstün çekiş ve inanılmaz hızlanma performansı.",
      fiyat: "280.000$",
      hiz: "315 km/h",
      motor: "V6 3.8L Twin-Turbo",
      yildiz: 4
    },
    {
      id: 7,
      isim: "Chevrolet Corvette Z06",
      resim: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200",
      aciklama: "Amerikan kas otomobili efsanesi. V8 motorun gürlemesi ve agresif tasarımı ile dikkat çekin.",
      fiyat: "250.000$",
      hiz: "328 km/h",
      motor: "V8 5.5L",
      yildiz: 4
    },
    {
      id: 8,
      isim: "BMW M8 Competition",
      resim: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
      aciklama: "Alman mühendisliğinin spor yorumu. Konfor ve performansı bir arada sunan grand tourer.",
      fiyat: "290.000$",
      hiz: "305 km/h",
      motor: "V8 4.4L Twin-Turbo",
      yildiz: 4
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(araclar[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % araclar.length;
    setCurrentIndex(newIndex);
    setSelectedImage(araclar[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + araclar.length) % araclar.length;
    setCurrentIndex(newIndex);
    setSelectedImage(araclar[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <X className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]">
              <img src={selectedImage.resim} alt={selectedImage.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-white">{selectedImage.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(selectedImage.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedImage.aciklama}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                  <Gauge className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Max Hız</p>
                  <p className="text-white font-bold text-lg">{selectedImage.hiz}</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                  <Settings className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Motor</p>
                  <p className="text-white font-bold text-lg">{selectedImage.motor}</p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                  <DollarSign className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Fiyat</p>
                  <p className="text-white font-bold text-lg">{selectedImage.fiyat}</p>
                </div>
              </div>
              <div className="text-center text-gray-500 text-sm">
                {currentIndex + 1} / {araclar.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/araclar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            <span>Araç Kategorilerine Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-2xl shadow-red-500/40">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                SPOR ARAÇLAR
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Yüksek performanslı spor araç koleksiyonu - Fotoğraflara tıklayarak detayları görün
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {araclar.map((arac, index) => (
              <div 
                key={arac.id} 
                onClick={() => openModal(index)}
                className="group cursor-pointer bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={arac.resim} alt={arac.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg truncate">{arac.isim}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-red-400 font-semibold">{arac.fiyat}</span>
                      <div className="flex items-center gap-1">
                        {[...Array(arac.yildiz)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-red-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 text-sm line-clamp-2">{arac.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipAraclarSpor;
