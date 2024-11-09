import Cart from "../ui/Cart";
import logo from "../../assets/images/website/logo.png";

export default function Navbar() {
  return (
    <>
      <header
        className={`sticky top-0 z-10 px-12 py-5 flex justify-between items-center text-xs bg-bgPrimary text-whiteColor max-md:px-4`}
      >
        <img src={logo} alt="Logo" className="w-24" />
        <div className="flex items-center gap-8">
          <nav className="flex items-center font-bold gap-3 max-sm:hidden">
            <ul className="flex items-center gap-10">
              <li className="cursor-pointer">
                <a href="#">Início</a>
              </li>
              <li className="cursor-pointer">
                <a href="#product-section">Óculos</a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Benefícios</a>
              </li>
              <li className="cursor-pointer">
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
          <Cart />
        </div>
      </header>
    </>
  );
}
