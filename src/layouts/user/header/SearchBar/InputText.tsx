import { Field, useField } from "formik";

import type { ReactNode } from "react";

type Props = { name: string; children: ReactNode };

export default function InputText({ name, children }: Props) {
  const [field, { error }] = useField(name);

  const className = ` rounded-l-lg border-2 border-r-0 ${
    error ? "border-red-500" : "border-primary"
  } px-1.5 py-1.5  focus:outline-none `;

  return (
    <div className="relative">
      <Field
        {...field}
        type="text"
        className={className}
        placeholder="Search"
      />
      {error && (
        <span className="absolute left-0 top-10 text-xs text-red-500">
          {error}
        </span>
      )}
      <div className="absolute z-10">{children}</div>
    </div>
  );
}
