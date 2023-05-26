import React, { FC, MouseEvent } from "react";

interface PropsInterface {
  children: React.ReactNode;
  buttonClass: string;
  onClick?: (event: MouseEvent) => void;
  [k: string]: any;
}

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
