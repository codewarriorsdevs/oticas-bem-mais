import ProductFilter from "../ui/ProductFilter";

export default function ProductSection() {
  return (
    <section className="flex flex-col gap-12 justify-center items-center px-20 py-20 max-md:px-8">
      <h1 className="text-bgPrimary text-center font-bold">Descubra as Novidades</h1>

      <ProductFilter />
    </section>
  );
}
