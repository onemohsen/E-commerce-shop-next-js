import React, { FC, MouseEvent } from "react";

interface PropsInterface {
  children: React.ReactNode;
  buttonClass: string;
  onClick?: (event: MouseEvent) => void;
}

const BaseButton: FC<PropsInterface> = ({ buttonClass, onClick, children }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
