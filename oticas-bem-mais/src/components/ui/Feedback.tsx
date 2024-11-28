import { comments } from "../../data/Comment";
import img from "../../assets/images/website/logo.png";
import { Button } from "./Button";

export default function Feedback() {
  return (
    <>
      <div className="p-14 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4">
          {comments.map((m) => (
            <div
              key={m.id}
              className="flex flex-col md:flex-row gap-4 mb-10 text-justify bg-white p-4 rounded-lg"
            >
              <div className="rounded-full">
                <img src={m.img} alt="imagem" width={350} height={200} />
              </div>
              <div></div>
            </div>
          ))}
        </div>

        <div className="p-10 md:p-20">
          <div className="flex flex-col justify-normal">
            <div className="flex justify-center md:justify-start items-center md:items-start">
              <div className="bg-bgPrimary text-center p-9 rounded-full mb-10">
                <img src={img} width={100} height={250} />
              </div>
            </div>
            <h1 className="text-bgPrimary font-bold text-center md:text-left text-2xl mb-10">
              Pronto para ter uma experiência incrível?
            </h1>
            <a href="#products-section">
              <Button
                text="Encontre seu óculos ideal"
                className="bg-blackColor text-xl max-md:text-xs"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
