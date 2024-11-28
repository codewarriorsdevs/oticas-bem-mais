import OptionCart from "../ui/OptionCart"

export default function CategorySection(){

    return(
        <>
          <section className="relative -top-52 bg-white rounded-2xl  inline-block m-5 pt-8 pb-8">
            <div className="flex items-center gap-2 justify-center">
                <div className=" text-center">
                    <h1 className="text-bgPrimary text-center text-4xl mb-5 font-bold max-md:text-2xl">Categorias mais Amadas</h1>
                    
                    <OptionCart/>
                </div>
            </div>
          </section>
        </>
    )
}