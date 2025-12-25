import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Rules = () => {
  const [expandedRule, setExpandedRule] = useState(null);

  const toggleRule = (id) => {
    setExpandedRule(expandedRule === id ? null : id);
  };

  const rulesData = [
    {
      id: 1,
      title: 'Genel Kurallar',
      rules: [
        'Saygılı ve kibar davranın, tüm oyunculara eşit şekilde yaklaşın',
        'Hakaret, küfür, ırkçılık ve ayrımcılık kesinlikle yasaktır',
        'Oyun içi bilgilerle meta gaming (bilgi transferi) yapmayın',
        'Power gaming (gerçekçi olmayan güç kullanımı) yapılması yasaktır',
        'Admin kararlarına saygı gösterin ve itirazlarınızı uygun kanallardan yapın'
      ]
    },
    {
      id: 2,
      title: 'Roleplay Kuralları',
      rules: [
        'Karakterinize uygun davranın ve tutarlı bir hikaye oluşturun',
        'RDM (Random Deathmatch) - Sebepsiz oyuncu öldürme yasaktır',
        'VDM (Vehicle Deathmatch) - Araçla oyuncu ezme yasaktır',
        'Fail RP yapmayın, gerçekçi roleplay yapın',
        'New Life Rule (NLR) - Öldükten sonra önceki hayatınızı unutun',
        'Fear RP - Silah zoruyla karşılaştığınızda gerçekçi tepki verin'
      ]
    },
    {
      id: 3,
      title: 'İletişim Kuralları',
      rules: [
        'OOC (Out of Character) sohbeti minimize edin, IC (In Character) kalın',
        'Ses kalitesine dikkat edin, arka plan gürültüsünü minimize edin',
        'Spam ve flood yapmayın, chat kanallarını kirletmeyin',
        'Reklam ve dış link paylaşımı yasaktır',
        'Toxic davranış ve drama yaratmaktan kaçının'
      ]
    },
    {
      id: 4,
      title: 'Yasaklar ve Cezalar',
      rules: [
        'Hile, mod menu ve exploit kullanımı kalıcı ban sebebidir',
        'Bug abuse (hata istismarı) yapılması yasaktır - raporlayın',
        'Combat logging (çatışma sırasında çıkış) yasaktır',
        'Revenge kill (intikam için öldürme) yasaktır',
        'Metagaming tekrarı durumunda ağır cezalar uygulanır'
      ]
    },
    {
      id: 5,
      title: 'Ekonomi Kuralları',
      rules: [
        'Para transferlerinde roleplay sebepleri olmalıdır',
        'Money farming (para kasma) yasaklanabilir',
        'Gerçek para karşılığı oyun içi eşya satışı yasaktır',
        'Ekonomiyi bozmaya yönelik hareketler cezalandırılır'
      ]
    },
    {
      id: 6,
      title: 'Grup ve Gang Kuralları',
      rules: [
        'Gang savaşlarında fair play kurallarına uyun',
        'Bölge ele geçirme kurallarına riayet edin',
        'Maximum üye sayısı limitlerini aşmayın',
        'Gang kimliğinize uygun davranın ve roleplay yapın'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sunucu Kuralları
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Keyifli ve adil bir oyun deneyimi için lütfen tüm kurallara dikkat edin
          </p>
        </div>

        {/* Rules Accordion */}
        <div className="space-y-4">
          {rulesData.map((rule) => (
            <div
              key={rule.id}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleRule(rule.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-500/5 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{rule.id}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">{rule.title}</h3>
                </div>
                <div className="text-blue-400 flex-shrink-0">
                  {expandedRule === rule.id ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>

              {expandedRule === rule.id && (
                <div className="px-6 pb-6 border-t border-blue-500/20">
                  <ul className="space-y-3 pt-4">
                    {rule.rules.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Kural İhlalleri</h2>
          <p className="text-gray-400 mb-6">
            Kural ihlallerini Discord üzerinden veya oyun içi ticket sistemi ile bildirebilirsiniz. 
            Tüm şikayetler gizli tutulur ve adil bir şekilde değerlendirilir.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50">
            İhlal Bildir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
