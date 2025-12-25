import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Star, DollarSign, ArrowLeft, ArrowRight, Building, Castle, Palmtree, Building2, Warehouse } from 'lucide-react';

const VipEvMalikane = () => {
  const kategoriler = [
    { 
      id: 'daire', 
      isim: "Daireler", 
      fiyat: "300.000$'dan", 
      eskiFiyat: "400.000$", 
      aciklama: "Şehir merkezinde modern daireler", 
      resim: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", 
      indirim: "25%", 
      yildiz: 4,
      icon: Building,
      renk: 'blue',
      evSayisi: 8,
      path: '/vip-store/evmalikane/daire'
    },
    { 
      id: 'villa', 
      isim: "Villalar", 
      fiyat: "1.500.000$'dan", 
      eskiFiyat: "1.800.000$", 
      aciklama: "Lüks bahçeli villalar", 
      resim: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", 
      indirim: "17%", 
      yildiz: 5,
      icon: Home,
      renk: 'emerald',
      evSayisi: 7,
      path: '/vip-store/evmalikane/villa'
    },
    { 
      id: 'malikane', 
      isim: "Malikâneler", 
      fiyat: "5.000.000$'dan", 
      eskiFiyat: "6.000.000$", 
      aciklama: "Devasa lüks malikâneler", 
      resim: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", 
      indirim: "17%", 
      yildiz: 5,
      icon: Castle,
      renk: 'purple',
      evSayisi: 5,
      path: '/vip-store/evmalikane/malikane'
    },
    { 
      id: 'sahil', 
      isim: "Sahil Evleri", 
      fiyat: "2.000.000$'dan", 
      eskiFiyat: "2.500.000$", 
      aciklama: "Deniz manzaralı sahil evleri", 
      resim: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800", 
      indirim: "20%", 
      yildiz: 5,
      icon: Palmtree,
      renk: 'cyan',
      evSayisi: 6,
      path: '/vip-store/evmalikane/sahil'
    },
    { 
      id: 'penthouse', 
      isim: "Penthouse", 
      fiyat: "3.000.000$'dan", 
      eskiFiyat: "3.500.000$", 
      aciklama: "Şehir manzaralı penthouse daireler", 
      resim: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", 
      indirim: "14%", 
      yildiz: 5,
      icon: Building2,
      renk: 'amber',
      evSayisi: 5,
      path: '/vip-store/evmalikane/penthouse'
    },
    { 
      id: 'ozel', 
      isim: "Özel Mülkler", 
      fiyat: "10.000.000$'dan", 
      eskiFiyat: "12.000.000$", 
      aciklama: "Ada, kale ve özel mülkler", 
      resim: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", 
      indirim: "17%", 
      yildiz: 5,
      icon: Warehouse,
      renk: 'rose',
      evSayisi: 4,
      path: '/vip-store/evmalikane/ozel'
    }
  ];

  const getRenkClasses = (renk) => {
    const renkler = {
      blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', text: 'text-blue-400', button: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/30' },
      emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', text: 'text-emerald-400', button: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/30' },
      purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', text: 'text-purple-400', button: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/30' },
      cyan: { bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/40', text: 'text-cyan-400', button: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-500/30' },
      amber: { bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/40', text: 'text-amber-400', button: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/30' },
      rose: { bg: 'from-rose-500/20 to-rose-600/10', border: 'border-rose-500/40', text: 'text-rose-400', button: 'from-rose-500 to-rose-600', glow: 'shadow-rose-500/30' },
    };
    return renkler[renk] || renkler.emerald;
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            to="/vip-store" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VIP Mağaza'ya Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl shadow-emerald-500/40">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                EV & MALİKANE
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Lüks konut kategorileri
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400 font-semibold">6 Kategori</span>
              </div>
              <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full">
                <span className="text-teal-400 font-semibold">35+ Mülk</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategoriler.map((kategori) => {
              const Icon = kategori.icon;
              const renkClass = getRenkClasses(kategori.renk);
              
              return (
                <Link 
                  key={kategori.id} 
                  to={kategori.path}
                  className={`group bg-gradient-to-br ${renkClass.bg} border ${renkClass.border} rounded-2xl overflow-hidden hover:shadow-xl ${renkClass.glow} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={kategori.resim} 
                      alt={kategori.isim} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500 rounded-lg">
                      <span className="text-white text-sm font-bold">-{kategori.indirim}</span>
                    </div>

                    <div className={`absolute top-3 left-3 w-12 h-12 bg-gradient-to-br ${renkClass.button} rounded-xl flex items-center justify-center shadow-lg ${renkClass.glow}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400 text-sm line-through">{kategori.eskiFiyat}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className={`w-5 h-5 ${renkClass.text}`} />
                        <span className="text-white text-2xl font-black">{kategori.fiyat}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
                      <span className="text-white font-semibold">{kategori.evSayisi} Mülk</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-xl">{kategori.isim}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(kategori.yildiz)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${renkClass.text} fill-current`} />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4">{kategori.aciklama}</p>
                    
                    <div className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${renkClass.button} text-white font-semibold rounded-xl transition-all group-hover:shadow-lg ${renkClass.glow}`}>
                      <span>Mülkleri Görüntüle</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipEvMalikane;
