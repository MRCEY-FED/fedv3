import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, Star, DollarSign, CreditCard, ShoppingBag, X, CheckCircle, ArrowLeft, Eye } from 'lucide-react';

const VipKisisel = () => {
  const [selectedUrun, setSelectedUrun] = useState(null);

  const categoryInfo = {
    name: 'VİP KİŞİSEL',
    aciklama: 'Lifetime VIP ile özel ayrıcalıklar kazanın.',
    color: 'purple'
  };

  const urunler = [
    {
      id: 1,
      isim: "Özel Telefon Numarası",
      fiyat: "300₺",
      eskiFiyat: "600₺",
      aciklama: "Tek seferlik ödeme - Özel Telefon Nurmarsı ile insanlar sizi daha kolay bulabilir.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/phone.png",
      indirim: "50%",
      yildiz: 1,
      ozellikler: ["Tek seferlik ödeme", "VIP Rozeti", "Özel Tel No"]
    },    
    {
      id: 2,
      isim: "Özel Plaka",
      fiyat: "200₺",
      eskiFiyat: "400₺",
      aciklama: "Tek seferlik ödeme - Araçlarınıza özel plaka yaptırarak şehirde gizeminizi arttırın.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/ChatGPT%20Image%2025%20Ara%202025%2012_41_02.png",
      indirim: "50%",
      yildiz: 1,
      ozellikler: ["Tek seferlik ödeme", "VIP Rozeti", "Özel Plaka"]
    },
    {
      id: 3,
      isim: "Özel İmzalı Araç",
      fiyat: "4000₺",
      eskiFiyat: "8000₺",
      aciklama: "Şehirde sadece 1 adet olmakla birlikte kurucular tarafından imzalanmış özel araç.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/cdd8ce-20211226231806_1.jpg",
      indirim: "50%",
      yildiz: 5,
      ozellikler: ["Tek seferlik ödeme"]
    },
    {
      id: 4,
      isim: "Özel Ev - Malikane",
      fiyat: "3000₺",
      eskiFiyat: "6000₺",
      aciklama: "İstediğiniz bir bölgede size özel içi açılabilir. Ev veya Malikane sahibi olun. partilerinizi ve toplantılarınızı burada yapın.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/cea3d7c1c1c06d269528c6bb2904a4f854387149.jpeg",
      indirim: "50%",
      yildiz: 5,
      ozellikler: ["Tek seferlik ödeme", "Kişiye Özel Mega Depo", "Garaj", "7/24 Güvellik Kamerası", "İçini ve bahçesini düzenleyebilirsiniz.", "Kıyafet Dolabı", "Özel Permli Şifreli Kapılar"]
    },
    {
      id: 5,
      isim: "Özel Uyuşturcu Adası",
      fiyat: "3000₺",
      eskiFiyat: "6000₺",
      aciklama: "İstediğiniz bir bölgede 4 tarafı sularla çevrili özel uyuşturucu adası burada istediğiniz bir maddeyi hiç bir riske girmeden üretebilirsiniz.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20130159.png",
      indirim: "50%",
      yildiz: 4,
      ozellikler: ["Tek seferlik ödeme", "Kişiye Özel Mega Depo", "İçini ve bahçesini düzenleyebilirsiniz.", "Özel Permli Şifreli Kapılar"]
    },
    {
      id: 6,
      isim: "Özel Methlab",
      fiyat: "4000₺",
      eskiFiyat: "8000₺",
      aciklama: "İstediğiniz bir bölgede bulunan kapısı kilitli özel bir meth laboratuvarı hiç bir riske girmeden meth üretebilirsiniz.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/MethamphetamineLab-GTAOe-InProduction.webp",
      indirim: "50%",
      yildiz: 4,
      ozellikler: ["Tek seferlik ödeme", "Kişiye Özel Mega Depo", "İçini ve bahçesini düzenleyebilirsiniz.", "Özel Permli Şifreli Kapılar"]
    },    
    {
      id: 7,
      isim: "Özel Bunker Base",
      fiyat: "5000₺",
      eskiFiyat: "10.000₺",
      aciklama: "Yerin altında gizli girişli askeri statüsünde yeraltı baseleri ile gizli işler çevirebilirsiniz.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/8ef7ed-1.webp",
      indirim: "50%",
      yildiz: 6,
      ozellikler: ["Tek seferlik ödeme", "Kişiye Özel Mega Depo", "Garaj", "7/24 Güvellik Kamerası", "İçini düzenleyebilirsiniz.", "Kıyafet Dolabı", "Özel Permli Şifreli Kapılar"]
    },
    {
      id: 8,
      isim: "Özel Tabela - Anıt - Mezar Taşı",
      fiyat: "500₺",
      eskiFiyat: "1000₺",
      aciklama: "Sevdiklerinize veya kendinize özel mezar taşı veya anıtlar yaptırabilirsiniz. ekibinizin veya gurubunuzun reklamı olur.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/d022da4f-788e-4f83-8b13-b32fac4a2093.png",
      indirim: "50%",
      yildiz: 3,
      ozellikler: ["Tek seferlik ödeme"]
    },
    {
      id: 9,
      isim: "Özel Karakter Pedi",
      fiyat: "1000₺",
      eskiFiyat: "2000₺",
      aciklama: "Rollerinizi şekillendirebileceğiniz çeşitli karakterler sizleri bekliyor.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202025-12-25%20134304.png",
      indirim: "50%",
      yildiz: 3,
      ozellikler: ["Tek seferlik ödeme"]
    },      
    {
      id: 10,
      isim: "Özel Kıyafet - Forma",
      fiyat: "2000₺",
      eskiFiyat: "4000₺",
      aciklama: "Oluşumunuza özel formalar, kolyeler vb. kıyafetler yaptırarak şehirde reklamınızı yapın.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/f2b909e2-3149-4171-a1d3-6b6ebab205fe.png",
      indirim: "50%",
      yildiz: 3,
      ozellikler: ["Tek seferlik ödeme"]
    },
    {
      id: 11,
      isim: "Özel Grafiti Spray",
      fiyat: "800₺",
      eskiFiyat: "1600₺",
      aciklama: "Oluşumunuza özel grafiti yaptırıp tüm sokaklara adınızı yazabilirsiniz.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/31357454-0e9e-4277-ab95-628d739aa975.png",
      indirim: "50%",
      yildiz: 3,
      ozellikler: ["Tek seferlik ödeme"]
    }, 
    {
      id: 12,
      isim: "Özel Karakter Boyu",
      fiyat: "2000₺",
      eskiFiyat: "4000₺",
      aciklama: "Karakterinize özel ped boyu.",
      resim: "https://694360ba73fe9fd20180e80e.imgix.net/8cb88eaa-69aa-4e7c-b38a-048adefe477a.png",
      indirim: "50%",
      yildiz: 3,
      ozellikler: ["Tek seferlik ödeme"]
    }             
  ];

  const colorClasses = {
    bg: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/40',
    text: 'text-purple-400',
    button: 'from-purple-500 to-violet-500'
  };

  const UrunModal = ({ urun, onClose }) => {
    if (!urun) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className={`relative w-full max-w-2xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-900 to-black border ${colorClasses.border} rounded-2xl overflow-hidden shadow-2xl`} onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white"><X className="w-5 h-5" /></button>
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="relative h-56 md:h-72">
              <img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 rounded-lg"><span className="text-white text-sm font-bold">-{urun.indirim}</span></div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{urun.isim}</h2>
                <div className="flex items-center gap-1">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${colorClasses.text} fill-current`} />))}</div>
              </div>
              <p className="text-gray-300 text-lg mb-6">{urun.aciklama}</p>
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg mb-3">Paket İçeriği</h3>
                <div className="grid grid-cols-2 gap-2">
                  {urun.ozellikler.map((ozellik, idx) => (
                    <div key={idx} className={`flex items-center gap-2 p-2 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-lg`}>
                      <CheckCircle className={`w-4 h-4 ${colorClasses.text}`} /><span className="text-gray-300 text-sm">{ozellik}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-xl p-4 mb-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 text-lg line-through">{urun.eskiFiyat}</span>
                    <div className="flex items-center gap-2"><CreditCard className={`w-6 h-6 ${colorClasses.text}`} /><span className="text-white text-3xl font-black">{urun.fiyat}</span></div>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${colorClasses.button} rounded-lg`}><span className="text-white font-bold">{urun.indirim} İndirim</span></div>
                </div>
              </div>
              <a href="https://discord.gg/fedvsocial" target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${colorClasses.button} text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg`}>
                <ShoppingBag className="w-6 h-6" /><span>Satın Al</span>
              </a>
              <p className="text-center text-gray-500 text-sm mt-3">Satın almak için Discord sunucumuza yönlendirileceksiniz</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {selectedUrun && <UrunModal urun={selectedUrun} onClose={() => setSelectedUrun(null)} />}
      
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          <Link to="/vip-store" className={`inline-flex items-center gap-2 px-4 py-2 mb-8 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl ${colorClasses.text} font-medium transition-all duration-300`}>
            <ArrowLeft className="w-4 h-4" /><span>VIP Mağaza'ya Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br ${colorClasses.button} rounded-2xl shadow-2xl shadow-purple-500/40`}>
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">{categoryInfo.name}</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">{categoryInfo.aciklama}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urunler.map((urun) => (
              <div key={urun.id} onClick={() => setSelectedUrun(urun)} className={`group bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer hover:scale-[1.02]`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={urun.resim} alt={urun.isim} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-red-500 rounded-lg"><span className="text-white text-xs font-bold">-{urun.indirim}</span></div>
                  <div className="absolute bottom-3 left-3"><div className="flex items-center gap-2"><CreditCard className={`w-5 h-5 ${colorClasses.text}`} /><span className="text-white text-xl font-black">{urun.fiyat}</span></div></div>
                </div>
                <div className="p-4">
                  <h3 className={`text-white font-bold text-lg mb-1 group-hover:${colorClasses.text} transition-colors`}>{urun.isim}</h3>
                  <div className="flex items-center gap-1 mb-2">{[...Array(urun.yildiz)].map((_, i) => (<Star key={i} className={`w-4 h-4 ${colorClasses.text} fill-current`} />))}</div>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{urun.aciklama}</p>
                  <button className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${colorClasses.button} text-white font-semibold rounded-xl transition-all`}>
                    <Eye className="w-4 h-4" /><span>Detayları Gör</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VipKisisel;
