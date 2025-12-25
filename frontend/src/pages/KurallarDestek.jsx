import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, ArrowLeft, CheckCircle, AlertTriangle, LifeBuoy } from 'lucide-react';

const KurallarDestek = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Destek Talebi Açma",
      aciklama: "Destek talepleri doğru kategori seçilerek ve detaylı şekilde açılmalıdır.",
      detay: "Ticket açarken sorununuzu net bir şekilde açıklayın, varsa ekran görüntüsü veya video ekleyin. Yanlış kategoride açılan talepler gecikebilir. Spam ticket açmak yasaktır.",
      ceza: "İlk ihlal: Uyarı | Tekrar: Destek hakkının kısıtlanması"
    },
    {
      id: 2,
      baslik: "Admin ile İletişim",
      aciklama: "Admin ekibiyle iletişimde saygılı ve sabırlı olunmalıdır.",
      detay: "Adminler gönüllü olarak hizmet vermektedir. Hakaret, tehdit veya baskı yapmak yasaktır. Cevap süreleri yoğunluğa göre değişebilir, lütfen sabırlı olun.",
      ceza: "Destek hakkının askıya alınması + 1-7 gün ban"
    },
    {
      id: 3,
      baslik: "Raporlama Kuralları",
      aciklama: "Oyuncu raporları kanıt eşliğinde ve doğru şekilde yapılmalıdır.",
      detay: "Rapor ederken video kanıtı sunmanız önerilir. Yalan rapor, kişisel husumet için rapor veya spam rapor yasaktır. Kanıtsız raporlar işleme alınmayabilir.",
      ceza: "Yalan rapor: 3-7 gün ban"
    },
    {
      id: 4,
      baslik: "Ban İtirazı",
      aciklama: "Ban itirazları belirtilen prosedüre uygun şekilde yapılmalıdır.",
      detay: "İtiraz yaparken sakin ve açıklayıcı olun. Küfürlü, tehditkar veya suçlayıcı itirazlar reddedilir. Her ban için tek itiraz hakkınız vardır, iyi değerlendirin.",
      ceza: "Uygunsuz itiraz: İtiraz hakkının kaybı"
    },
    {
      id: 5,
      baslik: "Geri Bildirim",
      aciklama: "Yapıcı geri bildirimler her zaman değerlidir ve dikkate alınır.",
      detay: "Öneri ve şikayetlerinizi uygun kanallardan iletebilirsiniz. Yapıcı eleştiriler memnuniyetle karşılanır. Ancak sürekli olumsuzluk, drama çıkarma veya topluluk moralini bozmak yasaktır.",
      ceza: "Duruma göre: Uyarı - Mute"
    },
    {
      id: 6,
      baslik: "Refund Talepleri",
      aciklama: "Bug veya sunucu hatası kaynaklı kayıplar için refund talep edilebilir.",
      detay: "Refund için kanıt sunmanız zorunludur. Kendi hatanızdan kaynaklı kayıplar refund edilmez. Yalan refund talebi tespit edilirse ağır ceza uygulanır.",
      ceza: "Yalan talep: 7 gün ban + Karakter silme"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-xl text-sky-400 hover:text-sky-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl shadow-2xl shadow-sky-500/40">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                Bildirim & Destek Kuralları
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Destek sistemi ve iletişim kuralları
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <LifeBuoy className="w-6 h-6 text-sky-400" />
              <p className="text-gray-300">
                Sorunlarınız için <span className="text-sky-400 font-semibold">her zaman destek</span> ekibimiz yanınızda.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-sky-500/10 to-blue-500/10 border border-sky-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-sky-500/20 transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-sky-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-sky-500/30"
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

export default KurallarDestek;
