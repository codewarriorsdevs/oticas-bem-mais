import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WelcomeSection from "./components/layout/WelcomeSection";
import ProductSection from "./components/layout/ProductSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-whiteColor flex flex-col gap-8">
        <WelcomeSection />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}

export default App;