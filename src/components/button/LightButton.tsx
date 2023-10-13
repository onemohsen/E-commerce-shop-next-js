import type { FC, HtmlHTMLAttributes, ReactNode } from "react";
import BaseButton from "./BaseButton";

type Props = {
  title?: string;
  customClass?: string;
  onClick?: () => void;
  children?: ReactNode;
  [k: string]: any;
} & HtmlHTMLAttributes<HTMLButtonElement>;

const LightButton: FC<Props> = ({
  title,
  onClick,
  customClass,
  children,
  ...rest
}) => {
  const primaryclass: string = `bg-white hover:bg-gray-200 p-2 border  rounded ${customClass} disabled:opacity-50`;

  return (
    <BaseButton onClick={onClick} buttonClass={primaryclass} {...rest}>
      {title && <span>{title}</span>}
      {children}
    </BaseButton>
  );
};

export default LightButton;
