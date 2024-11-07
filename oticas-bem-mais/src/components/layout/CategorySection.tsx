import OptionCart from "../ui/OptionCart"

export default function CategorySection(){

    return(
        <>
          <section className="flex flex-col gap-12">
            <div className="flex items-center justify-center">
                <div className=" text-center">
                    <h1 className="text-bgPrimary text-center font-bold">Categorias mais Amadas</h1>
                    
                    <OptionCart/>
                </div>
            </div>
          </section>
        </>
    )
}