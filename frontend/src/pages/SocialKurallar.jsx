import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Users, MessageCircle, Shield, AlertTriangle, Eye, Car, Briefcase, DollarSign, Crosshair, Heart, Gamepad2, Sparkles, ChevronRight, Siren, Calendar, Home, ShoppingBag, Headphones, Scale } from 'lucide-react';

const SocialKurallar = () => {
  const categories = [
    { 
      id: 'polis', 
      name: 'LEGAL YÖNETMELİK', 
      icon: Siren, 
      color: 'blue',
      path: '/kurallar/polis',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/xpYy8s.jpg',
      aciklama: 'Legal birim kuralları',
      detay: 'Polis ile etkileşim, tutuklama, takip ve departman kuralları.',
      kuralSayisi: 16,
      oncelik: 'Önemli'
    },    
    { 
      id: 'genel', 
      name: 'Genel Karakter Kuralları', 
      icon: Users, 
      color: 'purple',
      path: '/kurallar/genel',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/gta5 kadın erkek karakter.jpg',
      aciklama: 'Genel roleplay kuralları',
      detay: 'Tüm oyuncuların uyması ve bilmesi gereken kurallardır.',
      kuralSayisi: 17,
      oncelik: 'Zorunlu'
    },
    { 
      id: 'roleplay', 
      name: 'Roleplay Terim Kuralları', 
      icon: Gamepad2, 
      color: 'violet',
      path: '/kurallar/roleplay',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/155224.jpg',
      aciklama: 'Roleplay Terimleri',
      detay: 'RDM, VDM, Metagaming, ve Fear RP gibi bir çok terimin kurllarıdır.',
      kuralSayisi: 9,
      oncelik: 'Zorunlu'
    },
    { 
      id: 'destek', 
      name: 'DOJ CEZA KANUNU', 
      icon: Scale, 
      color: 'amber',
      path: '/doj-ceza-kanunu',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/RjwiGn1.png',
      aciklama: 'Adalet Bakanlığı Ceza Kanunu',
      detay: 'Tüm suçlar, ceza süreleri ve para cezaları.',
      kuralSayisi: 55,
      oncelik: 'Kritik'
    }, 
    { 
      id: 'saglik', 
      name: 'DOKTOR & EMS', 
      icon: Heart, 
      color: 'pink',
      path: '/kurallar/saglik',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/AmbulanceLife_Keyart_Finalv2.webp',
      aciklama: 'Doktor ve EMS kuralları',
      detay: 'Ölüm/yaralanma RP, hastane kuralları ve respawn.',
      kuralSayisi: 5,
      oncelik: 'Önemli'
    },       
    { 
      id: 'iletisim', 
      name: 'CK - PK KURALLARI', 
      icon: MessageCircle, 
      color: 'emerald',
      path: '/kurallar/iletisim',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-24%20022614.png',
      aciklama: 'Sesli ve yazılı iletişim',
      detay: 'Karakterin hayatı ile ilgili vereceğiniz kararlar hakkında ki kurallardır.',
      kuralSayisi: 2,
      oncelik: 'Önemli'
    },
    { 
      id: 'yasaklar', 
      name: 'Yayıncı Kuralları', 
      icon: AlertTriangle, 
      color: 'red',
      path: '/kurallar/yasaklar',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/aesthetic-anime-character-gaming.jpg',
      aciklama: 'Yasak eylemler ve cezalar',
      detay: 'Hile, bug kullanımı, hesap paylaşımı ve RMT yasakları.',
      kuralSayisi: 6,
      oncelik: 'Kritik'
    },
    { 
      id: 'arac', 
      name: 'Şive ve Azınlık Karakter Rolleri ', 
      icon: Users, 
      color: 'blue',
      path: '/kurallar/arac',
      resim: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600',
      aciklama: 'Araç kullanım kuralları',
      detay: 'Bu tür rolleri oynamak için yönetim izni gereklidir.',
      kuralSayisi: 2,
      oncelik: 'Önemli'
    },
    { 
      id: 'gang', 
      name: 'GANG & ÇETE', 
      icon: Crosshair, 
      color: 'orange',
      path: '/kurallar/gang',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/1.webp',
      aciklama: 'Çete ve gang kuralları',
      detay: 'Üye limitleri, bölge savaşları ve ittifak kuralları.',
      kuralSayisi: 5,
      oncelik: 'Önemli'
    },
    { 
      id: 'ekonomi', 
      name: 'Yasaklı Roller / Hile', 
      icon: DollarSign, 
      color: 'amber',
      path: '/kurallar/ekonomi',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/tarih-boyunca-yasaklanmis-oyunlar-5.jpg',
      aciklama: 'Hile rahatsız davranışlar.',
      detay: 'Hile ve RMT yasağı ve bug kullanımları.',
      kuralSayisi: 5,
      oncelik: 'Kritik'
    },
    { 
      id: 'suc', 
      name: 'SUÇ & SOYGUN', 
      icon: Shield, 
      color: 'rose',
      path: '/kurallar/suc',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/913e4a7c13052627.jpg',
      aciklama: 'Suç aktiviteleri kuralları',
      detay: 'Soygun kuralları, rehine alma ve polis etkileşimi.',
      kuralSayisi: 3,
      oncelik: 'Önemli'
    },
    { 
      id: 'meslek', 
      name: 'BadCop/BadDoc Rolleri ', 
      icon: Briefcase, 
      color: 'cyan',
      path: '/kurallar/meslek',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/mbJyLF.webp',
      aciklama: 'Whitelist iş kuralları',
      detay: 'Başvuru süreci, meslek içi kurallar ve corruption RP.',
      kuralSayisi: 5,
      oncelik: 'Önemli'
    },
    { 
      id: 'etkinlik', 
      name: 'ETKİNLİK & SOSYAL MEDYA', 
      icon: Calendar, 
      color: 'indigo',
      path: '/kurallar/etkinlik',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/de7e8c53-c424-430e-a565-de8e357fbfdb.png',
      aciklama: 'Etkinlik ve organizasyon',
      detay: 'Sunucu etkinlikleri, yarışlar, sosyal medya kuralları.',
      kuralSayisi: 5,
      oncelik: 'Önemli'
    },
    { 
      id: 'gayrimenkul', 
      name: 'GAYRİMENKUL & İHALELER', 
      icon: Home, 
      color: 'teal',
      path: '/kurallar/gayrimenkul',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/38a0b162-0d9b-4eac-aa04-9300838d0c19.png',
      aciklama: 'Ev - İşyeri ve İhale kuralları',
      detay: 'Mülk sahipliği, dekorasyon ve ihale kuralları.',
      kuralSayisi: 6,
      oncelik: 'Önemli'
    },
    { 
      id: 'ticaret', 
      name: 'TİCARET & MAL VARLIK', 
      icon: ShoppingBag, 
      color: 'lime',
      path: '/kurallar/ticaret',
      resim: 'https://694360ba73fe9fd20180e80e.imgix.net/55918a08-e90a-48da-bdd9-26915c9c8329.png',
      aciklama: 'Alışveriş ve ticaret',
      detay: 'Ticaret kuralları, fiyat politikası ve iş ortaklıkları.',
      kuralSayisi: 6,
      oncelik: 'Önemli'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', text: 'text-purple-400', button: 'from-purple-500 to-purple-600', glow: 'shadow-purple-500/25', badge: 'bg-purple-500/20 text-purple-300' },
      violet: { bg: 'from-violet-500/20 to-violet-600/10', border: 'border-violet-500/40', text: 'text-violet-400', button: 'from-violet-500 to-violet-600', glow: 'shadow-violet-500/25', badge: 'bg-violet-500/20 text-violet-300' },
      emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', text: 'text-emerald-400', button: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/25', badge: 'bg-emerald-500/20 text-emerald-300' },
      red: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', text: 'text-red-400', button: 'from-red-500 to-red-600', glow: 'shadow-red-500/25', badge: 'bg-red-500/20 text-red-300' },
      blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', text: 'text-blue-400', button: 'from-blue-500 to-blue-600', glow: 'shadow-blue-500/25', badge: 'bg-blue-500/20 text-blue-300' },
      orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', text: 'text-orange-400', button: 'from-orange-500 to-orange-600', glow: 'shadow-orange-500/25', badge: 'bg-orange-500/20 text-orange-300' },
      amber: { bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/40', text: 'text-amber-400', button: 'from-amber-500 to-amber-600', glow: 'shadow-amber-500/25', badge: 'bg-amber-500/20 text-amber-300' },
      rose: { bg: 'from-rose-500/20 to-rose-600/10', border: 'border-rose-500/40', text: 'text-rose-400', button: 'from-rose-500 to-rose-600', glow: 'shadow-rose-500/25', badge: 'bg-rose-500/20 text-rose-300' },
      cyan: { bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/40', text: 'text-cyan-400', button: 'from-cyan-500 to-cyan-600', glow: 'shadow-cyan-500/25', badge: 'bg-cyan-500/20 text-cyan-300' },
      pink: { bg: 'from-pink-500/20 to-pink-600/10', border: 'border-pink-500/40', text: 'text-pink-400', button: 'from-pink-500 to-pink-600', glow: 'shadow-pink-500/25', badge: 'bg-pink-500/20 text-pink-300' },
      indigo: { bg: 'from-indigo-500/20 to-indigo-600/10', border: 'border-indigo-500/40', text: 'text-indigo-400', button: 'from-indigo-500 to-indigo-600', glow: 'shadow-indigo-500/25', badge: 'bg-indigo-500/20 text-indigo-300' },
      teal: { bg: 'from-teal-500/20 to-teal-600/10', border: 'border-teal-500/40', text: 'text-teal-400', button: 'from-teal-500 to-teal-600', glow: 'shadow-teal-500/25', badge: 'bg-teal-500/20 text-teal-300' },
      lime: { bg: 'from-lime-500/20 to-lime-600/10', border: 'border-lime-500/40', text: 'text-lime-400', button: 'from-lime-500 to-lime-600', glow: 'shadow-lime-500/25', badge: 'bg-lime-500/20 text-lime-300' },
      sky: { bg: 'from-sky-500/20 to-sky-600/10', border: 'border-sky-500/40', text: 'text-sky-400', button: 'from-sky-500 to-sky-600', glow: 'shadow-sky-500/25', badge: 'bg-sky-500/20 text-sky-300' },
    };
    return colors[color] || colors.purple;
  };

  const getOncelikStyle = (oncelik) => {
    switch(oncelik) {
      case 'Kritik': return 'bg-red-500/30 text-red-300 border-red-500/50';
      case 'Zorunlu': return 'bg-purple-500/30 text-purple-300 border-purple-500/50';
      default: return 'bg-blue-500/30 text-blue-300 border-blue-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            to="/roster"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 hover:text-purple-300 font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>FED:V Social'a Dön</span>
          </Link>

          {/* Header - Compact */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 mb-3 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl shadow-xl shadow-purple-500/30">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                SUNUCU KURALLARI
              </span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-4">
              FED:V Social sunucusunda keyifli bir deneyim için kuralları inceleyin
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-purple-300 font-medium">{categories.length} Kategori</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-sm">
                <Shield className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-violet-300 font-medium">{categories.reduce((a, b) => a + b.kuralSayisi, 0)}+ Kural</span>
              </div>
            </div>
          </div>

          {/* Warning Banner - Compact */}
          <div className="mb-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <span className="text-amber-400 font-semibold">Dikkat!</span> Kurallara uymayan oyuncular uyarı, geçici ban veya kalıcı ban cezası alabilir.
              </p>
            </div>
          </div>

          {/* Category Cards Grid - 3 columns with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const colorClasses = getColorClasses(cat.color);
              
              return (
                <Link
                  key={cat.id}
                  to={cat.path}
                  className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-xl overflow-hidden hover:shadow-xl ${colorClasses.glow} transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* Image Section - Smaller */}
                  <div className="relative h-28 overflow-hidden">
                    <img 
                      src={cat.resim} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-2 right-2 w-10 h-10 bg-gradient-to-br ${colorClasses.button} rounded-lg flex items-center justify-center shadow-lg ${colorClasses.glow}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Rule Count Badge */}
                    <div className="absolute top-2 left-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded-md">
                      <span className="text-white text-xs font-semibold">{cat.kuralSayisi} Kural</span>
                    </div>

                    {/* Category Name on Image */}
                    <div className="absolute bottom-2 left-3 right-3">
                      <h2 className="text-lg font-bold text-white truncate">{cat.name}</h2>
                    </div>
                  </div>

                  {/* Content Section - Compact */}
                  <div className="p-3">
                    {/* Description */}
                    <p className={`${colorClasses.text} text-xs font-medium mb-1`}>{cat.aciklama}</p>
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">{cat.detay}</p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      {/* Öncelik Badge */}
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold border ${getOncelikStyle(cat.oncelik)}`}>
                        {cat.oncelik}
                      </span>

                      {/* İncele Button */}
                      <div className={`flex items-center gap-1 ${colorClasses.text} text-xs font-semibold group-hover:gap-2 transition-all`}>
                        <Eye className="w-3.5 h-3.5" />
                        <span>İncele</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-purple-500/10 border border-purple-500/30 rounded-xl">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300 text-sm">Kurallar hakkında sorunuz mu var?</span>
              <a 
                href="https://discord.gg/fedvsocial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold text-xs rounded-lg hover:scale-105 transition-all"
              >
                Discord'da Sor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialKurallar;
