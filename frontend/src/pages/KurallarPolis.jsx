import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Siren } from 'lucide-react';

const KurallarPolis = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Genel Kurallar",
      aciklama: "Genel legal birimler hakkındaki bazı kurallar.",
      detay: `▫️ Yakalanan Herkese Miranda Hakları okunmak zorundadır. Okunmadığı taktirde şahsın sorgusu geçersiz sayılıp. Direkt olarak %40lık indirim uygulanır.

      ▫️ Legal birimlerin ihbarlara üniformasız bir şekilde yönelmesi yasaktır.

      ▫️  Suspect size ateş etmediği takdirde yada bıçak çekmediği takdirde ateş edemezsiniz. Size ateş etmediği veya bıçak çekmediği durumlarda emirlerinizi dinlemiyorsa teaser veya Beanbag ile müdahale edebilirsiniz.

      ▫️ Kolluk kuvvetleri ciddiyetini ve karşı tarafa olan saygısını bozamaz. Tutuklanan kişi size hakaret ediyor ve kışkırtıcı şekilde konuşuyorsa aynı şekilde konuşamazsınız.

      ▫️ Nezarethanede bir suspecti boş bir şekilde 10 dakikadan fazla bekletmek yasaktır. Sorgu ve benzeri durumlarda Max 1 saat kadar tutabilirsiniz.

      ▫️ Her sivile olabildiğince kibar ve seviyeli bir şekilde konuşmalısınız . Kişi sizi dikkate almayıp ricalarınızı dikkate almadığı takdirde emir kipiyle konuşabilirsiniz.

      ▫️ Kamu yazdığınız kişilerle kesinlikle dalga geçemezsiniz. Kamu bölgesinde siviller ile dalga geçen memurlara yaptırımlar uygulanacaktır.

      ▫️ Hangi departmandan olduğu fark etmeksizin sizden üst rütbe bir officer gördüğünüzde hiyerarşiye uymak zorundasınız.

      ▫️ Kolluk Kuvvetleri kovalamacalarda suspectin kaçtığı mekanlara anlık olarak baskın atabilir. (Mekanik, Çiçekçi, Hood vs) Kişiyi Kaybettiniz ve 15 dakika sonra o bölgede gördünüz oraya baskın atmanız yasaktır. DOJ dan izin almalısınız.

      ▫️ Legal işletmelerden shot fire gelirse mekan sahibi uyarılır. Yoğun shot fire gelmeye devam ediyorsa baskın atıp depoları arayabilirsiniz. (Mekanik, UWU Cafe ve benzeri işletmeler)

      ▫️ Departmanlar diğer departmanlara giriş sağlarken veya cephanelik kullanacağı zaman izin istemek zorundadır.

      ▫️ HSU araç çıkartmak için minimum 2 adet adam birimi olması gerekmektedir.
        • 2 adam > 1 hsu
        • 5 adam > 2 hsu
        • 8 adam > 3 hsu

      ▫️ 2 adet saha devriyesi olmadan AIR çıkartılamaz.

      ▫️ Bir İhbara 0.40 mil kala siren ve çakar açarak gidilmesi zorunludur.

      ▫️ Kod spam atmak yasaktır.

      ▫️ Departmanda Kamera kapatıp sivile şiddet uygulamak yasaktır. (Maymunlar hariç)

      ▫️ İllegal bölgelere (kenevir, black market  vb.) gidip beklemek, pusu kurmak yasaktır.

      ▫️ SS içinde geceleri fear rp yapmak zorundasınız (Kalabalık olan taraf legal ekiplerse o zaman buna gerek yoktur)

      ▫️ Memura kasten veya değil ezme girişiminde bulunmuş birine karşı durdurmak amaçlı lastiklerine ateş açabilirsiniz.

      ▫️ Maskeli gördüğünüz kişiyi uyararak çıkarması için ikaz edebilir, arayamazsınız. 

      ▫️ Maskesini çıkarmamakta ısrar ederse üst araması yapabilirsiniz ve silah kılıfı kullanan herkesi sorgusuz sualsiz arama hakkına sahipsiniz.

      ▫️ Polis memurları öldükten sonra e çekip tekrar bölgeye yönelemezler.

      ▫️ Hiçbir devlet memuru başka bir memuru mesaideyken savcılık izni olmadan tutuklayamaz. Karşınızdaki memur sivildeyken yasa dışı bir olay gerçekleştirirse lyberger hakları okunarak tutuklanabilir. Mesaideki memur tutuklanamaz bir üst rütbelisi kim ise ona durum açıklanır gereken yapılmamış ise savcılığa şikayet edilir ve soruşturma başlar.

      ▫️ Gereksiz megafon kullanmak yasaktır. Megafon basarken hangi departman olduğunuzu belirtmek zorundasınız.

      ▫️ Sivilde polis departmanına ait araçların kullanımı kesinlikle yasaktır.

      ▫️ Ü▫stünüzde üniforma varken sivil araç kullanamazsınız.

      ▫️ Gece olduğunda SS içerisinde Sayıca size üstün olan çetelere karşı agresif tutum sergileyemezsiniz. üstünlüklerini kabul etmek ZORUNDASINIZ Size karşı direk olarak bir gerekçe olmadan agresif tutum sergileyemezler. Gidip Taco'da yemek de yiyebilirsiniz. Sohbet de edebilirsiniz. Ancak Hiçbir şey yokken size agresif çıkarlarsa kayıtla beraber şikayette bulunabilirsiniz. (TT atabilirler fakat agresif çıkamazlar).

      ▫️ Departmana aldığınız kişiler size FEAR RP yapmak ZORUNDADIR. Yapmayanlara CK point hakkınız kayıt olmak şartıyla bulunmaktadır. CK kuralları gereği DOJ Ekibini çağırırsınız. Kişiyi Federal cezaevine konvoy ile götürürsünüz. Federal cezaevine soktuğunuz kişiler ck yer. Kaçırma rolleri serbesttir. Pusuya düşebilirsiniz.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },      
    {
      id: 2,
      baslik: "Kıyafet Yönetmenliği",
      aciklama: "İçişleri tarafından belirlenmiş kıyafet yönetmeliği.",
      detay: `▫️ Sunucuda bulunan legal birimlerin kıyafet yönetmeliğine aykırı olan sebepler bellidir.
      •  Renkli Saçlar
      •  Rasta Saçlar
