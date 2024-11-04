import { useState } from "react";
import product1 from "../../assets/images/products/product-2.webp";

type ProductFilterProps = {
  onSelectFilter: (filter: string) => void;
};

export default function ProductFilter({ onSelectFilter }: ProductFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const handleSelect = (filter: string) => {
    setSelectedFilter(filter);
    onSelectFilter(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
      {["Todos", "Óculos de Grau", "Óculos de Sol", "Óculos Infantil"].map((category) => (
        <div
          key={category}
          className={`flex items-center gap-2 px-3 py-0 rounded-full cursor-pointer ${
            selectedFilter === category ? "bg-bgPrimary text-white" : "bg-slate-200 text-gray-800"
          }`}
          onClick={() => handleSelect(category)}
        >
          <img src={product1} className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full" alt={category} />
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
}
