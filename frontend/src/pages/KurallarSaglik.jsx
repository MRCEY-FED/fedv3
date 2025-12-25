import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarSaglik = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Doktor Genel Kurallar",
      aciklama: "Bilinmesi gereken bazı kurallar.",
      detay: `▫️ LSFMD, bir devlet kurumu olarak kabul edilir ve güvenli bölge statüsündedir..
      
      ▫️ Doktorlarda diğer siviller gibi bir sivil vatandaşlardır her hangi bir üstünlükleri yoktur bu yüzden kaçıırılıp öldürülebilirler. 
      
      ▫️ Bir doktor herhangi bir kişiye küfür veyahut agresif rol yapıyor ise karşılık verilebilir.
      
      ▫️ Doktorlar, karşılarındaki kişinin saygısız veya uygunsuz davranışları nedeniyle hastayı reddetme hakkına sahiptir. Bu gibi durumlarda IC (oyun içi) şikayet mekanizması açıktır.`,
      ceza: "Uyarı | Tekrarda: 1-3 gün ban"
    },
    {
      id: 2,
      baslik: "Ölüm & Yaralanma RP",
      aciklama: "Yaralanma ve ölüm durumlarında gerçekçi roleplay yapılmalıdır.",
      detay: `▫️ Vurulduğunuzda veya yaralandığınızda gerçekçi tepki verin. Anında ayağa kalkıp koşmak fail RP'dir. Ağır yaralanmalarda EMS beklemeli veya hastaneye gidilmelidir.
      
      ▫️ Karakterlerin doktora yalan söylemesi yasakdır /do komutu üzerinden doktorun açıkça görebileceği fiziksel durumlar doğru şekilde belirtilmelidir.
      
      ▫️ Doktora başvuran oyuncular, yalnızca ağrıyan, kanayan veya şiş olan bölgeyle ilgili bilgi verebilir; rolü zorlayarak yönlendirmeleri yasaktır.
      
      ▫️ Taburcu süresine yalnızca doktorlar karar verir. Oyuncular bu konuda müdahalede bulunamaz.`,
      ceza: "Uyarı | Tekrarda: 1-3 gün ban"
    },
    {
      id: 3,
      baslik: "EMS Çağırma",
      aciklama: "EMS çağırırken gerçekçi bilgi verilmelidir. Sahte çağrılar yasaktır.",
      detay: `▫️ EMS'i gereksiz yere çağırmak veya sahte çağrı yapmak yasaktır. Yaralı lokasyonunuzu doğru bildirin. EMS gelene kadar roleplay devam etmelidir.
      
      ▫️ Doktorlar özel mülklerden gelen ilk yardım çağrılarına giremezler.`,
      ceza: "Sahte çağrı: 1 gün ban"
    },
    {
      id: 4,
      baslik: "Hastane Kuralları",
      aciklama: "Hastane içinde belirli kurallar geçerlidir. Hastane kameralı bölgedir.",
      detay: "▫️ Hastane içinde silah kullanmak ve kavga etmek yasaktır. Hastane önünde kamp kurmak yasaktır. Tedavi sırasında roleplay yapılmalıdır.",
      ceza: "3-7 gün ban"
    },
    {
      id: 5,
      baslik: "Respawn Kuralları",
      aciklama: "Respawn (yeniden doğma) için belirli süreler ve koşullar vardır.",
      detay: `▫️ EMS aktifken minimum 15 dakika beklenmelidir. Respawn sonrası NLR kuralları geçerlidir. Hızlı respawn için geçerli sebep gerekir.
      
      ▫️ Herhangi bir kırık veya derin yara rolünde, eğer bir bölge alçıya alınmış, dikilmiş veya işlem uygulanmışsa, doktorun belirlediği süre boyunca bu rolün devam ettirilmesi zorunludur.
      Bu süreç sonunda, alçının çıkarılması veya dikişin alınması gibi işlemlerle rolün sonlandırılması gerekmektedir. `,
      ceza: "NLR ihlali: 1-3 gün ban"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 rounded-xl text-pink-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-2xl shadow-pink-500/40">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">SAĞLIK & EMS KURALLARI</span>
            </h1>
            <p className="text-gray-400 text-lg">Sağlık ve acil servis kuralları</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-pink-400" />
              <p className="text-gray-300">Sağlık RP'si <span className="text-pink-400 font-semibold">gerçekçi</span> olmalıdır. Yaralanmalara uygun tepki verin.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-pink-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
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
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarSaglik;
