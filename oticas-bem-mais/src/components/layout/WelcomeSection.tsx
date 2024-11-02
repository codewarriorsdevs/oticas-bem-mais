import { Button } from "../ui/Button";
import img from "../../assets/images/website/image 7.png";

export default function WelcomeSection() {
  return (
    <section className="flex justify-between flex-col sm:flex-row  sm:justify-center sm:items-center">
        <div className="pl-20 pt-20">
          <h1 className=" font-bold text-whiteColor text-5xl md:text-center">
            Pra te ver bem,
            <br /> BEM MAIS!
            <h1 className="font-bold text-blackColor text-5xl">
              Qualidade e estilo
            </h1>{" "}
            para você{" "}
          </h1>
          <Button text="Encontre seu Óculos Ideal!" />
        </div>
        <div>
          <img src={img} height={700} width={700} />
        </div>
    </section>
  )
}
