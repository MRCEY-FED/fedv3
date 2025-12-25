import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, UserPlus, AlertCircle, MessageSquare, ChevronRight, Eye, Users, Sparkles, Crown } from 'lucide-react';

const Yonetim = () => {
  // Yönetim Ekibi Verileri - Buradan düzenleyebilirsiniz
  const yonetimEkibi = [
    {
      id: 1,
      isim: 'Bendis',
      rol: 'Founder',
      aciklama: 'Kurucu',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/20555b984e1d29a9cc8aee56eaf4b070.jpg',
      renk: 'purple'
    },    
    {
      id: 1,
      isim: 'Sensei',
      rol: 'General Manager',
      aciklama: 'Üst Yönetici',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/422c281db5e2d64935fb266840fa55ea.webp',
      renk: 'blue'
    },
    {
      id: 2,
      isim: 'Boran',
      rol: 'General Manager',
      aciklama: 'Üst Yönetici',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/6dba23b2-66dd-4689-a46b-abf1c6670286.webp',
      renk: 'blue'
    },
    {
      id: 3,
      isim: 'Zuckyx',
      rol: 'Manager',
      aciklama: 'Yönetici',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/bf86e8577aa32fe4c235afc8214346c9.webp',
      renk: 'red'
    },
    {
      id: 4,
      isim: 'Quadrex',
      rol: 'Manager',
      aciklama: 'Yönetici',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'red'
    },
    {
      id: 5,
      isim: 'Aege4n',
      rol: 'Director',
      aciklama: 'Sunucu Kordinatörü',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'amber'
    },
    {
      id: 6,
      isim: 'roxckcan',
      rol: 'Director',
      aciklama: 'Sunucu Kordinatörü',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'amber'
    },
    {
      id: 7,
      isim: 'Yetkili 7',
      rol: 'Admin',
      aciklama: '-----',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'emerald'
    },
    {
      id: 8,
      isim: 'Yetkili 8',
      rol: 'Admin',
      aciklama: '-----',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'emerald'
    },
    {
      id: 9,
      isim: 'Yetkili 9',
      rol: 'Admin',
      aciklama: '-----',
      avatar: 'https://694360ba73fe9fd20180e80e.imgix.net/3b6d9b81-556b-455c-9e93-7b2c5e5996a3.png',
      renk: 'emerald'
    },
  ];

  const getRenkClasses = (renk) => {
    const renkler = {
      amber: { border: 'border-amber-500/50', bg: 'from-amber-500/20 to-amber-600/10', text: 'text-amber-400', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
      red: { border: 'border-red-500/50', bg: 'from-red-500/20 to-red-600/10', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300 border-red-500/40' },
      purple: { border: 'border-purple-500/50', bg: 'from-purple-500/20 to-purple-600/10', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
      blue: { border: 'border-blue-500/50', bg: 'from-blue-500/20 to-blue-600/10', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
      emerald: { border: 'border-emerald-500/50', bg: 'from-emerald-500/20 to-emerald-600/10', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    };
    return renkler[renk] || renkler.purple;
  };

  const categories = [
    { 
      id: 'basvuru', 
      name: 'YETKİLİ BAŞVURU', 
      icon: UserPlus, 
      color: 'emerald',
      path: '/yonetim/basvuru',
      resim: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600',
      aciklama: 'Yetkili olmak için başvur',
      detay: 'FED:V ailesine katılmak ve yetkili olmak için başvuru formunu doldur.',
      durum: 'Açık',
      sure: '~3-5 gün'
    },
    { 
      id: 'sikayet', 
      name: 'YETKİLİ ŞİKAYET', 
      icon: AlertCircle, 
      color: 'red',
      path: '/yonetim/sikayet',
      resim: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      aciklama: 'Yetkili hakkında şikayet',
      detay: 'Bir yetkili hakkında şikayetinizi iletin, incelemeye alınacaktır.',
      durum: 'Açık',
      sure: '~1-3 gün'
    },
    { 
      id: 'feedback', 
      name: 'YETKİLİ FEEDBACK', 
      icon: MessageSquare, 
      color: 'violet',
      path: '/yonetim/feedback',
      resim: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
      aciklama: 'Geri bildirim ve öneriler',
      detay: 'Sunucu veya yetkililer hakkında geri bildirimlerinizi paylaşın.',
      durum: 'Açık',
      sure: '~1-2 gün'
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', text: 'text-emerald-400', button: 'from-emerald-500 to-emerald-600', glow: 'shadow-emerald-500/25' },
      red: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', text: 'text-red-400', button: 'from-red-500 to-red-600', glow: 'shadow-red-500/25' },
      violet: { bg: 'from-violet-500/20 to-violet-600/10', border: 'border-violet-500/40', text: 'text-violet-400', button: 'from-violet-500 to-violet-600', glow: 'shadow-violet-500/25' },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/roster"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>FED:V Social'a Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 mb-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-xl shadow-emerald-500/30">
              <Shield className="w-7 h-7 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-2">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                YÖNETİM
              </span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
              Başvuru formları ve yetkili ekibimiz
            </p>
          </div>

          {/* ==================== FORM KARTLARI BÖLÜMÜ (ÜST) ==================== */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Başvuru Formları</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent" />
            </div>

            {/* Info Banner */}
            <div className="mb-6 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Tüm başvuru ve şikayetler <span className="text-emerald-400 font-semibold">gizlilik içinde</span> değerlendirilir. Cevap süreleri yoğunluğa göre değişebilir.
                </p>
              </div>
            </div>

            {/* Category Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const colorClasses = getColorClasses(cat.color);
                
                return (
                  <Link
                    key={cat.id}
                    to={cat.path}
                    className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-xl overflow-hidden hover:shadow-xl ${colorClasses.glow} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    {/* Image Section */}
                    <div className="relative h-36 overflow-hidden">
                      <img 
                        src={cat.resim} 
                        alt={cat.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className={`absolute top-3 right-3 w-12 h-12 bg-gradient-to-br ${colorClasses.button} rounded-xl flex items-center justify-center shadow-lg ${colorClasses.glow}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-emerald-500/80 backdrop-blur-sm rounded-md">
                        <span className="text-white text-xs font-bold">✓ {cat.durum}</span>
                      </div>

                      {/* Category Name on Image */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h2 className="text-xl font-bold text-white">{cat.name}</h2>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      {/* Description */}
                      <p className={`${colorClasses.text} text-sm font-medium mb-1`}>{cat.aciklama}</p>
                      <p className="text-gray-400 text-xs mb-4">{cat.detay}</p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        {/* Response Time */}
                        <span className="text-gray-500 text-xs">Cevap: {cat.sure}</span>

                        {/* Form Button */}
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${colorClasses.button} rounded-lg text-white text-xs font-bold group-hover:gap-2.5 transition-all`}>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Forma Git</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ==================== YÖNETİM EKİBİ BÖLÜMÜ (ALT) ==================== */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Yönetim Ekibi</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
            </div>

            {/* Admin Kartları Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {yonetimEkibi.map((admin) => {
                const renkClass = getRenkClasses(admin.renk);
                return (
                  <div
                    key={admin.id}
                    className={`group bg-gradient-to-br ${renkClass.bg} border ${renkClass.border} rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                  >
                    {/* Avatar */}
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={admin.avatar} 
                        alt={admin.isim}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
                      {/* Rol Badge */}
                      <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-bold border ${renkClass.badge}`}>
                        {admin.rol}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-3">
                      <h3 className="text-white font-bold text-sm truncate">{admin.isim}</h3>
                      <p className="text-gray-400 text-xs line-clamp-2 mt-1">{admin.aciklama}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/30 rounded-xl">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-gray-300 text-sm">Sorularınız için Discord üzerinden ulaşabilirsiniz</span>
              <a 
                href="https://discord.gg/fedvsocial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xs rounded-lg hover:scale-105 transition-all"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Yonetim;
