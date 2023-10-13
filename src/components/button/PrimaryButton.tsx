import React, { FC, HtmlHTMLAttributes } from "react";
import BaseButton from "./BaseButton";

type PropsInterface = {
  title?: string;
  customClass?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  [k: string]: any;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: FC<PropsInterface> = ({
  title,
  onClick,
  customClass,
  children,
  ...rest
}) => {
  const primaryclass: string = `bg-primary hover:bg-blue-900 p-2 text-white rounded ${customClass} disabled:opacity-50`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass} {...rest}>
      {title && <span>{title}</span>}
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
