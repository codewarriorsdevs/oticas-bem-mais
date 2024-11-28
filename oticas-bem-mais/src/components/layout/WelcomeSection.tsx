import { Button } from "../ui/Button";
import img from "../../assets/images/website/image-7.webp";

export default function WelcomeSection() {
  return (
    <section className="flex justify-between flex-col bg-bgPrimary sm:flex-row  max-sm:justify-center max-sm:items-center">
        <div className="flex flex-col gap-1 px-20 pt-20 max-md:px-5 max-md:justify-center">
          <h1 className="text-left font-bold text-whiteColor text-5xl max-md:text-center">
            Pra te ver bem,<br />
            BEM MAIS!<br />
            <span className="font-bold text-blackColor text-5xl">
              Qualidade e estilo
            </span><br />
            para você
          </h1>
          <a href="#product-section">
            <Button className="bg-blackColor" text="Encontre seu Óculos Ideal!" />
          </a>
        </div>
        <div>
          <img src={img} height={700} width={700} />
        </div>
    </section>
  )
}