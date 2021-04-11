import { Form, Input as AntInput, InputProps as AntInputProps } from "antd";
import React, { FC } from "react";
import { ChangeEvent } from "react";

interface InputProps extends AntInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({ ...props }: InputProps) => {
  return (
    <Form.Item>
      <AntInput {...props} />
    </Form.Item>
  );
};

export default Input;
