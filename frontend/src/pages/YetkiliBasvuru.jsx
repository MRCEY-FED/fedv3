import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowLeft, Send, CheckCircle, User, Mail, FileText, Clock, Calendar, MessageSquare, AlertCircle } from 'lucide-react';

const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1451882134829662279/uvKK4EzqhIhfmC5NKxkkpNMh9pWjtvmTfN_Vwe5sQ4ID7YIfFwS4rTKXigM9EitonItT';

const YetkiliBasvuru = () => {
  const [formData, setFormData] = useState({
    isim: '',
    discordId: '',
    email: '',
    yas: '',
    oyunSuresi: '',
    oncekiDeneyim: '',
    neden: '',
    hakkinda: '',
    uygunluk: ''
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
          title: '📋 Yeni Yetkili Başvurusu',
          color: 0x10B981,
          fields: [
            { name: '👤 İsim / Rumuz', value: formData.isim, inline: true },
            { name: '🎮 Discord ID', value: formData.discordId, inline: true },
            { name: '📧 E-posta', value: formData.email, inline: true },
            { name: '🎂 Yaş', value: formData.yas, inline: true },
            { name: '⏰ Oyun Süresi', value: `${formData.oyunSuresi} saat`, inline: true },
            { name: '📅 Haftalık Uygunluk', value: `${formData.uygunluk} saat`, inline: true },
            { name: '📝 Önceki Deneyim', value: formData.oncekiDeneyim || 'Belirtilmedi', inline: false },
            { name: '❓ Neden Yetkili Olmak İstiyor?', value: formData.neden, inline: false },
            { name: '💬 Hakkında', value: formData.hakkinda || 'Belirtilmedi', inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: 'FED:V Yetkili Başvuru Sistemi' }
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
      setError('Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl shadow-emerald-500/40">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Başvurunuz Alındı!</h1>
          <p className="text-gray-400 mb-6">Başvurunuz başarıyla gönderildi. En kısa sürede Discord üzerinden size dönüş yapılacaktır.</p>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6">
            <p className="text-emerald-400 text-sm">Tahmini cevap süresi: <span className="font-bold">3-5 gün</span></p>
          </div>
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all"
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
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <div className="relative max-w-2xl mx-auto">
          <Link
            to="/yonetim"
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Yönetime Dön</span>
          </Link>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-xl shadow-emerald-500/30">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-2">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                YETKİLİ BAŞVURU FORMU
              </span>
            </h1>
            <p className="text-gray-400 text-sm">FED:V ailesine katılmak için formu eksiksiz doldurun</p>
          </div>

          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-emerald-400 font-semibold mb-1">Başvuru Şartları:</p>
                <ul className="text-gray-400 space-y-1">
                  <li>• Minimum 18 yaşında olmak</li>
                  <li>• Discord hesabına sahip olmak</li>
                  <li>• En az 50 saat oyun süresi</li>
                  <li>• Aktif ban kaydı bulunmamak</li>
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
                  <User className="w-4 h-4 text-emerald-400" />
                  İsim / Rumuz *
                </label>
                <input
                  type="text"
                  name="isim"
                  value={formData.isim}
                  onChange={handleChange}
                  required
                  placeholder="Adınız veya rumuzunuz"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Discord ID *
                </label>
                <input
                  type="text"
                  name="discordId"
                  value={formData.discordId}
                  onChange={handleChange}
                  required
                  placeholder="örn: kullanici#1234"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  E-posta *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  Yaşınız *
                </label>
                <input
                  type="number"
                  name="yas"
                  value={formData.yas}
                  onChange={handleChange}
                  required
                  min="18"
                  placeholder="Yaşınız (min 18)"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Oyun Süresi (Saat) *
                </label>
                <input
                  type="number"
                  name="oyunSuresi"
                  value={formData.oyunSuresi}
                  onChange={handleChange}
                  required
                  min="50"
                  placeholder="Toplam oyun saatiniz"
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  Haftalık Uygunluk *
                </label>
                <select
                  name="uygunluk"
                  value={formData.uygunluk}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white focus:outline-none focus:border-emerald-500 transition-colors"
                >
                  <option value="" className="bg-gray-900">Seçiniz</option>
                  <option value="10-20" className="bg-gray-900">10-20 saat</option>
                  <option value="20-30" className="bg-gray-900">20-30 saat</option>
                  <option value="30-40" className="bg-gray-900">30-40 saat</option>
                  <option value="40+" className="bg-gray-900">40+ saat</option>
                </select>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                Önceki Yetkililik Deneyimi
              </label>
              <textarea
                name="oncekiDeneyim"
                value={formData.oncekiDeneyim}
                onChange={handleChange}
                rows="3"
                placeholder="Daha önce başka sunucularda yetkili oldunuz mu? Varsa detaylandırın..."
                className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                Neden Yetkili Olmak İstiyorsunuz? *
              </label>
              <textarea
                name="neden"
                value={formData.neden}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Motivasyonunuzu ve hedeflerinizi açıklayın..."
                className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <User className="w-4 h-4 text-emerald-400" />
                Kendinizi Kısaca Tanıtın
              </label>
              <textarea
                name="hakkinda"
                value={formData.hakkinda}
                onChange={handleChange}
                rows="3"
                placeholder="Hobileriniz, ilgi alanlarınız..."
                className="w-full px-4 py-3 bg-black/50 border border-emerald-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Başvuruyu Gönder
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YetkiliBasvuru;
