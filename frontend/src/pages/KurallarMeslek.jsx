import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, CheckCircle, AlertTriangle, Shield } from 'lucide-react';

const KurallarMeslek = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "BadCop/BadDoc Rolleri",
      aciklama: "BadCop - BadDoc Kuralları",
      detay: `▫️ Polis, EMS, Mekanik gibi whitelist işler için başvuru formu doldurulmalıdır. Minimum oyun süresi ve roleplay geçmişi değerlendirilir. Başvurular 1-2 hafta içinde sonuçlanır.
      
      ▫️ Bu kişilerin kimliklerinin ortaya çıkması durumunda, karakterleri CK ile sonuçlanabilir. 

      ▫️ Rolü yapan kişiler bir ekip kuramaz ve herhangi bir ekibe dahil olamaz. 

      ▫️ Meslek içerisinde kullanılan hiçbir teçhizat legal veya illegal kişilerle paylaşılamaz. 

      ▫️ Eğer karakterin kimliği herhangi bir olay sonrası açığa çıkarsa, CK izni yönetim tarafından otomatik verilmiş sayılır. 

      ▫️ Bu CK işlemi DOC karakteri tarafından gerçekleştirilebileceği gibi, izin doğrultusunda başka bir oyuncu da rolü tamamlayabilir. Mesleğin genel işleyişini bozacak davranışlar yasaktır. 

      ▫️ Mesleğin genel işleyişini bozacak davranışlar yasaktır. 

      ▫️ İllegal yapı içerisinde yer alıp illegal polis/doktor rolü yapan kişiler, sistemde illegal karakter olarak değerlendirilir. 
      
      ▫️ Gizli rolleri bilerek ve isteyerek ifşa etmeye çalışan kişilere, yönetim tarafından karşı tarafa CK izni verilebilir. 
      
      ▫️ BadCop ve BadDoc rolleri sadece yönetim izni ile oynanabilir.

      ▫️ LSPD ve LSFMD bünyesindeki oyuncuların, sistemsel illegal eylemlerde (market soygunu, araç parçalama vb.) yer alması yasaktır.`,
      ceza: "İzinsiz yapılan bu rollerde durum perma sürecine kadar gidebilir."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-cyan-400 font-medium transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /><span>Tüm Kurallara Dön</span>
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl shadow-2xl shadow-cyan-500/40">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">MESLEK KURALLARI</span>
            </h1>
            <p className="text-gray-400 text-lg">Whitelist iş kuralları</p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyan-400" />
              <p className="text-gray-300">Whitelist işler <span className="text-cyan-400 font-semibold">sorumluluk</span> gerektirir. Kurallarına uyun.</p>
            </div>
          </div>

          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div key={kural.id} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="px-6 py-4 border-b border-cyan-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <div><span className="text-red-400 font-semibold text-sm">Ceza: </span><span className="text-gray-300 text-sm">{kural.ceza}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/social-kurallar" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg">
              <ArrowLeft className="w-5 h-5" />Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarMeslek;
