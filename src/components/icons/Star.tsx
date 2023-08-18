import { ShapeStartIconType } from "@/models/Types";
import React from "react";

type Props = {
  shape: ShapeStartIconType;
  [key: string]: any;
};

export default function Star({ shape = "empty", ...rest }: Props) {
  return (
    <>
      {shape === "half" && (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9V6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z" />
        </svg>
      )}
      {shape === "full" && (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z" />
        </svg>
      )}
      {shape === "empty" && (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9L8.24 18.17L9.24 13.89L5.92 11.01L10.3 10.63L12 6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z" />
        </svg>
      )}
    </>
  );
}
