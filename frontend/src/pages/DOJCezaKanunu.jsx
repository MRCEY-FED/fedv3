import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, ArrowLeft, Search, AlertTriangle, Clock, DollarSign, 
  Shield, Gavel, ChevronDown, ChevronUp, Filter, BookOpen,
  Skull, Car, Users, Banknote, Pill, Building, Flame, Swords
} from 'lucide-react';

const DOJCezaKanunu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('all');
  const [expandedKategori, setExpandedKategori] = useState(null);

  // Ceza Kanunu Kategorileri ve İçerikleri
  const cezaKanunu = [
    {
      id: 'cinayet',
      baslik: 'Organize ve Çeteleşme',
      icon: Skull,
      renk: 'red',
      aciklama: 'Hayata karşı işlenen suçlar',
      cezalar: [
        {
          madde: 'CK-101',
          baslik: 'Suç Örgütü Üyeliği',
          aciklama: 'Bilinen bir suç örgütüne üye olmak.',
          sure: '25-35 Ay Hapis',
          para: '125.000$',
          not: ''
        },
        {
          madde: 'CK-102',
          baslik: 'Suç Örgütü Liderliği',
          aciklama: 'Suç örgütünü yönetmek veya kurmak.',
          sure: '45-60 Ay Hapis',
          para: '350.000$',
          not: 'Tüm mal varlığına el konulabilir.'
        },
        {
          madde: 'CK-103',
          baslik: 'Haraç Kesme',
          aciklama: 'Tehdit veya zorla para almak.',
          sure: '25-40 Ay Hapis',
          para: '50.000$',
          not: ''
        },
        {
          madde: 'CK-104',
          baslik: 'Suça Azmettirme',
          aciklama: 'Başkalarını suç işlemeye teşvik etmek veya organize etmek.',
          sure: '20-35 Ay Hapis',
          para: '100.000$',
          not: 'İşlenen suçun cezası da uygulanır.'
        },        
        {
          madde: 'CK-105',
          baslik: 'Çeteleşme',
          aciklama: 'Yasadışı bir grup kurmak veya böyle bir gruba üye olmak.',
          sure: '50-60 Ay Hapis',
          para: '150.000$',
          not: 'Ağırlaştırıcı sebepler varsa ceza artırılır.'
        },
        {
          madde: 'CK-106',
          baslik: 'Yasadışı İşletme Kurma',
          aciklama: 'Yasadışı işlerde kullanılan bir işletme açmak.',
          sure: '35-45 Ay Hapis',
          para: '350.000$',
          not: ''
        },
        {
          madde: 'CK-107',
          baslik: 'Rehine Alma',
          aciklama: 'Bir kişiyi zorla alıkoyarak fidye talep etme veya tehditte bulunma.',
          sure: '30-60 Ay Hapis',
          para: '25.000$',
          not: ''
        },
        {
          madde: 'CK-108',
          baslik: 'Şantaj ve Tehdit',
          aciklama: 'Bir şahsa veya kuruma karşı, mahremiyetin kutsallığı yok sayılarak şantaj yapılması.',
          sure: '30-60 Ay Hapis',
          para: '25.000$',
          not: ''
        },   
        {
          madde: 'CK-109',
          baslik: 'Çeteler Arası Çatışma',
          aciklama: 'Çeteler arasında çıkan organize çatışmalara katılmak.',
          sure: '50-80 Ay Hapis',
          para: '55.000$',
          not: ''
        },   
        {
          madde: 'CK-110',
          baslik: 'Devlete veya Karşı Komplo',
          aciklama: 'Devlet kurumlarına zarar vermek veya komplo kurmak.',
          sure: '80-200 Ay Hapis',
          para: '55.000$',
          not: ''
        },                     
        {
          madde: 'CK-111',
          baslik: 'Organize Hırsızlık',
          aciklama: 'Bir çetenin organize şekilde hırsızlık yapması.',
          sure: '30-65 Ay Hapis',
          para: '100.000$',
          not: ''
        },
        {
          madde: 'CK-112',
          baslik: 'Karapara Aklama',
          aciklama: 'Yasadışı yollardan elde edilen parayı yasal gösterme.',
          sure: '50-100 Ay Hapis',
          para: '350.000$',
          not: ''
        }
      ]
    },
    {
      id: 'saldiri',
      baslik: 'Cinayet - Saldırı ve Yaralama',
      icon: Swords,
      renk: 'orange',
      aciklama: 'Fiziksel şiddet içeren suçlar',
      cezalar: [
        {
          madde: 'CK-201',
          baslik: 'Küçük Yaralama',
          aciklama: 'Hafif fiziksel saldırı (ör. yumruk atma, itişme).',
          sure: '20-30 Ay Hapis',
          para: '10.000$',
          not: 'Silah kullanımı cezayı artırır.'
        },
        {
          madde: 'CK-202',
          baslik: 'Tehdit ve Hakaret',
          aciklama: 'Şiddet içeren tehditlerde bulunmak veya ağır hakaret etmek.',
          sure: '5-10 Ay Hapis',
          para: '6000$',
          not: ''
        },
        {
          madde: 'CK-203',
          baslik: 'Kamu Alanında Kavga',
          aciklama: 'Kamuya açık bir alanda kavgaya karışmak.',
          sure: '15-20 Ay Hapis',
          para: '25.000$',
          not: ''
        },
        {
          madde: 'CK-204',
          baslik: 'Kamu Görevlisine Saldırı',
          aciklama: 'Polis, EMS veya diğer devlet görevlilerine saldırmak.',
          sure: '30-45 Ay Hapis',
          para: '80.000$',
          not: 'Görevi sırasında olması şartı aranır.'
        },
        {
          madde: 'CK-205',
          baslik: 'Ağır Yaralama',
          aciklama: 'Delici/Kesici/Ezici alet kullanarak ciddi fiziksel zarar vermek.',
          sure: '35-50 Ay Hapis',
          para: '17.000$',
          not: 'Kullanılan silaha göre ceza artar.'
        },
        {
          madde: 'CK-206',
          baslik: 'Cinayet Girişimi',
          aciklama: 'Bir kişiyi öldürmeye teşebbüs etmek.',
          sure: '35-50 Ay Hapis',
          para: '47.000$',
          not: 'Kullanılan silaha göre ceza artar.'
        },
        {
          madde: 'CK-207',
          baslik: 'Cinayet',
          aciklama: 'Bir kişiyi kasten öldürmek.',
          sure: '35-50 Ay Hapis',
          para: '77.000$',
          not: 'Cinayetin derecesine göre ceza artar.'
        },                
        {
          madde: 'CK-208',
          baslik: 'Silahla Yaralama',
          aciklama: 'Ateşli silah veya kesici alet kullanarak zarar vermek.',
          sure: '40-55 Ay Hapis',
          para: '40.000$',
          not: ''
        },
        {
          madde: 'CK-105',
          baslik: 'Meşru Müdafaa Sınırını Aşma',
          aciklama: 'Kendini savunurken orantısız güç kullanarak ölüme sebebiyet vermek.',
          sure: '25-40 Ay Hapis',
          para: '30.000$',
          not: 'Duruma göre beraat verilebilir.'
        }        
      ]
    },
    {
      id: 'silah',
      baslik: 'Silah Suçları',
      icon: Shield,
      renk: 'purple',
      aciklama: 'Silah bulundurma ve kullanma suçları',
      cezalar: [
        {
          madde: 'CK-301',
          baslik: 'Ruhsatsız Silah Taşıma',
          aciklama: 'Silahın evde, işyerinde, araçta (ulaşılabilir ama üzerinde değil) bulunmasıdır.',
          sure: '20-35 Ay Hapis',
          para: '10.000$',
          not: 'Silaha el konulur.'
        },
        {
          madde: 'CK-302',
          baslik: 'Ruhsatsız Silah Taşıma',
          aciklama: 'Silahın üzerinde, çantada, belde, ceplerde veya kolayca kullanılabilir şekilde yanında bulunmasıdır.',
          sure: '30-45 Ay Hapis',
          para: '20.000$',
          not: 'Silaha el konulur.'
        },        
        {
          madde: 'CK-303',
          baslik: 'Yasadışı Silah Ticareti',
          aciklama: 'Ruhsatsız silah satışı veya dağıtımı yapmak.',
          sure: '55-70 Ay Hapis',
          para: '75.000$',
          not: 'Tüm silahlar ve paralar el konulur.'
        },
        {
          madde: 'CK-304',
          baslik: 'Ateşli Silah Kullanarak Tehdit',
          aciklama: 'Birini tehdit etmek amacıyla ateşli silah kullanmak.',
          sure: '20-30 Ay Hapis',
          para: '60.000$',
          not: ''
        },
        {
          madde: 'CK-305',
          baslik: 'Ağır Silah Bulundurma',
          aciklama: 'Otomatik silah, patlayıcı veya askeri sınıf silah bulundurmak.',
          sure: '45-60 Ay Hapis',
          para: '100.000$',
          not: 'Terör suçu olarak da değerlendirilebilir.'
        },
        {
          madde: 'CK-306',
          baslik: 'Meskûn Mahalde Ateş Etmek',
          aciklama: 'İnsanların yerleşik olarak yaşadığı sokak, mahalle, apartman çevresi, gibi bölgelerde ateş etmek.',
          sure: '25-45 Ay Hapis',
          para: '60.000$',
          not: ''
        },
        {
          madde: 'CK-307',
          baslik: 'Polis Teçhizatı Bulundurmak',
          aciklama: 'Kolluk kuvvetleri envanterine ait olan bir silahı taşımak/kaçırmak.',
          sure: '35-55 Ay Hapis',
          para: '80.000$',
          not: ''
        },        
        {
          madde: 'CK-308',
          baslik: 'Yasak Bölgede Silah',
          aciklama: 'Hastane, okul veya devlet binası gibi yasak bölgelerde silah bulundurmak.',
          sure: '10-20 Ay Hapis',
          para: '50.000$',
          not: ''
        }
      ]
    },
    {
      id: 'uyusturucu',
      baslik: 'Uyuşturucu Suçları',
      icon: Pill,
      renk: 'green',
      aciklama: 'Uyuşturucu madde suçları',
      cezalar: [
        {
          madde: 'CK-401',
          baslik: 'Sınır Üzeri Uyuşturucu Bulundurma',
          aciklama: 'Kişisel kullanım için yasal miktardan fazla uyuşturucu bulundurmak (4grdan fazla).',
          sure: '10-30 Ay Hapis',
          para: '10.000$',
          not: 'Tekrarı: 30.000$ Para cezası.'
        },
        {
          madde: 'CK-402',
          baslik: 'Uyuşturucu Kullanımı',
          aciklama: 'Uyuşturucu etkisi altında kamu düzenine zarar vermek.',
          sure: '10-20 Ay Hapis',
          para: '10.000$',
          not: ''
        },
        {
          madde: 'CK-403',
          baslik: 'Uyuşturucu Ticareti',
          aciklama: 'Uyuşturucu madde satışı, dağıtımı veya imalatı yapmak.',
          sure: '40-55 Ay Hapis',
          para: '30.000$',
          not: 'DOJ Kararı ile tüm mal varlığına el konulabilir.'
        },
        {
          madde: 'CK-404',
          baslik: 'Uyuşturucu İmalathanesi İşletmek',
          aciklama: 'Uyuşturucu üretim tesisi kurmak veya işletmek.',
          sure: '50-60 Ay Hapis',
          para: '100.000$',
          not: 'Organize suç olarak değerlendirilebilir.'
        },
        {
          madde: 'CK-405',
          baslik: 'Uyuşturucu Etkisinde Araç Kullanma',
          aciklama: 'Uyuşturucu madde etkisi altında motorlu araç kullanmak.',
          sure: '10-20 Ay Hapis',
          para: '25.000$',
          not: 'Ehliyet iptali uygulanır.'
        }
      ]
    },
    {
      id: 'hirsizlik',
      baslik: 'Hırsızlık ve Soygun',
      icon: Banknote,
      renk: 'yellow',
      aciklama: 'Mülkiyete karşı işlenen suçlar',
      cezalar: [
        {
          madde: 'CK-501',
          baslik: 'Küçük Çaplı Hırsızlık',
          aciklama: 'Değeri 5.000$ altındaki eşyaları çalmak.',
          sure: '5-10 Ay Hapis',
          para: '15.000$',
          not: 'Çalınan eşyanın değeri tazmin edilir.'
        },
        {
          madde: 'CK-502',
          baslik: 'Ağır Hırsızlık',
          aciklama: 'Değeri 10.000$ üzerinde eşya çalmak.',
          sure: '15-25 Ay Hapis',
          para: '35.000$',
          not: ''
        },
        {
          madde: 'CK-503',
          baslik: 'Cepçilik',
          aciklama: 'Kalabalıkta birinin cüzdan veya eşyasını çalmak.',
          sure: '15-25 Ay Hapis',
          para: '5000$',
          not: ''
        },        
        {
          madde: 'CK-504',
          baslik: 'Silahlı Soygun',
          aciklama: 'Silah kullanarak veya göstererek soygun yapmak.',
          sure: '30-45 Ay Hapis',
          para: '50.000$',
          not: ''
        },
        {
          madde: 'CK-505',
          baslik: 'Kamu Malını Çalma',
          aciklama: 'Devlete veya kamuya ait malları çalmak.',
          sure: '30-45 Ay Hapis',
          para: '85.000$',
          not: ''
        }, 
        {
          madde: 'CK-506',
          baslik: 'Bobcat Şirketi Soygunu',
          aciklama: 'Bir Bobcat şirketine girerek hırsızlık yapmak.',
          sure: '70-100 Ay Hapis',
          para: '105.000$',
          not: ''
        },                
        {
          madde: 'CK-507',
          baslik: 'Banka Soygunu',
          aciklama: 'Banka veya finansal kuruluş soymak.',
          sure: '45-60 Ay Hapis',
          para: '300.000$',
          not: 'Federal suç olarak değerlendirilebilir.'
        },
        {
          madde: 'CK-508',
          baslik: 'ATM Soygunu',
          aciklama: 'Banka veya finansal kuruluşun atmsini soymak.',
          sure: '35-60 Ay Hapis',
          para: '25.000$',
          not: 'Federal suç olarak değerlendirilebilir.'
        },        
        {
          madde: 'CK-509',
          baslik: 'Mücevher Soygunu',
          aciklama: 'Kuyumcu veya mücevher dükkanı soymak.',
          sure: '35-50 Ay Hapis',
          para: '50.000$',
          not: ''
        },
        {
          madde: 'CK-510',
          baslik: 'Market/Dükkan Soygunu',
          aciklama: 'Market, benzinlik veya küçük işletme soymak.',
          sure: '20-30 Ay Hapis',
          para: '15.000$',
          not: ''
        },
        {
          madde: 'CK-511',
          baslik: 'Araç Hırsızlığı',
          aciklama: 'Bir araca izinsiz binmek veya çalmak.',
          sure: '20-30 Ay Hapis',
          para: '8000$',
          not: ''
        },        
        {
          madde: 'CK-512',
          baslik: 'Ev/İşyeri Hırsızlığı',
          aciklama: 'Konut veya işyerine izinsiz girerek hırsızlık yapmak.',
          sure: '15-35 Ay Hapis',
          para: '10.000$',
          not: ''
        }
      ]
    },
    {
      id: 'arac',
      baslik: 'Trafik ve Araç Suçları',
      icon: Car,
      renk: 'blue',
      aciklama: 'Trafik ve araç ile ilgili suçlar',
      cezalar: [
        {
          madde: 'CK-601',
          baslik: 'Hız sınırı aşmak',
          aciklama: 'Belirlenen hız limitinin %20 üzerine çıkmak ( Şehir içi 90km/h | Şehir dışı 175 km/h ).',
          sure: 'Tekrarı: 10-15 Kamu',
          para: '3000$',
          not: 'Tehlikeli sürüş halinde ceza artırılır.'
        },
        {
          madde: 'CK-602',
          baslik: 'Trafik ışıklarına uymamak',
          aciklama: 'Kırmızı ışık ihlali vb..',
          sure: 'Tekrarı: 10-15 Kamu',
          para: '1000$',
          not: 'Tehlikeli sürüş halinde ceza artırılır.'
        },
        {
          madde: 'CK-603',
          baslik: 'Ehliyetsiz Araç Kullanımı',
          aciklama: 'Ehliyet olmadan araç sürmek.',
          sure: 'Tekrarı: 5-15 Ay Kamu',
          para: '5500$',
          not: ''
        },
        {
          madde: 'CK-604',
          baslik: 'Kontrolsüz Araç Kullanımı',
          aciklama: 'Aracı kasıtlı veya kasıt dışı bir şekilde kontrolden çıkartmak ve trafik güvenliğini tehlikeye atmak..',
          sure: 'Tekrarı: 5-10 Ay Kamu',
          para: '7000$',
          not: 'Tekrarı durumunda  6 ay ehliyet iptali.'
        },
        {
          madde: 'CK-605',
          baslik: 'Çalıntı Araç Kullanma',
          aciklama: 'Bilerek çalıntı araç kullanmak veya bulundurmak.',
          sure: 'Tekrarı: 10-15 Kamu',
          para: '8500$',
          not: ''
        },
        {
          madde: 'CK-606',
          baslik: 'Trafikte Tehlikeli Sürüş',
          aciklama: 'Makas atmak, diğer sürücüleri tehlikeye atmak.',
          sure: 'Tekrarı: 15-25 Ay Kamu',
          para: '7000$',
          not: 'Tekrarı durumunda 6 ay ehliyet iptali.'
        },
        {
          madde: 'CK-607',
          baslik: 'Alkollü Araç Kullanımı',
          aciklama: 'Yasal sınırın üzerindeki alkol seviyesiyle araç sürmek.',
          sure: 'Tekrarı: 15-25 Ay Kamu',
          para: '7000$',
          not: 'Tekrarı durumunda 6 ay ehliyet iptali.'
        }, 
        {
          madde: 'CK-608',
          baslik: 'Araç Plakasını Gizlemek',
          aciklama: 'Plaka üzerindeki numaraların görünmesini engellemek veya plaka takmamak.',
          sure: 'Tekrarı: 15-20 Ay Kamu',
          para: '7000$',
          not: 'Tekrarı durumunda 20.000$ para cezası.'
        },   
        {
          madde: 'CK-609',
          baslik: 'Yetkisiz Park',
          aciklama: 'Engelli alanı veya kamuya ait yasak bölgelerde park.',
          sure: 'Tekrarı: 5-10 Ay Kamu',
          para: '2000$',
          not: 'Tekrarı durumunda 7000$ para cezası.'
        },  
        {
          madde: 'CK-610',
          baslik: 'Trafik Kazasına Sebep Olmak',
          aciklama: 'Mal ve can kaybına yol açacak şekilde dikkatsiz sürüş.',
          sure: 'Tekrarı: 25-30 Ay Hapis',
          para: '10.000$',
          not: 'Tekrarı durumunda 25.000$ para cezası.'
        }, 
        {
          madde: 'CK-611',
          baslik: 'Dur Iktarına Uymamak',
          aciklama: 'Polislerin dur ihtarına uymayarak kaçmak.',
          sure: 'Tekrarı: 15-20 Ay Kamu',
          para: '5000$',
          not: 'Tekrarı durumunda 15.000$ para cezası.'
        }, 
        {
          madde: 'CK-612',
          baslik: 'Illegal Modifiye',
          aciklama: 'Araç standartları dışında modifiye etme.',
          sure: 'Tekrarı: 15-20 Ay Kamu',
          para: '5000$',
          not: 'Tekrarı durumunda 15.000$ para cezası.'
        },  
        {
          madde: 'CK-613',
          baslik: 'Şerit İhlali',
          aciklama: 'Uygunsuz Şerit Değişimi.',
          sure: 'Tekrarı: 10-15 Ay Kamu',
          para: '2000$',
          not: 'Tekrarı durumunda 7000$ para cezası.'
        },                                                         
        {
          madde: 'CK-614',
          baslik: 'Yasadışı Yarış',
          aciklama: 'İzinsiz sokak yarışına katılmak veya düzenlemek.',
          sure: 'Tekrarı: 25-30 Ay Hapis',
          para: '20.000$',
          not: '4 İş günü araca el konulabilir.'
        }
      ]
    },
    {
      id: 'kamu',
      baslik: 'Kamu Düzenine Karşı Suçlar',
      icon: Building,
      renk: 'indigo',
      aciklama: 'Kamu düzeni ve devlete karşı suçlar',
      cezalar: [
        {
          madde: 'CK-701',
          baslik: 'Yasadışı Protesto ve Gösteri',
          aciklama: 'İzin alınmadan toplu gösteri/protesto da bulunmak.',
          sure: '10-20 Ay Hapis',
          para: '7000$',
          not: ''
        }, 
        {
          madde: 'CK-702',
          baslik: 'Kamu Malına Zarar Verme',
          aciklama: 'Sokak lambaları, trafik işaretleri veya kamuya ait eşyalara zarar verme.',
          sure: '10-20 Ay Hapis',
          para: '4000$',
          not: ''
        },  
        {
          madde: 'CK-703',
          baslik: 'Toplu Kargaşa Çıkarma',
          aciklama: 'Kalabalık içinde kavga çıkarma veya kargaşaya sebep olma.',
          sure: '15-25 Ay Hapis',
          para: '9500$',
          not: ''
        }, 
        {
          madde: 'CK-704',
          baslik: 'Yalan İhbar',
          aciklama: 'Gerçek olmayan bir durum için polisi veya acil servisi aramak.',
          sure: '15-25 Ay Hapis',
          para: '6500$',
          not: ''
        }, 
        {
          madde: 'CK-705',
          baslik: 'Kamu Düzeni Bozma',
          aciklama: 'Sarhoş veya madde etkisi altında çevreyi rahatsız etmek.',
          sure: '15-25 Ay Hapis',
          para: '7500$',
          not: ''
        },   
        {
          madde: 'CK-706',
          baslik: 'Gürültü Kirliliği',
          aciklama: 'Kamuya açık alanlarda aşırı yüksek sesle rahatsızlık yaratmak.',
          sure: '15-25 Ay Hapis',
          para: '10.00$',
          not: ''
        },   
        {
          madde: 'CK-707',
          baslik: 'Yasa Dışı Barikat Kurma',
          aciklama: 'Yolları veya kamu alanlarını izinsiz kapatmak.',
          sure: '15-25 Ay Hapis',
          para: '10.00$',
          not: ''
        },                                                  
        {
          madde: 'CK-708',
          baslik: 'Memura Mukavemet',
          aciklama: 'Kamu görevlisinin görevini yapmasını engellemek.',
          sure: '10-20 Ay Hapis',
          para: '5000$',
          not: ''
        },
        {
          madde: 'CK-709',
          baslik: 'Taktiksel Ekipman Giyinme',
          aciklama: 'Zırh Silah Kılıfı Takıp Gezmek gibi.',
          sure: '10-20 Ay Hapis',
          para: '5000$',
          not: ''
        },
        {
          madde: 'CK-710',
          baslik: 'Maske Takmak',
          aciklama: 'Kamusal alanlarda maske Takıp Gezmek.',
          sure: '10-20 Ay Hapis',
          para: '3000$',
          not: ''
        }, 
        {
          madde: 'CK-711',
          baslik: 'Konvoy şeklinde dolaşmak',
          aciklama: '3 Araçtan Fazla Bir Şekilde Şehirde Dolanmak.',
          sure: '10-20 Ay Hapis',
          para: '10.000$',
          not: ''
        },
        {
          madde: 'CK-712',
          baslik: 'Kamu alanlarında grafiti çizmek',
          aciklama: 'İzinsiz Grafiti ile propaganda yapmak ve şehir duvarlarını kirletmek..',
          sure: '10-20 Ay Hapis',
          para: '10.000$',
          not: ''
        },                                    
        {
          madde: 'CK-713',
          baslik: 'Rüşvet Vermek',
          aciklama: 'Kamu görevlisine rüşvet teklif etmek.',
          sure: '15-25 Ay Hapis',
          para: '20.000$',
          not: ''
        },
        {
          madde: 'CK-714',
          baslik: 'Rüşvet Almak',
          aciklama: 'Kamu görevlisi olarak rüşvet kabul etmek.',
          sure: '30-45 Ay Hapis',
          para: '20.000$',
          not: 'Görevden ihraç edilir.'
        },
        {
          madde: 'CK-715',
          baslik: 'Yalan Beyanda Bulunma',
          aciklama: 'Resmi makamlara yalan bilgi vermek.',
          sure: '5-10 Ay Hapis',
          para: '25.000$',
          not: ''
        },
        {
          madde: 'CK-716',
          baslik: 'Kimlik Gizleme/Sahte Kimlik',
          aciklama: 'Sahte kimlik kullanmak veya kimlik bilgilerini gizlemek.',
          sure: '10-15 Ay Hapis',
          para: '15.000$',
          not: ''
        },
        {
          madde: 'CK-717',
          baslik: 'Cezaevinden Kaçma',
          aciklama: 'Yasal tutukluluktan kaçmak.',
          sure: '20-30 Ay Hapis',
          para: '35.000$',
          not: 'Mevcut cezaya eklenir.'
        },
        {
          madde: 'CK-718',
          baslik: 'Kaçağa Yardım',
          aciklama: 'Aranan bir kişiyi saklamak veya kaçmasına yardım etmek.',
          sure: '15-25 Ay Hapis',
          para: '20.000$',
          not: ''
        }
      ]
    },
    {
      id: 'organize',
      baslik: 'Siber Suçlar',
      icon: Users,
      renk: 'pink',
      aciklama: 'Siber suç faaliyetleri',
      cezalar: [
        {
          madde: 'CK-801',
          baslik: 'Hack işlemleri',
          aciklama: 'Bir Sistemi Bloke Etmek Bozmak..',
          sure: '25-35 Ay Hapis',
          para: '35.000$',
          not: ''
        },
        {
          madde: 'CK-802',
          baslik: 'Sosyal Medya üzerinden tehdit',
          aciklama: 'Sosyal Mecra Üzerinden Bir Kişiyi Tehdit Etmek..',
          sure: '15-20 Ay Hapis',
          para: '5000$',
          not: ''
        },
        {
          madde: 'CK-803',
          baslik: 'Sosyal Medya üzerinden çeteleşme',
          aciklama: 'Çeteleşme Cezasının Yarısına Denktir..',
          sure: '35-50 Ay Hapis',
          para: '50.000$',
          not: ''
        },
        {
          madde: 'CK-804',
          baslik: 'Sosyal Medya üzerinden illegal paylaşımı',
          aciklama: 'Sosyal Mecra Üzerinden Silah Ceset Paylaşımı.',
          sure: '15-30 Ay Hapis',
          para: '10.000$',
          not: ''
        },
        {
          madde: 'CK-805',
          baslik: 'Sosyal Medya üzerinden devlete hakaret',
          aciklama: 'Sosyal Mecra Üzerinden Devlete Yapılan Her Türlü Hakaret.',
          sure: '15-30 Ay Hapis',
          para: '25.000$',
          not: ''
        },        
        {
          madde: 'CK-806',
          baslik: 'Sosyal Medya üzerinden kişiye taciz',
          aciklama: 'Sosyal Mecra Üzerinden Bir Kişiye Yapılan Görüntülü Sözlü Yazılı Taciz.',
          sure: '20-35 Ay Hapis',
          para: '25.000$',
          not: ''
        }
      ]
    },
    {
      id: 'diger',
      baslik: 'Diğer Suçlar',
      icon: Flame,
      renk: 'cyan',
      aciklama: 'Diğer cezai suçlar',
      cezalar: [
        {
          madde: 'CK-901',
          baslik: 'Kundaklama',
          aciklama: 'Kasıtlı olarak yangın çıkarmak.',
          sure: '25-40 Ay Hapis',
          para: '70.000$',
          not: 'Can kaybı varsa cinayet olarak değerlendirilir.'
        },
        {
          madde: 'CK-902',
          baslik: 'Mülke Zarar Verme',
          aciklama: 'Başkasının mülküne kasıtlı olarak zarar vermek.',
          sure: '20-45 Ay Hapis',
          para: '40.000$',
          not: 'Hasar tazmin edilir.'
        },
        {
          madde: 'CK-903',
          baslik: 'İzinsiz Giriş',
          aciklama: 'Özel mülke izinsiz girmek.',
          sure: '5-15 Ay Hapis',
          para: '15.000$',
          not: ''
        },
        {
          madde: 'CK-904',
          baslik: 'Kamu Barışını Bozma',
          aciklama: 'Toplantı, gösteri veya kavga yoluyla kamu barışını bozmak.',
          sure: '5-10 Ay Hapis',
          para: '20.000$',
          not: ''
        },
        {
          madde: 'CK-905',
          baslik: 'Tehdit',
          aciklama: 'Bir kişiyi şiddet veya zararda bulunmakla tehdit etmek.',
          sure: '8-15 Ay Hapis',
          para: '35.000$',
          not: ''
        },
        {
          madde: 'CK-906',
          baslik: 'Takip (Stalking)',
          aciklama: 'Bir kişiyi sürekli ve rahatsız edici şekilde takip etmek.',
          sure: '10-20 Ay Hapis',
          para: '20.000$',
          not: 'Uzaklaştırma kararı da verilir.'
        },
        {
          madde: 'CK-907',
          baslik: 'Dolandırıcılık',
          aciklama: 'Hile ve aldatma yoluyla başkasının malını veya parasını almak.',
          sure: '15-30 Ay Hapis',
          para: '30.000$',
          not: 'Dolandırılan miktar tazmin edilir.'
        }
      ]
    }
  ];

  // Renk sınıfları
  const renkSiniflari = {
    red: {
      bg: 'from-red-500/10 to-red-600/10',
      border: 'border-red-500/30',
      icon: 'from-red-500 to-red-600',
      text: 'text-red-400',
      badge: 'bg-red-500/20 text-red-300',
      shadow: 'shadow-red-500/20'
    },
    orange: {
      bg: 'from-orange-500/10 to-orange-600/10',
      border: 'border-orange-500/30',
      icon: 'from-orange-500 to-orange-600',
      text: 'text-orange-400',
      badge: 'bg-orange-500/20 text-orange-300',
      shadow: 'shadow-orange-500/20'
    },
    purple: {
      bg: 'from-purple-500/10 to-purple-600/10',
      border: 'border-purple-500/30',
      icon: 'from-purple-500 to-purple-600',
      text: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-300',
      shadow: 'shadow-purple-500/20'
    },
    green: {
      bg: 'from-green-500/10 to-green-600/10',
      border: 'border-green-500/30',
      icon: 'from-green-500 to-green-600',
      text: 'text-green-400',
      badge: 'bg-green-500/20 text-green-300',
      shadow: 'shadow-green-500/20'
    },
    yellow: {
      bg: 'from-yellow-500/10 to-yellow-600/10',
      border: 'border-yellow-500/30',
      icon: 'from-yellow-500 to-yellow-600',
      text: 'text-yellow-400',
      badge: 'bg-yellow-500/20 text-yellow-300',
      shadow: 'shadow-yellow-500/20'
    },
    blue: {
      bg: 'from-blue-500/10 to-blue-600/10',
      border: 'border-blue-500/30',
      icon: 'from-blue-500 to-blue-600',
      text: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-300',
      shadow: 'shadow-blue-500/20'
    },
    indigo: {
      bg: 'from-indigo-500/10 to-indigo-600/10',
      border: 'border-indigo-500/30',
      icon: 'from-indigo-500 to-indigo-600',
      text: 'text-indigo-400',
      badge: 'bg-indigo-500/20 text-indigo-300',
      shadow: 'shadow-indigo-500/20'
    },
    pink: {
      bg: 'from-pink-500/10 to-pink-600/10',
      border: 'border-pink-500/30',
      icon: 'from-pink-500 to-pink-600',
      text: 'text-pink-400',
      badge: 'bg-pink-500/20 text-pink-300',
      shadow: 'shadow-pink-500/20'
    },
    cyan: {
      bg: 'from-cyan-500/10 to-cyan-600/10',
      border: 'border-cyan-500/30',
      icon: 'from-cyan-500 to-cyan-600',
      text: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-300',
      shadow: 'shadow-cyan-500/20'
    }
  };

  // Filtreleme
  const filteredKanun = cezaKanunu.filter(kategori => {
    if (selectedKategori !== 'all' && kategori.id !== selectedKategori) return false;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return kategori.baslik.toLowerCase().includes(searchLower) ||
        kategori.cezalar.some(ceza => 
          ceza.baslik.toLowerCase().includes(searchLower) ||
          ceza.aciklama.toLowerCase().includes(searchLower) ||
          ceza.madde.toLowerCase().includes(searchLower)
        );
    }
    return true;
  });

  // Toplam ceza sayısı
  const toplamCeza = cezaKanunu.reduce((acc, kategori) => acc + kategori.cezalar.length, 0);

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl text-amber-400 hover:text-amber-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kurallara Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl shadow-2xl shadow-amber-500/40 transform hover:scale-105 transition-transform">
              <Scale className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                DOJ CEZA KANUNU
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-2">
              Los Santos Adalet Bakanlığı Resmi Ceza Kanunu
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {cezaKanunu.length} Kategori
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Gavel className="w-4 h-4" />
                {toplamCeza} Madde
              </span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Madde ara... (örn: CK-101, Cinayet, Hırsızlık)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select
                value={selectedKategori}
                onChange={(e) => setSelectedKategori(e.target.value)}
                className="pl-12 pr-8 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer min-w-[200px]"
              >
                <option value="all">Tüm Kategoriler</option>
                {cezaKanunu.map(kategori => (
                  <option key={kategori.id} value={kategori.id}>{kategori.baslik}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30 rounded-xl p-4 text-center">
              <Skull className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{cezaKanunu.find(k => k.id === 'cinayet')?.cezalar.length || 0}</p>
              <p className="text-xs text-gray-400">Cinayet Suçları</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-4 text-center">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{cezaKanunu.find(k => k.id === 'silah')?.cezalar.length || 0}</p>
              <p className="text-xs text-gray-400">Silah Suçları</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-4 text-center">
              <Pill className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{cezaKanunu.find(k => k.id === 'uyusturucu')?.cezalar.length || 0}</p>
              <p className="text-xs text-gray-400">Uyuşturucu Suçları</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-4 text-center">
              <Banknote className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{cezaKanunu.find(k => k.id === 'hirsizlik')?.cezalar.length || 0}</p>
              <p className="text-xs text-gray-400">Hırsızlık Suçları</p>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            {filteredKanun.map((kategori) => {
              const Icon = kategori.icon;
              const renk = renkSiniflari[kategori.renk];
              const isExpanded = expandedKategori === kategori.id;

              return (
                <div
                  key={kategori.id}
                  className={`bg-gradient-to-br ${renk.bg} border ${renk.border} rounded-2xl overflow-hidden hover:${renk.shadow} transition-all duration-300`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => setExpandedKategori(isExpanded ? null : kategori.id)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${renk.icon} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-white">{kategori.baslik}</h3>
                        <p className="text-sm text-gray-400">{kategori.aciklama} • {kategori.cezalar.length} madde</p>
                      </div>
                    </div>
                    <div className={renk.text}>
                      {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </button>

                  {/* Crimes List */}
                  {isExpanded && (
                    <div className="border-t border-white/10">
                      <div className="p-4 space-y-3">
                        {kategori.cezalar
                          .filter(ceza => 
                            !searchTerm || 
                            ceza.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ceza.aciklama.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            ceza.madde.toLowerCase().includes(searchTerm.toLowerCase())
                          )
                          .map((ceza, index) => (
                          <div
                            key={ceza.madde}
                            className="bg-black/30 rounded-xl p-4 hover:bg-black/50 transition-colors"
                          >
                            {/* Crime Header */}
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 ${renk.badge} rounded-lg text-xs font-bold`}>
                                  {ceza.madde}
                                </span>
                                <h4 className="text-white font-bold text-lg">{ceza.baslik}</h4>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                              {ceza.aciklama}
                            </p>

                            {/* Penalties */}
                            <div className="flex flex-wrap gap-3">
                              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                                <Clock className="w-4 h-4 text-red-400" />
                                <span className="text-red-300 text-sm font-medium">{ceza.sure}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-2">
                                <DollarSign className="w-4 h-4 text-yellow-400" />
                                <span className="text-yellow-300 text-sm font-medium">{ceza.para}</span>
                              </div>
                            </div>

                            {/* Note */}
                            {ceza.not && (
                              <div className="mt-3 flex items-start gap-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-2">
                                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span className="text-amber-300 text-xs">{ceza.not}</span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredKanun.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
              <p className="text-gray-400">Arama kriterlerinize uygun madde bulunamadı.</p>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-12 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Önemli Bilgilendirme</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bu ceza kanunu FED:V sunucusu için geçerlidir. Cezalar duruma göre yargıç kararıyla artırılabilir veya azaltılabilir. 
                  Tekrarlayan suçlarda cezalar kademeli olarak artırılır. İyi hal indirimi uygulanabilir.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              to="/social-kurallar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-amber-500/30"
            >
              <ArrowLeft className="w-5 h-5" />
              Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DOJCezaKanunu;
