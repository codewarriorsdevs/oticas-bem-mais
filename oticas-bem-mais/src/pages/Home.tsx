import img from '../assets/imgs/image 7.png'
import { Button } from '../components/Button'

export const Home = ()=>{

    return(
        <>
           <main className="bg-bgPrimary flex flex-col sm:flex-row">
             <div className='pl-20 pt-20'>
                <h1 className=' font-bold text-whiteColor text-5xl'>Pra te ver bem,<br/> BEM MAIS!<h1  className='font-bold text-blackColor text-5xl'>Qualidade e estilo</h1> para você </h1>
                <Button/>
             </div>

             <div>
                <img src={img} height={700} width={700}/>
             </div>

           </main>
        </>

    )

}