import React, { FC, MouseEvent } from "react";
import BaseButton from "./BaseButton";

interface PropsInterface {
  title: string;
  customClass?: string;
  onClick?: (event: MouseEvent) => void;
  [k: string]: any;
}

const PrimaryButton: FC<PropsInterface> = ({
  title,
  onClick,
  customClass,
  ...rest
}) => {
  const primaryclass: string = `bg-primary hover:bg-blue-900 p-2 text-white rounded ${customClass}`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass} {...rest}>
      {title}
    </BaseButton>
  );
};

export default PrimaryButton;
