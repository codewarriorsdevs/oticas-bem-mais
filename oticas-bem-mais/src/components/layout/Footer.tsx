import { Button } from "../ui/Button";
import Cart from "../ui/Cart";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-blackColor text-whiteColor px-12 py-8 max-md:text-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <img src="" alt="Logo da Oticas Bem Mais" />
            <h2 className="font-bold">
            Vamos iniciar uma conversa no WhatsApp com a equipe de atendimento
            </h2>
          </div>
          <Button text="Ir para o Whatsapp" className="bg-green-600"/>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex items-center gap-4">
          <li className="cursor-pointer">
              <a href="#">Início</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Óculos</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Benefícios</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Contato</a>
            </li>
            <Cart className="bg-transparent !m-0 !p-0" />
          </ul>
        </div>
    </footer>
  )
}
