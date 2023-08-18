import React, { FC } from "react";

interface PropsInterface {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper: FC<PropsInterface> = ({ children, className }) => {
  const customClassName = `container mx-auto ${className}`;

  return <div className={customClassName}>{children}</div>;
};

export default ContainerWrapper;
