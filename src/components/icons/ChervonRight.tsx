import React from "react";

type Props = {
  [key: string]: any;
};

export default function ChervonRight({ ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.70492 6L8.29492 7.41L12.8749 12L8.29492 16.59L9.70492 18L15.7049 12L9.70492 6Z" />
    </svg>
  );
}
