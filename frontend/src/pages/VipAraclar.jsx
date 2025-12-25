import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Star, DollarSign, ArrowLeft, ArrowRight, Zap, Crown, Bike, Mountain, Clock, Rocket } from 'lucide-react';

const VipAraclar = () => {
  const kategoriler = [
    { 
      id: 'spor', 
      isim: "Spor Araçlar", 
      fiyat: "800.000$", 
      eskiFiyat: "1.000.000$", 
      aciklama: "Yüksek performanslı spor araç koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800", 
      indirim: "20%", 
      yildiz: 5,
      icon: Zap,
      renk: 'red',
      aracSayisi: 8,
      path: '/vip-store/araclar/spor'
    },
    { 
      id: 'luks', 
      isim: "Lüks Sedanlar", 
      fiyat: "600.000$", 
      eskiFiyat: "750.000$", 
      aciklama: "Premium lüks sedan koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", 
      indirim: "20%", 
      yildiz: 4,
      icon: Crown,
      renk: 'amber',
      aracSayisi: 6,
      path: '/vip-store/araclar/luks'
    },
    { 
      id: 'motorsiklet', 
      isim: "Motorsikletler", 
      fiyat: "350.000$", 
      eskiFiyat: "450.000$", 
      aciklama: "Özel motorsiklet koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800", 
      indirim: "22%", 
      yildiz: 4,
      icon: Bike,
      renk: 'orange',
      aracSayisi: 10,
      path: '/vip-store/araclar/motorsiklet'
    },
    { 
      id: 'suv', 
      isim: "SUV & Jeep", 
      fiyat: "700.000$", 
      eskiFiyat: "850.000$", 
      aciklama: "Arazi ve SUV araç koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800", 
      indirim: "18%", 
      yildiz: 4,
      icon: Mountain,
      renk: 'green',
      aracSayisi: 7,
      path: '/vip-store/araclar/suv'
    },
    { 
      id: 'klasik', 
      isim: "Klasik Araçlar", 
      fiyat: "1.200.000$", 
      eskiFiyat: "1.500.000$", 
      aciklama: "Nadir klasik araç koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800", 
      indirim: "20%", 
      yildiz: 5,
      icon: Clock,
      renk: 'purple',
      aracSayisi: 6,
      path: '/vip-store/araclar/klasik'
    },
    { 
      id: 'super', 
      isim: "Süper Araçlar", 
      fiyat: "2.500.000$", 
      eskiFiyat: "3.000.000$", 
      aciklama: "En hızlı süper araç koleksiyonu", 
      resim: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800", 
      indirim: "17%", 
      yildiz: 5,
      icon: Rocket,
      renk: 'blue',
      aracSayisi: 5,
      path: '/vip-store/araclar/super'
    }
  ];

  const getRenkClasses = (renk) => {
    const renkler = {
      red: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', text: 'text-red-400', button: 'from-red-500 to-red-600', glow: 'shadow-red-500/30' },
      amber: { bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/40', text: 'text-amber-400', button: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/30' },
      orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', text: 'text-orange-400', button: 'from-orange-500 to-orange-600', glow: 'shadow-orange-500/30' },
      green: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', text: 'text-green-400', button: 'from-green-500 to-green-600', glow: 'shadow-green-500/30' },
      purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', text: 'text-purple-400', button: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/30' },
      blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', text: 'text-blue-400', button: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/30' },
    };
    return renkler[renk] || renkler.blue;
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/vip-store" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>VIP Mağaza'ya Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/40">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                VIP ARAÇLAR
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-4">
              Spor, lüks ve koleksiyon araç kategorileri
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 font-semibold">6 Kategori</span>
              </div>
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <span className="text-cyan-400 font-semibold">42+ Araç</span>
              </div>
            </div>
          </div>

          {/* Category Cards */}
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
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={kategori.resim} 
                      alt={kategori.isim} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-red-500 rounded-lg">
                      <span className="text-white text-sm font-bold">-{kategori.indirim}</span>
                    </div>

                    {/* Icon Badge */}
                    <div className={`absolute top-3 left-3 w-12 h-12 bg-gradient-to-br ${renkClass.button} rounded-xl flex items-center justify-center shadow-lg ${renkClass.glow}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Price on Image */}
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400 text-sm line-through">{kategori.eskiFiyat}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className={`w-5 h-5 ${renkClass.text}`} />
                        <span className="text-white text-2xl font-black">{kategori.fiyat}</span>
                      </div>
                    </div>

                    {/* Vehicle Count */}
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
                      <span className="text-white font-semibold">{kategori.aracSayisi} Araç</span>
                    </div>
                  </div>

                  {/* Content */}
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
                    
                    {/* View Gallery Button */}
                    <div className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${renkClass.button} text-white font-semibold rounded-xl transition-all group-hover:shadow-lg ${renkClass.glow}`}>
                      <span>Galeriyi Görüntüle</span>
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

export default VipAraclar;
