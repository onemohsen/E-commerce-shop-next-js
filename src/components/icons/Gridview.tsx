import React from "react";

type Props = {
  [key: string]: any;
};

export default function Gridview({ ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3H3V11H11V3Z" />
      <path d="M11 13H3V21H11V13Z" />
      <path d="M21 3H13V11H21V3Z" />
      <path d="M21 13H13V21H21V13Z" />
    </svg>
  );
}
