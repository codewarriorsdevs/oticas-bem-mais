import Feedback from '../ui/Feedback'



export default function FeedbackSection(){
    return(
        <>
            <section className='text-center w-full'>
                <h1 className='text-bgPrimary text-center text-4xl mb-5 font-bold'>O que os Nossos Clientes Dizem</h1>
                <div>
                    <Feedback/>

                </div>
            </section>
        </>
    )
}