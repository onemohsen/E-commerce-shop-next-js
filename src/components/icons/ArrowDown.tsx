import React from "react";

type Props = {
  [k: string]: string;
};

const ArrowDown = ({ ...rest }: Props) => {
  return (
    <svg
      {...rest}
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.59 0.258057L6 4.26556L1.41 0.258057L0 1.49181L6 6.74181L12 1.49181L10.59 0.258057Z"
        fill="#8B96A5"
      />
    </svg>
  );
};

export default ArrowDown;
