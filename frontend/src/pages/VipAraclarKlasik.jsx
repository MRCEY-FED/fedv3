import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, X, ChevronLeft, ChevronRight, Star, DollarSign, Gauge, Settings } from 'lucide-react';

const VipAraclarKlasik = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const araclar = [
    { id: 1, isim: "Ford Mustang 1967", resim: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200", aciklama: "Amerikan kas otomobili efsanesi. Fastback gövde yapısı ve V8 motorun gürlemesi ile zamansız bir klasik.", fiyat: "280.000$", hiz: "200 km/h", motor: "V8 289ci", yildiz: 5 },
    { id: 2, isim: "Chevrolet Camaro SS 1969", resim: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200", aciklama: "Altın çağın simgesi. Big Block motor seçeneği ve agresif tasarımı ile koleksiyoncuların gözdesi.", fiyat: "320.000$", hiz: "210 km/h", motor: "V8 396ci", yildiz: 5 },
    { id: 3, isim: "Porsche 911 Carrera RS 1973", resim: "https://images.unsplash.com/photo-1614162692292-7ac56d7f373e?w=1200", aciklama: "Porsche efsanesinin başlangıcı. Hafifletilmiş gövde ve hava soğutmalı flat-6 motor ile pist performansı.", fiyat: "450.000$", hiz: "245 km/h", motor: "Flat-6 2.7L", yildiz: 5 },
    { id: 4, isim: "Mercedes-Benz 300SL Gullwing", resim: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200", aciklama: "Martı kanadı kapıları ile ikonik tasarım. Yakıt enjeksiyonlu ilk seri üretim araç olarak tarihe geçti.", fiyat: "850.000$", hiz: "260 km/h", motor: "I6 3.0L", yildiz: 5 },
    { id: 5, isim: "Jaguar E-Type 1961", resim: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200", aciklama: "Enzo Ferrari'nin 'Dünyanın en güzel arabası' dediği efsane. Uzun kaput ve zarif hatlar.", fiyat: "380.000$", hiz: "240 km/h", motor: "I6 3.8L", yildiz: 5 },
    { id: 6, isim: "Dodge Charger R/T 1970", resim: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200", aciklama: "Mopar efsanesi ve kas otomobili kralı. HEMI motor seçeneği ile eşsiz güç ve karizma.", fiyat: "350.000$", hiz: "220 km/h", motor: "V8 440ci", yildiz: 5 }
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
          <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[50vh]"><img src={selectedImage.resim} alt={selectedImage.isim} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" /></div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4"><h2 className="text-3xl font-bold text-white">{selectedImage.isim}</h2><div className="flex items-center gap-1">{[...Array(selectedImage.yildiz)].map((_, i) => (<Star key={i} className="w-5 h-5 text-purple-400 fill-current" />))}</div></div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedImage.aciklama}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center"><Gauge className="w-6 h-6 text-purple-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Max Hız</p><p className="text-white font-bold text-lg">{selectedImage.hiz}</p></div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center"><Settings className="w-6 h-6 text-purple-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Motor</p><p className="text-white font-bold text-lg">{selectedImage.motor}</p></div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center"><DollarSign className="w-6 h-6 text-purple-400 mx-auto mb-2" /><p className="text-gray-400 text-sm">Fiyat</p><p className="text-white font-bold text-lg">{selectedImage.fiyat}</p></div>
              </div>
              <div className="text-center text-gray-500 text-sm">{currentIndex + 1} / {araclar.length}</div>
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store/araclar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 font-medium transition-all duration-300"><ArrowLeft className="w-4 h-4" /><span>Araç Kategorilerine Dön</span></Link>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-2xl shadow-purple-500/40"><Clock className="w-10 h-10 text-white" /></div>
            <h1 className="text-4xl md:text-6xl font-black mb-4"><span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">KLASİK ARAÇLAR</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Nadir klasik araç koleksiyonu - Fotoğraflara tıklayarak detayları görün</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {araclar.map((arac, index) => (
              <div key={arac.id} onClick={() => openModal(index)} className="group cursor-pointer bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                <div className="relative h-48 overflow-hidden"><img src={arac.resim} alt={arac.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-3 left-3 right-3"><h3 className="text-white font-bold text-lg truncate">{arac.isim}</h3><div className="flex items-center justify-between"><span className="text-purple-400 font-semibold">{arac.fiyat}</span><div className="flex items-center gap-1">{[...Array(arac.yildiz)].map((_, i) => (<Star key={i} className="w-3 h-3 text-purple-400 fill-current" />))}</div></div></div></div>
                <div className="p-4"><p className="text-gray-400 text-sm line-clamp-2">{arac.aciklama}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipAraclarKlasik;
