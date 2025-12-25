import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Star, DollarSign, ShoppingBag, X, CheckCircle, ArrowLeft, Eye, Zap } from 'lucide-react';

const VipAvantajli = () => {
  const [selectedUrun, setSelectedUrun] = useState(null);

  const urunler = [
    { id: 1, isim: "Haftalık Özel", fiyat: "200.000$", eskiFiyat: "350.000$", aciklama: "Bu hafta özel fırsat paketi", resim: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800", indirim: "43%", yildiz: 5, ozellikler: ["Araç", "Silah Seti", "100.000$ Bonus", "Kıyafetler"] },
    { id: 2, isim: "Arkadaş Paketi (2 Kişilik)", fiyat: "500.000$", eskiFiyat: "800.000$", aciklama: "2 kişi için avantajlı paket", resim: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800", indirim: "38%", yildiz: 5, ozellikler: ["2x Her Şey", "Takım Araçları", "Ortak Ev", "Bonus Para"] },
    { id: 3, isim: "Sezon Paketi", fiyat: "1.500.000$", eskiFiyat: "2.200.000$", aciklama: "3 aylık sezon boyunca avantajlar", resim: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800", indirim: "32%", yildiz: 5, ozellikler: ["3 Ay VIP", "Her Ay Yeni Araç", "Aylık Bonus", "Özel Etkinlikler"] },
    { id: 4, isim: "Black Friday Paketi", fiyat: "2.500.000$", eskiFiyat: "5.000.000$", aciklama: "Yılın en büyük indirimi", resim: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800", indirim: "50%", yildiz: 5, ozellikler: ["10 Araç", "Malikane", "6 Ay VIP", "2.000.000$ Bonus"] },
    { id: 5, isim: "Yılbaşı Özel Paketi", fiyat: "3.000.000$", eskiFiyat: "4.500.000$", aciklama: "Yeni yıl kutlama paketi", resim: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800", indirim: "33%", yildiz: 5, ozellikler: ["Özel Araçlar", "Parti Evi", "Havai Fişek", "VIP Platinum"] },
    { id: 6, isim: "Mega Tasarruf Paketi", fiyat: "8.000.000$", eskiFiyat: "15.000.000$", aciklama: "En yüksek tasarruf fırsatı", resim: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800", indirim: "47%", yildiz: 5, ozellikler: ["Her Şey Dahil", "Lifetime VIP", "Tüm Araçlar", "Tüm Evler", "Tüm İşletmeler"] }
  ];

  const colorClasses = { bg: 'from-violet-500/20 to-fuchsia-500/20', border: 'border-violet-500/40', text: 'text-violet-400', button: 'from-violet-500 to-fuchsia-500' };

  const UrunModal = ({ urun, onClose }) => {
    if (!urun) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className={`relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border ${colorClasses.border} rounded-2xl overflow-hidden shadow-2xl`} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-56 md:h-72"><img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" /><div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 rounded-lg flex items-center gap-1"><Zap className="w-4 h-4 text-white" /><span className="text-white text-sm font-bold">-{urun.indirim}</span></div></div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4"><h2 className="text-2xl md:text-3xl font-bold text-white">{urun.isim}</h2><div className="flex items-center gap-1">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${colorClasses.text} fill-current`} />))}</div></div>
              <p className="text-gray-300 text-lg mb-6">{urun.aciklama}</p>
              <div className="mb-6"><h3 className="text-white font-bold text-lg mb-3">Paket İçeriği</h3><div className="grid grid-cols-2 gap-2">{urun.ozellikler.map((ozellik, idx) => (<div key={idx} className={`flex items-center gap-2 p-2 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-lg`}><CheckCircle className={`w-4 h-4 ${colorClasses.text}`} /><span className="text-gray-300 text-sm">{ozellik}</span></div>))}</div></div>
              <div className={`bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-xl p-4 mb-6`}><div className="flex items-center justify-between"><div><span className="text-gray-500 text-lg line-through">{urun.eskiFiyat}</span><div className="flex items-center gap-2"><DollarSign className={`w-6 h-6 ${colorClasses.text}`} /><span className="text-white text-3xl font-black">{urun.fiyat}</span></div></div><div className={`px-3 py-1 bg-gradient-to-r ${colorClasses.button} rounded-lg flex items-center gap-1`}><Zap className="w-4 h-4 text-white" /><span className="text-white font-bold">{urun.indirim} İndirim</span></div></div></div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store" className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-xl ${colorClasses.text} font-medium transition-all duration-300`}><ArrowLeft className="w-4 h-4" /><span>VIP Mağaza'ya Dön</span></Link>
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${colorClasses.button} rounded-2xl shadow-2xl shadow-violet-500/40`}><Gift className="w-10 h-10 text-white" /></div>
            <h1 className="text-4xl md:text-6xl font-black mb-4"><span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">AVANTAJLI PAKETLER</span></h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Özel indirimli fırsat paketleri</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urunler.map((urun) => (
              <div key={urun.id} onClick={() => setSelectedUrun(urun)} className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]`}>
                <div className="relative h-48 overflow-hidden"><img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute top-3 right-3 px-2 py-1 bg-red-500 rounded-lg flex items-center gap-1"><Zap className="w-3 h-3 text-white" /><span className="text-white text-xs font-bold">-{urun.indirim}</span></div><div className="absolute bottom-3 left-3"><div className="flex items-center gap-2"><DollarSign className={`w-5 h-5 ${colorClasses.text}`} /><span className="text-white text-xl font-black">{urun.fiyat}</span></div></div></div>
                <div className="p-4"><h3 className={`text-white font-bold text-lg mb-1 group-hover:${colorClasses.text} transition-colors`}>{urun.isim}</h3><div className="flex items-center gap-1 mb-2">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${colorClasses.text} fill-current`} />))}</div><p className="text-gray-400 text-sm line-clamp-2 mb-4">{urun.aciklama}</p><button className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colorClasses.button} text-white font-semibold rounded-xl transition-all`}><Eye className="w-4 h-4" /><span>Detayları Gör</span></button></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipAvantajli;
