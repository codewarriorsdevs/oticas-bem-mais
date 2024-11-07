import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WelcomeSection from "./components/layout/WelcomeSection";
import ProductSection from "./components/layout/ProductSection";
import CategorySection from "./components/layout/CategorySection";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white flex flex-col gap-8">
        <WelcomeSection />
        <CategorySection/>
        <ProductSection />
      </main>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;