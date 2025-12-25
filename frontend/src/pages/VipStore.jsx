import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, User, Car, Home, Package, Building2, Gift, ArrowLeft, Sparkles, Eye, Star, ChevronRight } from 'lucide-react';

const VipStore = () => {
  const categories = [
    { 
      id: 'kisisel', 
      name: 'VİP KİŞİSEL', 
      icon: User, 
      color: 'purple',
      path: '/vip-store/kisisel',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/99664825-a521-440f-a5cd-f53990cd01e6.png', 
      aciklama: 'Kişisel VIP Özellikleri ve ayrıcalıkları sizi bekliyor.',
      detay: 'Lifetime VIP ile özel ayrıcalıklar kazanın.',
      urunSayisi: 6,
      enPopuler: 'VIP Kişisel Mağaza',
      fiyatAraligi: '300₺ - 5000₺'
    },
    { 
      id: 'araclar', 
      name: 'ARAÇLAR', 
      icon: Car, 
      color: 'blue',
      path: '/vip-store/araclar',
      resim: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', 
      aciklama: 'Spor ve lüks araç paketleri',
      detay: 'Spor arabalar, lüks sedanlar, motorsikletler, SUV\'lar ve klasik araçlardan oluşan özel koleksiyonlar.',
      urunSayisi: 6,
      enPopuler: 'Süper Araç Paketi',
      fiyatAraligi: '350.000$ - 2.500.000$'
    },
    { 
      id: 'evmalikane', 
      name: 'EV & MALİKANE', 
      icon: Home, 
      color: 'emerald',
      path: '/vip-store/evmalikane',
      resim: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', 
      aciklama: 'Villalar, daireler ve malikâneler',
      detay: 'Şehir merkezinde daireler, Vinewood villaları, sahil evleri, penthouse\'lar ve özel adalar.',
      urunSayisi: 6,
      enPopuler: 'Vinewood Villa',
      fiyatAraligi: '500.000$ - 15.000.000$'
    },
    { 
      id: 'paketler', 
      name: 'PAKETLER', 
      icon: Package, 
      color: 'amber',
      path: '/vip-store/paketler',
      resim: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800', 
      aciklama: 'Kombo ve başlangıç paketleri',
      detay: 'Yeni başlayanlar için starter paketlerden profesyoneller için ultimate paketlere kadar her seviyeye uygun seçenekler.',
      urunSayisi: 6,
      enPopuler: 'Ultimate Paket',
      fiyatAraligi: '150.000$ - 5.000.000$'
    },
    { 
      id: 'isletmeler', 
      name: 'İŞLETMELER', 
      icon: Building2, 
      color: 'rose',
      path: '/vip-store/isletmeler',
      resim: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800', 
      aciklama: 'Gelir getiren işletmeler',
      detay: 'Marketler, benzin istasyonları, restoranlar, gece kulüpleri, oto galeriler ve casinolar.',
      urunSayisi: 6,
      enPopuler: 'Gece Kulübü',
      fiyatAraligi: '300.000$ - 10.000.000$'
    },
    { 
      id: 'avantajli', 
      name: 'AVANTAJLI PAKETLER', 
      icon: Gift, 
      color: 'violet',
      path: '/vip-store/avantajli',
      resim: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800', 
      aciklama: 'Özel indirimli fırsat paketleri',
      detay: 'Haftalık özel fırsatlar, sezonluk kampanyalar ve mega tasarruf paketleri ile büyük indirimler.',
      urunSayisi: 6,
      enPopuler: 'Black Friday Paketi',
      fiyatAraligi: '200.000$ - 8.000.000$'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'from-purple-500/20 to-violet-500/20', border: 'border-purple-500/40', text: 'text-purple-400', button: 'from-purple-500 to-violet-500', glow: 'shadow-purple-500/30' },
      blue: { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/40', text: 'text-blue-400', button: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/30' },
      emerald: { bg: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/40', text: 'text-emerald-400', button: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/30' },
      amber: { bg: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-500/40', text: 'text-amber-400', button: 'from-amber-500 to-yellow-500', glow: 'shadow-amber-500/30' },
      rose: { bg: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/40', text: 'text-rose-400', button: 'from-rose-500 to-pink-500', glow: 'shadow-rose-500/30' },
      violet: { bg: 'from-violet-500/20 to-fuchsia-500/20', border: 'border-violet-500/40', text: 'text-violet-400', button: 'from-violet-500 to-fuchsia-500', glow: 'shadow-violet-500/30' },
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            to="/roster"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>FED:V Social'a Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl shadow-2xl shadow-amber-500/40">
              <Crown className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                VIP MAĞAZA
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Özel ürünler, paketler ve avantajlı fırsatlar - Bir kategori seçin
            </p>
          </div>

          {/* Category Cards - Large & Detailed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const colorClasses = getColorClasses(cat.color);
              
              return (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-2xl overflow-hidden hover:shadow-2xl ${colorClasses.glow} transition-all duration-500 hover:scale-[1.02] hover:border-opacity-60`}
                >
                  {/* Image Section */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={cat.resim} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${colorClasses.button} rounded-2xl flex items-center justify-center shadow-xl ${colorClasses.glow}`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Product Count Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
                      <span className="text-white text-sm font-semibold">{cat.urunSayisi} Ürün</span>
                    </div>

                    {/* Category Name */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className={`text-2xl font-black text-white group-hover:${colorClasses.text} transition-colors`}>
                        {cat.name}
                      </h2>
                      <p className={`${colorClasses.text} text-sm font-medium`}>{cat.aciklama}</p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {cat.detay}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-xl`}>
                        <p className="text-gray-500 text-xs mb-1">En Popüler</p>
                        <p className={`${colorClasses.text} font-bold text-sm truncate`}>{cat.enPopuler}</p>
                      </div>
                      <div className={`p-3 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-xl`}>
                        <p className="text-gray-500 text-xs mb-1">Fiyat Aralığı</p>
                        <p className="text-white font-bold text-sm truncate">{cat.fiyatAraligi}</p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${colorClasses.text} fill-current`} />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">Çok Popüler</span>
                    </div>
                    
                    {/* İncele Button */}
                    <button className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${colorClasses.button} text-white font-bold rounded-xl transition-all duration-300 group-hover:shadow-lg ${colorClasses.glow}`}>
                      <Eye className="w-5 h-5" />
                      <span>İncele</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <span className="text-white font-bold text-lg">Özel teklifler için Discord'a katıl!</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Discord sunucumuzda özel indirimler ve kampanyalardan haberdar ol.</p>
              <a 
                href="https://discord.gg/fedvsocial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <Crown className="w-5 h-5" />
                Discord'a Katıl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipStore;
