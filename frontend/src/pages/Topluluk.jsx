import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, X, ChevronRight, Image, Film, Play, Camera, Video,
  Skull, Eye, Lock, BookOpen, HelpCircle, Sparkles, PlayCircle,
  Gamepad2, Briefcase, Car, Home, Users, DollarSign, Heart, Shield,
  Search, Filter, Clock, ThumbsUp
} from 'lucide-react';

// ==================== İLLEGAL İPUCU VERİLERİ ====================
const illegalIpuclari = [
  {
    id: 1,
    resim: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800",
    baslik: "Gizemli Lokasyon #1",
    aciklama: "Bu bölgede dikkatli ol, karanlıkta bekleyen tehlikeler var...",
    ipucu: "Gece 02:00'dan sonra aktif"
  },
  {
    id: 2,
    resim: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
    baslik: "Gizli Buluşma Noktası",
    aciklama: "Sadece güvenilir kişilerle paylaş, bu lokasyon çok önemli...",
    ipucu: "Koordinatları unutma"
  },
  {
    id: 3,
    resim: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    baslik: "Terk Edilmiş Depo",
    aciklama: "Eski bir depo ama içinde değerli şeyler olabilir...",
    ipucu: "Arka kapıyı kontrol et"
  },
  {
    id: 4,
    resim: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800",
    baslik: "Kod Adı: Gölge",
    aciklama: "Bu ismi duyduğunda dikkatli ol, büyük bir operasyon başlıyor olabilir...",
    ipucu: "Telefonunu kapat"
  },
  {
    id: 5,
    resim: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800",
    baslik: "Kayıp Kargo",
    aciklama: "Limanda bir konteyner var, içinde ne olduğunu kimse bilmiyor...",
    ipucu: "Mavi konteyner, 3. sıra"
  },
  {
    id: 6,
    resim: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    baslik: "Yeraltı Bağlantısı",
    aciklama: "Şehrin altında gizli tüneller var, doğru kapıyı bul...",
    ipucu: "Metro istasyonu yakınları"
  }
];

