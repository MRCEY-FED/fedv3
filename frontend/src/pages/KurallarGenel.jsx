import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarGenel = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "Karakter Oluşturma Kuralları",
      aciklama: `Karakter oluştururken dikkat edilmesi gerekenler.`,
      detay: `▫️ Helikopter ile çatışma rollerine girebilirsiniz fakat karakterinizin helikopter sürme yeteneğine sahip olması gerekmektedir. bunuda karakter gelişime belirtmeniz gerekmektedir.

      ▫️ Oluşturulacak karakter isimleri gerçekçi olmalıdır. (Bu kurala istisna getirilmesi, başvuru öncesinde yönetim onayı ile mümkündür.)  

      ▫️ Ünlü veya tanınmış kişilere ait isimlerin kullanılması yasaktır. (Bu kurala da yalnızca başvuru öncesi yönetim izni ile istisna uygulanabilir.)  

      ▫️ Oluşturulan karakter en az 16 yaşında olmalıdır. Daha küçük yaşta karakter oluşturulması durumunda yönetimden önceden izin alınmalıdır.

      ▫️ Oyuncuların üçüncü parti yazılım kullanmaları kesinlikle yasaktır. 

      ▫️ Ped karakter kullanmak isteyen oyuncular, önceden yönetim onayı almak zorundadır.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },    
    {
      id: 2,
      baslik: "Genel ve II.Karakter Kuralları",
      aciklama: `Tüm oyunculara saygılı davranılmalıdır.`,
      detay: `▫️ Oyuncunun açtığı veya açacağı hiçbir karakter, diğer karakterleriyle tanışamaz, iletişim kuramaz ve birbirleriyle bağlantılı olamaz.

      ▫️ İllegal rol yapan oyuncular, mevcut karakterleri bir birlik üyesiyse, açacakları yeni karakterler ile hiçbir birliğe katılamazlar. 

      ▫️ Oyuncular, karakterleri arasında para, mal veya mülk transferi gibi herhangi bir paylaşımda bulunamazlar. 

      ▫️ İllegal karaktere sahip olan oyuncular, istedikleri alt karakterler ile herhangi bir devlet birliğine dahil olamazlar. 

      ▫️ Dublörlerim var” tipi roller kesinlikle yasaktır. Hiçbir oyuncu kendisi yerine bir başkasını koyamaz.

      ▫️ İnsanların kendi Discord serverlarında yazdıkları konular eğer FedRP ile ilgili değilse,herhangi birdurum olmaz. Bunlarla ilgili şikayete gelemezsiniz.

      ▫️ (OOC) ADK yaptığınız kişilier sizi affederse banınız kaldırılır.

      ▫️ Sosyal bölgelerde ve aktif rollerde (LSPD, LSFMD, otel önü vb.) illegal bir gerekçeyle maske takmak yasaktır. Bu tür durumlarda LSPD, maskeli kişiyi “şüpheli” sıfatıyla gözaltına alma hakkına sahiptir. 

      ▫️ Maske takan kişiler, yüzleri kapalı olduğu için net şekilde tanınamazlar. Ancak görülen bölgelerle (örneğin saç stili, dövme) şüphelenme rolü yapılabilir. (Oyun hatası (bug) kaynaklı gözüken unsurlar örneğin maskeden taşan saçlar bu kapsama dahil değildir.) 

      ▫️ Silah kabzası ve silah aksesuarları giyen kişilerin polis tarafından aranma izni vardır.

      ▫️ Irk, din, dil, cinsiyet, cinsel yönelim veya herhangi bir kişisel özellik nedeniyle yapılan ayrımcılık asla kabul edilmez. Bu tür davranışlar topluluk değerlerimize tamamen aykırıdır ve ağır şekilde cezalandırılır.

      ▫️ Herhangi bir oyuncunun kişisel bilgilerini ifşa etmek, paylaşmak veya bu yönde tehditte bulunmak kesinlikle yasaktır.
      
      ▫️ Takip etme, stalking, sürekli rahatsız etme, istenmeyen etkileşimlerde ısrar etme gibi davranışlar yasaktır. Bir oyuncu sizinle etkileşime girmek istemiyorsa, bu karara saygı gösterilmelidir.

      ▫️ Kadın ya da erkek fark etmeksizin, karakterlere karşı gerçekleştirilecek tecavüz veya cinsel taciz içerikli roller, taraflar arasında karşılıklı ve açık izni bulunmadığı sürece yasaktır. 

      ▫️ Uygun olmayan ortamlarda, açıkça illegal olduğundan bahsetmek veya bunu ima etmek, rol içerisinde sonuç doğurabilecek bir davranıştır ve karakter bu sonuçlarla yüzleşir. 

      ▫️ Karakterinizin legal ya da illegal olması fark etmeksizin, gireceğiniz gammazlama (ihbar) rollerinin boyutu ve ciddiyetine göre doğabilecek sonuçlardan oyuncunun kendisi sorumludur. 

      ▫️ Sistemsel olarak gerçekleştirilen illegal eylemlerde (örneğin: araç parçalama, market soygunu gibi), motor veya bisiklet kullanımı yasaktır.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 3,
      baslik: "Ses Programı Kullanımı",
      aciklama: "Yönetim izni olmadan ses programı kullanarak rol yapmak yasaktır.",
      detay: `▫️ Sunucuda oluşturacağınız karakterlerde ses değiştirme programı kullanımı mümkündür; ancak bu uygulama, yönetim izni olmadan kesinlikle yasaktır. 
      
      ▫️ Başvuru sırasında, karakterinizde ses programı kullanmak istediğinizi açıkça belirtmeniz ve başvuru formunun en altına bu bilgiyi eklemeniz zorunludur. 

      ▫️ Ses teyit sürecinde, kullanacağınız sesi yönetim onayına sunmanız gerekmektedir. Onay alınmadan ses değiştirme programı kullanılamaz.`,
      ceza: "İlk ihlal: 3X Uyarı | Tekrar: Kalıcı ban"
    },
    {
      id: 4,
      baslik: "NPC Tutumu ve NPC Araçların Kullanımı",
      aciklama: "Şehirdeki NPC karakterlerinde role dahil olduğunu unutmayın.",
      detay: `▫️ Şehirdeki NPC’ler hakkında “yerli” şeklinde konuşmak yasaktır. Unutulmamalıdır ki şehirde yalnızca oyuncular değil, yaklaşık 6.1 milyon kişinin yaşadığı varsayılmaktadır.

      ▫️ Polis memurları, bir plakayı sorguladıklarında, aracın çalıntı olup olmadığını öğrenebilirler. 

      ▫️ Bir polis ile  hangi role girerseniz girin size kanunların belirlediği ceza dışında fazla ceza kesemez.

      ▫️ NPC’ler, şehirde yaşamını sürdüren bireylerdir. Onlara karşı yapılan tüm eylemlerin rol sorumluluğu tamamen oyuncuya aittir. (Örneğin: NPC'den araba çalmak, kavga etmek gibi eylemler bu kapsamdadır.) -Bir NPC’nin ölümüne sebep olan oyuncu, karakteriyle birlikte adalet önünde yargılanabilir ve IC (oyun içi) ceza alabilir. `,
      ceza: "İlk ihlal: 3X Uyarı | Tekrar: 1-3 gün ban"
    },
    {
      id: 5,
      baslik: "IC ve OOC - Roleplay içi Kanıtlar ",
      aciklama: "Spam yapmak, sürekli aynı mesajları göndermek veya chat'i gereksiz yere doldurmak yasaktır.",
      detay: `▫️ OOC kanıtlar (video, ekran görüntüsü), bir suçun veya olayın görüntüsünün bir oyuncu tarafından yakalanıp, bu doğrultuda rol gerçekleştirilmiş ise, IC kanıtı olarak kullanılabilir. 

▫️ Bu tür kanıtların IC olarak kullanılabilirliği, olayın gerçekleştiği mekâna ve şartlara göre değişkenlik gösterebilir (örneğin: güvenlik kamerasının varlığı). 

▫️ İşletmelerde güvenlik kamerası prop olarak mevcut ise, o işletmede güvenlik kamerası var kabul edilir ve yalnızca kamera propunun baktığı alan kayıt altına alınıyor sayılır. Bu bölge, yönetim tarafından belirlenir; oyuncular tarafından yorumlanamaz veya genişletilemez. 

▫️ Bir kişiye, allahını, tanrını, peygamberini atatürkünü  tipi kelimelerde söyleseniz DDK MDK  kapsamında değerlendirilir. ve ceza alırsınız.

▫️ Güvenlik kameraları dışında, telefon ya da bodycam kullanılarak video ve ses kaydı alınabilir. Ancak yine, kapsamı yönetim tarafından belirlenir. 

▫️ Rol içerisinde ADK atmak serbesstir fakat aşırı ADK kaçarsanız(TS SÖVÜŞÜ GİBİ) ceza alırsınız

▫️ Tüm aksiyon içeren rollerin video kaydı ile desteklenmesi zorunludur. 

▫️ Sunucumuzda OOC (karakter dışı) küfür kesinlikle yasaktır. 

▫️ Rol içi küfür serbesttir; ancak bu küfürlerin OOC küfür şüphesi doğurması halinde, durum yönetim tarafından değerlendirilir ve gerekli görülürse ceza uygulanır. 

▫️ Legal illegal iş alanlarında araç maymuncuklayıp kaçırmak serbesttir.`,
      ceza: "İlk ihlal: Uyarı | Tekrar: Mute veya kick"
    },
    {
      id: 6,
      baslik: "Rol Esnasında Oyundan Çıkma",
      aciklama: "Diğer oyuncuların oyun deneyimini kasıtlı olarak bozmaya yönelik davranışlar yasaktır.",
      detay: `▫️ Sunucu içerisinde rol yaparken kas,devlet,fiskos gibi OOC tabanlı kelimeleri cümle içerisinde kullanmak yasaktır.
      
      ▫️ Rol devam ederken bilerek veya isteyerek oyundan çıkmak kesinlikle yasaktır. 

      ▫️ Bağlantınızın kopması durumunda, tekrar oyuna giriş yaptığınızda rolü gerçekleştirdiğiniz kişi ile iletişime geçip kaldığınız yerden rolü sürdürmeniz zorunludur. 

      ▫️ Herhangi bir saldırı rolünün ardından, rolü neticelendirmeden oyundan çıkmak yasaktır. Aktif rolünüze devam etmeniz gerekmektedir.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 7,
      baslik: "Emote Kuralları",
      aciklama: "Rol içerisinde atılan emote biçimleri nasıl olmalıdır.",
      detay: `▫️ Rol içerisinde verilen emote'lar (hareket ve açıklamalar), açık ve anlaşılır şekilde yazılmalıdır. 
      
      ▫️ /do kanalı üzerinden yanıltıcı veya yalan bilgi verilmesi kesinlikle yasaktır.  

      ▫️ Bir olay yaşadığınızda, kalıcı emote kullanarak devam eden rollere katkı sağlamanız beklenir.  

      ▫️ İllegal veya ciddi rol durumlarında, yaşanan olayı doğru yansıtabilmek için görünür etkileri kalıcı emote ile belirtmeniz zorunludur. Örneğin: Vücudunuzun bir bölgesi yoğun şekilde kanıyorsa, kalıcı emote aracılığıyla yere “kan birikintisi” gibi bir ifade kullanmalısınız.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 8,
      baslik: "Kalıcı Hasar Emote Kuralları ",
      aciklama: "Rol içerisinde atılan kalıcı emote kuralları nasıldır.",
      detay: `▫️ Rol içerisinde verilen emote'lar (hareket ve açıklamalar), açık ve anlaşılır şekilde yazılmalıdır. 
      
      ▫️ /do kanalı üzerinden yanıltıcı veya yalan bilgi verilmesi kesinlikle yasaktır.  

      ▫️ Bir olay yaşadığınızda, kalıcı emote kullanarak devam eden rollere katkı sağlamanız beklenir.  

      ▫️ İllegal veya ciddi rol durumlarında, yaşanan olayı doğru yansıtabilmek için görünür etkileri kalıcı emote ile belirtmeniz zorunludur. Örneğin: Vücudunuzun bir bölgesi yoğun şekilde kanıyorsa, kalıcı emote aracılığıyla yere “kan birikintisi” gibi bir ifade kullanmalısınız.
      
      ▫️ Rol sırasında bir oyuncuya kalıcı hasar verilebilmesi için, ya karşı tarafın açık izni gereklidir. 

      ▫️ Sebepsiz yere kalıcı hasar vermeye çalışmak kesinlikle yasaktır. 

      ▫️ Herhangi bir kişinin vücudu üzerine, geçici bile olsa işaret bırakmak için (örneğin bıçakla sembol kazımak) izin alınması zorunludur. 

      ▫️ Aşağılayıcı veya hakaret içerikli işaretler (örneğin penis şekli, küfürlü kelimeler) yasaktır. 

      ▫️ Parmak kırmak, kesik atmak, bıçak yarası gibi kısa süreli iyileşen durumlar, kalıcı hasar sayılmaz ve bu tür durumlar için ek izin gerekmez. 

      3 Emote Sistemi 

      ▫️ Kalıcı veya geçici yara izleri bırakmak için 3 emote kuralını uygulamalısınızör : /do Geçici yara izni     /do Kalıcı yara izni     /CK  izni

      ▫️ Emote atılan kişi bu 3 emoteden birine olumlu vermek zorundadır. aksi takdirde cezai işlem uygulanır.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },    
    {
      id: 9,
      baslik: "Araç Kullanma Kuralları",
      aciklama: "Araç ve kaza rolleri nasıl olmalıdır.",
      detay: `▫️ Kaza rollerine girmek zorunludur. İki taraf çok kısada olsa kaza rolü yapmak zorundadır.
      
      ▫️ /do kanalı üzerinden yanıltıcı veya yalan bilgi verilmesi kesinlikle yasaktır.  

      ▫️ Bir olay yaşadığınızda, kalıcı emote kullanarak devam eden rollere katkı sağlamanız beklenir.  

      ▫️ Şoförün, başka bir oyuncuyu kucağına alarak aracı sürmesi. yasaktır (Yaralı bir kişi için “arka koltuğa bırakıldı” rolü yapılabilir.) 

      ▫️ Motora, role uygun olmayan şekilde kapasitesinden fazla kişiyle binmek yasaktır. 

      ▫️ Araçlara, role aykırı şekilde kapasitesinden fazla kişi bindirmek yasaktır. 

      ▫️ Bir aracın tüm lastikleri patladığında sürmeye devam etmek yasaktır. (max iki lastik giderse devam edebilir.)

      ▫️ Araçla, uçmak serbesttir fakat araç takla atarsa kaza rolüne girmeniz zorunludur. (4 teker üzerine düşerse devam edebilirsiniz.) 

      ▫️ Araçla, role uygun olmayan ve gerçek hayatta imkânsız olan hareketler yapmak yasaktır.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },  
    {
      id: 10,
      baslik: "Rolsel Envanter Kuralları",
      aciklama: "Envanterde Olan/Olmayan Eşya rolleri nasıl olmalıdır.",
      detay: `▫️ Scriptsel olarak sunucumuzda silahlar belde taşınırken görülür. Belinizde görülecek silahlar için Polis sizi direk olarak arayabilir. Fakat belinizde silah görülürken çanta takarsanız, polis sizi arayamaz. Bu durumlarda kişinin silahını görmemiş sayması ve çantanın içinde ne olduğunu bilmediği şekilde bir rol yapması gerekir.
      
      ▫️ Eğer bir kişinin üzerinde pd teçhizatı bulunursa PD'nin motel odalarını ve depoları arama ve raid atma hakkı olduğunu unutmayın. 

      ▫️ Kayıtsız olan hiçbir eşya kaybolması vb. olayda destek talebi kabul edilmeyecektir.

      ▫️ Üzerinizde sistemsel olarak bulunmayan bir eşyayı varmış gibi göstermek veya bulunan bir eşyayı yokmuş gibi yansıtmak kesinlikle yasaktır.  

      ▫️ Oyuncular, rollerini mevcut sistemlerin izin verdiği kapsamda ve doğrultuda gerçekleştirmekle yükümlüdür. 

      ▫️ Sistemsel olarak üzerinizde bulunan bir eşyayı, farklı bir eşya gibi göstermek yasaktır. 

      ▫️ Üzerinizde ya da aracınızın torpido gözünde bulunan bir eşyayı, tamamen gizlenmiş gibi rollemek (örneğin araca gizli bölme yaptırmak) yasaktır. 

      ▫️ Ancak, gizleme rolü yapılabilir; bu durumda bir aranma anında, eşyanın gizlendiği emote üzerinden açıkça belirtilmelidir. Böyle durumlarda, rol iki tarafın da karşılıklı /zar veya /dene komutları ile ilerletilmelidir. “Görmemiş gibi davranma” hakkı, tamamen karşı tarafın inisiyatifindedir.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },  
    {
      id: 11,
      baslik: "Sorgu ve Kodes Rolleri",
      aciklama: "Kolluk kuvvetleriyle sorgu ve kodes rolleri işleyişi.",
      detay: `▫️ Polise karşı Fear RP uygulamak zorunlu değildir, ancak bu, polise karşı tamamen korkusuz, sebepsiz ve mantıksız roller yapılabileceği anlamına gelmez. 
      
      ▫️ Bu tarz ihlallerin tespitinde, polis memurları da Rapor Sistemi üzerinden yönetime bildirimde bulunabilirler. 

      ▫️ Sabıkası olan bir karakterin bir sonra ki suçlarda daha ağır cezalar alıcağını sakın unutmayın.

      ▫️ Daha önce kodese girmiş bir karakter polisler tarafından her zaman hor görülür.

      ▫️ Sorgu veya cezaevi süreçlerinde, oyuncuların düşünmesi gereken şey:"Hapiste öldürülebilirim, tecavüze uğrayabilirim, aşağılanabilir veya küçük düşürülebilirim" olmalıdır.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 12,
      baslik: "Yönetim ve Cezalar",
      aciklama: "Yönetim işleyişi ve cezalar.",
      detay: `▫️ Yöneticiler, gerekli gördükleri durumlarda herhangi bir rolü iptal etme hakkına sahiptir. 
      
      ▫️ Rol incelemesi amacıyla yöneticiler, devam eden bir rolü geçici olarak durdurabilirler.

      ▫️ Oyuncular, yönetici şikayetlerini Discord üzerinden ticket sistemi aracılığıyla iletmelidir.

      ▫️ Oyuncular, bulundukları rollerde karşılaştıkları kural ihlallerini yetkililere bildirmekle yükümlüdür. 

      ▫️ Oyuncular, aldıkları tüm cezalara ilişkin olarak discord ticket üzerinden herkese açık şekilde itirazda bulunabilirler. 

      ▫️ Tüm yetkili şikayetleri herkese açık olarak yayınlanır. Şikayetlerde isminizin görünüp görünmemesi, tamamen kendi tercihinize bağlıdır. 

      ▫️ Her hangi bir adaletsizlikte yetkiliyi veya yöneticiyi kuruculara şikayet edebilirsiniz. sorununuzu hızlı bir şekilde çözeceklerinden emin olun.`,
      ceza: "Duruma göre: Görevden alınır - Kalıcı ban arası"
    },  
    {
      id: 13,
      baslik: "Müzik Kuralları",
      aciklama: "Karakterlerin müzik kuralları nasıl olmalıdır.",
      detay: `▫️ Her karakter, rol gereği kendi kültürüne uygun müzikleri tercih etmelidir. 
      
      ▫️ Sunucuda şarkı söylüyorsanız, Türkçe şarkılar söyleyebilirsiniz; ancak bu şarkılar Lesce cover şeklinde söylenmeli ya da Lesce dilindeymiş gibi yansıtılmalıdır. 

      ▫️ Boombox, radyo, televizyon gibi cihazlar aracılığıyla çaldığınız Türkçe şarkılar da, Lesce dilinde kabul edilir ve buna uygun şekilde role yansıtılmalıdır. 

      ▫️ Bu kuralın esnetilmesi veya ihlali durumunda uygulanacak yaptırım, tamamen yönetimin inisiyatifindedir.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 14,
      baslik: "Sosyal Alan Kuralları",
      aciklama: "Bu bölgeler kameralı bölgelerdir ve buralarda agresif yapmamaya özen gösterin.",
      detay: `▫️ Tüm sosyal alanlara saldırmak, dışardan içeri kaçma veya illegal bir rolünüz olduğu takdirde buraya girerek rolden kaçmanız yasaktır.

      ▫️ Sosyal alanlarda içerideki kişiler arasında agresif durumlar oluşabilir, bu durum olduğu zaman mekan sahipleri tarafından dışarı atılabilirsiniz.

      ▫️ Tartışma yaşadığınız kişiler tartışmayı sonlandırmak istediklerini söylediklerinde durumu uzattığınız görülürse ceza alırsınız.

      ▫️ Sunucu mantığımızda güvenlli bölge olmadığı için sosyal alanlar güvenli bölgeler değildir. fakat elinizden geldiğince bu bölgelerde agresif ve çatışma rollerinden kaçının aksi takdirce duruma göre ceza alabilirsiniz.
 
      ▫️ İnsanları rahatsız ettiğiniz tespit edilirse, yönetim tarafından ceza alırsınız.
 
      ▫️ İllegal ve legal işletmelerden haraç toplayabilirsiniz. bunu yapmak için spray kurallarını iyi okuyun.

      ▫️ Çatışmadan kaçıp sosyal bölgelere sığınmak yasaktır.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },   
    {
      id: 15,
      baslik: "Silah Kullanımı ve Brawl Kuralı",
      aciklama: "Silah kullanım durumları ve brawl kuralları hangi durumlarda geçerli olur.",
      detay: `▫️ İki veya daha fazla grubun arasında gerçekleşen toplu kavga rolleri "Brawl" olarak adlandırılır. 

      ▫️ Anlaşmalı Brawl rollerinde sadece yumruk ve mele (yakın dövüş) silahları kullanılabilir. 

      ▫️ Ateşli silah kullanımı kesinlikle yasaktır.
      
      ▫️ Silahlar, boyutlarına uygun şekilde ve gerçekçiliğe bağlı kalınarak taşınmalıdır. 

      ▫️ Birebir yakın temas rollerinde, ateşli silaha sahip bir kişiye karşı koşarak vurmak, sopa veya bıçakla saldırmak kesinlikle yasaktır. 

      ▫️ Eğer oyuncu bu tarz bir role girerse, karşı tarafa otomatik olarak kalıcı hasar izni vermiş sayılır. 

      ▫️ Bu tarz roller aksiyon rolü olarak değerlendirilir ve rol sonrası yönetime bildirilmesi zorunludur. 

      ▫️ Bu durumda, rencide edici veya ağır kalıcı hasar verici roller yapılamaz`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 16,
      baslik: "South Side Compton",
      aciklama: "SS Bölgesinde davranışlar nasıl olmalıdır.",
      detay: `▫️ South Side bölgesine 3 adet memurdan az legal bir kolluk kuvveti girerse CK atma hakkına sahipsiniz.

      ▫️ South Side bölgesinde taco her oluşumun ortak alanıdır burada hak talep edemessiniz.

      ▫️ South Side bölgesinde sahip olduğunuz sokağa bir vatandaşın evi bulunuyorsa onu ordan kovabilir veya ücret karşılığında mahallenizde oturmasına izin verebilirsiniz.

      ▫️ South Side bölgesine bir sivil giriş yaptığı zaman bir çete üyesi onu bölgeme girme diye öldüremez.
 
      ▫️ South Side bölgesine bağlı her çete üyesi o bölge için polise karşı savunma gösterebilir ve gangup yapabilir.
 
      ▫️ South Side bölgesinde İllegal ve legal işletmelerden haraç toplayabilirsiniz. bunu yapmak için spray kurallarını iyi okuyun.`,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    },
    {
      id: 17,
      baslik: "FED:V Ceza Sistemi",
      aciklama: "Sunucumuzdaki uyarı sistemi nasıl ilerlemektedir.",
      detay: `▫️ Ceza uygulamaları, uyarı puanı sistemi üzerinden yürütülmektedir. 

      ▫️ Toplam 5 uyarı puanına ulaşan bir oyuncu, sunucudan süreli olarak uzaklaştırılır. Uzaklaştırma süresi, yönetimin takdirindedir (Maksimum süre: 10 yıl). 

      ▫️ Daha önce uzaklaştırılan oyuncular, izlemeye alınır ve oynadıkları roller yakından takip edilir. 

      ▫️ Oyuncuların uyarı puanları, tamamen yönetimin inisiyatifiyle silinebilir. 

      ▫️ Sunucudan banlanan bir oyuncu, yönetimin onayıyla tekrar başvuru yapabilir. `,
      ceza: "Duruma göre: Uyarı - Kalıcı ban arası"
    }                                   
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 hover:text-purple-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl shadow-2xl shadow-purple-500/40">
              <Users className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Genel Karakter Kuralları
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Genel topluluk kuralları ve davranış standartları
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-400" />
              <p className="text-gray-300">
                Bu kurallar sunucumuzdaki <span className="text-purple-400 font-semibold">tüm oyuncular</span> için geçerlidir. Yeni katılımcılar bu kuralları mutlaka okumalıdır.
              </p>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-purple-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-purple-500/30"
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

export default KurallarGenel;
