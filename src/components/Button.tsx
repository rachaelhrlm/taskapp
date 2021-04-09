import React, { FC, ReactNode } from "react";

interface ButtonProps {
  text: ReactNode;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="c-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
