import Navbar from "./components/layout/Navbar";
import { Button } from "./components/ui/Button";
import img from "./assets/images/website/image 7.png";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bgPrimary flex flex-col sm:flex-row">
        {/* Mover esta estrutura para um componente em 'components/layout', 
        pode ser chamado de 'Welcome'.  */}
        <div className="pl-20 pt-20">
          <h1 className=" font-bold text-whiteColor text-5xl">
            Pra te ver bem,
            <br /> BEM MAIS!
            <h1 className="font-bold text-blackColor text-5xl">
              Qualidade e estilo
            </h1>{" "}
            para você{" "}
          </h1>
          <Button />
        </div>
        <div>
          <img src={img} height={700} width={700} />
        </div>
        {/* Fim componente 'Welcome'. */}
      </main>
    </>
  );
}

export default App;