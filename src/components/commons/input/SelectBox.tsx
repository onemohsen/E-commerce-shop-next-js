import React, { FC, ReactElement } from "react";

interface PropsInterface {
  label?: string;
  labelClassName?: string;
  children: ReactElement<"option"> | ReactElement<"option">[];
  [k: string]: any;
}

function getPropValue<T = string>(
  need: string,
  object: { [k: string]: any }
): T | undefined {
  return Object.values(object)[
    Object.keys(object).findIndex((i) => i === need)
  ];
}

function hasProp(need: string, object: { [k: string]: any }): boolean {
  const find = Object.keys(object).findIndex((i) => i === need);
  return find > 0;
}

const SelectBox: FC<PropsInterface> = ({
  label,
  labelClassName,
  children,
  ...rest
}) => {
  const idAttribute = getPropValue("id", rest) ?? "";
  const classNameAttribute = getPropValue("className", rest) ?? "";

  const inputClass = `${classNameAttribute} focus:outline-none p-2 rounded`;
  const labelClass = label && `${labelClassName ?? ""} mr-2`;

  const hasRequiredAttribute = hasProp("required", rest);
  const requiredJsx = <span className="mx-1 text-red-500">*</span>;

  const labelInput = label && (
    <label htmlFor={idAttribute} className={labelClass}>
      {label}
      {hasRequiredAttribute && requiredJsx}
    </label>
  );

  const requiredWithoutLabel = !label && hasRequiredAttribute && requiredJsx;

  return (
    <>
      {labelInput}

      {requiredWithoutLabel}
      <select {...rest} className={inputClass}>
        {children}
      </select>
    </>
  );
};

export default SelectBox;
