import React, { FC, HtmlHTMLAttributes } from "react";

type PropsInterface = {
  children: React.ReactNode;
  buttonClass?: string;
  [k: string]: any;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const BaseButton: FC<PropsInterface> = ({
  buttonClass,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default BaseButton;
