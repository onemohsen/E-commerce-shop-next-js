import * as Yup from "yup";

export type SearchFormType = {
  search: string;
  category: string;
};

export const formValues: SearchFormType = {
  search: "",
  category: "0",
};

export const formSchema = Yup.object().shape({
  search: Yup.string().min(3).required(),
  category: Yup.number().required(),
});
