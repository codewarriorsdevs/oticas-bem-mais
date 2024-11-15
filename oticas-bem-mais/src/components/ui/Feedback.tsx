import { comments } from "../../data/Comment"
import img from '../../assets/images/website/logo.png'
import { Button } from "./Button"

export default function Feedback(){
    return(
        <>
            <div className="bg-greyColor p-14 flex flex-row ">

               <div className="grid grid-cols-2 gap-4 p-4">
               {comments.map((m)=>(

                    <>
                        <div className="flex flex-row gap-4 mb-10 text-justify w-70  h-0 bg-white p-4 rounded-lg">
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

                <div className="p-20  ">
                   <div className='flex flex-col justify-normal'>
                     <div className='flex justify-start items-start'>
                     <div className="bg-bgPrimary text-center p-9 rounded-full mb-10">
                         <img src={img} width={100} height={250}/>
                     </div>
                     </div>
                     <h1 className="text-bgPrimary font-bold text-justify text-2xl mb-10">Pronto para ter a mesma experiencia incrivel?</h1>
                    <Button text="encontre seu oculos ideal" className="bg-blackColor w-96 text-xl" />
                   </div>
                </div>             
             </div>
        </>
    )
}