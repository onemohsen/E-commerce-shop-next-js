import React, { FC } from "react";

type inputType = "text" | "password";

interface PropsInterface {
  type: inputType;
  [k: string]: any;
}

const BaseInput: FC<PropsInterface> = ({ type, ...rest }) => {
  const attributes = {
    type,
    ...rest,
  };

  return <input {...attributes} />;
};

export default BaseInput;