•  Zırh kullanımı (Night Shift harici)
•  Dövme (Açık bir şekilde olmayacak,sadece tek kolda 15cm [ya omuzdan dirseğe ya da dirsekten bileğe] olacak şekilde kullanılabilir)

▫️ Normal devriyeniz de departmanınızın belirlediği üniforma kıyafetler ile çıkmanız zorunludur.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 3,
      baslik: "CK Yeme Durumu",
      aciklama: "Legal CK durumları nasıl olur.",
      detay: `▫️ Departmandan ayrılırken CK yemek zorunludur.
      
      ▫️ Departman geçişlerinde CK yemek zorunludur.`,
      ceza: "İlk ihlal: Karakter CK 1 Hafta ban | Tekrar: Karakter CK 1 Hafta Ban"
    },
    {
      id: 4,
      baslik: "Araç Yönetmenliği",
      aciklama: "İçişleri tarafından belirlenmiş araç yönetmeliği.",
      detay: `▫️ Her devriye aracının üzerinde beyaz renkli şekilde rozet kodu yazılması zorunludur.
      
      ▫️ Livery’siz araç çıkartılmayacaktır. (Özel operasyon büroları hariç).
      
      ▫️ Araçlara herhangi bir şekilde modifiye kesinlikle yasaktır.  (Egzoz, Jant, Bodykit, vs).
      
      ▫️ Explorer araçlarının bagaj kısmına orta doğu bayrakları takılmayacaktır.
      
      ▫️ Araçların plakaları mavi/beyaz olması zorunludur.
      
      ▫️ KOD2 ve KOD3 harici yüksek hız yapmak yasaktır. Görüldüğü yerde işlem uygulanır. (100 km/h+).`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 5,
      baslik: "Orantısız Güç",
      aciklama: "Orantısız güç kullanımı.",
      detay: `▫️ Şüphelinin elinde kesici delici ve silah görülürse orantısız güç kullanımı serbesttir.
      
      ▫️ Copbait durumlarında PIT ve RAM durumları serbesttir..
      
      ▫️ Herhangi bir pusu durumunda veya illegal bir örgütlenme durumunda. Örnek olarak telsiz bastığını ve destek çağırdığını duyuyorsanız ilk olarak taser kullamınız serbesttir. Eğer şüpheli taser’a karşılık vermeyip zorluk çıkartmaya devam ediyorsa orantısız güç kullanabilirsiniz.

      ▫️ Orantısız güç gereğince blacklist olan bölgelerde soygun yapan kişilere orantısız güç kullanımı serbesttir.Ek olarak Air birimi ile HotDrop atabilirsiniz 
      Bunlar haricinde soygunlarda HotDrop yasaktır.

      ▫️ Olası bir pullover durumunda illegal taraf sizi bir mekana çekip pusu durumuna düşürdüğü vakit tam yetki (orantısız güç) kullanımı serbesttir.Böyle durumlarda bölgeye kod99 ile tüm memurları çağırabilirsiniz..

      ▫️ Soygun sonrası illegallerin kazanması sonrasında karşı tarafın çıkış yapabilmesi için 3 dakika bir süre tanınmıştır.Süre kapsamı için karşı tarafa megafondan ‘3 Dakika içinde bölgeden ayrılın’ anonsunu geçmelisiniz.Karşı taraf bu süreç içerisinde loot yapmaya devam ederse DIREKT olarak orantısız güç kullanabilirsiniz.Eğer ki karşı tarafın amacı sizden kaçmaksa bu olanağı sağlayıp çıkış izni tanımalısınız..
      
      ▫️ Copbait durumlarında (Şahıs bilerek kışkırtıp kendi hooduna çekip ateş açması gibi) durumlarda PD orantısız güç kullanabilir.      

      ▫️ Felony Stop durumunda talimatlara uyulmadığı taktirde ve zorluk çıkarılması durumlarında ağır güç kullanıp ateş açabilirsiniz..`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 6,
      baslik: "Pit - Ram Kullanımı",
      aciklama: "Bit ve Ram kullanımları nasıl olmalıdır.",
      detay: `▫️ Pit süresi 5 dakikadır. Ram süresi 10 dakikadır. Olağan üstü bir durum gerçekleşmediği halde 5 dakikadan önce pit işlemi uygulamak yasaktır.
      
      ▫️ Aktif kovalamacada iken 5 dakika dolduysa, 25sn'de bir pit atabilirsiniz. PIT ve RAM işlemleri yanıtsız kalırsa 10.dakikadan sonra 1 adet lastik alabilirsiniz.
      
      ▫️Terörizm suçundan kaçan şüpheli, Sürekli olarak copbait, kural ihlali yapan bir şahıs, Pit ve ram atılmasına rağmen durmuyorsa süre dolmadan Pit atabilirsiniz.
      
      ▫️İşlek Caddelerde PIT atıp sivil halkı tehlikeye sokacak şekilde PIT atmak yasaktır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 7,
      baslik: "Soygun Yönetmenliği",
      aciklama: "Soygun rollerinde nasıl hareket edilmelidir..",
      detay: `▫️ Soygunlarda Air birimine ateş açılırsa Air birimi çatışmaya dahil olabilir.
      
      ▫️ Soygunlarda karşıdan shotfire gelmediği sürece ateş açmak yasaktır.
      
      ▫️ Soygunlarda pit süresi 5 dakika Ram süresi 10 dakika ile sabittir.
      
      ▫️ Soygunlarda kod kullanımı yasaktır. Soygunlara katıldığınız zaman örnek olarak GPS’nizi KUYUMCU-KOD şeklinde değiştirmeniz gerekmektedir.
      
      ▫️ Soygunlarda karşı taraf araç değiştiriyorsa aracın tekerlerine direkt olarak ateş açabilirsiniz. Kovalamaca devam ederken aracı garaja koymak ve tamir etmek yasaktır. Araç değişikliği olduğu takdirde PIT işlemi otomatikman onaylanır.
      
      ▫️ Soygunlarda karşı tarafın kaç kişi olduğunun bir önemi olmadan, soygun limitiniz kaç kişi ise o kadar katılabilirsiniz.
      
      ▫️ Rehinenin can güvenliği memur için soygunlarda en önemli durumdur. Rehinesi olan birine karşı yaklaşırken önceliğinizin rehinenin can güvenliği olduğunu unutmayınız. Rehinesi olan kişilere direkt olarak ateş edemezsiniz. Role girin.
      
      ▫️ Soygunlarda çatıştığınız kişilere sadece işledikleri soygun üzerinden ceza yazmalısınız ( Kuyumcu, Market vb). Memur yaralama ve öldürme girişimi yazılamaz.
      
      ▫️ Soygun rollerinde soygun yapan suspectlerin araçlarına binmesi için fırsat tanınmak zorundadır. Direkt tutuklama rolüne girilmesi yasaktır.
      
      ▫️ Soygun sırasında çıkarılan helikopter düşerse tekrar çıkarılmayacaktır.
      
      ▫️ Soygun sonrası çatışma esnasında tüm soyguncular etkisiz hale getirilmeden veya teslim olmadan yaralı polisleri bölgeden uzaklaştıramazsınız.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 8,
      baslik: "Araç Uygunluğu",
      aciklama: "Rol pası amaçlı araç uyumluluğu.",
      detay: `▫️ Karşınızda ki şüpheli ev soygunu yaparken muscle ya da supersport olmayan bir araçla yapıyorsa karşı tarafı HSU ile kovalayamazsınız. Telsizden destek talebi isteyip hsu olmayan araç talep etmeniz gerekmekte.Destek talebi gelene kadar karşı tarafı kovalamaya devam edebilirsiniz. Destek geldiğinde ise HSU kovalamadan ayrılmalı.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },    
    {
      id: 9,
      baslik: "Merry Kuralları",
      aciklama: "Merry devriyelerinde nelere dikkat edilmelidir.",
      detay: `▫️ Aktif kovalamacalara katılabilir, aktif kovalamacaya herhangi bir araçlı birim geldiğinde kovalamacadan ayrılmak veya victor 1’i bırakmak zorundadır.

      ▫️ Herhangi bir kaza yaptığında mutlaka yerde yatarak kaza rolüne girmek zorundadır. Akabinde iç kanama riskine karşı hastaneye gidip muayene olmak zorundadır.

      ▫️ Dışarıdan net şekilde belli olacak fosforlu kıyafetleri giymek zorundadır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },      
    {
      id: 10,
      baslik: "Air Kuralları",
      aciklama: "Air devriyelerinde nelere dikkat edilmelidir.",
      detay: `▫️ Alçak irtifa uçuş yapamazlar.

      ▫️ Tek kişi air çıkamaz. Bir kişi air pilotu olarak bir kişi de kamerada kontrolde olmak üzere 2 kişi air çıkmak zorundadır.

      ▫️ Uygun kıyafetleri giymek zorundadırlar.

      ▫️ Soygun rollerine telsizden talep gelmediği sürece air soygun rolüne intikal edemez.
      
      ▫️ Acil durum olmadığı sürece Helipad harici iniş yapılması yasaktır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 11,
      baslik: "Soygun ve Soygun gps kodları",
      aciklama: "Soygun gps kodları nasıl olur.",
      detay: `▫️ Soygun harici olası bir pusu ihtimaline karşı kod0 ve kod99 atılır. Ek olarak soyguna katılan her memur GPS’ini ör: KUYUMCU olarak değiştirmek zorundadır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },
    {
      id: 12,
      baslik: "Badcop Rolleri",
      aciklama: "Kötü polis rolleri sadece yönetim izinlidir.",
      detay: `▫️ Badcop rolleri kesinlikle yasaktır. Cezası Perma Ban sebebidir. sadece yönetimin izin verdiği kişiler badcop rollerine girebilirler.`,
      ceza: "İzinsiz yapılırsa Perma"
    },
    {
      id: 13,
      baslik: "Taser ve Beanbag",
      aciklama: "Taser ve Beanbag kullanımı nasıl olmalıdır.",
      detay: `▫️ Çatışmalı soygunlarda Taser ve beanbag kullanımı yasaktır.
Taser Yaşlılara, Çocuklara, Hamilelere, Epilepsi nöbeti geçiren kişilere, Hızlı koşan birine ve Denizden çıkmış bir kişiye kullanılmaz.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },     
    {
      id: 14,
      baslik: "Night Shift",
      aciklama: "Gece devriyesinde bazen kurallar esnetilir.",
      detay: `▫️ Gece devriyesi dediğimiz Night Shift her istisnanın genişletildiği bir durumdur.Sadece belirli saatler içinde kullanılabilir. (22.00 - 06.00) arasındadır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },  
    {
      id: 15,
      baslik: "Suçluyla İletişim",
      aciklama: "Polis suçlu iletişimi nasıl olmalıdır.",
      detay: `▫️ Departmana aldığınız kişiyle normal bir şekilde iletişime girmeye çalışırken karşı tarafın sürekli sizi tehdit hakaret veya size İşinizi öğretmeye kalkması durumlarında kişiye HER HAKARET BAŞI 10’ar kamu ekleyebilirsiniz. Örnek olarak: Ev soygunundan yakalanmış bir şahsın cezası 15 kamuysa size 5 defa hakaret ettiyse (10x5)+15 = 65 Kamu yazabilirsiniz.
               Yakaladığınız suçlular size karşı FearRp (korku rolü) yapmıyorsa`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    },     
    {
      id: 16,
      baslik: "Ceza kanunu ve suçlar",
      aciklama: "Los Santos Ceza Kanununa göre hareket edilmelidir.",
      detay: `▫️ Kişinin tüm işlediği suçlar siciline işlenmelidir.(Basit suçlar hariç. Örn: kırmızı ışık vs.)
               ÖRNEK : Kişi hem ev soygunundan hemde silah ile memur yaralamadan yakalandı.Ev soygunu 5 bin dolar 15 Kamu - Memur yaralama 10 bin dolar 30 kamu ise Kişiye SADECE memur yaralama cezası yazılır.10 bin dolar ceza ve 30 kamu yazılır.

              ▫️ Eğer şahsın aranması varken başka bir suça karışıp yakalanırsa aranmasını içeren suç ve yakalandığı suç olarak ikisi birden işlenecektir.

              ▫️ Legaller için belirlenen silahlar dışında silah kullanımı yasaktır. Kullanımı yasak silahlar (Baretta, Glock 17, FNX)

              ▫️ Sivile çıkan memurlar üzerinde herhangi bir Legal eşya bulunduramaz. Sadece çavuş ve dedektif rütbesi üzerinde ki rütbeliler. üzerinde rozet ve beylik tabancası telsiz bulundurabilir. Sivildeki memurlar olaylara dahil olamaz . Olaylara sivil olarak dahil olduklarında 4x Kolluk kuvvetleri uyarısı alırlar.

              ▫️ Ceza Kanunları dışında ceza yazmak yasaktır. MDT içerindeki belirlenen cezaları uygulayabilirsiniz.

             ▫️ Suç ne olursa olsun sorgu almak zorunludur. Cezalarda maksimum %20 indirim yapabilirsiniz. Memurun insiyatife bağlıdır.`,
      ceza: "DOJ ve İçişleri Tarafından Belirlenir."
    }                                   
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-400 hover:text-blue-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/40">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                LEGAL YÖNETMELİK
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Legal birim etkileşimi ve kuralları
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Siren className="w-6 h-6 text-blue-400" />
              <p className="text-gray-300">
                Polis ile etkileşimlerinizde <span className="text-blue-400 font-semibold">gerçekçi ve saygılı</span> davranmanız beklenmektedir.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                <div className="px-6 py-4 border-b border-blue-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-blue-500/30"
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

export default KurallarPolis;
