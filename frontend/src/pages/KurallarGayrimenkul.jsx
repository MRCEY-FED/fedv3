import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, CheckCircle, AlertTriangle, Building2 } from 'lucide-react';

const KurallarGayrimenkul = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Ev ve Mülk Sahipliği",
      aciklama: "Her oyuncu belirli sayıda mülk sahibi olabilir. Limit aşımı yasaktır.",
      detay: "Standart oyuncular maksimum 2 ev, VIP üyeler maksimum 4 ev sahibi olabilir. Alt hesaplarla limit aşımı tespit edilirse tüm mülkler silinir. Mülkler aktif olarak kullanılmalıdır.",
      ceza: "Fazla mülklerin silinmesi + 1-3 gün ban"
    },
    {
      id: 2,
      baslik: "Ev İçi Kurallar",
      aciklama: "Evler güvenli bölge değildir ancak ev basma kuralları mevcuttur.",
      detay: "Başka oyuncuların evlerine izinsiz girmek roleplay senaryosu gerektirir. Kapı kırma, pencere kırma gibi eylemler için IC sebep olmalıdır. Ev sahipleri içerideyken sahibinin rızası olmadan ev basılamaz (özel durumlar hariç).",
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-5 gün ban"
    },
    {
      id: 3,
      baslik: "İşyeri Kuralları",
      aciklama: "İşyerleri whitelist sistemiyle çalışır ve özel kurallara tabidir.",
      detay: "İşyeri sahipleri çalışan alabilir, fiyat belirleyebilir ve işyerini yönetebilir. İşyerlerinin kötüye kullanımı (para aklama, exploit vb.) yasaktır. İşyeri satışları admin onayı gerektirebilir.",
      ceza: "İşyeri kaybı + 3-7 gün ban"
    },
    {
      id: 4,
      baslik: "Dekorasyon ve Modifikasyon",
      aciklama: "Mülklerde yapılan değişiklikler sunucu kurallarına uygun olmalıdır.",
      detay: "Evlerde yapılan dekorasyonlar sunucu performansını etkilememelidir. Aşırı obje yerleştirme, exploit amaçlı dekorasyon veya uygunsuz içerikler yasaktır. Değişiklikler admin tarafından kaldırılabilir.",
      ceza: "Dekorasyonların silinmesi + Uyarı"
    },
    {
      id: 5,
      baslik: "Kiralama ve Satış",
      aciklama: "Mülk kiralama ve satış işlemleri IC (In Character) yapılmalıdır.",
      detay: "Gerçek para karşılığı mülk satışı (RMT) kesinlikle yasaktır. Fiyatlar piyasa değerlerine uygun olmalıdır. Dolandırıcılık amaçlı satışlar cezalandırılır.",
      ceza: "Mülk kaybı + 7 gün - Kalıcı ban"
    },
    {
      id: 6,
      baslik: "Stash ve Depolama",
      aciklama: "Ev stash'leri güvenli değildir ve belirli kurallara tabidir.",
      detay: "Ev baskınlarında stash'ler açılabilir. Yasadışı eşya depolamak risk taşır. Stash limitlerini exploit ile aşmaya çalışmak yasaktır. Çalınan eşyalar geri verilmez.",
      ceza: "Duruma göre belirlenir"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl text-teal-400 hover:text-teal-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl shadow-2xl shadow-teal-500/40">
              <Home className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Gayrimenkul & Mülk Kuralları
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Ev, işyeri ve mülk yönetimi kuralları
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-teal-400" />
              <p className="text-gray-300">
                Mülklerinizi <span className="text-teal-400 font-semibold">sorumlu bir şekilde</span> yönetin ve kurallara uyun.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 border border-teal-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-teal-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-teal-500/30"
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

export default KurallarGayrimenkul;
