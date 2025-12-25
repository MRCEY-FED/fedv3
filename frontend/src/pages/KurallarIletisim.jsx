import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Mic } from 'lucide-react';

const KurallarIletisim = () => {
  const kurallar = [
    {
      id: 1,
      baslik: "CK ve PK sistemi nasıl ilerler.",
      aciklama: "CK ve PK Hakkında bilinmesi gereken kurallar.",
      detay: `▫️ CK atılacak kişiyi ck odasına atıp discord üzerinden odaya atıp bir yetkili etiketlemeniz gerekmektedir.

      ▫️ Herhangi bir oyuncunun IC davranışı veya karakter hikâyesiyle ilgisi olmayan, kişisel anlaşmazlıklardan OCC sebeplerden dolayı CK veya PK atamassınız.

      ▫️ Karakterinize CK veya PK atıcağınız durumlarda bunun sebebini açık bir şekilde CK - PK duyuru odasına yazmanız gerekmektedir.

      ▫️ Oynanılan karakterin CK (karakter kalıcı olarak öldürülmesi) hakkı, öncelikli olarak oyuncunun kendisine aittir. 

      ▫️ Yönetim, gerekli gördüğü durumlarda tüm karakterler için CK yetkisini saklı tutar. 

      ▫️ CK izni, belirli roller kapsamında karşı tarafın eline geçebilir. (Örneğin: illegal birliğe katılım gibi durumlar.) 

      ▫️ Hiçbir oyuncu, kurallar ve kaideler dışında başka bir oyuncunun karakterine CK uygulayamaz. 

      ▫️ Yönetim izni olmadan kimse birbirine CK atamaz. Yönetim rolü onayladığı takdirde CK atılabilir`,
      ceza: "Yönetim izinsiz CK atma durumunda uyarı alırsınız. ve attığınız CK sayılmaz."
    },
    {
      id: 5,
      baslik: "CK Point Sistemi",
      aciklama: "CK yemesi için bir karakterin 3x point doldurması gerektiren bir sistemdir.",
      detay: `▫️ Fear RP yapılmadığı takdirde verilen point sistemidir. yönetim tarafından verilir. sunucumuzda Fear RP zorunlu olmadığı için bu tür durumlarda CK point hakkınızı kullanabilirsiniz.

      ▫️ 3X CK POİNT Force CK dır bunu asla unutmayın.

      ▫️ Bir kişiye CK Point aldırmak için ck point senaryosunu discord kısmında ki CK POİNT odasına atıp yetkillerden birini etiketleyip ck point aldırmak istediğiniz kişiyi etiketledikten sonra ck pointi talep edebilirsiniz.

      ▫️ Bir kişiye CK point attırabilmeniz için onu FEAR RP yapmaması takdirinde point aldırabilirsiniz.​

      ▫️ Bir kişi başınıza silah dayadığında telsizinizi kullanabilirsiniz. Fakat bunu yaptığınızda vurulabileceğinizi bilmeniz gerekir ve vurulursanız 1x ck point alırsınız.

      ▫️ Sunucuda FEAR RP yapmamak yasak değildir fakat CK POINT sebebidir.

      ▫️ Bir kişi sizi kaçırmaya çalışırken başınıza silah dayarsa, siz ellerinizi kaldırmak zorunda değilsiniz. Bu gibi durumlarda vurulabileceğinizi bilmeniz gerekir. vurulursanız 1x ck point alırsınz.

      ▫️ Eğer elinizde herhangi bir silah yoksa ve bir polis size silah doğrultursa polislerin dediklerini yapmak zorundasınız. Aksi takdirde polisin sizi vurma hakkı vardır. fear rp yapmak zorunda değilsiniz ama vurulduğunuz takdirde 1x ck point alırsınız.

      ▫️ Bir kişiye CK Point aldırmak için yönetimin izni olması gerekmektedir.

      ▫️ 3X CK POINT Alan oyuncular koşulsuz şartsız CK yemektedir.,`,
      ceza: "CK point dolmadan zorla ck attırılan kişiler 3x ceza alır."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="relative pt-24 pb-12 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_50%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/social-kurallar"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-400 hover:text-emerald-300 font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tüm Kurallara Dön</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl shadow-emerald-500/40">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                İLETİŞİM KURALLARI
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Sesli ve yazılı iletişim standartları
            </p>
          </div>

          {/* Info Banner */}
          <div className="mb-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Mic className="w-6 h-6 text-emerald-400" />
              <p className="text-gray-300">
                İyi bir iletişim, <span className="text-emerald-400 font-semibold">kaliteli roleplay</span> deneyiminin temelidir. Net ve saygılı iletişim kurun.
              </p>
            </div>
          </div>

          {/* Rules List */}
          <div className="space-y-6">
            {kurallar.map((kural, index) => (
              <div
                key={kural.id}
                className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-emerald-500/20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{kural.baslik}</h3>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300" style={{ whiteSpace: "pre-line" }}>{kural.aciklama}</p>
                  </div>
                  
                  <div className="bg-black/30 rounded-xl p-4">
                    <p className="text-gray-400 text-sm leading-relaxed" style={{ whiteSpace: "pre-line" }}>{kural.detay}</p>
                  </div>

                  {/* Ceza */}
                  <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <div>
                      <span className="text-red-400 font-semibold text-sm">Ceza: </span>
                      <span className="text-gray-300 text-sm">{kural.ceza}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <Link
              to="/social-kurallar"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-emerald-500/30"
            >
              <ArrowLeft className="w-5 h-5" />
              Tüm Kurallara Dön
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KurallarIletisim;
