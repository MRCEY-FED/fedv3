import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarRoleplay = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "RDM (Random Deathmatch)",
      aciklama: "Sebepsiz yere başka oyuncuları öldürmek kesinlikle yasaktır. Her öldürme eylemi için geçerli bir roleplay sebebi olmalıdır.",
      detay: `▫️ RDM, roleplay olmadan veya yetersiz roleplay ile başka bir oyuncuyu öldürmektir. Öldürme eylemi için mutlaka öncesinde yeterli roleplay yapılmış olmalı ve mantıklı bir sebep bulunmalıdır. 'Canım istedi', 'silahını denemek istedim' gibi sebepler geçerli değildir.
      ▫️ İllegal bölgeler dahi olsa, kişilerle elleri kaldır, dur, teslim ol tipi rollere girmeden direk ateş ettiğiniz takdirde bunlar RDM kapsamına girecektir.`,
      ceza: "İlk ihlal: 3 gün ban | Tekrar: 7-14 gün ban"
    },
    {
      id: 2,
      baslik: "VDM (Vehicle Deathmatch)",
      aciklama: "Araçla kasıtlı olarak oyuncuları ezmek veya çarpmak yasaktır.",
      detay: "▫️ VDM, aracı silah olarak kullanarak diğer oyunculara zarar vermektir. Kasıtlı olarak araçla çarpma, ezme veya araçtan atarak öldürme girişimleri bu kategoriye girer. Kaza durumları hariç, araçla yapılan tüm saldırılar VDM sayılır.",
      ceza: "İlk ihlal: 3 gün ban | Tekrar: 7-14 gün ban"
    },
    {
      id: 3,
      baslik: "Metagaming",
      aciklama: "Oyun dışından elde edilen bilgileri oyun içinde kullanmak yasaktır.",
      detay: "▫️ Discord, stream veya diğer kaynaklardan öğrendiğiniz bilgileri karakterinizin biliyormuş gibi kullanmak metagaming'dir. Örneğin, bir stream'den birinin konumunu öğrenip oraya gitmek veya OOC konuşmalardan edindiğiniz bilgileri IC kullanmak yasaktır.",
      ceza: "İlk ihlal: Uyarı | Tekrar: 3-7 gün ban"
    },
    {
      id: 4,
      baslik: "Powergaming",
      aciklama: "Gerçek hayatta imkansız olan eylemleri yapmak veya karşı tarafa tepki şansı vermemek yasaktır.",
      detay: "▫️ Powergaming, karakterinizin yapamayacağı şeyleri yapmak veya diğer oyunculara adil olmayan avantajlar elde etmektir. Örneğin: tek başına 5 kişiyi yenmek, kelepçeli halde kaçmak, mermi aldıktan sonra hiçbir şey olmamış gibi davranmak powergaming örnekleridir.",
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 5,
      baslik: "Fear RP",
      aciklama: "Silah veya tehdit altındayken gerçekçi şekilde korku göstermeniz gerekmektedir.",
      detay: `▫️ Kafanıza silah dayandığında veya ölüm tehdidi altındayken mantıklı tepki vermelisiniz. Silaha karşı koşmak, 'beni vuramazsın' demek veya tehditleri görmezden gelmek Fear RP ihlalidir. Karakterinizin hayatı tehlikedeymiş gibi davranmalısınız.
      
      ▫️ Fear RP, oyuncunun karakterinin can güvenliğinin ciddi tehlikede olduğu durumlarda, karakterin hayatı için gerçekçi bir şekilde korku ve endişe duyması gerekmektedir. Unutulmamalıdır ki hiçbir karakter ölümsüz değildir. 

      ▫️ Herhangi bir oyuncunun Fear RP yapma zorunluluğu yoktur fakat, CK Point Rapor Sistemi kullanılarak Fear RP yapmayan oyunculara CK Point  talebi oluşturulabilirsiniz.

      ▫️ CK Pointler sadece KURUCU VE Yöneticiler tarafından sadece onaylanabilir.

      ▫️ Fear RP zorunlu değildir. Fakat karşınızdaki kişiler size silah çekerlerse “Öldür ne olacak” dediğiniz durumlarda karşı tarafın sizi direk öldürme 1x ck puanı hakkının olacağını bilmeniz gerekir.

      ▫️ Fear RP tamamen tercih meselesidir. Fear RP’ye girmiyorlar diye kimseyi şikayet edemezsiniz.

      ▫️ Fear RP rol konuşmaları olarak zorunlu olmasa da bir kişi veya grup sizi döverken, soyarken veya başınıza silah dayarken başka yerlere koşamaz, yumruk sallayamaz veya rolden kaçamazsınız. Bunları yaptığınız takdirde  1x ck puanı  alacaksınız.
      
      ▫️ Ayrıca yapılan tüm illegal rollerde, konuşma yapmadan yani bir rol başlatmadan ateş edemezsiniz. Hiç bir bölgede konuşmadan direk çatışmaya giremezsiniz. Bunların tamamı RDM'e girecektir. Rolsüz yaptığınız çatışmalarda veya soygunlarda IC ve OOC ceza alacağınızı unutmayın.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 6,
      baslik: "Revenge Kill ve Yaralı Kuralı",
      aciklama: "İntikam ve yaralanma sonrası kurallar.",
      detay: `▫️ Bir polis memuru olay yerinde vurulduysa onu kaldırıp role devam ettiremezsiniz. Vurulan memur kesinlikle hastanede yaralı rolü yapmalıdır. Gerekli tedavi rolleri olduktan sonra rollere devam edebilir.​
      
      ▫️ Sistemsel olarak öldükten sonra (spawn olduktan sonra), sizi öldüren kişi veya kişileri bulup intikam almak amacıyla saldırmak yasaktır.

      ▫️ Sistemsel olarak ölen oyuncular, 2 saat boyunca yaralı rolü yapmak zorundadır

      ▫️ Bu süre boyunca intikam alma gibi agresif rollere giremezsiniz. 

      ▫️ Yaralı rolü süresi, doktor inisiyatifiyle role bağlı olarak uzatılabilir.

      ▫️ Doktor karakterlerin yetkiyi kötüye kullanması yasaktır. 

      ▫️ Yaralı rolü süresince, oyuncular sadece yaralı olduklarını bilerek rol yapmalıdır.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },    
    {
      id: 7,
      baslik: "New Life Rule (NLR)",
      aciklama: "Öldükten sonra bir önceki hayatınızdaki olayları hatırlamazsınız ve o bölgeye belirli süre dönemezsiniz.",
      detay: "▫️ Karakteriniz öldüğünde, ölümünüze yol açan tüm olayları unutursunuz. Sizi kimin öldürdüğünü, neden öldüğünüzü veya ölüm anında yaşanan olayları hatırlayamazsınız. Ayrıca öldüğünüz bölgeye 30 dakika boyunca dönemezsiniz.",
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 8,
      baslik: "NON-Roleplay",
      aciklama: "Öldükten sonra bir önceki hayatınızdaki olayları hatırlamazsınız ve o bölgeye belirli süre dönemezsiniz.",
      detay: `▫️ Sunucunun rol anlayışına uymayan, gerçeklikten uzak veya düşük kaliteli rolleri teşvik eden tüm eylemler Non-Roleplay olarak değerlendirilir ve yasaktır. 


▫️ Sunucu içerisinde yer aldığınız rollerde, karşı tarafın rolünü sorgulamak veya geçerliliğini tartışmak, rol check olarak kabul edilir ve kesinlikle yasaktır. 


▫️ Yapılan rollerde rol içerisinde bunu nasıl yapıyorsun böyle bir şey yapamazsın tarzında rol check(rol sorgulamalar) yasaktır.


▫️ Rol yaparken, sunucu içerisindeki popülasyonu (oyuncu yoğunluğunu) göz ardı ederek hareket etmek yasaktır. `,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 9,
      baslik: "Drive-By Kuralları",
      aciklama: "Araç içerisinden ateş etme kuralları",
      detay: `▫️ Çatışma ya da hood baskınlarında Drive-By serbesttir. 


▫️ Drive-By her zaman korkutmak amaçlı atılmalıdır.


▫️ İki araç birbirine karşılıklı Drive-By Atabilirler.


▫️ Motor ile Drive-By atmak serbesttir.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    }           
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-xl text-violet-400 hover:text-violet-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl shadow-2xl shadow-violet-500/40">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                ROLEPLAY TERİM KURALLARI
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Kaliteli roleplay deneyimi için uyulması gereken kurallar
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-violet-400" />
              <p className="text-gray-300">
                Bu kurallar <span className="text-violet-400 font-semibold">roleplay kalitesini</span> korumak için tasarlanmıştır. Tüm oyuncuların adil bir deneyim yaşaması hedeflenir.
              </p>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-violet-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>

                  {/* Ceza */}
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

          {/* Footer */}
          <div className="mt-12 text-center">
            <Link
              to="/social-kurallar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-violet-500/30"
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

export default KurallarRoleplay;
