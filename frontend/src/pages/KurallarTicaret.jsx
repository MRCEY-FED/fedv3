import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, CheckCircle, AlertTriangle, Store } from 'lucide-react';

const KurallarTicaret = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Meslek Gelir Kuralı",
      aciklama: "Devlet görevi yapan kişilerin sivildeki gelirleri hakkında ki kurallar.",
      detay: `▫️ LSPD ve LSFMD birlikleri için başka mesleklerde çalışmak yasaktır. (Bu kural, aktif görevde olunmasa dahi geçerlidir.) 

      ▫️ Mesaide olmama durumu, tamamen oyuncunun sorumluluğundadır. 

      ▫️ Mesaide olunmayan zamanlarda da karakterin kurumsal kimliği göz önünde bulundurularak rol yapılmalıdır.
      
      ▫️ Devlet memuru olan kişiler sivile geçtikleri zaman legal işletmelerde ek iş yapabilirler.`,
      ceza: "İşlemin iptali + Uyarı"
    },
    {
      id: 2,
      baslik: "İşyeri Kuralları",
      aciklama: "İşyerinizle alakalı bazı server kurallarımız.",
      detay: `▫️ Sistemsel olarak oyuncuya ait olmayan mekânlar, oyuncular tarafından sahiplenilemez veya kendi mülkleriymiş gibi kullanılamaz.(Bu kural, yalnızca yönetim onayı ile esnetilebilir.) 

      ▫️ Özel bir etkinlik veya benzeri durumlarda, ilgili mekânın kullanımı için önceden yönetim ile iletişime geçilerek izin alınması gerekmektedir. 

      ▫️ Size ait mekanlarda aldığınız KENDİ GÜVENLİK KAMERA KAYDI rollerinizde ses ve görüntü kaydı rolüne girebilirsiniz.
      
      ▫️ İş yerinizde yasadışı ticaretlerde polis gerekli delili topladıktan sonra DOJ departmanı ile birlikte iş yerinizi kapattırma hakkında sahiptir.`,
      ceza: "Stokların silinmesi + 3-7 gün ban"
    },
    {
      id: 6,
      baslik: "Market ve Benzinlik Sahipleri",
      aciklama: "NPC mağazalarından alışveriş kurallarına uyulmalıdır.",
      detay: "▫️ Satın alınan market ve benzinliklerde fahiş fiyat uygulandığı tespit edilirse DOJ Departmanı tarafından işletmeye el konulabilir.",
      ceza: "Eşyaların silinmesi + 1-7 gün ban"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-lime-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(132,204,22,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-lime-500/10 hover:bg-lime-500/20 border border-lime-500/30 rounded-xl text-lime-400 hover:text-lime-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-lime-500 to-green-500 rounded-2xl shadow-2xl shadow-lime-500/40">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-lime-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                Ticaret & İş Kuralları
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Alışveriş, ticaret ve iş dünyası kuralları
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-lime-500/10 to-green-500/10 border border-lime-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Store className="w-6 h-6 text-lime-400" />
              <p className="text-gray-300">
                Adil ticaret için <span className="text-lime-400 font-semibold">kurallara uygun</span> işlem yapın.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-lime-500/20 transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-lime-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg shadow-lime-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>

                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-red-400 font-semibold text-sm">Ceza: </span>
                      <span className="text-gray-300 text-sm">{kural.ceza}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/social-kurallar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-lime-500/30"
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

export default KurallarTicaret;
