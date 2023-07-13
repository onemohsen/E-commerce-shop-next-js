import React from "react";

type Props = {
  [key: string]: any;
};

export default function Check({ ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.79508 15.875L4.62508 11.705L3.20508 13.115L8.79508 18.705L20.7951 6.70504L19.3851 5.29504L8.79508 15.875Z" />
    </svg>
  );
}
