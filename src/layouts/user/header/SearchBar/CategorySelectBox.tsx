import { getList } from "@/features/categories";
import { Category } from "@/models/Category";
import { Field, useField } from "formik";
import React, { useEffect, useState } from "react";

type Props = {
  name: string;
};

function CategorySelectBox({ name }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);

  const [field, { error }] = useField(name);

  useEffect(() => {
    getList()
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  // useEffect(() => console.log("render CategorySelectBox"));

  return (
    <div className="relative">
      <Field
        {...field}
        as="select"
        className={`h-full border-2 ${
          error ? "border-red-500" : "border-primary"
        } bg-white px-2 focus:outline-none`}
      >
        <option value={"0"}>All Categories</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </Field>
      {error && (
        <span className="absolute left-0 top-10 text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

export default CategorySelectBox;
