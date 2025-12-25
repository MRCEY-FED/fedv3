import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Star, DollarSign, ShoppingBag, X, CheckCircle, ArrowLeft, Eye } from 'lucide-react';

const VipIsletmeler = () => {
  const [selectedUrun, setSelectedUrun] = useState(null);

  const urunler = [
    { id: 1, isim: "Küçük Market", fiyat: "300.000$", eskiFiyat: "400.000$", aciklama: "Pasif gelir sağlayan market", resim: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800", indirim: "25%", yildiz: 3, ozellikler: ["Günlük Gelir", "Kolay Yönetim", "Merkezi Konum"] },
    { id: 2, isim: "Benzin İstasyonu", fiyat: "600.000$", eskiFiyat: "750.000$", aciklama: "Yüksek cirolu benzinlik", resim: "https://images.unsplash.com/photo-1565620731-169ea9c3f8db?w=800", indirim: "20%", yildiz: 4, ozellikler: ["Yüksek Gelir", "Market Dahil", "Yıkama Dahil"] },
    { id: 3, isim: "Restoran", fiyat: "800.000$", eskiFiyat: "950.000$", aciklama: "Popüler lokasyonda restoran", resim: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", indirim: "16%", yildiz: 4, ozellikler: ["Yüksek Kapasite", "Bar Dahil", "VIP Bölüm"] },
    { id: 4, isim: "Gece Kulübü", fiyat: "2.000.000$", eskiFiyat: "2.500.000$", aciklama: "En popüler gece kulübü", resim: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800", indirim: "20%", yildiz: 5, ozellikler: ["Mega Gelir", "VIP Bölümler", "DJ Kabini", "Bar"] },
    { id: 5, isim: "Oto Galeri", fiyat: "1.500.000$", eskiFiyat: "1.800.000$", aciklama: "Lüks araç satış galerisi", resim: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800", indirim: "17%", yildiz: 5, ozellikler: ["Yüksek Kar Marjı", "Showroom", "Servis"] },
    { id: 6, isim: "Casino", fiyat: "10.000.000$", eskiFiyat: "12.000.000$", aciklama: "Devasa casino işletmesi", resim: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800", indirim: "17%", yildiz: 5, ozellikler: ["Mega Gelir", "Hotel Dahil", "Restoran", "VIP Salonlar"] }
  ];

  const colorClasses = { bg: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/40', text: 'text-rose-400', button: 'from-rose-500 to-pink-500' };

  const UrunModal = ({ urun, onClose }) => {
    if (!urun) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className={`relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border ${colorClasses.border} rounded-2xl overflow-hidden shadow-2xl`} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-56 md:h-72"><img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" /><div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 rounded-lg"><span className="text-white text-sm font-bold">-{urun.indirim}</span></div></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4"><h2 className="text-2xl md:text-3xl font-bold text-white">{urun.isim}</h2><div className="flex items-center gap-1">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${colorClasses.text} fill-current`} />))}</div></div>
              <p className="text-gray-300 text-lg mb-6">{urun.aciklama}</p>
              <div className="mb-6"><h3 className="text-white font-bold text-lg mb-3">Paket İçeriği</h3><div className="grid grid-cols-2 gap-2">{urun.ozellikler.map((ozellik, idx) => (<div key={idx} className={`flex items-center gap-2 p-2 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-lg`}><CheckCircle className={`w-4 h-4 ${colorClasses.text}`} /><span className="text-gray-300 text-sm">{ozellik}</span></div>))}</div></div>
              <div className={`bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-xl p-4 mb-6`}><div className="flex items-center justify-between"><div><span className="text-gray-500 text-lg line-through">{urun.eskiFiyat}</span><div className="flex items-center gap-2"><DollarSign className={`w-6 h-6 ${colorClasses.text}`} /><span className="text-white text-3xl font-black">{urun.fiyat}</span></div></div><div className={`px-3 py-1 bg-gradient-to-r ${colorClasses.button} rounded-lg`}><span className="text-white font-bold">{urun.indirim} İndirim</span></div></div></div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${colorClasses.button} text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg`}><ShoppingBag className="w-6 h-6" /><span>Satın Al</span></a>
              <p className="text-center text-gray-500 text-sm mt-3">Satın almak için Discord sunucumuza yönlendirileceksiniz</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {selectedUrun && <UrunModal urun={selectedUrun} onClose={() => setSelectedUrun(null)} />}
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store" className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl ${colorClasses.text} font-medium transition-all duration-300`}><ArrowLeft className="w-4 h-4" /><span>VIP Mağaza'ya Dön</span></Link>
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${colorClasses.button} rounded-2xl shadow-2xl shadow-rose-500/40`}><Building2 className="w-10 h-10 text-white" /></div>
            <h1 className="text-4xl md:text-6xl font-black mb-4"><span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">İŞLETMELER</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Gelir getiren işletmeler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urunler.map((urun) => (
              <div key={urun.id} onClick={() => setSelectedUrun(urun)} className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]`}>
                <div className="relative h-48 overflow-hidden"><img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute top-3 right-3 px-2 py-1 bg-red-500 rounded-lg"><span className="text-white text-xs font-bold">-{urun.indirim}</span></div><div className="absolute bottom-3 left-3"><div className="flex items-center gap-2"><DollarSign className={`w-5 h-5 ${colorClasses.text}`} /><span className="text-white text-xl font-black">{urun.fiyat}</span></div></div></div>
                <div className="p-4"><h3 className={`text-white font-bold text-lg mb-1 group-hover:${colorClasses.text} transition-colors`}>{urun.isim}</h3><div className="flex items-center gap-1 mb-2">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${colorClasses.text} fill-current`} />))}</div><p className="text-gray-400 text-sm line-clamp-2 mb-4">{urun.aciklama}</p><button className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colorClasses.button} text-white font-semibold rounded-xl transition-all`}><Eye className="w-4 h-4" /><span>Detayları Gör</span></button></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipIsletmeler;
