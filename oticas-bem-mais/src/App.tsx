import Navbar from "./components/layout/Navbar";
import WelcomeSection from "./components/layout/WelcomeSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bgPrimary flex flex-col sm:flex-row">
        <WelcomeSection />
      </main>
    </>
  );
}

export default App;