import React, { FC } from "react";
import BaseButton from "./BaseButton";

interface PropsInterface {
  title?: string;
  customClass?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  [k: string]: any;
}

const LightButton: FC<PropsInterface> = ({
  title,
  onClick,
  customClass,
  children,
  ...rest
}) => {
  const primaryclass: string = `bg-white hover:bg-gray-200 p-2 border  rounded ${customClass}`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass} {...rest}>
      {title && <span>{title}</span>}
      {children}
    </BaseButton>
  );
};

export default LightButton;