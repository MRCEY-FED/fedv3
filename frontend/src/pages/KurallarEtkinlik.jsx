import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, CheckCircle, AlertTriangle, PartyPopper } from 'lucide-react';

const KurallarEtkinlik = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Sarı Sayfalar",
      aciklama: "Sosyal medya üzerinden paylaşım kuralları.",
      detay: `▫️ Sarı sayfalardan nokta ve saçma sapan ilan attığınız tespit edilirse ceza alacağınızı unutmayın. 
      
      ▫️ Telefonda yer alan Sarı Sayfalar uygulaması, yalnızca IC (oyun içi) reklam ve iletişim amacıyla kullanılabilir. 
      
      ▫️ Sarı Sayfalar üzerinden mekanikçi çağırmak, taksi istemek gibi amaç dışı kullanımlar kesinlikle yasaktır. 
      
      ▫️ Sarı Sayfalar üzerinden tehdit, şikayet, öneri gibi içerikler paylaşmak yasaktır. 
      
      ▫️ Sarı Sayfalarda OOC (karakter dışı) hiçbir ifade yer alamaz. 

      ▫️ İşletme sahipleri ve/veya çalışanları, işletmeleriyle ilgili reklam ve tanıtımları 30 dakikada bir olacak şekilde paylaşabilirler. 

      ▫️ Etkinlikler veya yönetim onayıyla yapılan paylaşımlar, bu zaman kısıtlamasına dahil değildir ve ihlal sayılmaz. 

      ▫️ Aynı işletmeye ait reklamların farklı kişiler tarafından paylaşılması, zaman kuralını ihlal etmeyecek şekilde atlatarak kullanılamaz; bu kuralı geçersiz kılmaz. `,
      ceza: "İlk ihlal: Etkinlikten çıkarılma | Tekrar: 1-3 gün ban"
    },    
    {
      id: 2,
      baslik: "Etkinlik Katılımı",
      aciklama: "Sunucu etkinliklerine katılım gönüllüdür ancak katılanların kurallara uyması zorunludur.",
      detay: `▫️ Yönetim tarafından düzenlenen veya desteklenen toplu etkinliklere yönelik saldırı girişimi rolleri kesinlikle yasaktır. (Yalnızca özel izin alınarak bu tür rollere girilebilir.) 

      ▫️ Etkinlik bölgelerinde her türlü illegal role girmek yasaktır. 

      ▫️ Kilise ve/veya mezarlıklarda yapılan roller, etkinlik kapsamında değerlendirilir ve buna göre kurallara tabidir. 

      ▫️ Etkinlik sırasında yüksek sesle konuşmak yasaktır; iletişim için mutlaka fısıltı modu (whisper) kullanılmalıdır. 

      ▫️ Etkinliklere katıldığınızda, etkinlik kurallarına tam uyum beklenir. Etkinlik alanlarında grief yapmak, diğer katılımcıları rahatsız etmek veya etkinliği sabote etmeye çalışmak yasaktır. Organizatör talimatlarına uyulmalıdır.
      
      ▫️Etkinlik alanlarına araçla dalmak, silah kullanmak veya roleplay dışı davranışlar sergilemek yasaktır. Bu alanlar etkinlik süresince güvenli bölge olarak kabul edilir. Etkinlik bitiminde normal kurallar geçerli olur.`,
      ceza: "İlk ihlal: Etkinlikten çıkarılma | Tekrar: 1-3 gün ban"
    },
    {
      id: 3,
      baslik: "Twitter ve Instagram",
      aciklama: "Sosyal medya üzerinden paylaşım kuralları.",
      detay: `▫️ Sunucudaki tüm uygulamalar IC (oyun içi) olarak işlemektedir. Bu nedenle, gerçek hayattan görseller paylaşmak yasaktır. (İstisnai durumlar yalnızca yönetim onayı ile mümkündür.) 
      
      ▫️ Uygulamalar üzerinden illegal gönderi paylaşılması halinde, LSPD tarafından IC soruşturma başlatılabilir. 

      ▫️ Uygulamalarda pornografik içerik, yasal olmayan içerikler ve benzeri uygunsuz paylaşımlar kesinlikle yasaktır. 

      ▫️ Kullanılan uygulamaların yalnızca Los Santos değil, tüm dünya genelinde erişilebilir olduğu varsayılmalıdır. 

      ▫️ Fake (sahte) hesap açan kişilerin hakkında IC soruşturma başlatılabilir.`,
      ceza: "Duruma göre: Uyarı - 3 gün ban"
    },
    {
      id: 4,
      baslik: "Zaman ve Hava Durumu",
      aciklama: "Roldeki hayat gerçek zamanla ilerlemektedir.",
      detay: `▫️ Sunucumuzda geçen tarih, gerçek dünya UTC takvimiyle birebir örtüşmektedir. 
      
      ▫️ Karakterlerinizin yaşı, gerçek zamanlı tarih ile doğru orantılı şekilde artacaktır. 

      ▫️ Hava durumları haftalık olarak discord üzerinde ki hava durumu odasından belirtilmektedir. yağmurlu veya karlı bir havada role uygunsuz giyinmek uyarı sebebidir.`,
      ceza: "Duruma göre belirlenir"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-indigo-400 hover:text-indigo-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-2xl shadow-indigo-500/40">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Sosyal Medya & Etkinlik Kuralları
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Sunucu etkinlikleri ve organizasyon kuralları
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <PartyPopper className="w-6 h-6 text-indigo-400" />
              <p className="text-gray-300">
                Etkinliklerimize katılarak <span className="text-indigo-400 font-semibold">topluluk ruhunu</span> yaşayın!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-indigo-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-indigo-500/30"
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

export default KurallarEtkinlik;
