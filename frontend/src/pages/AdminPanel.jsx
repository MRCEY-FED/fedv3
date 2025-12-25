import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, ArrowLeft, UserPlus, AlertCircle, MessageSquare, 
  RefreshCw, Trash2, Check, X, Clock, Eye, Star,
  Users, ChevronDown, ChevronUp, Mail, Calendar, FileText,
  Lock, LogOut
} from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  
  const [activeTab, setActiveTab] = useState('basvuru');
  const [basvurular, setBasvurular] = useState([]);
  const [sikayetler, setSikayetler] = useState([]);
  const [feedbackler, setFeedbackler] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  // Check if already logged in
  useEffect(() => {
    const adminAuth = sessionStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    
    try {
      const response = await fetch(`${API_URL}/api/admin/login?password=${encodeURIComponent(password)}`, {
        method: 'POST',
      });
      
      if (response.ok) {
        setIsAuthenticated(true);
        sessionStorage.setItem('adminAuth', 'true');
      } else {
        setLoginError('Yanlış şifre! Lütfen tekrar deneyin.');
      }
    } catch (err) {
      setLoginError('Bağlantı hatası. Lütfen tekrar deneyin.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setPassword('');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [basvuruRes, sikayetRes, feedbackRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/api/basvuru`),
        fetch(`${API_URL}/api/sikayet`),
        fetch(`${API_URL}/api/feedback`),
        fetch(`${API_URL}/api/admin/stats`)
      ]);
      
      setBasvurular(await basvuruRes.json());
      setSikayetler(await sikayetRes.json());
      setFeedbackler(await feedbackRes.json());
      setStats(await statsRes.json());
    } catch (err) {
      console.error('Veri yükleme hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const updateDurum = async (type, id, durum) => {
    try {
      await fetch(`${API_URL}/api/${type}/${id}/durum?durum=${durum}`, { method: 'PATCH' });
      fetchData();
    } catch (err) {
      console.error('Durum güncelleme hatası:', err);
    }
  };

  const deleteItem = async (type, id) => {
    if (!window.confirm('Bu kaydı silmek istediğinize emin misiniz?')) return;
    try {
      await fetch(`${API_URL}/api/${type}/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      console.error('Silme hatası:', err);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDurumBadge = (durum) => {
    const styles = {
      'beklemede': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
      'onaylandi': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      'reddedildi': 'bg-red-500/20 text-red-400 border-red-500/40',
      'inceleniyor': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      'cozuldu': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      'yeni': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      'okundu': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      'cevaplandi': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    };
    return styles[durum] || 'bg-gray-500/20 text-gray-400 border-gray-500/40';
  };

  const tabs = [
    { id: 'basvuru', name: 'Başvurular', icon: UserPlus, color: 'emerald', count: stats?.basvuru?.bekleyen || 0 },
    { id: 'sikayet', name: 'Şikayetler', icon: AlertCircle, color: 'red', count: stats?.sikayet?.incelenen || 0 },
    { id: 'feedback', name: 'Feedbackler', icon: MessageSquare, color: 'violet', count: stats?.feedback?.yeni || 0 },
  ];

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl shadow-2xl shadow-purple-500/40">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2">
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                ADMİN PANELİ
              </span>
            </h1>
            <p className="text-gray-400 text-sm">Bu alan sadece yetkililere özeldir</p>
          </div>

          <form onSubmit={handleLogin} className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-2xl p-6">
            <div className="mb-4">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                <Lock className="w-4 h-4 text-purple-400" />
                Yönetici Şifresi
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Şifreyi girin..."
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>

            {loginError && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-bold rounded-xl hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/30 disabled:opacity-50"
            >
              {loginLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Kontrol ediliyor...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Giriş Yap
                </>
              )}
            </button>

            <Link
              to="/yonetim"
              className="mt-4 flex items-center justify-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Yönetime Dön
            </Link>
          </form>
        </div>
      </div>
    );
  }

  // Admin Panel (Authenticated)
  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Back Button & Logout */}
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/yonetim"
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-purple-400 font-medium transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Yönetime Dön</span>
            </Link>
            
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 font-medium transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Çıkış Yap</span>
            </button>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-black mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  ADMİN PANELİ
                </span>
              </h1>
              <p className="text-gray-400 text-sm">Form cevaplarını görüntüle ve yönet</p>
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 rounded-xl text-purple-400 font-medium transition-all"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Yenile
            </button>
          </div>

          {/* Stats Cards */}
          {stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-400 text-sm font-medium">Toplam Başvuru</p>
                    <p className="text-3xl font-bold text-white">{stats.basvuru.toplam}</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <UserPlus className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">{stats.basvuru.bekleyen} bekleyen</p>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-400 text-sm font-medium">Toplam Şikayet</p>
                    <p className="text-3xl font-bold text-white">{stats.sikayet.toplam}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">{stats.sikayet.incelenen} inceleniyor</p>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-violet-600/5 border border-violet-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-violet-400 text-sm font-medium">Toplam Feedback</p>
                    <p className="text-3xl font-bold text-white">{stats.feedback.toplam}</p>
                  </div>
                  <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-violet-400" />
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-2">{stats.feedback.yeni} yeni</p>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
                    isActive 
                      ? `bg-${tab.color}-500/20 border border-${tab.color}-500/40 text-${tab.color}-400`
                      : 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.name}
                  {tab.count > 0 && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold bg-${tab.color}-500/30`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 text-purple-400 animate-spin" />
            </div>
          ) : (
            <div className="space-y-4">
              {/* Başvurular */}
              {activeTab === 'basvuru' && (
                basvurular.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">Henüz başvuru yok</div>
                ) : (
                  basvurular.map((b) => (
                    <div key={b.id} className="bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 border border-emerald-500/20 rounded-xl overflow-hidden">
                      <div 
                        className="p-4 cursor-pointer hover:bg-emerald-500/5 transition-colors"
                        onClick={() => setExpandedId(expandedId === b.id ? null : b.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                              <UserPlus className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{b.isim}</h3>
                              <p className="text-gray-400 text-sm">{b.discordId}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDurumBadge(b.durum)}`}>
                              {b.durum}
                            </span>
                            <span className="text-gray-500 text-xs">{formatDate(b.tarih)}</span>
                            {expandedId === b.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </div>
                        </div>
                      </div>
                      
                      {expandedId === b.id && (
                        <div className="px-4 pb-4 border-t border-emerald-500/20 pt-4">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div><p className="text-gray-500 text-xs">Email</p><p className="text-white text-sm">{b.email}</p></div>
                            <div><p className="text-gray-500 text-xs">Yaş</p><p className="text-white text-sm">{b.yas}</p></div>
                            <div><p className="text-gray-500 text-xs">Oyun Süresi</p><p className="text-white text-sm">{b.oyunSuresi} saat</p></div>
                            <div><p className="text-gray-500 text-xs">Uygunluk</p><p className="text-white text-sm">{b.uygunluk} saat/hafta</p></div>
                          </div>
                          
                          {b.oncekiDeneyim && (
                            <div className="mb-3">
                              <p className="text-gray-500 text-xs mb-1">Önceki Deneyim</p>
                              <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{b.oncekiDeneyim}</p>
                            </div>
                          )}
                          
                          <div className="mb-3">
                            <p className="text-gray-500 text-xs mb-1">Neden Yetkili Olmak İstiyor?</p>
                            <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{b.neden}</p>
                          </div>
                          
                          {b.hakkinda && (
                            <div className="mb-4">
                              <p className="text-gray-500 text-xs mb-1">Hakkında</p>
                              <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{b.hakkinda}</p>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <button onClick={() => updateDurum('basvuru', b.id, 'onaylandi')} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-lg text-emerald-400 text-sm font-medium">
                              <Check className="w-4 h-4" /> Onayla
                            </button>
                            <button onClick={() => updateDurum('basvuru', b.id, 'reddedildi')} className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-lg text-red-400 text-sm font-medium">
                              <X className="w-4 h-4" /> Reddet
                            </button>
                            <button onClick={() => deleteItem('basvuru', b.id)} className="flex items-center gap-1 px-3 py-1.5 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/40 rounded-lg text-gray-400 text-sm font-medium ml-auto">
                              <Trash2 className="w-4 h-4" /> Sil
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )
              )}

              {/* Şikayetler */}
              {activeTab === 'sikayet' && (
                sikayetler.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">Henüz şikayet yok</div>
                ) : (
                  sikayetler.map((s) => (
                    <div key={s.id} className="bg-gradient-to-br from-red-500/5 to-red-600/5 border border-red-500/20 rounded-xl overflow-hidden">
                      <div 
                        className="p-4 cursor-pointer hover:bg-red-500/5 transition-colors"
                        onClick={() => setExpandedId(expandedId === s.id ? null : s.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                              <AlertCircle className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">Şikayet: {s.yetkiliIsmi}</h3>
                              <p className="text-gray-400 text-sm">{s.kategori} - {s.isim}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDurumBadge(s.durum)}`}>
                              {s.durum}
                            </span>
                            <span className="text-gray-500 text-xs">{formatDate(s.tarih)}</span>
                            {expandedId === s.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </div>
                        </div>
                      </div>
                      
                      {expandedId === s.id && (
                        <div className="px-4 pb-4 border-t border-red-500/20 pt-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div><p className="text-gray-500 text-xs">Şikayet Eden</p><p className="text-white text-sm">{s.isim}</p></div>
                            <div><p className="text-gray-500 text-xs">Discord</p><p className="text-white text-sm">{s.discordId}</p></div>
                            <div><p className="text-gray-500 text-xs">Olay Tarihi</p><p className="text-white text-sm">{s.olayTarihi}</p></div>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-gray-500 text-xs mb-1">Açıklama</p>
                            <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{s.aciklama}</p>
                          </div>
                          
                          {s.kanit && (
                            <div className="mb-4">
                              <p className="text-gray-500 text-xs mb-1">Kanıt Linki</p>
                              <a href={s.kanit} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">{s.kanit}</a>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <button onClick={() => updateDurum('sikayet', s.id, 'cozuldu')} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-lg text-emerald-400 text-sm font-medium">
                              <Check className="w-4 h-4" /> Çözüldü
                            </button>
                            <button onClick={() => updateDurum('sikayet', s.id, 'reddedildi')} className="flex items-center gap-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 rounded-lg text-red-400 text-sm font-medium">
                              <X className="w-4 h-4" /> Reddet
                            </button>
                            <button onClick={() => deleteItem('sikayet', s.id)} className="flex items-center gap-1 px-3 py-1.5 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/40 rounded-lg text-gray-400 text-sm font-medium ml-auto">
                              <Trash2 className="w-4 h-4" /> Sil
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )
              )}

              {/* Feedbackler */}
              {activeTab === 'feedback' && (
                feedbackler.length === 0 ? (
                  <div className="text-center py-12 text-gray-400">Henüz feedback yok</div>
                ) : (
                  feedbackler.map((f) => (
                    <div key={f.id} className="bg-gradient-to-br from-violet-500/5 to-violet-600/5 border border-violet-500/20 rounded-xl overflow-hidden">
                      <div 
                        className="p-4 cursor-pointer hover:bg-violet-500/5 transition-colors"
                        onClick={() => setExpandedId(expandedId === f.id ? null : f.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center">
                              <MessageSquare className="w-5 h-5 text-violet-400" />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">{f.baslik}</h3>
                              <div className="flex items-center gap-2">
                                <p className="text-gray-400 text-sm">{f.isim || 'Anonim'}</p>
                                {f.puan > 0 && (
                                  <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-3 h-3 ${i < f.puan ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDurumBadge(f.durum)}`}>
                              {f.durum}
                            </span>
                            <span className="text-gray-500 text-xs">{formatDate(f.tarih)}</span>
                            {expandedId === f.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </div>
                        </div>
                      </div>
                      
                      {expandedId === f.id && (
                        <div className="px-4 pb-4 border-t border-violet-500/20 pt-4">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div><p className="text-gray-500 text-xs">Kategori</p><p className="text-white text-sm">{f.kategori}</p></div>
                            <div><p className="text-gray-500 text-xs">Discord</p><p className="text-white text-sm">{f.discordId || '-'}</p></div>
                          </div>
                          
                          <div className="mb-3">
                            <p className="text-gray-500 text-xs mb-1">Mesaj</p>
                            <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{f.mesaj}</p>
                          </div>
                          
                          {f.oneri && (
                            <div className="mb-4">
                              <p className="text-gray-500 text-xs mb-1">Öneri</p>
                              <p className="text-gray-300 text-sm bg-black/30 rounded-lg p-3">{f.oneri}</p>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <button onClick={() => updateDurum('feedback', f.id, 'okundu')} className="flex items-center gap-1 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 rounded-lg text-blue-400 text-sm font-medium">
                              <Eye className="w-4 h-4" /> Okundu
                            </button>
                            <button onClick={() => updateDurum('feedback', f.id, 'cevaplandi')} className="flex items-center gap-1 px-3 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 rounded-lg text-emerald-400 text-sm font-medium">
                              <Check className="w-4 h-4" /> Cevaplandı
                            </button>
                            <button onClick={() => deleteItem('feedback', f.id)} className="flex items-center gap-1 px-3 py-1.5 bg-gray-500/20 hover:bg-gray-500/30 border border-gray-500/40 rounded-lg text-gray-400 text-sm font-medium ml-auto">
                              <Trash2 className="w-4 h-4" /> Sil
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
