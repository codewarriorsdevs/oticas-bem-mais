import { Product } from "../types/Product";

export const generateWhatsAppMessage = (cart: Product[]) => {
  return cart
    .map((product) => `- ${product.name}: R$${product.price.toFixed(2)}`)
    .join("\n");
};

export const getWhatsAppUrl = (cart: Product[], phone: string) => {
  const message = `Olá, gostaria de comprar os seguintes produtos:\n${generateWhatsAppMessage(cart)}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
