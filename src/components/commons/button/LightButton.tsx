import React, { FC } from "react";
import BaseButton from "./BaseButton";

interface PropsInterface {
  title: string;
  customClass?: string;
  onClick?: () => void;
  [k: string]: any;
}

const LightButton: FC<PropsInterface> = ({
  title,
  onClick,
  customClass,
  ...rest
}) => {
  const primaryclass: string = `bg-white hover:bg-gray-200 p-2 border  rounded ${customClass}`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass} {...rest}>
      {title}
    </BaseButton>
  );
};

export default LightButton;
