import React from 'react';
import { Link } from 'react-router-dom';
import { Crosshair, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarGang = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Oluşum - Gang Üye Sayısı Sınırlamaları",
      aciklama: "Her gang maksimum belirlenen üye sayısını aşamaz. Çatışmalarda aktif üye sayısı sınırlıdır.",
      detay: `▫️ Tüm oluşumların minimum açılış sayısı 7 üyedir maximum sınır yoktur fakat resmi savaşlarda her iki tarafında 15 kişi olma kuralı vardır.

      ▫️ Tanınmış mafya ve çetelerin rolleri sunucuda yasaktır.

      ▫️ Terörist gruplar, dini değerlere dayalı oluşumlar gibi grup/birlik rolleri yapılamaz. 

      ▫️ Oluşumlar veya çeteler her ne olursa olsun, ittifak kurarak fazladan üye avantajı elde edemez yani bir savaşta gangup yasaktır.  
      
      ▫️ Resmi çete savaşlarında bir çatışmada aynı anda maksimum 15 gang üyesi aktif olarak katılabilir. Bu limit hem saldıran hem savunan taraf için geçerlidir.`,
      ceza: "Gang uyarısı | Tekrarda: Gang askıya alınır"
    },
    {
      id: 2,
      baslik: "Genel Oluşum Kuralları",
      aciklama: "Bu kuralları tüm oluşumların bilmesi zorunludur.",
      detay: `▫️ Her çete üyesinin almış olduğu uyarılar o ekibinde uyarı almasını sağlamaktadır. bu yüzden her üye rol yaparken çetesinide iyi düşünmelidir. (çetenizi askıya aldırabilirsiniz.)
      ▫️ Bir birlik, yaptığı rollere ve BIGBOSS ile olan etkileşimlerine göre kartel statüsüne geçebilir. Bu karar BIGBOSS tarafından verilir. 

      ▫️ Birliklerin yaptığı tüm roller, illegal birlik yönetim ekibi tarafından IC ve OOC olarak düzenli şekilde takip edilir. 
        Yapılan eylemlere göre birliklere olumlu ya da olumsuz IC/OOC yaptırımlar uygulanabilir. 

      ▫️ Bir oluşuma dahil olduğunuz andan itibaren, birlik lideri sizin CK (karakterinizi kalıcı olarak öldürme) hakkına sahip olur  (Oluşuma giriş çıkışlar dahil). 
      
      ▫️ Birlik yetkilisine karşı aşağılayıcı roller yapmak (örneğin üzerine işemek vb.) yasaktır. Bu tür roller yalnızca yönetim onayı ile yapılabilir. 

      ▫️ Her oluşum kendine özgü sembolü kıyafet aksesuarı belirlemek zorundadır ve bunu discord üzerinden paylaşmalıdır. (saat - kolye - dövme - şapka - tshirt gibi vb.)
      
      ▫️ Oluşum üyelerinden herhangi birinin yaptığı IC ihlalden birlik lideri de sorumlu tutulabilir. 

      ▫️ Liderler, üyelerini bilgilendirmekle ve doğru kişilerle Oluşum kurmakla yükümlüdür. Her birlik lideri, kendi oluşumunun yöneticisidir.`,
      ceza: "Gang uyarısı | Tekrarda: Gang askıya alınır"
    },    
    {
      id: 3,
      baslik: "Bölge ve Hood Savaşları",
      aciklama: "Bölge ele geçirme kurallarına uyulmalıdır. Belirli saatler ve koşullar geçerlidir.",
      detay: `▫️ Hood, baskınları izinsiz gerçekleştirilemez.

      ▫️ Polis eğer bir hooda baskın yapacaksa siren açmak zorundadır. Sirensiz baskın atılamaz.

      ▫️ Bir hood bölgesine yapılan baskından sonra, aynı bölgeye 4 saat boyunca ikinci bir saldırı yapılamaz. 

      ▫️ Her oluşum sahip olduğu sokağa spray basmak zorundadır.

      ▫️ Oluşumlar diğer oluşumların bölgelerini para veya savaşla alabilirler bunu içinde mutlaka spray kullanmaları gerekmektedir.​

      ▫️ Bir oluşum diğer oluşuma saldırmak istiyorsa önce sokağına spray atmak zorundadır.​

      ▫️ Bir oluşum herhangi bir işletmeden haraç almak istiyorsa önce o sokağın hakimiyetini ele geçirmesi gerekmetedir bunun içinde mutlaka spray kullanması gerekmektedir.​

      ▫️ Bir oluşum spray basmadığı bir sokak hakkıdan hak talep edemez.

      ▫️ Şehirde bulunan ve yola bakan düz yüzeylere Grafiti yaparak o bölgeleri kendini oluşumunuza katabilirsiniz. Fakat yapacağınız her Grafitiyi, Grafiti kanalına atmak zorundasınız. Grafiti Kanalına atmazsanız alacağınız bölgeler yönetim tarafından silinecektir.

      ▫️ Herhangi bir bölgede NPC'leri öldürürseniz görgü tanıkları o bölgede sizin faaliyet yaptığınızı bölge sahibine söyleyecektir. Bundan dolayı bölge sahibi sizi bulup vurabilir. Yani bölgelerde yapacağınız faaliyetlere dikkat edin
     
      ▫️ Bölgelerinizi bir başka oluşuma para ile satabilirsiniz.
          
      ▫️ Her oluşum her bölgeyi sahiplenmek için o bölgelerde grafiti yapabilir. Fakat siz o bölgeye grafit yaptığınız an bölgede yaşayan yerel halk bölgenin sahiplerine orada graffiti yapıldığını söyleyecektir. Ve sizi gören olay tanıkları sizin oluşumunuzun bu işi yaptığını bölgenin sahibi olan oluşuma bildirecektir. Bundan dolayı oluşumlar arası savaş rolleri direkt olarak başlatılabilir.

      ▫️ Galeri, Silahçı, Mekanik, Malikhane, Kafe ve Hood için baskın izni almak zorundasınız.

      ▫️ Baskınlar için gizli baskın izni veya açık baskın izni yetkililerden almak ZORUNDASINIZ.
      
      ▫️ Bir baskının süresi maksimum 15 dakika olabilir. (Yani bölgede kişileri bulursanız burada 20 dakika kalabilirsiniz, Eğer kişileri bulamazsanız baskın atacağınız saat aralığınca mekanda kalabilirsiniz)

      ▫️ Eğer bu mekanlar izinsiz bir şekilde basılıyorsa bunlar OOC ve IC olarak ceza nedenidir. 

      ▫️ Eğer bir kişi dışarıda başlayan bir rol neticesinde Galeri, Silahçı, Mekanik, Kafe veya Hood'a kaçıyorsa izinsiz baskın atabilirsiniz.

      ▫️ Baskın neticesinde mekanı yakıyorsanız bir mekanı maksimum 1 gün kapalı tutabilirsiniz. (malikaneler ve hood’lar kapatılamaz)

      ▫️ Baskın attığınız yere gelen üçüncü kişileri geride şahit bırakmamak amacı ile vurabilirsiniz. Fakat bastığınız mekanların kamera kayıtları olduğunu unutmayın. Yani bir mekanı bastıktan sonra mekanların kamera kayıtları aracılığı ile sizi bulabilirler. 

      ▫️ Baskınlarınıza Polis müdahale edebilir. Bu durumda Polis ile çatışabilirsiniz. 

      ▫️ Gizli Baskın izni için yetkililerden özel olarak izin almanız gerekir. Bunu Ticket açarak alabilirsiniz. Açık baskın izinleri için ise illegal rol duyuru kanalından izin almanız gerekir. 

      ▫️ Gizli Baskın izni nedeni Meta'yı önlemektir. Fakat gizli baskın izni aldığınızda size izin verilen saatler arasında kişileri bulamazsanız bu konu ile ilgili bir Destek hakkınız bulunmamaktadır. 

      ▫️ Baskınlar için sizin belirleyeceğiniz saatleri belirlemeniz gerekir. Örneğin bir mekanı basmak istiyorsanız, bu mekanı şu saatte basmak istiyorum demelisiniz. 

      ▫️ Baskın izni alırken maksimum 2 saat aralığında baskın izni isteyebilirsiniz. Örneğin saat 14:20 ile 16:20 arası baskın atacağız demeniz gerekir.

      ▫️ Bölge savaşları sadece belirlenen saatlerde ve yönetim onaylı yapılabilir. Savaş başlatmadan önce karşı tarafa bildirim yapılmalıdır. Bölge savaşı sırasında siviller hedef alınamaz.`,
      ceza: "Gang uyarısı | Tekrarda: Gang askıya alınır"
    },
    {
      id: 4,
      baslik: "Gang vs Gang Kuralları",
      aciklama: "Ganglar arası çatışmalar için roleplay sebebi gereklidir. Sebepsiz saldırı yasaktır.",
      detay: `▫️ Her oluşum birbirine savaş ilan edebilir. (Çeteler ve Ekipler birbirine savaş ilan edebilir)
      
      ▫️ Savaşların illegal ortak odasından belirtilmesi gerekmektedir.

      ▫️ Açılan savaşların ardından aktif olarak savaş rolü başlamış bulunur.

      ▫️ Tüm bölgeler dahil her yerde savaşta olduğunuz oluşum ile çatışmaya girebilirsiniz.. (Polis ağır yaptırım uygular)

      ▫️ Bir savaşı bitirmek için, savaşta olduğunuz oluşumun liderini vurmanız, kaçırmanız, ele geçirmeniz vb. gerekmektedir. Bunu yaptıktan sonra bu liderin fotoğrafını çekip illegal rol duyuru kanalına atmalısınız. Bu durumda savaş bitmiş ve fotoğrafı getiren oluşum kazanmış sayılacaktır.

      ▫️ Bir savaş sırasında bir birlik savaşı bitirmek isterse, savaş sadece üstün tarafın isteklerinin tam olarak yerine getirilmesi ya da tarafların orta noktada buluşması ile sonlanabilir. 

      ▫️ Liderler 3 gün sunucuya giriş yapmamışsa, patron yardımcılarının alınması savaşın bitirilmesi için yeterlidir.

      ▫️ Savaşlar kesinlikle legal meslek yerlerine taşınamaz.

      ▫️ Bir savaş bittikten sonra iki oluşum arasında 3 gün savaş çıkamaz.

      ▫️ 72 saat içerisinde hiçbir çatışma rolü dönmezse, savaş otomatik olarak iptal edilecektir.

      ▫️ Savaşlarda izin aldığınız takdirde rakibiniz her mekanına baskın atabilirsiniz. (CK Savaşı dahil) 

      ▫️ İzin alarak bastığınız yerleri yakabilirsiniz yakılan yerler 1 gün kullanılamaz

      ▫️ Çete Hood'u olduğu bölgeleri almak için bölgelere graffiti yapmanız gerekir. ve bunu discord üzerinden yayınlamanız gerekir.

      
      ▫️ Gang savaşı başlatmak için geçerli bir IC sebep olmalıdır. Kişisel OOC husumetler gang savaşı sebebi olamaz. Savaş ilanı yapılmadan ani saldırılar RDM sayılır.`,
      ceza: "Gang uyarısı | Tekrarda: Gang askıya alınır"
    },
    {
      id: 6,
      baslik: "İttifaklar",
      aciklama: "Gang ittifakları sınırlıdır. Maksimum 2 gang ittifak kurabilir.",
      detay: `▫️ Bir savaşda bir ekip birden fazla ekibe savaş açabilir bu savaşlarda bile ittifak yasaktır.
      
      ▫️ Bir oluşum başka bir oluşumla çatışacak veya savaşacaksa tek başına savaşacaktır.Fakat yanına almak istediği bir oluşum olursa, yanına alacağı kişinin karşı taraf ile başlamış bir agresif rolü varsa gang up yapabilir. Aksi takdirde savaşlar teke tek olacaktır.
      
      ▫️ Eğer bir taraf birden fazla oluşum ile bir rol başlatmışsa, bu durumda rol başlatılan oluşumlar bir araya gelebilirler.
      
      ▫️ İttifak kuran ganglar toplam üye limitini aşamaz. İttifaklar yönetim onayı gerektirir. Geçici ittifaklar belirli operasyonlar için kurulabilir.`,
      ceza: "Gang uyarısı | Tekrarda: Gang askıya alınır"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-orange-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-2xl shadow-orange-500/40">
              <Crosshair className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">GANG & ÇETE KURALLARI</span>
            </h1>
            <p className="text-gray-400 text-lg">Çete ve gang aktiviteleri kuralları</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-orange-400" />
              <p className="text-gray-300">Gang kuralları <span className="text-orange-400 font-semibold">adil rekabeti</span> sağlamak için tasarlanmıştır.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-orange-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
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
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarGang;
