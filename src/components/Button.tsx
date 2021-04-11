import { Form, Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import React, { FC } from "react";

interface ButtonProps extends AntButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, ...props }: ButtonProps) => {
  return (
    <Form.Item>
      <AntButton {...props}>{text}</AntButton>
    </Form.Item>
  );
};

export default Button;
