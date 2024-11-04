import { useState } from "react";
import product1 from "../../assets/images/products/product-2.webp";

export default function ProductFilter() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const handleSelect = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
      <div
        className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full cursor-pointer ${
          selectedFilter === "Todos" ? "bg-bgPrimary text-white" : "bg-slate-200 text-gray-800"
        }`}
        onClick={() => handleSelect("Todos")}
      >
        <img src={product1} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full" alt="Todos" />
        <p>Todos</p>
      </div>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer ${
          selectedFilter === "Óculos de Grau" ? "bg-bgPrimary text-white" : "bg-slate-200 text-gray-800"
        }`}
        onClick={() => handleSelect("Óculos de Grau")}
      >
        <img src={product1} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full" alt="Óculos de Grau" />
        <p>Óculos de Grau</p>
      </div>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer ${
          selectedFilter === "Óculos de Sol" ? "bg-bgPrimary text-white" : "bg-slate-200 text-gray-800"
        }`}
        onClick={() => handleSelect("Óculos de Sol")}
      >
        <img src={product1} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full" alt="Óculos de Sol" />
        <p>Óculos de Sol</p>
      </div>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-full cursor-pointer ${
          selectedFilter === "Óculos Infantil" ? "bg-bgPrimary text-white" : "bg-slate-200 text-gray-800"
        }`}
        onClick={() => handleSelect("Óculos Infantil")}
      >
        <img src={product1} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full" alt="Óculos Infantil" />
        <p>Óculos Infantil</p>
      </div>
    </div>
  );
}
