import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { useToast } from "@/hooks/useToast";
import React from "react";

import { Formik, FormikErrors, FormikHelpers, Form as Formk } from "formik";
import * as Yup from "yup";
import FieldFormik from "@/components/commons/formik/FieldFormik";

interface RequestSupplierFormInterface {
  description: string;
  quentity: string;
  category?: string;
}

export default function Form() {
  const inputClasses = "border border-blue-200 rounded focus:outline-none p-2";

  const options = ["pc", "laptop", "phone"];

  const initialValues: RequestSupplierFormInterface = {
    description: "",
    quentity: "",
    category: "laptop",
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string().min(8).required(),
    quentity: Yup.number().required().min(1).max(10),
    category: Yup.string().equals(options),
  });

  const { showToast } = useToast();

  const formSubmitHandler = (
    values: RequestSupplierFormInterface,
    actions: FormikHelpers<RequestSupplierFormInterface>
  ) => {
    showToast("success", `data: ${JSON.stringify(values)}`);
    actions.resetForm();
  };

  const showErrorMessages = (
    errors: FormikErrors<RequestSupplierFormInterface>
  ) => {
    return (
      Object.keys(errors).length > 0 && (
        <div>
          <span className="text-xs text-red-500 font-bold">Form Errors:</span>
          <ul className="list-disc">
            {Object.values(errors).map((value, index) => (
              <li key={index} className="text-xs text-red-500">
                {value}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        formSubmitHandler(values, actions);
        console.log(actions);
      }}
      validationSchema={validationSchema}
    >
      {({ errors }) => (
        <Formk className="bg-white rounded p-8 flex flex-col space-y-5">
          <span>Send quote to suppliers</span>
          {showErrorMessages(errors)}
          <FieldFormik
            name=""
            disabled
            value="what item you need ?"
            className={`${inputClasses} focus:outline-none p-2`}
          />
          <FieldFormik
            as="textarea"
            rows="3"
            placeholder="Type more details"
            name="description"
            className={`${inputClasses} focus:outline-none p-2`}
          />
          <FieldFormik
            type="number"
            placeholder="Quantity"
            name="quentity"
            className={`${inputClasses} focus:outline-none p-2`}
          />
          <FieldFormik
            as="select"
            name="category"
            className={`${inputClasses} bg-white focus:outline-none p-2`}
          >
            {options.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </FieldFormik>

          <PrimaryButton
            title="Send inquiry"
            customClass={`w-32 ${
              Object.keys(errors).length > 0
                ? "bg-gray-500 hover:bg-gray-500 cursor-default"
                : ""
            }`}
            type="submit"
            disabled={Object.keys(errors).length > 0}
          />
        </Formk>
      )}
    </Formik>
  );
}
