import { Button } from "../ui/Button";
import logo from "../../assets/images/website/logo.png";
import Cart from "../ui/Cart";
import { navLinks } from "./Navbar";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-blackColor text-whiteColor px-12 py-8 max-md:text-sm">
        <div className="flex items-center justify-between gap-4 max-md:flex-col">
          <div className="flex items-center gap-8 max-md:flex-col">
            <img src={logo} alt="Logo" className="w-32" />
            <h2 className="font-bold max-md:text-center">
            Vamos iniciar uma conversa no WhatsApp com a equipe de atendimento
            </h2>
          </div>
          <Button text="Ir para o Whatsapp" className="bg-green-600"/>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <Cart className="bg-transparent !m-0 !p-0" />
          </ul>
        </div>
    </footer>
  )
}
