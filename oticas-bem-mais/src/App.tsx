import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WelcomeSection from "./components/layout/WelcomeSection";
import ProductSection from "./components/layout/ProductSection";
import CategorySection from "./components/layout/CategorySection";
import AnnounceSection from './components/layout/AnnounceSection';
import FeedbackSection from './components/layout/FeedbackSection';
import FAQ from './components/layout/FaqSection';

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white flex flex-col gap-14 mb-20">
        <WelcomeSection />
        <CategorySection/>
        <ProductSection />
        <FeedbackSection/>
        <AnnounceSection />
        <FAQ />
      </main>
      <Footer />

      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
}

export default App;