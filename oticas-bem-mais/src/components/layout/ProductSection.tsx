import { useState } from "react";
import ProductFilter from "../ui/ProductFilter";
import products from "../../data/products";
import { Product } from "../../types/Product";
import { Button } from "../ui/Button";
import useCartStore from "../../store/useCartStore";
import { toast } from 'react-toastify';

export default function ProductSection() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("Adicionado ao Carrinho!");
  };

  const filteredProducts = selectedFilter === "Todos"
    ? products
    : products.filter((p) => p.category === selectedFilter);

  return (
    <section className="flex flex-col gap-12 justify-center items-center px-20 py-20 max-md:px-8">
      <h1 className="text-bgPrimary text-center font-bold">Descubra as Novidades</h1>

      <ProductFilter onSelectFilter={setSelectedFilter} />

      <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
        {filteredProducts.map((p) => (
          <div key={p.id} className="flex flex-col gap-1 p-4 border rounded-md shadow-md">
            <div>
              <img className="w-full" src={p.image} alt={"Imagem de " + p.name} />
            </div>
            <div className="w-max bg-bgPrimary px-2 py-0 rounded-full">
              <p className="text-sm text-whiteColor">{p.category}</p>
            </div>
            <h1 className="text-sm font-semibold">{p.name}</h1>
            <div className="">
              <h2 className="text-sm font-bold text-gray-600">R$ {p.price?.toFixed(2)}</h2>
            </div>
            <Button
              className="bg-bgPrimary w-full text-sm font-medium py-2"
              text="Comprar"
              onClick={() => handleAddToCart(p)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