// ==================== VİDEO REHBER VERİLERİ ====================
const videoRehberler = [
  {
    id: 1,
    videoId: "dQw4w9WgXcQ",
    kategori: "Başlangıç",
    baslik: "Sunucuya İlk Giriş Rehberi",
    aciklama: "Sunucuya ilk kez giriyorsan bu videoyu mutlaka izle! Karakter oluşturma, ilk adımlar ve temel bilgiler burada.",
    sure: "12:45",
    izlenme: "15.2K",
    renk: "emerald"
  },
  {
    id: 2,
    videoId: "9bZkp7q19f0",
    kategori: "Para Kazanma",
    baslik: "Legal İşler ile Para Kazanma",
    aciklama: "Taksicilik, kamyonculuk, balıkçılık ve daha fazlası! Legal yollarla nasıl zengin olursun öğren.",
    sure: "18:30",
    izlenme: "23.5K",
    renk: "yellow"
  },
  {
    id: 3,
    videoId: "kJQP7kiw5Fk",
    kategori: "Araçlar",
    baslik: "Araç Satın Alma ve Modifiye",
    aciklama: "Araç galerilerinin yerleri, araç modifikasyonu, sigorta sistemi ve özel plaka alma rehberi.",
    sure: "15:20",
    izlenme: "19.8K",
    renk: "blue"
  },
  {
    id: 4,
    videoId: "RgKAFK5djSk",
    kategori: "Gayrimenkul",
    baslik: "Ev ve İşyeri Satın Alma",
    aciklama: "Mülk satın alma işlemleri, dekorasyon sistemi, kiralama ve ihale kuralları hakkında her şey.",
    sure: "14:15",
    izlenme: "12.3K",
    renk: "purple"
  },
  {
    id: 5,
    videoId: "JGwWNGJdvx8",
    kategori: "Organizasyon",
    baslik: "Gang ve Çete Kurma Rehberi",
    aciklama: "Kendi gangini nasıl kurarsın? Üyelik, bölge kontrolü, savaş kuralları ve ittifaklar.",
    sure: "22:00",
    izlenme: "31.2K",
    renk: "orange"
  },
  {
    id: 6,
    videoId: "fJ9rUzIMcZQ",
    kategori: "Soygun",
    baslik: "Soygun Sistemleri Rehberi",
    aciklama: "Market, banka, mücevher soygunu nasıl yapılır? Tüm soygun sistemleri detaylı anlatım.",
    sure: "25:40",
    izlenme: "45.6K",
    renk: "red"
  },
  {
    id: 7,
    videoId: "dQw4w9WgXcQ",
    kategori: "Polis",
    baslik: "Polis ile Etkileşim Kuralları",
    aciklama: "Tutuklama süreçleri, haklarınız, avukat tutma ve ceza sistemi hakkında bilmeniz gerekenler.",
    sure: "16:30",
    izlenme: "28.9K",
    renk: "cyan"
  },
  {
    id: 8,
    videoId: "9bZkp7q19f0",
    kategori: "Roleplay",
    baslik: "İyi Roleplay Nasıl Yapılır?",
    aciklama: "Karakter geliştirme, hikaye oluşturma, diyalog kurma ve kaliteli RP için ipuçları.",
    sure: "20:15",
    izlenme: "38.4K",
    renk: "pink"
  },
  {
    id: 9,
    videoId: "kJQP7kiw5Fk",
    kategori: "Ekonomi",
    baslik: "Banka ve Yatırım Sistemi",
    aciklama: "Banka hesabı açma, kredi çekme, yatırım yapma ve ekonomi sisteminin tüm detayları.",
    sure: "13:50",
    izlenme: "17.1K",
    renk: "green"
  }
];

