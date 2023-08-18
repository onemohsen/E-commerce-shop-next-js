import { ErrorMessage } from "formik";
import React, { FC } from "react";

interface PropsInterface {
  name: string;
  [k: string]: any;
}

const ErrorMessageFormik: FC<PropsInterface> = (props) => {
  return (
    <span className="text-xs text-red-500">
      <ErrorMessage {...props} />
    </span>
  );
};

export default ErrorMessageFormik;
