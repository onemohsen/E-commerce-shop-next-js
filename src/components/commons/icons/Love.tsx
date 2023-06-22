import React, { useState } from "react";

type Props = {
  isFill?: boolean;
  [key: string]: any;
};

export default function Love({ isFill = false, ...rest }: Props) {
  return (
    <div>
      {isFill && (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
          {
            <path d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.32501C2 5.24501 4.42 2.82501 7.5 2.82501C9.24 2.82501 10.91 3.63501 12 4.91501C13.09 3.63501 14.76 2.82501 16.5 2.82501C19.58 2.82501 22 5.24501 22 8.32501C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z" />
          }
        </svg>
      )}

      {!isFill && (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
          <path d="M16.5 2.82501C14.76 2.82501 13.09 3.63501 12 4.91501C10.91 3.63501 9.24 2.82501 7.5 2.82501C4.42 2.82501 2 5.24501 2 8.32501C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32501C22 5.24501 19.58 2.82501 16.5 2.82501ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32501C4 6.32501 5.5 4.82501 7.5 4.82501C9.04 4.82501 10.54 5.81501 11.07 7.18501H12.94C13.46 5.81501 14.96 4.82501 16.5 4.82501C18.5 4.82501 20 6.32501 20 8.32501C20 11.215 16.86 14.065 12.1 18.375Z" />
        </svg>
      )}
    </div>
  );
}
