import { ErrorMessage, Field, useFormikContext } from "formik";
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
  const inputClasses = "border border-blue-200 rounded";

  let FieldComponent;

  if (!children) {
    FieldComponent = (
      <Field
        name={name}
        className={`${inputClasses} focus:outline-none p-2 `}
        {...rest}
      />
    );
  } else {
    FieldComponent = (
      <Field
        name={name}
        className={`${inputClasses} focus:outline-none p-2`}
        {...rest}
      >
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
          className="text-red-500 text-xs"
        />
      )}
    </>
  );
};

export default FieldFormik;
