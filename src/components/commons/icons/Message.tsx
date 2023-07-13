import React from "react";

type Props = {
  [key: string]: any;
};

export default function Message({ ...rest }: Props) {
  return (
    <svg {...rest} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33317 3.33329H16.6665V13.3333H4.30817L3.33317 14.3083V3.33329ZM3.33317 1.66663C2.4165 1.66663 1.67484 2.41663 1.67484 3.33329L1.6665 18.3333L4.99984 15H16.6665C17.5832 15 18.3332 14.25 18.3332 13.3333V3.33329C18.3332 2.41663 17.5832 1.66663 16.6665 1.66663H3.33317ZM4.99984 9.99996H14.9998V11.6666H4.99984V9.99996ZM4.99984 7.49996H14.9998V9.16663H4.99984V7.49996ZM4.99984 4.99996H14.9998V6.66663H4.99984V4.99996Z" />
    </svg>
  );
}
