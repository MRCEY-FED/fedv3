import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, MessageCircle, Newspaper, Building2, Home, Clock, MapPin, DollarSign, Eye, ChevronRight, Flame, TrendingUp, X, Calendar, User, Phone, Mail, CheckCircle, AlertTriangle, ShoppingBag, Star, Crown, ChevronLeft, Sparkles, Zap, Gift } from 'lucide-react';

const Roster = () => {
  const [ihaleTab, setIhaleTab] = useState('isletmeler');
  const [selectedHaber, setSelectedHaber] = useState(null);
  const [selectedIhale, setSelectedIhale] = useState(null);
  const [selectedVip, setSelectedVip] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Galeri Data
  const heroGaleri = [
    {
      id: 1,
      resim: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920",
      baslik: "Eğlence & Sosyal Yaşam"
    },
    {
      id: 2,
      resim: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=1920",
      baslik: "Roleplay Deneyimi"
    },
    {
      id: 3,
      resim: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=1920",
      baslik: "Topluluk & Arkadaşlık"
    },
    {
      id: 4,
      resim: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920",
      baslik: "Gece Hayatı"
    }
  ];

  // Auto slide for hero gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroGaleri.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroGaleri.length]);

  // Weazel News Data
  const haberler = [
    {
      id: 1,
      baslik: "Los Santos'ta Büyük Banka Soygunu!",
      ozet: "Dün gece saatlerinde Fleeca Bank'ta gerçekleşen soygun sonrası polis alarma geçti. Şüpheliler hala aranıyor.",
      icerik: `Dün gece saat 23:45 sıralarında Downtown Los Santos'taki Fleeca Bank şubesine maskeli ve silahlı 4 kişi tarafından baskın düzenlendi. 

Görgü tanıklarının ifadesine göre, soyguncullar bankanın arka kapısından giriş yaparak güvenlik sistemlerini devre dışı bıraktı. Banka kasasından yaklaşık 2.5 milyon dolar nakit para çalındığı tahmin ediliyor.

LSPD Sözcüsü verdiği demeçte, "Tüm birimlerimiz alarma geçti. Şüphelilerin yakalanması için yoğun bir çalışma yürütüyoruz. Vatandaşlarımızdan herhangi bir şüpheli durumu ihbar etmelerini rica ediyoruz" dedi.

Soyguncuların kaçışta kullandığı aracın siyah renkli bir Kuruma olduğu belirlendi. Araç daha sonra Vinewood Hills bölgesinde terk edilmiş halde bulundu.

Soruşturma devam ediyor.`,
      tarih: "2 saat önce",
      tarihDetay: "20 Aralık 2024, 02:30",
      kategori: "Acil Haber",
      yazar: "Sarah Mitchell",
      resim: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
        "https://images.unsplash.com/photo-1621944190310-e3cca1564bd7?w=800"
      ],
      onemli: true
    },
    {
      id: 2,
      baslik: "Vinewood Hills'te Yeni Lüks Konut Projesi",
      ozet: "Şehrin en prestijli bölgesinde inşa edilecek yeni konut projesi büyük ilgi görüyor.",
      icerik: `Dynasty Real Estate, Vinewood Hills'in en gözde lokasyonunda yeni bir lüks konut projesi başlattığını duyurdu.

"Vinewood Heights" adı verilen proje, 12 adet ultra lüks villadan oluşacak. Her villa minimum 500 metrekare yaşam alanı, özel havuz, akıllı ev sistemleri ve panoramik şehir manzarası sunacak.

Proje müdürü James Wilson, "Bu proje Los Santos'un en prestijli konut projesi olacak. Hedef kitlemiz şehrin iş dünyası liderleri ve ünlü isimleri" dedi.

Villaların fiyatları 5 milyon dolardan başlıyor. Ön satışlar önümüzdeki hafta başlayacak.`,
      tarih: "5 saat önce",
      tarihDetay: "19 Aralık 2024, 23:15",
      kategori: "Emlak",
      yazar: "Michael Torres",
      resim: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
      ],
      onemli: false
    },
    {
      id: 3,
      baslik: "Maze Bank Arena'da Dev Konser",
      ozet: "Bu hafta sonu düzenlenecek konser için biletler tükenmek üzere. Organizatörler ek konser tarihi açıklayabilir.",
      icerik: `Los Santos'un en büyük etkinlik mekanı Maze Bank Arena, bu hafta sonu dünya starı DJ'in konserine ev sahipliği yapacak.

50.000 kişilik arenanın biletleri satışa çıktıktan sadece 2 saat sonra tükendi. Organizatörler yoğun talep üzerine Pazar günü için ek konser düzenlemeyi değerlendiriyor.

Etkinlik koordinatörü Lisa Park, "Bu kadar büyük bir ilgi beklemiyorduk. Hayranları memnun etmek için elimizden geleni yapacağız" açıklamasında bulundu.

Konser cumartesi akşamı saat 21:00'de başlayacak. VIP biletler için ikinci el piyasada 5.000 dolara kadar fiyatlar görülüyor.`,
      tarih: "1 gün önce",
      tarihDetay: "19 Aralık 2024, 14:00",
      kategori: "Etkinlik",
      yazar: "Emma Johnson",
      resim: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800"
      ],
      onemli: false
    },
    {
      id: 4,
      baslik: "LSPD Yeni Araç Filosunu Tanıttı",
      ozet: "Los Santos Polis Departmanı, suçla mücadelede kullanılacak yeni araçlarını basına tanıttı.",
      icerik: `Los Santos Polis Departmanı bugün düzenlediği basın toplantısıyla yeni araç filosunu tanıttı.

Filoya eklenen 50 adet yeni devriye aracı, son teknoloji takip sistemleri ve gelişmiş iletişim ekipmanlarıyla donatıldı. Ayrıca 10 adet yüksek hızlı takip aracı da filosuna katıldı.

Polis Şefi Robert Martinez, "Bu yatırım şehrimizi daha güvenli hale getirecek. Suçlular artık kaçamayacak" dedi.

Yeni araçlar önümüzdeki haftadan itibaren aktif göreve başlayacak.`,
      tarih: "2 gün önce",
      tarihDetay: "18 Aralık 2024, 11:30",
      kategori: "Güvenlik",
      yazar: "David Chen",
      resim: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
        "https://images.unsplash.com/photo-1612387049513-d9e63921e6ec?w=800"
      ],
      onemli: false
    }
  ];

  // İhaleler Data - İşletmeler
  const isletmeler = [
    {
      id: 1,
      isim: "Vanilla Unicorn",
      konum: "Strawberry, Los Santos",
      fiyat: "2.500.000$",
      aciklama: "Şehrin en popüler gece kulübü. Tam teşekküatlı bar ve sahne alanı mevcut.",
      detayliAciklama: `Vanilla Unicorn, Los Santos'un en ünlü ve en karlı gece kulübüdür. Strawberry bölgesinin kalbinde yer alan bu mekan, 15 yılı aşkın süredir şehrin gece hayatının merkezi konumundadır.

**Mekan Özellikleri:**
- 800 m² kapalı alan
- 3 adet tam donanımlı bar
- Ana sahne ve 2 adet özel sahne
- VIP bölümü (50 kişi kapasiteli)
- 20 araçlık özel otopark
- Profesyonel ses ve ışık sistemi
- Güvenlik kamera sistemi

**Finansal Bilgiler:**
- Aylık ortalama ciro: 450.000$
- Aylık işletme gideri: 180.000$
- Net kar marjı: %60

**Personel:**
- 15 tam zamanlı çalışan
- 25 yarı zamanlı çalışan
- Tüm personel devri mümkün`,
      resim: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800",
        "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800",
        "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "3 gün kaldı",
      baslangicFiyat: "2.000.000$",
      guncelTeklif: "2.500.000$",
      teklifSayisi: 8,
      iletisim: "dynasty.realestate@mail.ls",
      telefon: "+1 (555) 123-4567"
    },
    {
      id: 2,
      isim: "Burger Shot - Downtown",
      konum: "Downtown Los Santos",
      fiyat: "850.000$",
      aciklama: "Merkezi konumda fast-food restoranı. Yüksek müşteri potansiyeli.",
      detayliAciklama: `Downtown Los Santos'un en işlek caddesinde yer alan bu Burger Shot şubesi, günlük binlerce müşteriye hizmet vermektedir.

**Mekan Özellikleri:**
- 250 m² kapalı alan
- 60 kişilik oturma kapasitesi
- Drive-thru hizmeti
- Modern mutfak ekipmanları
- Depo alanı

**Finansal Bilgiler:**
- Aylık ortalama ciro: 120.000$
- Aylık işletme gideri: 65.000$
- Franchise ücreti: Cironun %8'i

**Franchise Avantajları:**
- Marka bilinirliği
- Merkezi tedarik sistemi
- Pazarlama desteği
- Eğitim programları`,
      resim: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "5 gün kaldı",
      baslangicFiyat: "700.000$",
      guncelTeklif: "850.000$",
      teklifSayisi: 12,
      iletisim: "franchise@burgershot.ls",
      telefon: "+1 (555) 234-5678"
    },
    {
      id: 3,
      isim: "Premium Deluxe Motorsport",
      konum: "Pillbox Hill",
      fiyat: "4.200.000$",
      aciklama: "Lüks araç galerisi. Showroom ve servis alanı dahil.",
      detayliAciklama: `Premium Deluxe Motorsport, Los Santos'un en prestijli lüks araç galerisidir.`,
      resim: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "7 gün kaldı",
      baslangicFiyat: "3.500.000$",
      guncelTeklif: "4.200.000$",
      teklifSayisi: 5,
      iletisim: "sales@pdm-ls.com",
      telefon: "+1 (555) 345-6789"
    },
    {
      id: 4,
      isim: "Tequi-la-la Bar",
      konum: "West Vinewood",
      fiyat: "1.100.000$",
      aciklama: "Canlı müzik sahnesi olan popüler bar. Sadık müşteri kitlesi mevcut.",
      detayliAciklama: `Tequi-la-la, West Vinewood'un kültürel dokusunun bir parçası haline gelmiş bardır.`,
      resim: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "4 gün kaldı",
      baslangicFiyat: "900.000$",
      guncelTeklif: "1.100.000$",
      teklifSayisi: 15,
      iletisim: "info@tequilala.ls",
      telefon: "+1 (555) 456-7890"
    }
  ];

  // İhaleler Data - Konutlar
  const konutlar = [
    {
      id: 1,
      isim: "Vinewood Hills Villa",
      konum: "Vinewood Hills",
      fiyat: "3.800.000$",
      aciklama: "4 yatak odalı, havuzlu lüks villa. Şehir manzarası.",
      detayliAciklama: `Vinewood Hills'in en gözde lokasyonunda muhteşem bir villa.`,
      resim: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "2 gün kaldı",
      ozellikler: "4+1, Havuz, Garaj",
      baslangicFiyat: "3.200.000$",
      guncelTeklif: "3.800.000$",
      teklifSayisi: 6,
      iletisim: "luxury@dynasty-re.ls",
      telefon: "+1 (555) 567-8901"
    },
    {
      id: 2,
      isim: "Eclipse Towers Penthouse",
      konum: "Downtown Los Santos",
      fiyat: "5.500.000$",
      aciklama: "En üst katta lüks penthouse. 360 derece şehir manzarası.",
      detayliAciklama: `Eclipse Towers'ın 45. katında prestijli penthouse.`,
      resim: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "6 gün kaldı",
      ozellikler: "3+1, Teras, Asansör",
      baslangicFiyat: "4.800.000$",
      guncelTeklif: "5.500.000$",
      teklifSayisi: 4,
      iletisim: "penthouse@eclipse-towers.ls",
      telefon: "+1 (555) 678-9012"
    },
    {
      id: 3,
      isim: "Paleto Bay Sahil Evi",
      konum: "Paleto Bay",
      fiyat: "950.000$",
      aciklama: "Sakin bir ortamda sahil kenarı ev. Tekne iskelesi mevcut.",
      detayliAciklama: `Paleto Bay'in huzurlu atmosferinde sahil evi.`,
      resim: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "8 gün kaldı",
      ozellikler: "2+1, İskele, Bahçe",
      baslangicFiyat: "800.000$",
      guncelTeklif: "950.000$",
      teklifSayisi: 9,
      iletisim: "coastal@paleto-properties.ls",
      telefon: "+1 (555) 789-0123"
    },
    {
      id: 4,
      isim: "Mirror Park Aile Evi",
      konum: "Mirror Park",
      fiyat: "650.000$",
      aciklama: "Aile dostu mahallede geniş bahçeli ev.",
      detayliAciklama: `Mirror Park'ın güzel sokağında aile evi.`,
      resim: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
      resimler: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
      ],
      durum: "Aktif İhale",
      bitis: "5 gün kaldı",
      ozellikler: "3+1, Bahçe, Garaj",
      baslangicFiyat: "550.000$",
      guncelTeklif: "650.000$",
      teklifSayisi: 18,
      iletisim: "family@mirrorpark-homes.ls",
      telefon: "+1 (555) 890-1234"
    }
  ];

  // VIP Market - Haftanın En Çok Satanları
  const vipUrunler = [
    {
      id: 1,
      isim: "VIP Gold Paketi",
      fiyat: "500.000$",
      eskiFiyat: "650.000$",
      aciklama: "1 aylık VIP Gold üyelik + özel araç + özel kıyafetler",
      resim: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
      kategori: "VIP Paket",
      satisSayisi: 234,
      indirim: "23%",
      yildiz: 5,
      ozellikler: ["Özel Araç", "VIP Bölge Erişimi", "Özel Kıyafetler", "Priority Queue"]
    },
    {
      id: 2,
      isim: "Lüks Spor Araç Paketi",
      fiyat: "1.200.000$",
      eskiFiyat: "1.500.000$",
      aciklama: "3 adet özel spor araç + özel plaka + garaj yeri",
      resim: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
      kategori: "Araç Paketi",
      satisSayisi: 156,
      indirim: "20%",
      yildiz: 5,
      ozellikler: ["3 Spor Araç", "Özel Plaka", "Garaj Yeri", "Araç Modifikasyonları"]
    },
    {
      id: 3,
      isim: "Emlak Yatırım Paketi",
      fiyat: "2.500.000$",
      eskiFiyat: "3.000.000$",
      aciklama: "Daire + İşyeri + Pasif gelir bonusu",
      resim: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      kategori: "Emlak Paketi",
      satisSayisi: 89,
      indirim: "17%",
      yildiz: 4,
      ozellikler: ["Lüks Daire", "İşyeri", "Pasif Gelir", "Dekorasyon Paketi"]
    },
    {
      id: 4,
      isim: "Silah Koleksiyonu",
      fiyat: "350.000$",
      eskiFiyat: "400.000$",
      aciklama: "Özel silahlar + skin'ler + taşıma izni",
      resim: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800",
      kategori: "Silah Paketi",
      satisSayisi: 312,
      indirim: "12%",
      yildiz: 4,
      ozellikler: ["5 Özel Silah", "Silah Skin'leri", "Taşıma İzni", "Mermi Bonusu"]
    },
    {
      id: 5,
      isim: "VIP Platinum Paketi",
      fiyat: "1.000.000$",
      eskiFiyat: "1.300.000$",
      aciklama: "3 aylık VIP Platinum + tüm özellikler + özel etkinlikler",
      resim: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800",
      kategori: "VIP Paket",
      satisSayisi: 145,
      indirim: "23%",
      yildiz: 5,
      ozellikler: ["3 Ay VIP", "Tüm Özellikler", "Özel Etkinlikler", "Öncelikli Destek"]
    },
    {
      id: 6,
      isim: "Başlangıç Paketi",
      fiyat: "150.000$",
      eskiFiyat: "200.000$",
      aciklama: "Yeni oyuncular için ideal başlangıç seti",
      resim: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=800",
      kategori: "Starter Paket",
      satisSayisi: 567,
      indirim: "25%",
      yildiz: 4,
      ozellikler: ["Başlangıç Arabası", "Temel Silahlar", "Kıyafet Seti", "Para Bonusu"]
    }
  ];

  // Haber Modal Component
  const HaberModal = ({ haber, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);
    
    if (!haber) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div 
          className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-orange-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-72 md:h-96">
              <img src={haber.resimler[activeImage]} alt={haber.baslik} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-orange-500 rounded-lg">
                <Flame className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold">{haber.kategori}</span>
              </div>
              {haber.resimler.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {haber.resimler.map((_, idx) => (
                    <button key={idx} onClick={() => setActiveImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${activeImage === idx ? 'bg-orange-500 w-6' : 'bg-white/50'}`} />
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-orange-400" /><span>{haber.tarihDetay}</span></div>
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-orange-400" /><span>{haber.yazar}</span></div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{haber.baslik}</h2>
              <div className="prose prose-invert max-w-none">
                {haber.icerik.split('\n\n').map((p, idx) => (<p key={idx} className="text-gray-300 leading-relaxed mb-4">{p}</p>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // İhale Modal Component
  const IhaleModal = ({ ihale, type, onClose }) => {
    const [activeImage, setActiveImage] = useState(0);
    if (!ihale) return null;
    const isKonut = type === 'konut';

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className={`relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border ${isKonut ? 'border-violet-500/30' : 'border-emerald-500/30'} rounded-2xl overflow-hidden`}
          onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-72 md:h-96">
              <img src={ihale.resimler[activeImage]} alt={ihale.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className={`absolute top-4 left-4 px-3 py-1.5 ${isKonut ? 'bg-violet-500' : 'bg-emerald-500'} rounded-lg`}>
                <span className="text-white text-sm font-bold">{ihale.durum}</span>
              </div>
              <div className="absolute top-4 right-16 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-lg">
                <Clock className="w-4 h-4 text-orange-400" /><span className="text-orange-400 text-sm font-bold">{ihale.bitis}</span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{ihale.isim}</h2>
              <div className="flex items-center gap-2 text-gray-400 mb-4"><MapPin className="w-4 h-4" /><span>{ihale.konum}</span></div>
              <div className={`grid grid-cols-3 gap-4 p-4 ${isKonut ? 'bg-violet-500/10 border-violet-500/30' : 'bg-emerald-500/10 border-emerald-500/30'} border rounded-xl mb-6`}>
                <div className="text-center"><p className="text-gray-400 text-xs mb-1">Başlangıç</p><p className="text-white font-bold">{ihale.baslangicFiyat}</p></div>
                <div className="text-center border-x border-white/10"><p className="text-gray-400 text-xs mb-1">Güncel Teklif</p><p className={`${isKonut ? 'text-violet-400' : 'text-emerald-400'} font-bold text-xl`}>{ihale.guncelTeklif}</p></div>
                <div className="text-center"><p className="text-gray-400 text-xs mb-1">Teklif Sayısı</p><p className="text-white font-bold">{ihale.teklifSayisi}</p></div>
              </div>
              <div className="mb-6"><h3 className="text-white font-bold text-lg mb-3">Detaylı Bilgi</h3><p className="text-gray-300">{ihale.detayliAciklama}</p></div>
              <div className={`p-4 ${isKonut ? 'bg-violet-500/10 border-violet-500/30' : 'bg-emerald-500/10 border-emerald-500/30'} border rounded-xl mb-6`}>
                <h3 className="text-white font-bold mb-3">İletişim</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3"><Mail className={`w-5 h-5 ${isKonut ? 'text-violet-400' : 'text-emerald-400'}`} /><span className="text-gray-300">{ihale.iletisim}</span></div>
                  <div className="flex items-center gap-3"><Phone className={`w-5 h-5 ${isKonut ? 'text-violet-400' : 'text-emerald-400'}`} /><span className="text-gray-300">{ihale.telefon}</span></div>
                </div>
              </div>
              <button className={`w-full py-4 ${isKonut ? 'bg-gradient-to-r from-violet-500 to-purple-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'} text-white font-bold text-lg rounded-xl hover:scale-[1.02] transition-all`}>Teklif Ver</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // VIP Ürün Modal Component
  const VipModal = ({ urun, onClose }) => {
    if (!urun) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div 
          className="relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-amber-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto max-h-[90vh]">
            {/* Image */}
            <div className="relative h-56 md:h-72">
              <img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber-500 rounded-lg">
                <span className="text-white text-sm font-bold">{urun.kategori}</span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-16 px-3 py-1.5 bg-red-500 rounded-lg">
                <span className="text-white text-sm font-bold">-{urun.indirim}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title & Rating */}
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{urun.isim}</h2>
                <div className="flex items-center gap-1">
                  {[...Array(urun.yildiz)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-6">{urun.aciklama}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-3">Paket İçeriği</h3>
                <div className="grid grid-cols-2 gap-2">
                  {urun.ozellikler.map((ozellik, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-amber-400" />
                      <span className="text-gray-300 text-sm">{ozellik}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Box */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-lg line-through">{urun.eskiFiyat}</span>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-amber-400" />
                      <span className="text-white text-3xl font-black">{urun.fiyat}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-400">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="text-lg">{urun.satisSayisi} satış</span>
                    </div>
                    <span className="text-amber-400 font-semibold">Popüler Ürün</span>
                  </div>
                </div>
              </div>

              {/* Buy Button - Discord Link */}
              <a 
                href="https://discord.gg/fedvsocial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-amber-500/30"
              >
                <ShoppingBag className="w-6 h-6" />
                <span>Satın Al</span>
              </a>

              <p className="text-center text-gray-500 text-sm mt-3">
                Satın almak için Discord sunucumuza yönlendirileceksiniz
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Modals */}
      {selectedHaber && <HaberModal haber={selectedHaber} onClose={() => setSelectedHaber(null)} />}
      {selectedIhale && <IhaleModal ihale={selectedIhale.data} type={selectedIhale.type} onClose={() => setSelectedIhale(null)} />}
      {selectedVip && <VipModal urun={selectedVip} onClose={() => setSelectedVip(null)} />}

      {/* Hero Section with Gallery */}
      <section className="relative pt-16 min-h-[70vh] flex items-center overflow-hidden">
        {/* Gallery Background */}
        <div className="absolute inset-0">
          {heroGaleri.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.resim} alt={slide.baslik} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </div>

        {/* Gallery Navigation */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroGaleri.length) % heroGaleri.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroGaleri.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Gallery Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroGaleri.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${index === currentSlide ? 'w-8 h-3 bg-purple-500 rounded-full' : 'w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full'}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto w-full text-center px-4">
          <img 
            src="https://customer-assets.emergentagent.com/job_roleplay-community/artifacts/33eo1rkm_fedV-Logo4tra.png" 
            alt="FED:V Logo" 
            className="h-28 md:h-40 w-auto object-contain drop-shadow-2xl mx-auto mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-2xl">
              FED:V Social
            </span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto font-medium">
            Sosyal yaşam, eğlence ve roleplay deneyiminin merkezi
          </p>
          
          {/* Current Slide Title */}
          <div className="mt-8 inline-block px-6 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/40 rounded-full">
            <span className="text-purple-300 font-semibold">{heroGaleri[currentSlide].baslik}</span>
          </div>
        </div>
      </section>

      {/* Weazel News Section */}
      <section className="py-12 px-4" id="haberler">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Newspaper className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">WEAZEL NEWS</span>
              </h2>
              <p className="text-gray-400 text-sm">Los Santos'un en güvenilir haber kaynağı</p>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-semibold">CANLI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="group relative h-[400px] rounded-2xl overflow-hidden border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedHaber(haberler[0])}>
                <img src={haberler[0].resim} alt={haberler[0].baslik} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500 rounded-lg animate-pulse">
                  <Flame className="w-4 h-4 text-white" /><span className="text-white text-sm font-bold">{haberler[0].kategori}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-orange-400 text-sm mb-2"><Clock className="w-4 h-4" /><span>{haberler[0].tarih}</span></div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 group-hover:text-orange-400 transition-colors">{haberler[0].baslik}</h3>
                  <p className="text-gray-300 text-base">{haberler[0].ozet}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {haberler.slice(1).map((haber) => (
                <div key={haber.id} className="group flex gap-4 p-3 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl hover:border-orange-500/40 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedHaber(haber)}>
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src={haber.resim} alt={haber.baslik} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-orange-400 text-xs font-semibold">{haber.kategori}</span>
                    <h4 className="text-white font-bold text-sm mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors">{haber.baslik}</h4>
                    <div className="flex items-center gap-1 text-gray-500 text-xs"><Clock className="w-3 h-3" /><span>{haber.tarih}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İhaleler Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" id="ihaleler">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">İHALELER</span>
                </h2>
                <p className="text-gray-400 text-sm">Açık artırma ile satışa sunulan mülkler</p>
              </div>
            </div>
            <div className="md:ml-auto flex gap-2 p-1 bg-black/40 rounded-xl border border-white/10">
              <button onClick={() => setIhaleTab('isletmeler')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${ihaleTab === 'isletmeler' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
                <Building2 className="w-4 h-4" /><span>İşletmeler</span>
              </button>
              <button onClick={() => setIhaleTab('konutlar')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${ihaleTab === 'konutlar' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
                <Home className="w-4 h-4" /><span>Konutlar</span>
              </button>
            </div>
          </div>

          {ihaleTab === 'isletmeler' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {isletmeler.map((isletme) => (
                <div key={isletme.id} className="group bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl overflow-hidden hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedIhale({ data: isletme, type: 'isletme' })}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={isletme.resim} alt={isletme.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500/90 rounded-full"><span className="text-white text-xs font-bold">{isletme.durum}</span></div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 rounded-full"><Clock className="w-3 h-3 text-orange-400" /><span className="text-orange-400 text-xs font-semibold">{isletme.bitis}</span></div>
                    <div className="absolute bottom-3 left-3"><div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-emerald-400" /><span className="text-white text-xl font-black">{isletme.fiyat}</span></div></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">{isletme.isim}</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-3"><MapPin className="w-4 h-4" /><span>{isletme.konum}</span></div>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{isletme.aciklama}</p>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-emerald-400 font-semibold text-sm group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Eye className="w-4 h-4" /><span>Detayları Gör</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {ihaleTab === 'konutlar' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {konutlar.map((konut) => (
                <div key={konut.id} className="group bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-2xl overflow-hidden hover:border-violet-500/60 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedIhale({ data: konut, type: 'konut' })}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={konut.resim} alt={konut.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 bg-violet-500/90 rounded-full"><span className="text-white text-xs font-bold">{konut.durum}</span></div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 rounded-full"><Clock className="w-3 h-3 text-orange-400" /><span className="text-orange-400 text-xs font-semibold">{konut.bitis}</span></div>
                    <div className="absolute bottom-3 left-3"><div className="flex items-center gap-2"><DollarSign className="w-5 h-5 text-violet-400" /><span className="text-white text-xl font-black">{konut.fiyat}</span></div></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-violet-400 transition-colors">{konut.isim}</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-2"><MapPin className="w-4 h-4" /><span>{konut.konum}</span></div>
                    <span className="px-2 py-1 bg-violet-500/20 border border-violet-500/30 rounded-lg text-violet-400 text-xs font-medium">{konut.ozellikler}</span>
                    <p className="text-gray-400 text-sm line-clamp-2 my-3">{konut.aciklama}</p>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-500/20 border border-violet-500/40 rounded-xl text-violet-400 font-semibold text-sm group-hover:bg-violet-500 group-hover:text-white transition-all">
                      <Eye className="w-4 h-4" /><span>Detayları Gör</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* VIP Market - Haftanın En Çok Satanları */}
      <section className="py-12 px-4" id="vip">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Crown className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  HAFTANIN EN ÇOK SATANLARI
                </span>
              </h2>
              <p className="text-gray-400 text-sm">VIP Market - Özel fırsatlar ve paketler</p>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">ÖZEL FIRSATLAR</span>
            </div>
          </div>

          {/* Products Grid - 6 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {vipUrunler.map((urun, index) => (
              <div
                key={urun.id}
                className="group relative bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-xl overflow-hidden hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedVip(urun)}
              >
                {/* Best Seller Badge */}
                {index < 3 && (
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg">
                    <Star className="w-2.5 h-2.5 text-white fill-white" />
                    <span className="text-white text-[10px] font-bold">#{index + 1}</span>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute top-2 right-2 z-10 px-1.5 py-0.5 bg-red-500 rounded">
                  <span className="text-white text-[10px] font-bold">-{urun.indirim}</span>
                </div>

                {/* Image */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={urun.resim}
                    alt={urun.isim}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category */}
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-0.5 bg-amber-500/80 backdrop-blur-sm rounded-full text-white text-[10px] font-semibold">
                      {urun.kategori}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2">
                  {/* Title */}
                  <h3 className="text-white font-bold text-xs mb-1 group-hover:text-amber-400 transition-colors line-clamp-1">
                    {urun.isim}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(urun.yildiz)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <span className="text-gray-500 text-[10px] line-through block">{urun.eskiFiyat}</span>
                    <div className="flex items-center gap-0.5">
                      <DollarSign className="w-3 h-3 text-amber-400" />
                      <span className="text-white text-sm font-black">{urun.fiyat}</span>
                    </div>
                  </div>

                  {/* Sales Count */}
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] mb-2">
                    <ShoppingBag className="w-3 h-3" />
                    <span>{urun.satisSayisi} satış</span>
                  </div>

                  {/* Buy Button */}
                  <a 
                    href="https://discord.gg/fedvsocial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-center gap-1 px-2 py-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold text-[10px] rounded-lg transition-all duration-300 shadow-md"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>Satın Al</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Gift className="w-6 h-6 text-amber-400" />
                <span className="text-white font-bold text-lg">Tüm VIP ürünlerini keşfet!</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">Discord üzerinden özel indirimler ve kampanyalardan haberdar ol.</p>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
                <Sparkles className="w-5 h-5" />
                VIP Mağazaya Git
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Roster;
