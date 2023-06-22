import React from "react";

type Props = {
  [key: string]: any;
};

export default function Listview({ ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 8H3V4H21V8ZM21 10H3V14H21V10ZM21 16H3V20H21V16Z" />
    </svg>
  );
}
