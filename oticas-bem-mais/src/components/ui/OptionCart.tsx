import { category } from "../../data/Category"


export default function OptionCart(){



    return(

        <>
            <div className="flex gap-4">
                {category.map((p,i)=>(
                <div key={i} className="bg-skinColor m-4 p-5 rounded-xl">
                    <img src={p.image} height={200} width={200}/>
                    <h2 className="text-redColor"> {p.category} </h2>
                    <button className="p-2 bg-redColor rounded-xl m-2 text-whiteColor font-bold">escolher o meu</button>
                </div>
        ))}
            </div>
        </>
    )
}