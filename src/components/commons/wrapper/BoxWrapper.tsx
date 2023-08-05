import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export default function BoxWrapper({ children, className, title }: Props) {
  return (
    <div className={`rounded border bg-white p-4 ${className}`}>
      {title && <h3 className="mb-5 text-lg font-semibold">{title}</h3>}
      {children}
    </div>
  );
}
