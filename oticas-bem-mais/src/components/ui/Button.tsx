import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-4 font-bold text-lg rounded-lg whitespace-nowrap text-whiteColor shadow-md ${className}`}
    >
      {text}
    </button>
  );
};
