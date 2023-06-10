import PrimaryButton from "@/components/commons/button/PrimaryButton";
import { Category } from "@/models/Category";
import React, { FC } from "react";

const SearchBar: FC = () => {
  const categories: Category[] = [
    { id: 2, name: "Technology" },
    { id: 3, name: "Home" },
  ];

  return (
    <div className="flex">
      <input
        type="text"
        className=" border-2 border-r-0 border-primary rounded-l-lg px-1.5 py-1.5  focus:outline-none"
        placeholder="Search"
      />
      <select className=" border-2 border-primary bg-white px-2 focus:outline-none">
        <option value="All Categories">All Categories</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          );
        })}
      </select>

      <PrimaryButton
        title="Search"
        customClass="px-5 py-1.5 rounded-l-none rounded-r-lg"
      />
    </div>
  );
};

export default SearchBar;
