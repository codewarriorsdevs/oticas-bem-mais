import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string; 
}

export const Button: React.FC<ButtonProps> = ({
  text,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`p-4 font-bold text-lg rounded-lg whitespace-nowrap text-whiteColor shadow-md ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
};
