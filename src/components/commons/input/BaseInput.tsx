import { inputType } from "@/models/custom/InputType";
import React, { FC } from "react";

interface PropsInterface {
  type: inputType;
  [k: string]: any;
}

const BaseInput: FC<PropsInterface> = ({ type, ...rest }) => {
  const attributes = {
    type,
    ...rest,
  };

  if (type === "textarea") return <textarea {...rest} />;

  return <input {...attributes} />;
};

export default BaseInput;
