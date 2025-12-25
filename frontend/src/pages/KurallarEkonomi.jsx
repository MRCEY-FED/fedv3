import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarEkonomi = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Yasaklı Roller / Karakterler",
      aciklama: "Bazı yasklanmış rollere göz atalım.",
      detay: `▫️ Bir kişi ile girdiğiniz rollerde hap yutturarak veya ilaç içirerek son 5dk unutur vs gibi saçma sapan rolü unutma rollerine giremezsiniz.


▫️ Oyun içerisinde ki itemlerinizi gerçek para ile pazarlamak yasaktır tespit edilirse perma yiyebilirsiniz.


▫️ Sunucumuzda aşağıda belirtilen rol türleri yasaktır. Bu rollere benzer içeriklerde rol yapmak da yasak kapsamına girer. Bazı istisnalar, yalnızca yönetim izniyle geçerli olabilir. 


▫️ Terörist rolü yapmak (Yalnızca yönetim onayıyla, özel senaryolarda geçici olarak yapılabilir.) 


▫️ Dini lider rolü yapmak (İmam, tarikat lideri, cemaat vb. roller bu kapsamdadır. Yönetim izniyle esnetilebilir.) 


▫️ Ünlü isim kullanmak veya ünlü bir kişinin rolünü yapmak (Gerçek hayatta tanınan kişiler bu kapsamdadır. Yönetim izni gereklidir.) 


▫️ size ait olmayan bir karakteri yaratmak veya birebir taklit etmek (Telif hakkı olan karakterler, dizi/film karakterleri vb. bu kapsamdadır.) 


▫️ Seri katil rolü yapmak (Alt karakterlerde sınırlı olarak yönetim izniyle yapılabilir.) 


▫️ Deli, psikolojik bozukluğu olan karakter rolü yapmak (Yönetim onayı alınmadan bu tür roller oynanamaz.)


▫️ Acıya duyarsız karakter rolü yapmak (Gerçekçilik dışına çıktığı için, sadece yönetim izniyle özel senaryolarda yapılabilir.) `,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },    
    {
      id: 2,
      baslik: "Para Transferi",
      aciklama: "Büyük miktarda para transferleri için roleplay sebebi gereklidir.",
      detay: "▫️ 1.000.000$ üzeri transferler için geçerli bir IC sebep olmalıdır. Yeni hesaplara büyük transferler şüpheli kabul edilir ve incelenebilir. Para aklama roleplay'i için yönetim izni gerekir.",
      ceza: "Para silinir + 3-7 gün ban"
    },
    {
      id: 3,
      baslik: "RMT (Real Money Trading)",
      aciklama: "Gerçek para karşılığında oyun içi varlık alım satımı kesinlikle yasaktır.",
      detay: "▫️ Oyun içi para, araç, ev veya herhangi bir varlığı gerçek para karşılığında satmak veya almak yasaktır. Bu kural hem alıcı hem satıcı için geçerlidir.",
      ceza: "KALICI BAN - İtiraz kabul edilmez"
    },
    {
      id: 4,
      baslik: "Ekonomi Exploitleri",
      aciklama: "Ekonomi sistemindeki açıkları kullanarak para kazanmak yasaktır.",
      detay: "▫️ Dupe bug, sınırsız para açığı veya benzeri exploitleri kullanmak ve bunları bildirmemek yasaktır. Exploit keşfederseniz hemen yönetimi bilgilendirin.",
      ceza: "Tüm varlıklar silinir + Kalıcı ban"
    },
    {
      id: 5,
      baslik: "Bug Abuse",
      aciklama: "Bug ve açıklardan yararlanmak yasaktır.",
      detay: `▫️ Sunucu içerisinde herhangi bir açık veya hata tespit etmeniz durumunda, bunu derhal yönetime bildirmeniz gerekmektedir. 

      ▫️ Sunucu açıklarını bilerek kullanmak kesinlikle yasaktır. 

      ▫️ Oyuncu lehine avantaj sağlayabilecek herhangi bir durumun da yönetime bildirilmesi zorunludur. Bu tür durumların kullanımı yasaktır.  

      ▫️ Dupe bug, sınırsız para açığı veya benzeri exploitleri kullanmak ve bunları bildirmemek yasaktır. Exploit keşfederseniz hemen yönetimi bilgilendirin.`,
      ceza: "Tüm varlıklar silinir + Kalıcı ban"
    }    
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl shadow-2xl shadow-amber-500/40">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">EKONOMİ KURALLARI</span>
            </h1>
            <p className="text-gray-400 text-lg">Para ve ticaret kuralları</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-amber-400" />
              <p className="text-gray-300">Ekonomi kuralları <span className="text-amber-400 font-semibold">adil bir oyun ortamı</span> sağlamak için tasarlanmıştır.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-amber-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
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
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarEkonomi;
