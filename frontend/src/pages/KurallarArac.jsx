import React from 'react';
import { Link } from 'react-router-dom';
import { Car, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarArac = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Şive ve Ağız Rolleri",
      aciklama: "Sadece yönetim tarafından izin verilen kişiler şive ağız rollerine girebilirler.",
      detay: `▫️ Sunucumuzda yöresel ağız ve şive kullanımı yasaktır.
      
      ▫️ Aksan kullanımı bu kuralın dışında tutulur.
      
      ▫️ Türk toprakları üzerinde bulunan yöresel bölgelerin şiveleri rollerine girmek sadece yönetim izniyle serbesttir.`,
      ceza: "Uyarı | Tekrarda: 1 gün ban"
    },
    {
      id: 2,
      baslik: "Azınlık Karakter Rolleri",
      aciklama: "(Türk, Japon, Arap, Yahudi vb).",
      detay: `▫️ Sunucuda azınlık karaktere sahip olmak yasak değildir; ancak bu tür roller oynanırken etnik ve kültürel değerlere saygı gösterilmesi zorunludur. 
      
      ▫️ İmam, tarikat lideri, cemaat vb. dini ve hassas nitelikli roller yapmak yasaktır. 
      
      ▫️ Karakterlerin, azınlık olduğu bir ülkede yaşadıkları gerçeği göz önünde bulundurulmalıdır. 
      
      ▫️ Los Santos şehrinde karakterleriniz haricinde yaklaşık 10.1 milyon kişi yaşadığı varsayılır. 
      
      ▫️ Rol esnasında, "Nereye gitsem Türk var ya", "Şehrin yarısı Japon zaten ehe ehe" gibi gerçekçiliğe aykırı veya küçümseyici ifadeler kesinlikle yasaktır. 
      
      ▫️ Her karakter, kendi kültürüne uygun davranmalı, ancak aynı zamanda Amerika’da yaşadığının bilincinde olmalıdır. 
      
      ▫️ Eğer azınlık rolü yapıyorsanız, asimile olması gereken tarafın azınlık karakter olduğunu unutmamalısınız.`,
      ceza: "Uyarı | Tekrarda: 1 gün ban"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl shadow-blue-500/40">
              <Car className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Şive ve Azınlık Karakter Rolleri</span>
            </h1>
            <p className="text-gray-400 text-lg">Bu tür rolleri oynamak için yönetim izni gereklidir.</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <p className="text-gray-300">Araçlar <span className="text-blue-400 font-semibold">değerli varlıklardır</span>. Kurallara uyarak hem kendinizi hem de diğer oyuncuları koruyun.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-blue-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <div><span className="text-red-400 font-semibold text-sm">Ceza: </span><span className="text-gray-300 text-sm">{kural.ceza}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarArac;
