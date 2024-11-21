import { useState, useCallback } from "react";
import cartsvg from "../../assets/icons/cart.svg";
import useCartStore from "../../store/useCartStore";
import { Product } from "../../types/Product";
import { Button } from "./Button";
import { toast } from "react-toastify";
import { getWhatsAppUrl } from "../../utils/whatsapp";

export default function Cart({ bg = "bg-black", className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleCheckout = useCallback(() => {
    if (cart.length === 0) {
      toast.info("Seu carrinho está vazio.");
      return;
    }

    const phone = "5586981418197"; // Telefone da ótica
    const whatsappURL = getWhatsAppUrl(cart, phone);
    window.open(whatsappURL, "_blank");

    clearCart();
    toggleModal();
  }, [cart, clearCart, toggleModal]);

  return (
    <>
      <button
        onClick={toggleModal}
        className={`${bg} flex gap-1 items-center text-whiteColor px-4 py-2 rounded-md ${className}`}
        aria-label="Abrir carrinho"
      >
        <img src={cartsvg} className="w-5" alt="Ícone do Carrinho" /> Carrinho
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bgPrimary text-whiteColor shadow-lg transform ${
          isModalOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4"
          aria-label="Fechar carrinho"
        >
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Carrinho</h2>
          {cart.length > 0 ? (
            <>
              <ul className="flex flex-col gap-3 mb-4 overflow-y-auto" style={{ maxHeight: '70vh' }}>
                {cart.map((product: Product) => (
                  <li
                    key={product.id}
                    className="flex flex-col gap-2 w-full justify-between items-center"
                  >
                    <img src={product.image} className="rounded-md" alt="Imagem do produto" />
                    <div className="w-full flex flex-col gap-3">
                      <span>{product.name}</span>
                      <span>{product.category}</span>
                      <span>R$ {product.price.toFixed(2)}</span>
                    </div>
                    <Button
                      text="Remover"
                      className="py-1 w-full bg-blackColor text-sm"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <div className="flex flex-col gap-2">
                <span className="font-bold">
                  Valor total da compra: R${" "}
                  {cart
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </span>
                <button
                  onClick={handleCheckout}
                  className="bg-white w-full py-2 text-blackColor text-center rounded-md font-medium"
                >
                  Finalizar Compra
                </button>
              </div>
            </>
          ) : (
            <p>Seu carrinho está vazio.</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={toggleModal}
          className="fixed inset-0 bg-black bg-opacity-20 z-10"
        ></div>
      )}
    </>
  );
}
