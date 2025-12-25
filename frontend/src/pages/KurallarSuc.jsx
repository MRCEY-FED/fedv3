import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Siren } from 'lucide-react';

const KurallarSuc = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "İllegal Karakterler",
      aciklama: "Çetede olmayan illegal karakter kuralları",
      detay: `▫️ Bir birliğe dahil olmayan illegal karakterler, birliğe savaş açabilir. Ancak bu durumda rolün sonuçlarını (karşılık alma, ölüm riski CK vb.) göz önünde bulundurmak zorundadırlar. 

▫️ Tek başına bir birey bir çeteye veya oluşuma saldırabilir fakat sonuçları ağır olur. (CK Point - CK veya uzul kaybetme gibi.)`,
      ceza: "2-4x Uyarı"
    }, 
    {
      id: 2,
      baslik: "Devlet-İllegal Etkileşimi",
      aciklama: "İllegaller ve Devler arası etkileşimler",
      detay: `▫️ Polis bir suçluyu kovalarken sebepsiz yere önüne kırmak, kasıtlı hamleler yapmak yasaktır. 

▫️ Polis bir suçluyu kovalarken sebepsiz yere peşine takılarak takipte bulunmak yasaktır. 

▫️ 911 çağrı hattını kullanarak sahte ihbar yapmak ve bu yolla polis veya LSFMD personelini pusuya düşürmek kesinlikle yasaktır. 

▫️ Yönetim izni olmadan, LSPD veya LSFMD’ye ait herhangi bir mekâna saldırı düzenlenemez. 

▫️ Bir memuru kaçırmak için geçerli ve açık bir sebebiniz olmalıdır. 

▫️ Bir memur, sadece görevini yaptığı için kaçırılamaz. 

▫️ Görev başındaki bir memur kaçırılıp rehin alındığında, kaçıran kişiler yakalandıkları takdirde rolün gidişatına göre müebbet hapis cezası ile karşılaşabilirler. 

▫️ İllegal oluşum üyeleri, LSPD memurlarına sığınamaz. 

▫️ Sadece LSPD memurları tarafından hastane ifadeleri veya sorgu odası itiraf rolleri kapsamında LSPD ile etkileşime girebilirler. 

▫️ Hood’a sahip oluşumlar, LSPD’den kaçarken kendi hood alanlarına sığınabilirler. 

▫️ Bu durumda LSPD bölgeye baskın yapma hakkına sahiptir. 

▫️ Kıyafet mağazasından temin edilebilen tüm LSPD, LSFMD, FBI ve diğer devlet kurumu kıyafetlerini giymek yasaktır.

▫️ Üzerinde “Police, LSPD, LSPA, PIA, DOA, NOOSE, ARMY, SHERIFF, FIB, EMS” ve benzeri ifadeler bulunan kıyafetler yalnızca yetkili polis ve hastane personeli tarafından kullanılabilir. Bu kıyafetler, yalnızca özel bir rol için ve yönetim onayı alınarak geçici olarak giyilebilir. 

▫️ PD yalnızca banka soygunları çok büyük oluşum savaşları ve OHAL durumlarında Bearcat Çıkartabilir. Bunun dışında kesinlikle çıkaramaz `,
      ceza: "2-4x Uyarı"
    },        
    {
      id: 3,
      baslik: "Soygun Kuralları",
      aciklama: "Soygunlar için minimum kişi ve roleplay gereksinimleri vardır.",
      detay: `SOYGUN KURALLARI
Soygunlarda kullanılması gereken teçhizatlar
Ev Soygunu - Kesi delici herhangi bir alet 
Atm Soygunu - Kesi delici herhangi bir alet 
Market Soygunu- Kesi delici herhangi bir alet 
Kuyumcu Soygunu - Kesi delici herhangi bir alet 
Mühimmat Tırı - En az 2 pistol ve üstü 
Banka - En az 2 pistol ve üstü 
Tren Soygunu - 2 En az pistol ve üstü 
Merkez Bankası - 2 En az pistol ve üstü 

Ev Soygunu - min 1 - max 2 Kişi Sınırı
Atm Soygunu - min 2 - max 3 Kişi Sınırı
Market Soygunu- min 3 - max 4 Kişi Sınırı
Kuyumcu Soygunu - min 4 - max 7 Kişi Sınırı
Mühimmat Tırı - min 6 - max 10 Kişi Sınırı
Banka - min 8 - max 15 Kişi Sınırı
Tren Soygunu - min 6 - max 10 Kişi Sınırı
Merkez Bankası - min 8 - max 15 Kişi Sınırı

▫️ Soygunlarda kişi sayısı sınırı vardır istediğiniz sayıda soyamassınız soygunların kişi sayılarına dikkat ediniz aksi takdirde ceza alırsınız.

▫️ İllegal bölgelerde soymak serbesstir fakat soyacağınız kişi ile diyaloğa girmeniz gerekmektedir direk ateş edemez veya silah doğrultamazssınz.

▫️ /me ve /do komutları ile adam soyamaz, kimseyi envanterindeki eşyaları vermeye zorlayamazsınız. Sistemsel olarak soygun yapılabilen sunucumuzda, bu şekilde basit item yakalamaya çalışan oyuncular uzaklaştırılır. 

▫️ Ev - atm - market  hariç tüm soygunlarda rehine olması gerekmektedir. aksi takdirde polisin rol paslama gibi bir zorunluluğu yoktur.

▫️ Eş zamanlı anlaşarak soygun yapmak yasaktır.Bu kuralı ihlal edenler Retarded Rp kural ihlali ile cezalandırılacaktır.

▫️ Soygundan çıkış yaptıktan sonraki 10 dakika boyunca çıkan parayı yatıramaz, çıkan eşyayı da envanterinizden herhangi bir yere bırakamazsınız. (Soyduğunuz kişilere verebilirsiniz.)

▫️ Sopa ile adam soymak yasaktır. Bıçak ile birini gasp edebilirsiniz. Sopa kullanırken sırtınızda ki silah veya sopayı görmelerini istemiyorsanız çanta taşımak zorundasınız.

▫️ Restart öncesi ve sonrası 30 dakika boyunca soygun rolleri yapamazsınız.

▫️ Bakan-Savcı vb. kişiler kaçırılmak istenildiği zaman ticket açarak yetkililerden mutlaka onay istenmesi gerekir.

▫️ Kişi başına istenecek en yüksek fidye bedeli 5k yı geçemez. (önemli kişileri kaçırmak için ticket üzerinden izin almanız gerekiyor, Bakan, Savcı; gibi rehinelerde fidye bedeli 30k'ya kadar esnetilebilir.)

▫️ Motorla illegal yapmak serbesttir fakat arazi motoru kullanmak kesinlikle yasaktır. “sport motorlar serbest”

▫️ Büyük çaplı soygunlarda (Merkez Bankası) soygunu için ticket kanalından izin isteme onay almak mutlaka zorunludur. 

▫️ Soygunun ortasında karşı tarafın fail rp yaptığını düşündüğünüz vakit rolden çıkıp şunu yanlış yaptın bu böyle olmaz tarzı cümleler kullanıp rolü bozmak kesinlikle ban sebebidir.

▫️ Market soygununda, banka soygununda, mücevher soygununda dışarıdan asla ve asla müdahale edilmesi "kesinlikle ve kesinlikle" yasaktır. (Kendi ekibinizden kişiler müdahale edebilirler)

▫️ Soygun sonunda soyguncular eğer yakalanırsa, soygunda kazandıkları mallara ve üstünde ki tüm paraya polis el koyar.

▫️ Soygun esnasında içeride rehine olduğu taktirde polis içeri müdahale edemez. Ancak içerde rehine yoksa direk ateş izinleri vardır. 

▫️ Soygunlarda maske takılması zorunludur. Aksi taktir de cezai işlem uygulanacaktır.

▫️ Soygundan kaçışta arabayla taklalar atıp sonra çıkıp silah tutan veya tekrar arabayla devam edenlere cezai işlem uygulanacaktır.

▫️ Marketin içine sığacak küçük araçla marketin içine bu aracı saklayıp sonra çıkış yapmak yasaktır.

▫️ Market soygunlarını aynı şahıslar 15 dk da bir tekrarlayabilir. Aksi takdirde aynı şahıs habire aynı şekilde soygun yapıp polise rol paslamassa polisin ağır müdahale hakkı vardır.

▫️ Market soygunların da polisler ve çete üyeleri arasında rol dönmesi için, rehineyi verme anında veya rehineyi verir vermez çatışmak yasaktır. Kaçış başladıktan sonra çatışıp çatışmamak çete üyelerine ve rolün gidişatına bağlıdır.

▫️ Maskesiz, kimliğiniz belirgin şekilde soygun yapmanız yasaktır aksi takdirde polisler ve doj tarafından cezalandırılabilirsiniz.

▫️ Devlet görevlilerini KUYUMCU - MÜHİMMAT TIRI - BANKA - TREN - MERKEZ BANKASI soygunlarında sadece soyabilirsiniz.

▫️ Devlet görevlilerin’in sadece (yemek - su - mermi - zırh - silah - kelepçe ve anahtarı) gibi itemlerini alabilirsiniz. 

▫️ Polis araçlarını rolsüz bir şekilde çalmak yasaktır, ancak aktif bir çatışma bölgesinde polise karşı üstünlük kurduğunuz durumlarda polislerin araçlarını çalabilirsiniz.

▫️ Rehinesiz soygunlarda suçlu teslim olmassa vurularak etkisiz hale getirilmek LSPD’nin inisiyatifindedir.

▫️ Soyacağınız bir kimseyi rolsüz soymak yasaktır.

▫️ Yolda gördüğünüz her adamı gidip saçma sapan, ellerini kaldır diyerek soyamazsınız. Kişiyle en azından rol geçmişiniz olması gerekmektedir. 

▫️ Dolandırıcılık rolü legal üzerine yasaktır. örn. araç alım satımında dolandırıcılık yasaktır.

▫️ Soygun ve çatışmalı rollerde (yüksek ve orta çatılar - kapalı alanlar )  serbesttir. fakat bu tür rollerde rolün UTC 20 dk geçmesi durumunda pd’nin M4 Çekmek,Air kaldırmak, zırhlı araç kullanımı gibi aşırı güç kullanımı serbesttir.

▫️ Soygunlar, rehineyle veya rehinesiz şekilde yapılabilir. 

▫️ Soyguna katılabilecek kişi sayısı, soygun türüne göre aşağıda belirtilmiştir. 

▫️ Bu sayılar içeride ve dışarıda rol alan tüm oyuncuları kapsar (örneğin: araç kapatma, oyalama, kaçırma, gözcülük gibi roller dahil). 

▫️ Belirtilen sayıdan fazla kişiyle soygun yapmak veya dahil olmayan kişilerin dolaylı yoldan müdahale etmesi yasaktır. 

▫️ LSPD, soygun sırasında kapı önünden müdahale edebilir, ancak özel izin olmadan içeri giremez. 

▫️ Soyulan yerin kapısından geçebilecek boyutta bir aracı içeri sokmak ve araçla kaçmak yasaktır. 

▫️ Soygun sistemlerinin farm ve grind amacına dönüştürülmesi durumunda, IC/OOC yaptırımlar yönetim inisiyatifindedir. 

▫️ Yapılan soygunlarda anlaşmalı rehine yasaktır.`,
      ceza: "Soygun iptali + 3x Uyarı"
    },
    {
      id: 4,
      baslik: "Gasp ve Dolandırıcılık",
      aciklama: "Gasp ve Dolandırıcılık rolleri bu kurallara göre yapılmalıdır.",
      detay: `▫️ Legal iş yapan kişileri bir geçmişiniz yok ise soymak yasaktır soymak istediğiniz kişiyle aranızda agresif bir rol geçmişi olmak zorundadır.

▫️ İllegal bölgelerde iş yapan kişlileri soyabilirsiniz.

▫️ Bir kişiyi soyduktan sonra öldürme hakkına sahipsiniz. Ölü kişilerinde üzerlerinde ki her şeyi alabilirsiniz.

▫️ Sosyal bölge kapsamındaki alanlarda gasp rolleri yapmak yasaktır. 

▫️ Polislerden Belirtilen soygunlar dışında loot yapılması yasaktır. (Kuyumcu - Banka - Bobcat)

▫️ Para gaspı yapılabilir. Ancak: Gasp edilen kişinin ATM’ye götürülerek para çektirilmesi yasaktır. 

▫️ Bir kişiyi kaçırarak, onun mülk, işletme veya araç gibi eşyalarını yasal olarak devretmesini zorlamak yasaktır. Bu tarz roller yalnızca yönetim izniyle gerçekleştirilebilir. 

▫️ IC dolandırıcılık rolleri yasak değildir, ancak: Rolün önceden planlanmış olması gerekir. Örneğin araç satışı gibi durumlarda: Parayı alıp aracı vermemek, Ya da aracı alıp parayı vermemek gibi eylemler yasaktır. `,
      ceza: "2-4x Uyarı"
    },
    {
      id: 5,
      baslik: "Kaçırma - Kaçırılma",
      aciklama: "Kaçırma/Kaçırılma Kurallarını içerir.",
      detay: `▫️ Kişiler bir kişiyi kaçırırken, karşı tarafın üzerinde bulunanlara el koymazlarsa, karşı taraf telefonu ile arkadaşlarına mesaj gönderip yerini paylaşabilir veya kaçırıldığı hakkında dışarıya bilgi atabilir.

▫️ Kameralı bölgelerde kaçırma rolü yaptığınız takdirde buralardan tesbit edilebileceğinizi unutmayın.

▫️ Bir kişinin kaçırılabilmesi veya tutsak edilebilmesi için mantıklı ve geçerli bir sebep olması gerekir. Bu sebepler ortadan kalktığında, kişi serbest bırakılmalıdır. 

▫️ Kaçırılan bir kişi, maksimum 1 saat boyunca alıkonabilir. Süre, karşı tarafın açık rızasıyla uzatılabilir. 

▫️ Kaçırılan taraf, Fear RP (korku rolü) yapmak zorunda değildir fakat yapmadığı takdirde 1X CK Point alıcağını bilmesi gerekir. 

▫️ Eğer yapmazsa, karşı tarafa yönetim izniyle CK (karakter öldürme) veya kalıcı hasar hakkı verilebilir. 

▫️ Eğer kaçırılma rolü sırasında telefon gaspı yapılmışsa, kaçırılan kişiyi şehirden veya kasabadan çok uzak, ücra noktalara bırakmak veya terk etmek yasaktır. bu, oyuncunun rolüne devam edebilmesini engelleyeceği için uygun değildir. 

▫️İşkence uygulamak isteniyorsa, bunun için rol geçmişiniz olması gerekmektedir.

▫️ Birini durduk yere kaçıramassınız bunun için rol geçmişiniz olması gerekmektedir. (soygun rolleri hariç.) `,
      ceza: "2-4x Uyarı"
    }    
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl text-rose-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl shadow-2xl shadow-rose-500/40">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">SUÇ & SOYGUN KURALLARI</span>
            </h1>
            <p className="text-gray-400 text-lg">Suç aktiviteleri ve soygun kuralları</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Siren className="w-6 h-6 text-rose-400" />
              <p className="text-gray-300">Suç roleplay'i <span className="text-rose-400 font-semibold">kaliteli ve adil</span> olmalıdır. Herkes için eğlenceli bir deneyim yaratın.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-rose-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
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
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarSuc;
