import { ErrorMessage } from "formik";
import React, { FC } from "react";

interface PropsInterface {
  name: string;
  [k: string]: any;
}

const ErrorMessageFormik: FC<PropsInterface> = (props) => {
  return (
    <span className="text-red-500 text-xs">
      <ErrorMessage {...props} />
    </span>
  );
};

export default ErrorMessageFormik;
