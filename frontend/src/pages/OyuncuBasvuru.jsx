import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, MessageSquare, Calendar, Clock, FileText, Send, CheckCircle, AlertCircle, ChevronLeft, Gamepad2, Users, Shield } from 'lucide-react';

const OyuncuBasvuru = () => {
  const [formData, setFormData] = useState({
    isim: '',
    discordId: '',
    email: '',
    yas: '',
    rpDeneyim: '',
    oncekiSunucular: '',
    karakterHikayesi: '',
    neden: '',
    uygunluk: '',
    kurallarKabul: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/oyuncu-basvuru`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          yas: parseInt(formData.yas),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          isim: '',
          discordId: '',
          email: '',
          yas: '',
          rpDeneyim: '',
          oncekiSunucular: '',
          karakterHikayesi: '',
          neden: '',
          uygunluk: '',
          kurallarKabul: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/roster" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Geri Dön</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/30">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              FED:V Oyuncu Başvuru Formu
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            FED:V ailesine katılmak için aşağıdaki formu eksiksiz doldurun. 
            Başvurunuz yönetim ekibimiz tarafından değerlendirilecektir.
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-green-400 font-semibold text-lg mb-1">Başvurunuz Alındı!</h3>
              <p className="text-gray-400">
                Başvurunuz başarıyla gönderildi. En kısa sürede Discord üzerinden sizinle iletişime geçeceğiz.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-400 font-semibold text-lg mb-1">Bir Hata Oluştu!</h3>
              <p className="text-gray-400">
                Başvurunuz gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Info Section */}
          <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-green-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Kişisel Bilgiler</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* İsim */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  İsim / Rumuz *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="isim"
                    value={formData.isim}
                    onChange={handleChange}
                    required
                    placeholder="İsminizi girin"
                    className="w-full bg-black/40 border border-green-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Discord ID */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Discord ID *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="discordId"
                    value={formData.discordId}
                    onChange={handleChange}
                    required
                    placeholder="örn: kullanici#1234"
                    className="w-full bg-black/40 border border-green-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  E-posta Adresi *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ornek@email.com"
                    className="w-full bg-black/40 border border-green-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Yaş */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Yaşınız *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="number"
                    name="yas"
                    value={formData.yas}
                    onChange={handleChange}
                    required
                    min="13"
                    max="99"
                    placeholder="Yaşınızı girin"
                    className="w-full bg-black/40 border border-green-500/30 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500/60 focus:ring-2 focus:ring-green-500/20 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RP Experience Section */}
          <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Roleplay Deneyimi</h2>
            </div>

            <div className="space-y-6">
              {/* RP Deneyim */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Roleplay Deneyiminiz *
                </label>
                <select
                  name="rpDeneyim"
                  value={formData.rpDeneyim}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-emerald-500/30 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Seçiniz</option>
                  <option value="yeni" className="bg-gray-900">Yeniyim (0-6 ay)</option>
                  <option value="orta" className="bg-gray-900">Orta Seviye (6 ay - 2 yıl)</option>
                  <option value="deneyimli" className="bg-gray-900">Deneyimli (2+ yıl)</option>
                  <option value="profesyonel" className="bg-gray-900">Profesyonel (5+ yıl)</option>
                </select>
              </div>

              {/* Önceki Sunucular */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Daha Önce Oynadığınız RP Sunucuları
                </label>
                <textarea
                  name="oncekiSunucular"
                  value={formData.oncekiSunucular}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Daha önce oynadığınız sunucuları yazın (varsa)"
                  className="w-full bg-black/40 border border-emerald-500/30 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                />
              </div>

              {/* Karakter Hikayesi */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Karakter Hikayeniz *
                </label>
                <textarea
                  name="karakterHikayesi"
                  value={formData.karakterHikayesi}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Sunucuda oynayacağınız karakterinizin hikayesini anlatın. Geçmişi, kişiliği, hedefleri nedir?"
                  className="w-full bg-black/40 border border-emerald-500/30 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                />
                <p className="text-gray-500 text-xs mt-2">En az 100 karakter yazmanız önerilir.</p>
              </div>
            </div>
          </div>

          {/* Motivation Section */}
          <div className="bg-gradient-to-br from-teal-500/5 to-green-500/5 backdrop-blur-sm border border-teal-500/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-500/20 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-teal-400" />
              </div>
              <h2 className="text-xl font-bold text-white">Motivasyon & Uygunluk</h2>
            </div>

            <div className="space-y-6">
              {/* Neden FED:V */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Neden FED:V'ye Katılmak İstiyorsunuz? *
                </label>
                <textarea
                  name="neden"
                  value={formData.neden}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="FED:V'yi tercih etme nedeninizi ve sunucuya nasıl katkıda bulunabileceğinizi yazın"
                  className="w-full bg-black/40 border border-teal-500/30 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
                />
              </div>

              {/* Uygunluk */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Haftalık Oyun Uygunluğunuz *
                </label>
                <select
                  name="uygunluk"
                  value={formData.uygunluk}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-teal-500/30 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-gray-900">Seçiniz</option>
                  <option value="az" className="bg-gray-900">Haftada 1-5 saat</option>
                  <option value="orta" className="bg-gray-900">Haftada 5-15 saat</option>
                  <option value="cok" className="bg-gray-900">Haftada 15-30 saat</option>
                  <option value="fulltime" className="bg-gray-900">Haftada 30+ saat</option>
                </select>
              </div>

              {/* Kurallar Kabul */}
              <div className="bg-black/20 border border-green-500/20 rounded-xl p-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="kurallarKabul"
                    checked={formData.kurallarKabul}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 mt-0.5 rounded border-green-500/50 bg-black/40 text-green-500 focus:ring-green-500/30 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    <Link to="/social-kurallar" className="text-green-400 hover:text-green-300 underline">
                      FED:V Sunucu Kuralları
                    </Link>
                    'nı okudum ve kabul ediyorum. Kurallara uymadığım takdirde uygulanacak yaptırımları kabul ediyorum. *
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !formData.kurallarKabul}
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 disabled:shadow-none"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Gönderiliyor...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Başvuruyu Gönder</span>
                </>
              )}
            </button>
          </div>

          {/* Info Note */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Başvurunuz 24-48 saat içinde değerlendirilecektir. Sonuç Discord üzerinden bildirilecektir.
            </p>
          </div>
        </form>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5 text-center">
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Hızlı Değerlendirme</h3>
            <p className="text-gray-400 text-sm">24-48 saat içinde yanıt</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5 text-center">
            <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Güvenli Topluluk</h3>
            <p className="text-gray-400 text-sm">Toksik olmayan ortam</p>
          </div>
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-xl p-5 text-center">
            <Users className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-1">Aktif Topluluk</h3>
            <p className="text-gray-400 text-sm">7/24 aktif oyuncular</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OyuncuBasvuru;
