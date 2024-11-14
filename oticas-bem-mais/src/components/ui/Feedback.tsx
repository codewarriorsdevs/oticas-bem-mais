import { comments } from "../../data/Comment"
import img from '../../assets/images/website/logo.png'
import { Button } from "./Button"

export default function Feedback(){
    return(
        <>
            <div className="bg-greyColor  flex flex-row ">

               <div className="grid grid-cols-2 gap-1 p-4">
               {comments.map((m)=>(

                    <>
                        <div className="flex flex-row gap-4 mb-10  bg-white p-4 rounded-lg">
                        <div className="rounded-full " >
                                <img  src="" alt="imagem"/>
                            </div>


                            <div key={m.id}>
                                <h1>{m.comment}</h1>
                                <p className="font-bold">{m.user}</p>
                            </div>
                        </div>
                    </>
                        ))}
                </div>  

                <div className="p-20">
                   <div>
                     <img className='rounded-full' src={img} width={400} height={450}/>
                     <h1 className="text-bgPrimary font-bold text-justify text-2xl">Pronto para ter a mesma experiencia incrivel?</h1>
                    <Button text="encontre seu oculos" className="bg-blackColor" />
                   </div>
                </div>             
             </div>
        </>
    )
}