// ==================== GALERİ VERİLERİ ====================
const galeriFotograflar = [
  { id: 1, url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800", title: "Gang Toplantısı", description: "Los Santos sokaklarında bir gece" },
  { id: 2, url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800", title: "Gece Sürüşü", description: "Şehrin ışıklarında" },
  { id: 3, url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800", title: "Klasik Arabalar", description: "Vintage koleksiyon" },
  { id: 4, url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", title: "Lüks Yaşam", description: "VIP araçlar" },
  { id: 5, url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800", title: "Spor Araçlar", description: "Hız tutkunları" },
  { id: 6, url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", title: "Yarış Günü", description: "Pist heyecanı" },
  { id: 7, url: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800", title: "Gün Batımı", description: "Los Santos manzarası" },
  { id: 8, url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800", title: "Muscle Car", description: "Amerikan kasları" },
  { id: 9, url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800", title: "Ferrari Vibes", description: "Kırmızı tutku" }
];

const galeriVideolar = [
  { id: 1, videoId: "dQw4w9WgXcQ", title: "Epic Chase Sahnesi", description: "Polislerden kaçış anı" },
  { id: 2, videoId: "9bZkp7q19f0", title: "Gang Savaşı", description: "Grove Street vs Ballas" },
  { id: 3, videoId: "kJQP7kiw5Fk", title: "Drift Şov", description: "En iyi drift anları" },
  { id: 4, videoId: "RgKAFK5djSk", title: "Banka Soygunu", description: "Profesyonel operasyon" },
  { id: 5, videoId: "JGwWNGJdvx8", title: "Komik Anlar", description: "En eğlenceli RP sahneleri" },
  { id: 6, videoId: "fJ9rUzIMcZQ", title: "Heist Hazırlığı", description: "Büyük soygun planı" }
];

// ==================== RENK SINIFLARI ====================
const renkSiniflari = {
  emerald: { bg: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40', icon: 'from-emerald-500 to-emerald-600', text: 'text-emerald-400', badge: 'bg-emerald-500/20 text-emerald-300', glow: 'shadow-emerald-500/30' },
  yellow: { bg: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40', icon: 'from-yellow-500 to-yellow-600', text: 'text-yellow-400', badge: 'bg-yellow-500/20 text-yellow-300', glow: 'shadow-yellow-500/30' },
  blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40', icon: 'from-blue-500 to-blue-600', text: 'text-blue-400', badge: 'bg-blue-500/20 text-blue-300', glow: 'shadow-blue-500/30' },
  purple: { bg: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', icon: 'from-purple-500 to-purple-600', text: 'text-purple-400', badge: 'bg-purple-500/20 text-purple-300', glow: 'shadow-purple-500/30' },
  orange: { bg: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40', icon: 'from-orange-500 to-orange-600', text: 'text-orange-400', badge: 'bg-orange-500/20 text-orange-300', glow: 'shadow-orange-500/30' },
  red: { bg: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', icon: 'from-red-500 to-red-600', text: 'text-red-400', badge: 'bg-red-500/20 text-red-300', glow: 'shadow-red-500/30' },
  cyan: { bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/40', icon: 'from-cyan-500 to-cyan-600', text: 'text-cyan-400', badge: 'bg-cyan-500/20 text-cyan-300', glow: 'shadow-cyan-500/30' },
  pink: { bg: 'from-pink-500/20 to-pink-600/10', border: 'border-pink-500/40', icon: 'from-pink-500 to-pink-600', text: 'text-pink-400', badge: 'bg-pink-500/20 text-pink-300', glow: 'shadow-pink-500/30' },
  green: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: 'from-green-500 to-green-600', text: 'text-green-400', badge: 'bg-green-500/20 text-green-300', glow: 'shadow-green-500/30' }
};

const Topluluk = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedRehber, setSelectedRehber] = useState(null);
  const [activeTab, setActiveTab] = useState('illegal');
  const [rehberKategori, setRehberKategori] = useState('all');
  const [rehberSearch, setRehberSearch] = useState('');

  // Modal kontrolü
  const openImageModal = (index) => setSelectedImage(index);
  const closeImageModal = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % galeriFotograflar.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + galeriFotograflar.length) % galeriFotograflar.length);

  const openVideoModal = (index) => setSelectedVideo(index);
  const closeVideoModal = () => setSelectedVideo(null);
  const nextVideo = () => setSelectedVideo((prev) => (prev + 1) % galeriVideolar.length);
  const prevVideo = () => setSelectedVideo((prev) => (prev - 1 + galeriVideolar.length) % galeriVideolar.length);

  const openRehberModal = (video) => setSelectedRehber(video);
  const closeRehberModal = () => setSelectedRehber(null);

  // Rehber filtreleme
  const filteredRehberler = videoRehberler.filter(rehber => {
    const matchKategori = rehberKategori === 'all' || rehber.kategori === rehberKategori;
    const matchSearch = rehber.baslik.toLowerCase().includes(rehberSearch.toLowerCase()) ||
                       rehber.aciklama.toLowerCase().includes(rehberSearch.toLowerCase());
    return matchKategori && matchSearch;
  });

  const kategoriler = [...new Set(videoRehberler.map(r => r.kategori))];

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage !== null) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeImageModal();
      }
      if (selectedVideo !== null) {
        if (e.key === 'ArrowRight') nextVideo();
        if (e.key === 'ArrowLeft') prevVideo();
        if (e.key === 'Escape') closeVideoModal();
      }
      if (selectedRehber !== null && e.key === 'Escape') {
        closeRehberModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedVideo, selectedRehber]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/20 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeImageModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-violet-500/50 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-violet-500/50 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative">
            <img src={galeriFotograflar[selectedImage].url} alt={galeriFotograflar[selectedImage].title} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-bold">{galeriFotograflar[selectedImage].title}</h3>
              <p className="text-gray-300">{galeriFotograflar[selectedImage].description}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selectedImage + 1} / {galeriFotograflar.length}</div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeVideoModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <button onClick={prevVideo} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextVideo} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="w-full max-w-4xl">
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
              <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${galeriVideolar[selectedVideo].videoId}?autoplay=1`} title={galeriVideolar[selectedVideo].title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-bold">{galeriVideolar[selectedVideo].title}</h3>
              <p className="text-gray-300">{galeriVideolar[selectedVideo].description}</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">{selectedVideo + 1} / {galeriVideolar.length}</div>
        </div>
      )}

      {/* Rehber Video Modal */}
      {selectedRehber !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button onClick={closeRehberModal} className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl">
            <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full" 
                src={`https://www.youtube.com/embed/${selectedRehber.videoId}?autoplay=1`} 
                title={selectedRehber.baslik} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
            <div className="mt-6 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${renkSiniflari[selectedRehber.renk]?.icon || 'from-purple-500 to-violet-500'} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 ${renkSiniflari[selectedRehber.renk]?.badge || 'bg-purple-500/20 text-purple-300'} rounded-full text-xs font-bold`}>
                      {selectedRehber.kategori}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {selectedRehber.sure}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> {selectedRehber.izlenme}
                    </span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">{selectedRehber.baslik}</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedRehber.aciklama}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors mb-8 group">
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Ana Sayfaya Dön</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-violet-500/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              FED:V Topluluk
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İpuçları, rehberler, galeri ve daha fazlası
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('illegal')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'illegal'
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30'
                : 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20'
            }`}
          >
            <Skull className="w-5 h-5" />
            <span>Illegal İpucu</span>
          </button>
          <button
            onClick={() => setActiveTab('rehber')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'rehber'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Rehber</span>
          </button>
          <button
            onClick={() => setActiveTab('kareler')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'kareler'
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-violet-500/30'
                : 'bg-violet-500/10 text-violet-400 border border-violet-500/30 hover:bg-violet-500/20'
            }`}
          >
            <Image className="w-5 h-5" />
            <span>Oyundan Kareler</span>
          </button>
          <button
            onClick={() => setActiveTab('klipler')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'klipler'
                ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/30'
                : 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 hover:bg-fuchsia-500/20'
            }`}
          >
            <Film className="w-5 h-5" />
            <span>Oyundan Kesitler</span>
          </button>
        </div>

        {/* ==================== ILLEGAL İPUCU ==================== */}
        {activeTab === 'illegal' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
                <Lock className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm font-medium">Gizli Bilgiler</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  🔒 ILLEGAL İPUÇLARI
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Bu bilgiler sadece güvenilir kişilerle paylaşılmalı. Dikkatli ol, her köşede tehlike var...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {illegalIpuclari.map((ipucu) => (
                <div key={ipucu.id} className="group relative bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img src={ipucu.resim} alt={ipucu.baslik} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-75 group-hover:brightness-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute top-3 right-3 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-xl font-bold">{ipucu.baslik}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{ipucu.aciklama}</p>
                    <div className="flex items-center gap-2 bg-black/40 border border-red-500/30 rounded-lg px-3 py-2">
                      <Skull className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 text-xs font-medium">{ipucu.ipucu}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">⚠️ Uyarı</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bu ipuçları tamamen roleplay amaçlıdır. Bilgileri sadece güvendiğiniz kişilerle paylaşın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== VİDEO REHBER ==================== */}
        {activeTab === 'rehber' && (
          <div>
            {/* Section Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Video Rehberler</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  🎬 OYUN REHBERLERİ
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Sunucudaki tüm sistemleri öğrenmek için video rehberlerimizi izle!
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Rehber ara..."
                  value={rehberSearch}
                  onChange={(e) => setRehberSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select
                  value={rehberKategori}
                  onChange={(e) => setRehberKategori(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer min-w-[180px]"
                >
                  <option value="all">Tüm Kategoriler</option>
                  {kategoriler.map(kat => (
                    <option key={kat} value={kat}>{kat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mb-8 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>{filteredRehberler.length} Video</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{kategoriler.length} Kategori</span>
              </div>
            </div>

            {/* Video Grid - Netflix Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRehberler.map((rehber) => {
                const renk = renkSiniflari[rehber.renk] || renkSiniflari.emerald;
                
                return (
                  <div
                    key={rehber.id}
                    onClick={() => openRehberModal(rehber)}
                    className={`group relative bg-gradient-to-br ${renk.bg} border ${renk.border} rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-2xl ${renk.glow} transition-all duration-500`}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${rehber.videoId}/maxresdefault.jpg`}
                        alt={rehber.baslik}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${renk.icon} rounded-full flex items-center justify-center shadow-xl ${renk.glow} transform group-hover:scale-110 transition-all duration-300 opacity-80 group-hover:opacity-100`}>
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">{rehber.sure}</span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 ${renk.badge} rounded-full text-xs font-bold backdrop-blur-sm`}>
                          {rehber.kategori}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className={`text-white text-lg font-bold mb-2 group-hover:${renk.text} transition-colors line-clamp-1`}>
                        {rehber.baslik}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {rehber.aciklama}
                      </p>

                      {/* Footer Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-500 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" />
                            {rehber.izlenme}
                          </span>
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-3.5 h-3.5" />
                            98%
                          </span>
                        </div>
                        <div className={`${renk.text} text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all`}>
                          <span>İzle</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t ${renk.bg}`} />
                  </div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredRehberler.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-400">Arama kriterlerinize uygun rehber bulunamadı.</p>
              </div>
            )}

            {/* Help Box */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Rehber Öneriniz mi Var?</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Hangi konuda rehber görmek istiyorsanız Discord'dan bize bildirin!
                </p>
                <a
                  href="https://discord.gg/fedvsocial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-emerald-500/30"
                >
                  <HelpCircle className="w-5 h-5" />
                  Öneri Gönder
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================== OYUNDAN KARELER ==================== */}
        {activeTab === 'kareler' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-4">
                <Camera className="w-4 h-4 text-violet-400" />
                <span className="text-violet-400 text-sm font-medium">Galeri</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  📸 OYUNDAN KARELER
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Topluluğumuzun en güzel anları ve unutulmaz kareleri
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriFotograflar.map((foto, index) => (
                <div key={foto.id} className="group bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer" onClick={() => openImageModal(index)}>
                  <div className="relative aspect-video">
                    <img src={foto.url} alt={foto.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/50 transform group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-violet-400 transition-colors">{foto.title}</h3>
                    <p className="text-gray-400 text-sm">{foto.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== OYUNDAN KESİTLER ==================== */}
        {activeTab === 'klipler' && (
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-full mb-4">
                <Video className="w-4 h-4 text-fuchsia-400" />
                <span className="text-fuchsia-400 text-sm font-medium">Videolar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  🎬 OYUNDAN KESİTLER
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                En heyecanlı ve eğlenceli roleplay anları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galeriVideolar.map((video, index) => (
                <div key={video.id} onClick={() => openVideoModal(index)} className="group relative rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-fuchsia-500/50 transition-all duration-300 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5">
                  <div className="relative aspect-video">
                    <img src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-fuchsia-500/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-fuchsia-500/50">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-fuchsia-400 transition-colors">{video.title}</h3>
                    <p className="text-gray-400 text-sm">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">İçerik Paylaşmak İster misin?</h3>
            <p className="text-gray-400 mb-6">
              Kendi roleplay anlarını ve kliplerini toplulukla paylaşmak için Discord sunucumuza katıl!
            </p>
            <a
              href="https://discord.gg/fedvsocial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
            >
              Discord'a Katıl
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topluluk;
