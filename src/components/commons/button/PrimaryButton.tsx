import React, { FC, MouseEvent } from "react";
import BaseButton from "./BaseButton";

interface PropsInterface {
  title: string;
  customClass?: string;
  onClick?: (event: MouseEvent) => void;
}

const PrimaryButton: FC<PropsInterface> = ({ title, onClick, customClass }) => {
  const primaryclass: string = `bg-primary hover:bg-blue-900 p-2 text-white rounded ${customClass}`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass}>
      {title}
    </BaseButton>
  );
};

export default PrimaryButton;
