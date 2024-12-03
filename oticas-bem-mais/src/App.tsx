import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import anuncio1 from '../src/assets/images/website/anuncio-1.png';
import anuncio2 from '../src/assets/images/website/anuncio-2.webp';

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WelcomeSection from "./components/layout/WelcomeSection";
import ProductSection from "./components/layout/ProductSection";
import CategorySection from "./components/layout/CategorySection";
import AnnounceSection from "./components/layout/AnnounceSection";
import FeedbackSection from "./components/layout/FeedbackSection";
import FAQ from "./components/layout/FaqSection";
import BenefitsSection from "./components/layout/BenefitsSection";

const WHATSAPP_LINK = "https://wa.me/5586995935964?text=Olá, fiquei interessado nas lentes de contato";

function App() {
  return (
    <>
      <Navbar />
      
      <main className="bg-white flex flex-col gap-14 mb-20">
        <WelcomeSection />
        <CategorySection />
        <a href={WHATSAPP_LINK}>
          <AnnounceSection imageSrc={anuncio2} altText="Fazemos sua lente com grau!" />
        </a>
        <ProductSection />
        <BenefitsSection />
        <AnnounceSection imageSrc={anuncio1} altText="Traga sua armação e ganhe desconto!" />
        <FeedbackSection />
        <FAQ />
      </main>
      <Footer />
      
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;
