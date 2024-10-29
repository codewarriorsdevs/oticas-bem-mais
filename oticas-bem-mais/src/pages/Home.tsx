import img from '../assets/imgs/image 7.png'

export const Home = ()=>{

    return(
        <>
           <main className="bg-Primary flex flex-row">
             <div>
                <h1>Pra te ver bem mais </h1>
             </div>

             <div>
                <img src={img} height={400} width={400}/>
             </div>

           </main>
        </>

    )

}