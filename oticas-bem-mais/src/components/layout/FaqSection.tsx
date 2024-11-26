import React, { useState } from "react";
import arrow_up from "../../assets/icons/arrow_up.svg";
import arrow_down from "../../assets/icons/arrow_down.svg";
import { faq } from "../../data/Faq.ts";

const FAQ: React.FC = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleVisibility = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="faq-container px-40 max-md:px-8">
      <h1 className="text-bgPrimary text-center text-4xl mb-5 font-bold">
        Perguntas Frequentes
      </h1>
      <ul className="space-y-4">
        {faq.map((faq, index) => (
          <li key={index}>
            <button
              className="flex justify-between items-center w-full p-4 text-left font-bold  bg-slate-200 hover:text-bgPrimary text-2xl"
              onClick={() => toggleVisibility(index)}
            >
              {faq.question}
              <span>
                {visibleIndex === index ? (
                  <img src={arrow_down} className="w-6" />
                ) : (
                  <img src={arrow_up} className="w-6" />
                )}
              </span>
            </button>
            {visibleIndex === index && (
              <p className="mt-2 animate-slideDown text-gray-600 text-2xl">{faq.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
