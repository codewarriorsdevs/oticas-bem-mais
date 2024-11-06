import OptionCart from "../ui/OptionCart"



export default function CategorySection(){

    return(

        <>
          <section className="relative bottom-50 text-xl  bg-whiteColor">
            <div className="flex items-center justify-center">
                <div className=" text-center">
                    <h1 className="text-bgPrimary font-bold">categorias mais amadas</h1>
                    
                    <div>
                    <OptionCart/>

                    </div>

                </div>

            </div>
          </section>
        
        </>
    )
}