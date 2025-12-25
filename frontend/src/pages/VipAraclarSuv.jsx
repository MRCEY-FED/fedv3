import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mountain, X, ChevronLeft, ChevronRight, Star, DollarSign, Gauge, Settings } from 'lucide-react';

const VipAraclarSuv = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const araclar = [
    { id: 1, isim: "Range Rover SVAutobiography", resim: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200", aciklama: "İngiliz lüksü ve arazi kabiliyeti bir arada. V8 supercharged motor ile hem şehirde hem arazide üstün performans.", fiyat: "420.000$", hiz: "250 km/h", motor: "V8 5.0L SC", yildiz: 5 },
    { id: 2, isim: "Mercedes-AMG G63", resim: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=1200", aciklama: "Efsanevi G-Class'ın AMG versiyonu. Kare tasarım, V8 bi-turbo motor ve ikonik görünüm.", fiyat: "380.000$", hiz: "220 km/h", motor: "V8 4.0L Bi-Turbo", yildiz: 5 },
    { id: 3, isim: "Lamborghini Urus", resim: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200", aciklama: "Süper SUV kategorisinin lideri. 650 HP güç ile dünyanın en hızlı SUV'u olma iddiası.", fiyat: "480.000$", hiz: "305 km/h", motor: "V8 4.0L Twin-Turbo", yildiz: 5 },
    { id: 4, isim: "Bentley Bentayga", resim: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200", aciklama: "En lüks SUV deneyimi. W12 motor, el yapımı iç mekan ve benzersiz sürüş konforu.", fiyat: "450.000$", hiz: "306 km/h", motor: "W12 6.0L TSI", yildiz: 5 },
    { id: 5, isim: "Jeep Wrangler Rubicon", resim: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200", aciklama: "Off-road efsanesi. Dana aks sistemi, kilitlenebilir diferansiyeller ve çıkarılabilir tavan.", fiyat: "180.000$", hiz: "180 km/h", motor: "V6 3.6L", yildiz: 4 },
    { id: 6, isim: "BMW X7 M60i", resim: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=1200", aciklama: "Büyük aile SUV'unun sportif yorumu. xDrive sistemi ve M performans paketi ile dinamik sürüş.", fiyat: "280.000$", hiz: "250 km/h", motor: "V8 4.4L", yildiz: 4 },
    { id: 7, isim: "Porsche Cayenne Turbo GT", resim: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200", aciklama: "SUV'lar arasında pist performansı. Nürburgring rekoru kıran Cayenne'in en güçlü versiyonu.", fiyat: "350.000$", hiz: "300 km/h", motor: "V8 4.0L Twin-Turbo", yildiz: 5 }
  ];

  const openModal = (index) => { setCurrentIndex(index); setSelectedImage(araclar[index]); };
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => { const i = (currentIndex + 1) % araclar.length; setCurrentIndex(i); setSelectedImage(araclar[i]); };
  const prevImage = () => { const i = (currentIndex - 1 + araclar.length) % araclar.length; setCurrentIndex(i); setSelectedImage(araclar[i]); };

  return (
    <div className="min-h-screen bg-black">
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"><X className="w-6 h-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"><ChevronRight className="w-6 h-6" /></button>
          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]"><img src={selectedImage.resim} alt={selectedImage.isim} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4"><h2 className="text-3xl font-bold text-white">{selectedImage.isim}</h2><div className="flex items-center gap-1">{[...Array(selectedImage.yildiz)].map((_, i) => (<Star key={i} className="w-5 h-5 text-green-400 fill-current" />))}</div></div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedImage.aciklama}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center"><Gauge className="w-6 h-6 text-green-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Max Hız</p><p className="text-white font-bold text-lg">{selectedImage.hiz}</p></div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center"><Settings className="w-6 h-6 text-green-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Motor</p><p className="text-white font-bold text-lg">{selectedImage.motor}</p></div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center"><DollarSign className="w-6 h-6 text-green-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Fiyat</p><p className="text-white font-bold text-lg">{selectedImage.fiyat}</p></div>
              </div>
              <div className="text-center text-gray-500 text-sm">{currentIndex + 1} / {araclar.length}</div>
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/araclar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 font-medium transition-all duration-300"><ArrowLeft className="w-4 h-4" /><span>Araç Kategorilerine Dön</span></Link>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl shadow-green-500/40"><Mountain className="w-10 h-10 text-white" /></div>
            <h1 className="text-4xl md:text-6xl font-black mb-4"><span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">SUV & JEEP</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Arazi ve SUV araç koleksiyonu - Fotoğraflara tıklayarak detayları görün</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {araclar.map((arac, index) => (
              <div key={arac.id} onClick={() => openModal(index)} className="group cursor-pointer bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden"><img src={arac.resim} alt={arac.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-3 left-3 right-3"><h3 className="text-white font-bold text-lg truncate">{arac.isim}</h3><div className="flex items-center justify-between"><span className="text-green-400 font-semibold">{arac.fiyat}</span><div className="flex items-center gap-1">{[...Array(arac.yildiz)].map((_, i) => (<Star key={i} className="w-3 h-3 text-green-400 fill-current" />))}</div></div></div></div>
                <div className="p-4"><p className="text-gray-400 text-sm line-clamp-2">{arac.aciklama}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipAraclarSuv;
