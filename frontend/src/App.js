import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import Careers from "./pages/Careers";
import FAQ from "./pages/FAQ";
import Rules from "./pages/Rules";
import SocialKurallar from "./pages/SocialKurallar";
import KurallarGenel from "./pages/KurallarGenel";
import KurallarRoleplay from "./pages/KurallarRoleplay";
import KurallarIletisim from "./pages/KurallarIletisim";
import KurallarYasaklar from "./pages/KurallarYasaklar";
import KurallarArac from "./pages/KurallarArac";
import KurallarGang from "./pages/KurallarGang";
import KurallarEkonomi from "./pages/KurallarEkonomi";
import KurallarSuc from "./pages/KurallarSuc";
import KurallarMeslek from "./pages/KurallarMeslek";
import KurallarSaglik from "./pages/KurallarSaglik";
import KurallarPolis from "./pages/KurallarPolis";
import KurallarEtkinlik from "./pages/KurallarEtkinlik";
import KurallarGayrimenkul from "./pages/KurallarGayrimenkul";
import KurallarTicaret from "./pages/KurallarTicaret";
import KurallarDestek from "./pages/KurallarDestek";
import Yonetim from "./pages/Yonetim";
import YetkiliBasvuru from "./pages/YetkiliBasvuru";
import YetkiliSikayet from "./pages/YetkiliSikayet";
import YetkiliFeedback from "./pages/YetkiliFeedback";
import AdminPanel from "./pages/AdminPanel";
import VipStore from "./pages/VipStore";
import VipKisisel from "./pages/VipKisisel";
import VipAraclar from "./pages/VipAraclar";
import VipAraclarSpor from "./pages/VipAraclarSpor";
import VipAraclarLuks from "./pages/VipAraclarLuks";
import VipAraclarMotorsiklet from "./pages/VipAraclarMotorsiklet";
import VipAraclarSuv from "./pages/VipAraclarSuv";
import VipAraclarKlasik from "./pages/VipAraclarKlasik";
import VipAraclarSuper from "./pages/VipAraclarSuper";
import VipEvMalikane from "./pages/VipEvMalikane";
import VipEvMalikaneDaire from "./pages/VipEvMalikaneDaire";
import VipEvMalikaneVilla from "./pages/VipEvMalikaneVilla";
import VipEvMalikaneMalikane from "./pages/VipEvMalikaneMalikane";
import VipEvMalikaneSahil from "./pages/VipEvMalikaneSahil";
import VipEvMalikanePenthouse from "./pages/VipEvMalikanePenthouse";
import VipEvMalikaneOzel from "./pages/VipEvMalikaneOzel";
import VipPaketler from "./pages/VipPaketler";
import VipIsletmeler from "./pages/VipIsletmeler";
import VipIsletmelerYemek from "./pages/VipIsletmelerYemek";
import VipIsletmelerEglence from "./pages/VipIsletmelerEglence";
import VipIsletmelerOtomotiv from "./pages/VipIsletmelerOtomotiv";
import VipIsletmelerTicaret from "./pages/VipIsletmelerTicaret";
import VipIsletmelerHizmet from "./pages/VipIsletmelerHizmet";
import VipIsletmelerDiger from "./pages/VipIsletmelerDiger";
import VipAvantajli from "./pages/VipAvantajli";
import OyuncuBasvuru from "./pages/OyuncuBasvuru";
import Topluluk from "./pages/Topluluk";
import DOJCezaKanunu from "./pages/DOJCezaKanunu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/social-kurallar" element={<SocialKurallar />} />
          <Route path="/kurallar/genel" element={<KurallarGenel />} />
          <Route path="/kurallar/roleplay" element={<KurallarRoleplay />} />
          <Route path="/kurallar/iletisim" element={<KurallarIletisim />} />
          <Route path="/kurallar/yasaklar" element={<KurallarYasaklar />} />
          <Route path="/kurallar/arac" element={<KurallarArac />} />
          <Route path="/kurallar/gang" element={<KurallarGang />} />
          <Route path="/kurallar/ekonomi" element={<KurallarEkonomi />} />
          <Route path="/kurallar/suc" element={<KurallarSuc />} />
          <Route path="/kurallar/meslek" element={<KurallarMeslek />} />
          <Route path="/kurallar/saglik" element={<KurallarSaglik />} />
          <Route path="/kurallar/polis" element={<KurallarPolis />} />
          <Route path="/kurallar/etkinlik" element={<KurallarEtkinlik />} />
          <Route path="/kurallar/gayrimenkul" element={<KurallarGayrimenkul />} />
          <Route path="/kurallar/ticaret" element={<KurallarTicaret />} />
          <Route path="/kurallar/destek" element={<KurallarDestek />} />
          <Route path="/yonetim" element={<Yonetim />} />
          <Route path="/yonetim/basvuru" element={<YetkiliBasvuru />} />
          <Route path="/yonetim/sikayet" element={<YetkiliSikayet />} />
          <Route path="/yonetim/feedback" element={<YetkiliFeedback />} />
          <Route path="/yonetim/admin" element={<AdminPanel />} />
          <Route path="/vip-store" element={<VipStore />} />
          <Route path="/vip-store/kisisel" element={<VipKisisel />} />
          <Route path="/vip-store/araclar" element={<VipAraclar />} />
          <Route path="/vip-store/araclar/spor" element={<VipAraclarSpor />} />
          <Route path="/vip-store/araclar/luks" element={<VipAraclarLuks />} />
          <Route path="/vip-store/araclar/motorsiklet" element={<VipAraclarMotorsiklet />} />
          <Route path="/vip-store/araclar/suv" element={<VipAraclarSuv />} />
          <Route path="/vip-store/araclar/klasik" element={<VipAraclarKlasik />} />
          <Route path="/vip-store/araclar/super" element={<VipAraclarSuper />} />
          <Route path="/vip-store/evmalikane" element={<VipEvMalikane />} />
          <Route path="/vip-store/evmalikane/daire" element={<VipEvMalikaneDaire />} />
          <Route path="/vip-store/evmalikane/villa" element={<VipEvMalikaneVilla />} />
          <Route path="/vip-store/evmalikane/malikane" element={<VipEvMalikaneMalikane />} />
          <Route path="/vip-store/evmalikane/sahil" element={<VipEvMalikaneSahil />} />
          <Route path="/vip-store/evmalikane/penthouse" element={<VipEvMalikanePenthouse />} />
          <Route path="/vip-store/evmalikane/ozel" element={<VipEvMalikaneOzel />} />
          <Route path="/vip-store/paketler" element={<VipPaketler />} />
          <Route path="/vip-store/isletmeler" element={<VipIsletmeler />} />
          <Route path="/vip-store/isletmeler/yemek" element={<VipIsletmelerYemek />} />
          <Route path="/vip-store/isletmeler/eglence" element={<VipIsletmelerEglence />} />
          <Route path="/vip-store/isletmeler/otomotiv" element={<VipIsletmelerOtomotiv />} />
          <Route path="/vip-store/isletmeler/ticaret" element={<VipIsletmelerTicaret />} />
          <Route path="/vip-store/isletmeler/hizmet" element={<VipIsletmelerHizmet />} />
          <Route path="/vip-store/isletmeler/diger" element={<VipIsletmelerDiger />} />
          <Route path="/vip-store/avantajli" element={<VipAvantajli />} />
          <Route path="/oyuncu-basvuru" element={<OyuncuBasvuru />} />
          <Route path="/topluluk" element={<Topluluk />} />
          <Route path="/doj-ceza-kanunu" element={<DOJCezaKanunu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
