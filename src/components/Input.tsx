import React, { FC, InputHTMLAttributes } from "react";
import { ChangeEvent } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({ value, onChange, type, name, placeholder }: InputProps) => {
  return (
    <input className="c-input" value={value} onChange={onChange} type={type} name={name} placeholder={placeholder} />
  );
};

export default Input;
