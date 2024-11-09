import { category } from "../../data/Category";

export default function OptionCart() {
  return (
    <>
      <div className="flex gap-10 max-md:flex-col">
        {category.map((p, i) => (
          <div
            key={i}
            className="bg-skinColor flex flex-col w-80 h-96 justify-center items-center gap-2  rounded-xl"
          >
            <img src={p.image} height={250} width={250} />
            <h1 className="text-redColor font-bold"> {p.category} </h1>
            <button className="p-2 bg-redColor rounded-xl m-2 text-whiteColor font-bold">
              Escolher o Meu
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
