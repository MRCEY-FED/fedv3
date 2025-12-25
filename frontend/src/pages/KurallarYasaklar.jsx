import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, XCircle, Shield, Skull } from 'lucide-react';

const KurallarYasaklar = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Hile ve Mod Menu",
      aciklama: "Her türlü hile, mod menu, aimbot veya unfair advantage sağlayan yazılımların kullanımı kesinlikle yasaktır.",
      detay: "Hile programları, mod menu'ler, aimbot, wallhack, speed hack veya herhangi bir üçüncü parti yazılım kullanmak kalıcı ban sebebidir. Şüpheli davranışlar incelenir ve tespit edildiğinde itiraz kabul edilmez.",
      ceza: "KALICI BAN - İtiraz kabul edilmez",
      seviye: "kritik"
    },
    {
      id: 2,
      baslik: "Bug & Exploit Kullanımı",
      aciklama: "Oyun içi hataları (bug) veya açıkları (exploit) kullanarak avantaj elde etmek yasaktır.",
      detay: "Bir bug veya exploit keşfettiğinizde bunu yönetim ekibine bildirmelisiniz. Bug'ı kullanarak para, eşya veya avantaj elde etmek yasaktır. Bug abuse tespit edildiğinde elde edilen tüm kazançlar silinir ve ceza uygulanır.",
      ceza: "7 gün - Kalıcı ban + Tüm kazançlar silinir",
      seviye: "yuksek"
    },
    {
      id: 3,
      baslik: "Hesap Paylaşımı",
      aciklama: "Hesabınızı başka kişilerle paylaşmak veya başkasının hesabını kullanmak yasaktır.",
      detay: "Her oyuncunun kendi hesabını kullanması gerekmektedir. Hesap paylaşımı, hesap satışı veya hesap takası yasaktır. Birden fazla hesap (multi-account) kullanmak da bu kurala dahildir.",
      ceza: "Tüm ilgili hesaplar kalıcı ban",
      seviye: "yuksek"
    },
    {
      id: 4,
      baslik: "Gerçek Para Ticareti (RMT)",
      aciklama: "Gerçek para karşılığında oyun içi eşya, para veya hizmet alım satımı kesinlikle yasaktır.",
      detay: "Oyun içi herhangi bir şeyi gerçek para karşılığında satmak veya satın almak yasaktır. Bu hem satıcı hem de alıcı için geçerlidir. Sadece sunucu tarafından belirlenen resmi kanallardan yapılan işlemler geçerlidir.",
      ceza: "KALICI BAN - Her iki taraf için",
      seviye: "kritik"
    },
    {
      id: 5,
      baslik: "Combat Logging",
      aciklama: "Çatışma, tutuklama veya roleplay sırasında oyundan kasıtlı olarak çıkmak yasaktır.",
      detay: "Olumsuz bir durumdan kaçmak için oyundan çıkmak (disconnect) combat logging sayılır. İnternet sorunu yaşadıysanız, mümkün olan en kısa sürede geri bağlanmalı ve durumu açıklamalısınız.",
      ceza: "İlk ihlal: 3 gün ban | Tekrar: 7-14 gün ban",
      seviye: "orta"
    },
    {
      id: 6,
      baslik: "Sunucu Reklamı",
      aciklama: "Başka sunucuların reklamını yapmak veya oyuncuları başka sunuculara yönlendirmek yasaktır.",
      detay: "Oyun içinde, Discord'da veya herhangi bir platformda başka FiveM sunucularının reklamını yapmak yasaktır. Bu, sunucu adı söylemek, link paylaşmak veya dolaylı yoldan yönlendirme yapmayı kapsar.",
      ceza: "KALICI BAN",
      seviye: "kritik"
    }
  ];

  const getSeviyeStyle = (seviye) => {
    switch(seviye) {
      case 'kritik':
        return 'bg-red-500/20 border-red-500/50 text-red-400';
      case 'yuksek':
        return 'bg-orange-500/20 border-orange-500/50 text-orange-400';
      case 'orta':
        return 'bg-amber-500/20 border-amber-500/50 text-amber-400';
      default:
        return 'bg-gray-500/20 border-gray-500/50 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 hover:text-red-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl shadow-red-500/40">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                YASAKLAR & CEZALAR
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Kesinlikle yapılmaması gereken eylemler ve yaptırımları
            </p>
          </div>

          {/* Critical Warning Banner */}
          <div className="mb-8 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-500/20 border-2 border-red-500/50 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
                <Skull className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-red-400 font-bold text-lg mb-1">⚠️ KRİTİK UYARI</h3>
                <p className="text-gray-300">
                  Bu sayfadaki kuralların ihlali <span className="text-red-400 font-bold">ağır cezalar</span> ve <span className="text-red-400 font-bold">kalıcı ban</span> ile sonuçlanabilir. Bilmemek mazeret değildir!
                </p>
              </div>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-red-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${getSeviyeStyle(kural.seviye)}`}>
                    {kural.seviye === 'kritik' ? '🔴 Kritik' : kural.seviye === 'yuksek' ? '🟠 Yüksek' : '🟡 Orta'}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>

                  {/* Ceza - More prominent */}
                  <div className="flex items-center gap-3 bg-red-500/20 border-2 border-red-500/50 rounded-xl p-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-red-400 font-bold">CEZA: </span>
                      <span className="text-white font-semibold">{kural.ceza}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-red-400" />
                <span className="text-white font-bold">Adaletli bir ortam için kurallara uyun!</span>
              </div>
              <p className="text-gray-400 text-sm">Kural ihlallerini ticket sistemi üzerinden bildirebilirsiniz.</p>
            </div>
            <br />
            <Link
              to="/social-kurallar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-red-500/30"
            >
              <ArrowLeft className="w-5 h-5" />
              Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarYasaklar;
