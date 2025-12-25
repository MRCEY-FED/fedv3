import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Send, CheckCircle, User, MessageSquare, FileText, Shield, Upload } from 'lucide-react';

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1451882045231071286/EII_48ipRS-ZDmOrzP1Wlyk8U2LvsXWfmw2-T8_Sduz_4NvH-p3HftxYNBqNEtctbkTF';

const YetkiliSikayet = () => {
  const [formData, setFormData] = useState({
    isim: '',
    discordId: '',
    yetkiliIsmi: '',
    tarih: '',
    kategori: '',
    aciklama: '',
    kanit: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const embed = {
        embeds: [{
          title: '🚨 Yeni Yetkili Şikayeti',
          color: 0xEF4444,
          fields: [
            { name: '👤 Şikayet Eden', value: formData.isim, inline: true },
            { name: '🎮 Discord ID', value: formData.discordId, inline: true },
            { name: '⚠️ Şikayet Edilen Yetkili', value: formData.yetkiliIsmi, inline: true },
            { name: '📅 Olay Tarihi', value: formData.tarih, inline: true },
            { name: '📁 Kategori', value: formData.kategori, inline: true },
            { name: '📝 Açıklama', value: formData.aciklama, inline: false },
            { name: '🔗 Kanıt Linki', value: formData.kanit || 'Eklenmedi', inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'FED:V Şikayet Sistemi' }
        }]
      };

      const response = await fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embed)
      });
      
      if (!response.ok) throw new Error('Gönderilemedi');
      
      setSubmitted(true);
    } catch (err) {
      setError('Şikayet gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-2xl shadow-red-500/40">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Şikayetiniz Alındı!</h1>
          <p className="text-gray-400 mb-6">Şikayetiniz gizlilik içinde incelemeye alınacaktır. Sonuç Discord üzerinden bildirilecektir.</p>
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
            <p className="text-red-400 text-sm">Tahmini inceleme süresi: <span className="font-bold">1-3 gün</span></p>
          </div>
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-xl hover:scale-105 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Yönetime Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.15),transparent_50%)]" />
        
        <div className="relative max-w-2xl mx-auto">
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Yönetime Dön</span>
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-xl shadow-red-500/30">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                YETKİLİ ŞİKAYET FORMU
              </span>
            </h1>
            <p className="text-gray-400 text-sm">Bir yetkili hakkındaki şikayetinizi gizlilik içinde iletin</p>
          </div>

          <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-red-400 font-semibold mb-1">Önemli Bilgilendirme:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Şikayetleriniz tamamen gizli tutulur</li>
                  <li>• Asılsız şikayetler işleme alınmaz</li>
                  <li>• Mümkünse kanıt (video/screenshot) ekleyin</li>
                  <li>• Detaylı açıklama daha hızlı çözüm sağlar</li>
                </ul>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 text-red-400" />
                  Sizin İsminiz / Rumuz *
                </label>
                <input
                  type="text"
                  name="isim"
                  value={formData.isim}
                  onChange={handleChange}
                  required
                  placeholder="Adınız veya rumuzunuz"
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-red-400" />
                  Discord ID'niz *
                </label>
                <input
                  type="text"
                  name="discordId"
                  value={formData.discordId}
                  onChange={handleChange}
                  required
                  placeholder="örn: kullanici#1234"
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 text-red-400" />
                  Şikayet Edilen Yetkili *
                </label>
                <input
                  type="text"
                  name="yetkiliIsmi"
                  value={formData.yetkiliIsmi}
                  onChange={handleChange}
                  required
                  placeholder="Yetkili ismi veya Discord ID"
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <FileText className="w-4 h-4 text-red-400" />
                  Olay Tarihi *
                </label>
                <input
                  type="date"
                  name="tarih"
                  value={formData.tarih}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                Şikayet Kategorisi *
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="" className="bg-gray-900">Kategori Seçin</option>
                <option value="Kötü Davranış / Hakaret" className="bg-gray-900">Kötü Davranış / Hakaret</option>
                <option value="Yetkiyi Kötüye Kullanma" className="bg-gray-900">Yetkiyi Kötüye Kullanma</option>
                <option value="Taraf Tutma" className="bg-gray-900">Taraf Tutma</option>
                <option value="Haksız Ceza" className="bg-gray-900">Haksız Ceza</option>
                <option value="İletişim Eksikliği" className="bg-gray-900">İletişim Eksikliği</option>
                <option value="Diğer" className="bg-gray-900">Diğer</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-red-400" />
                Olay Açıklaması *
              </label>
              <textarea
                name="aciklama"
                value={formData.aciklama}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Olayı detaylı bir şekilde açıklayın. Ne oldu, nasıl oldu, kim vardı..."
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Upload className="w-4 h-4 text-red-400" />
                Kanıt Linki (Opsiyonel)
              </label>
              <input
                type="url"
                name="kanit"
                value={formData.kanit}
                onChange={handleChange}
                placeholder="Video veya screenshot linki (YouTube, Imgur vb.)"
                className="w-full px-4 py-3 bg-black/50 border border-red-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <p className="text-gray-500 text-xs mt-1">Kanıtlarınızı YouTube, Imgur, Google Drive gibi platformlara yükleyip linkini paylaşabilirsiniz.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Şikayeti Gönder
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YetkiliSikayet;
