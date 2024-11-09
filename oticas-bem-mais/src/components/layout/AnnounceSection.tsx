import anuncio from '../../assets/images/website/anuncio-1.png';

export default function AnnounceSection() {
  return (
    <section className='flex flex-col justify-center items-center'>
        <img src={anuncio} className='w-full' alt="Traga sua armação velha e ganhe um desconto de até R$ 100,00!" />
    </section>
  )
}
