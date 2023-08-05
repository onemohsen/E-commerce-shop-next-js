import React from "react";

type Props = {
  [k: string]: string;
};

const ArrowLeft = ({ ...rest }: Props) => {
  return (
    <svg {...rest} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" />
    </svg>
  );
};

export default ArrowLeft;
