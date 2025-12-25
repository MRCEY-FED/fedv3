import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bike, X, ChevronLeft, ChevronRight, Star, DollarSign, Gauge, Settings } from 'lucide-react';

const VipAraclarMotorsiklet = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const araclar = [
    { id: 1, isim: "Ducati Panigale V4", resim: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200", aciklama: "İtalyan yarış makinesi. MotoGP teknolojisi sokağa taşındı. V4 motor ile inanılmaz güç ve çeviklik.", fiyat: "120.000$", hiz: "300 km/h", motor: "V4 1103cc", yildiz: 5 },
    { id: 2, isim: "Kawasaki Ninja H2R", resim: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1200", aciklama: "Supercharged canavar. Dünyanın en hızlı seri üretim motosikleti. Karbon fiber gövde ve 310+ HP güç.", fiyat: "150.000$", hiz: "400 km/h", motor: "SC 998cc", yildiz: 5 },
    { id: 3, isim: "BMW S1000RR", resim: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1200", aciklama: "Alman hassasiyeti. Elektronik süspansiyon, traction control ve launch control ile tam donanım.", fiyat: "95.000$", hiz: "303 km/h", motor: "I4 999cc", yildiz: 5 },
    { id: 4, isim: "Yamaha YZF-R1M", resim: "https://images.unsplash.com/photo-1571646750472-e8c044389e88?w=1200", aciklama: "Crossplane krank mili teknolojisi. Özel karbon fiber parçalar ve Öhlins elektronik süspansiyon.", fiyat: "85.000$", hiz: "299 km/h", motor: "I4 998cc", yildiz: 4 },
    { id: 5, isim: "Honda CBR1000RR-R", resim: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1200", aciklama: "Fireblade efsanesi yeniden. MotoGP deneyiminden doğan aerodinamik tasarım ve yüksek devir performansı.", fiyat: "80.000$", hiz: "299 km/h", motor: "I4 1000cc", yildiz: 4 },
    { id: 6, isim: "Aprilia RSV4 Factory", resim: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200", aciklama: "WSBK şampiyonu DNA'sı. V4 motor konfigürasyonu ile kompakt tasarım ve üstün viraj performansı.", fiyat: "90.000$", hiz: "305 km/h", motor: "V4 1099cc", yildiz: 4 },
    { id: 7, isim: "Harley-Davidson Fat Boy", resim: "https://images.unsplash.com/photo-1558980664-769d59546b3d?w=1200", aciklama: "Amerikan efsanesi. Milwaukee-Eight motor ile güçlü tork ve klasik cruiser görünümü.", fiyat: "75.000$", hiz: "180 km/h", motor: "V-Twin 1868cc", yildiz: 4 },
    { id: 8, isim: "Triumph Speed Triple 1200", resim: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=1200", aciklama: "İngiliz naked bike efsanesi. Üç silindirli motor sesi ve agresif streetfighter görünümü.", fiyat: "65.000$", hiz: "250 km/h", motor: "I3 1160cc", yildiz: 4 },
    { id: 9, isim: "KTM 1290 Super Duke R", resim: "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=1200", aciklama: "The Beast lakaplı canavar. V-Twin motor ile inanılmaz tork ve hafif şasi ile çeviklik.", fiyat: "70.000$", hiz: "280 km/h", motor: "V-Twin 1301cc", yildiz: 5 },
    { id: 10, isim: "MV Agusta F4 RC", resim: "https://images.unsplash.com/photo-1558980664-1db506751c6c?w=1200", aciklama: "İtalyan sanat eseri. El yapımı egzoz sistemi ve özel boyama seçenekleri ile koleksiyon parçası.", fiyat: "130.000$", hiz: "302 km/h", motor: "I4 998cc", yildiz: 5 }
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
          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]"><img src={selectedImage.resim} alt={selectedImage.isim} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4"><h2 className="text-3xl font-bold text-white">{selectedImage.isim}</h2><div className="flex items-center gap-1">{[...Array(selectedImage.yildiz)].map((_, i) => (<Star key={i} className="w-5 h-5 text-orange-400 fill-current" />))}</div></div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedImage.aciklama}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center"><Gauge className="w-6 h-6 text-orange-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Max Hız</p><p className="text-white font-bold text-lg">{selectedImage.hiz}</p></div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center"><Settings className="w-6 h-6 text-orange-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Motor</p><p className="text-white font-bold text-lg">{selectedImage.motor}</p></div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 text-center"><DollarSign className="w-6 h-6 text-orange-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Fiyat</p><p className="text-white font-bold text-lg">{selectedImage.fiyat}</p></div>
              </div>
              <div className="text-center text-gray-500 text-sm">{currentIndex + 1} / {araclar.length}</div>
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/araclar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-orange-400 font-medium transition-all duration-300"><ArrowLeft className="w-4 h-4" /><span>Araç Kategorilerine Dön</span></Link>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/40"><Bike className="w-10 h-10 text-white" /></div>
            <h1 className="text-4xl md:text-6xl font-black mb-4"><span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">MOTORSİKLETLER</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Özel motorsiklet koleksiyonu - Fotoğraflara tıklayarak detayları görün</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {araclar.map((arac, index) => (
              <div key={arac.id} onClick={() => openModal(index)} className="group cursor-pointer bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden"><img src={arac.resim} alt={arac.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-3 left-3 right-3"><h3 className="text-white font-bold text-lg truncate">{arac.isim}</h3><div className="flex items-center justify-between"><span className="text-orange-400 font-semibold">{arac.fiyat}</span><div className="flex items-center gap-1">{[...Array(arac.yildiz)].map((_, i) => (<Star key={i} className="w-3 h-3 text-orange-400 fill-current" />))}</div></div></div></div>
                <div className="p-4"><p className="text-gray-400 text-sm line-clamp-2">{arac.aciklama}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipAraclarMotorsiklet;
