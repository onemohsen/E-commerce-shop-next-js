import LightButton from "@/components/button/LightButton";
import FieldFormik from "@/components/formik/FieldFormik";
import BoxWrapper from "@/components/wrapper/BoxWrapper";
import { useToast } from "@/hooks/useToast";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";

interface RequestSupplierFormInterface {
  coupon: string;
}

export default function CartCoupon() {
  const initialValues: RequestSupplierFormInterface = {
    coupon: "",
  };

  const validationSchema = Yup.object().shape({
    coupon: Yup.string().min(4).required(),
  });

  const { showToast } = useToast();

  const formSubmitHandler = (
    values: RequestSupplierFormInterface,
    actions: FormikHelpers<RequestSupplierFormInterface>,
  ) => {
    showToast("success", `data: ${JSON.stringify(values)}`);
    actions.resetForm();
  };

  const showErrorMessages = (
    errors: FormikErrors<RequestSupplierFormInterface>,
  ) => {
    return (
      Object.keys(errors).length > 0 && (
        <div>
          <span className="text-xs font-bold text-red-500">Form Errors:</span>
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
    <BoxWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          formSubmitHandler(values, actions);
        }}
        validationSchema={validationSchema}
      >
        {({ errors }) => (
          <Form className="flex flex-col rounded bg-white">
            <span>have a coupon ?</span>
            {showErrorMessages(errors)}
            <div className="mt-2 flex">
              <FieldFormik
                type="text"
                placeholder="Add coupon"
                name="coupon"
                className={`w-full border border-r-0 p-2 focus:outline-none`}
              />

              <LightButton
                title="Apply"
                customClass={`w-32 text-primary ${
                  Object.keys(errors).length > 0 ? "cursor-default" : ""
                }`}
                type="submit"
                disabled={Object.keys(errors).length > 0}
              />
            </div>
          </Form>
        )}
      </Formik>
    </BoxWrapper>
  );
}
