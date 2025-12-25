import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowLeft, Send, CheckCircle, User, Star, FileText, ThumbsUp, Sparkles } from 'lucide-react';

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1451881950120902656/WX0bBolvmBtSwfpjzM_ZD--DrklDM2RFplv1nn75NvaZSu-4AnBgAFW8toOkJ94lbEDe';

const YetkiliFeedback = () => {
  const [formData, setFormData] = useState({
    isim: '',
    discordId: '',
    kategori: '',
    puan: 0,
    baslik: '',
    mesaj: '',
    oneri: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStarClick = (value) => {
    setFormData({ ...formData, puan: value });
  };

  const getStarEmoji = (puan) => {
    return '⭐'.repeat(puan) + '☆'.repeat(5 - puan);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const embed = {
        embeds: [{
          title: '💬 Yeni Geri Bildirim',
          color: 0x8B5CF6,
          fields: [
            { name: '👤 Gönderen', value: formData.isim || 'Anonim', inline: true },
            { name: '🎮 Discord ID', value: formData.discordId || 'Belirtilmedi', inline: true },
            { name: '📁 Kategori', value: formData.kategori, inline: true },
            { name: '⭐ Puan', value: formData.puan > 0 ? getStarEmoji(formData.puan) + ` (${formData.puan}/5)` : 'Verilmedi', inline: true },
            { name: '📋 Konu', value: formData.baslik, inline: false },
            { name: '📝 Mesaj', value: formData.mesaj, inline: false },
            { name: '💡 Öneri', value: formData.oneri || 'Yok', inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'FED:V Feedback Sistemi' }
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
      setError('Geri bildirim gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl shadow-2xl shadow-violet-500/40">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Geri Bildiriminiz Alındı!</h1>
          <p className="text-gray-400 mb-6">Değerli geri bildiriminiz için teşekkür ederiz. Önerileriniz bizim için çok önemli!</p>
          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-6">
            <p className="text-violet-400 text-sm">Geri bildirimler düzenli olarak değerlendirilmektedir.</p>
          </div>
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold rounded-xl hover:scale-105 transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-2xl mx-auto">
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-xl text-violet-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Yönetime Dön</span>
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl shadow-xl shadow-violet-500/30">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                GERİ BİLDİRİM FORMU
              </span>
            </h1>
            <p className="text-gray-400 text-sm">Sunucu ve yetkililer hakkında geri bildirimlerinizi paylaşın</p>
          </div>

          <div className="mb-6 bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-violet-400 font-semibold mb-1">Neler Paylaşabilirsiniz?</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Sunucu hakkında genel düşünceler</li>
                  <li>• Yeni özellik önerileri</li>
                  <li>• Yetkili performans değerlendirmesi</li>
                  <li>• İyileştirme fikirleri</li>
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
                  <User className="w-4 h-4 text-violet-400" />
                  İsim / Rumuz (Opsiyonel)
                </label>
                <input
                  type="text"
                  name="isim"
                  value={formData.isim}
                  onChange={handleChange}
                  placeholder="Anonim bırakabilirsiniz"
                  className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                  Discord ID (Opsiyonel)
                </label>
                <input
                  type="text"
                  name="discordId"
                  value={formData.discordId}
                  onChange={handleChange}
                  placeholder="Cevap isterseniz doldurun"
                  className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-violet-400" />
                Geri Bildirim Kategorisi *
              </label>
              <select
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white focus:outline-none focus:border-violet-500 transition-colors"
              >
                <option value="" className="bg-gray-900">Kategori Seçin</option>
                <option value="Sunucu Genel" className="bg-gray-900">Sunucu Genel</option>
                <option value="Yetkili Performansı" className="bg-gray-900">Yetkili Performansı</option>
                <option value="Özellik Önerisi" className="bg-gray-900">Özellik Önerisi</option>
                <option value="İyileştirme Fikri" className="bg-gray-900">İyileştirme Fikri</option>
                <option value="Teşekkür / Övgü" className="bg-gray-900">Teşekkür / Övgü</option>
                <option value="Diğer" className="bg-gray-900">Diğer</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
                <Star className="w-4 h-4 text-violet-400" />
                Genel Memnuniyet Puanı
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 transition-colors ${
                        star <= (hoveredStar || formData.puan)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-gray-400 text-sm">
                  {formData.puan ? `${formData.puan}/5` : 'Puan seçin'}
                </span>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-violet-400" />
                Konu Başlığı *
              </label>
              <input
                type="text"
                name="baslik"
                value={formData.baslik}
                onChange={handleChange}
                required
                placeholder="Geri bildiriminizi özetleyen kısa bir başlık"
                className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                Geri Bildiriminiz *
              </label>
              <textarea
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Düşüncelerinizi, deneyimlerinizi detaylı bir şekilde paylaşın..."
                className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <ThumbsUp className="w-4 h-4 text-violet-400" />
                Öneriniz (Opsiyonel)
              </label>
              <textarea
                name="oneri"
                value={formData.oneri}
                onChange={handleChange}
                rows="3"
                placeholder="Bir çözüm öneriniz varsa paylaşabilirsiniz..."
                className="w-full px-4 py-3 bg-black/50 border border-violet-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-lg rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Geri Bildirimi Gönder
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YetkiliFeedback;
