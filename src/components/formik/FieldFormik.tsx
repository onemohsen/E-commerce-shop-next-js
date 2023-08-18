import { ErrorMessage, Field } from "formik";
import React, { FC } from "react";

interface PropsInterface {
  name: string;
  children?: React.ReactNode;
  [k: string]: any;
}

const FieldFormik: FC<PropsInterface> = ({
  name,
  children,
  showError,
  ...rest
}) => {
  let FieldComponent;

  if (!children) {
    FieldComponent = <Field name={name} {...rest} />;
  } else {
    FieldComponent = (
      <Field name={name} {...rest}>
        {children}
      </Field>
    );
  }

  return (
    <>
      {FieldComponent}
      {name && showError && (
        <ErrorMessage
          name={name}
          component="span"
          className="text-xs text-red-500"
        />
      )}
    </>
  );
};

export default FieldFormik;
