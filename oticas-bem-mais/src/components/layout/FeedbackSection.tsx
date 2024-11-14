import Feedback from '../ui/Feedback'



export default function FeedbackSection(){
    return(
        <>
            <section className='text-center w-full'>
                <h1 className='text-bgPrimary font-bold text-2xl p-4'>o que os nossos clientes dizem</h1>
                <div>
                    <Feedback/>

                </div>
            </section>
        </>
    )
}