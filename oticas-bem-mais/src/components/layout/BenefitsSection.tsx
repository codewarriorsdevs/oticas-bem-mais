import plusIcon from "../../assets/icons/icone-plus.svg";
import glassesIcon from "../../assets/icons/icone-glasses.svg";
import handIcon from "../../assets/icons/icone-hand.svg";
import boxIcon from "../../assets/icons/icone-box.svg";
import velIcon from "../../assets/icons/icone-vel.svg";
import okIcon from "../../assets/icons/icone-ok.svg";
import womman from "../../assets/images/website/apontando_beneficios-1.webp";

export default function BenefitsSection() {
  return (
    <section className="relative flex flex-col justify-center items-center -top-52 bg-white pt-8" id="benefits-section">
      <div className="text-center">
        <h1 className="text-bgPrimary text-4xl mb-8 font-bold max-md:text-2xl">
          Nossos Benefícios
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center w-4/5 items-center gap-8">
        {/* Grid dos ícones */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          {[
            { icon: glassesIcon, label: "Estilo e Qualidade" },
            { icon: velIcon, label: "Produção Rápida" },
            { icon: handIcon, label: "Atendimento Especial" },
            { icon: boxIcon, label: "Entrega Expressa" },
            { icon: okIcon, label: "Garantia de Satisfação" },
            { icon: plusIcon, label: "E Muito Mais" },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 p-4"
            >
              <img
                src={benefit.icon}
                alt={benefit.label}
                className="w-12 h-12"
              />
              <p className="text-sm font-bold">{benefit.label}</p>
            </div>
          ))}
        </div>

        {/* Imagem */}
        <img
          src={womman}
          alt="Apontando benefícios da bem mais"
          className="w-full md:w-1/2 max-w-md object-contain"
        />
      </div>
    </section>
  );
}
