import React from "react";

type Props = {
  [k: string]: string;
};

const ArrowUp = ({ ...rest }: Props) => {
  return (
    <svg
      {...rest}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 8.29504L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29504Z"
        fill="#8B96A5"
      />
    </svg>
  );
};

export default ArrowUp;
