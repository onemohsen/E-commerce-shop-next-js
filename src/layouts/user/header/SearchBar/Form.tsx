import PrimaryButton from "@/components/button/PrimaryButton";
import { getListModel } from "@/features/products";
import type { ProductType } from "@/models/Product";
import type { SearchFormType } from "@/utils/form/HeaderSearchForm";
import { formSchema, formValues } from "@/utils/form/HeaderSearchForm";
import { Formik, Form as FormikForm } from "formik";
import { useEffect, useState } from "react";
import CategorySelectBox from "./CategorySelectBox";
import InputText from "./InputText";
import ReseultSearch from "./ReseultSearch";
import type { ParamsType } from "@/models/Model";
import useComponentVisible from "@/hooks/useComponentVisible";

const Form = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const {
    ref: refResults,
    isComponentVisible: showResults,
    setIsComponentVisible: setShowResults,
  } = useComponentVisible(false);

  const submitForm = async (values: SearchFormType) => {
    const queryParams: ParamsType = {
      filter: {
        ["title"]: `%${values.search}`,
      },
      param: {
        ...(values.category !== "0" ? { ["categories"]: values.category } : {}),
      },
    };

    const response = await getListModel(queryParams);
    const { data } = await response.json();

    setProducts(data);
    setShowResults(true);
    console.log("form submited", values, data);
  };

  useEffect(() => console.log("Form re-render"));

  return (
    <div ref={refResults}>
      <Formik
        initialValues={formValues}
        validationSchema={formSchema}
        onSubmit={submitForm}
      >
        <FormikForm className="flex">
          <InputText name="search">
            {showResults && (
              <ReseultSearch
                products={products}
                itemClickHandler={() => setShowResults(false)}
              />
            )}
          </InputText>

          <CategorySelectBox name="category" />
          <PrimaryButton
            title="Search"
            customClass="px-5 py-1.5 rounded-l-none rounded-r-lg"
            type="submit"
          />
        </FormikForm>
      </Formik>
    </div>
  );
};

export default Form;
