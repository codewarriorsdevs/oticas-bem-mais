import React, { useState } from 'react';

export default function Cart({ bg = "bg-black", className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className={`${bg} text-whiteColor px-4 py-2 rounded-md ${className}`}
        aria-label="Abrir carrinho"
      >
        Carrinho
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bgPrimary text-whiteColor shadow-lg transform ${
          isModalOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4"
          aria-label="Fechar carrinho"
        >
          &times;
        </button>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Carrinho</h2>
          <p>Seu carrinho está vazio.</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={toggleModal}
          className="fixed inset-0 bg-black bg-opacity-20 z-10"
        ></div>
      )}
    </>
  );
}
