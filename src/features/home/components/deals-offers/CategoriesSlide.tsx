import { Category } from "@/models/Category";
import React, { useEffect, useState } from "react";
import Banner1 from "@/assets/images/home/categories-slider/Banner-board-800x420 2.jpg";
import Image from "next/image";
import PrimaryButton from "@/components/button/PrimaryButton";
import BaseButton from "@/components/button/BaseButton";
import Profile from "@/components/icons/Profile";

const categories: Category[] = [
  { id: 1, name: "Automobiles", image: Banner1.src },
  { id: 2, name: "Clothes and wear", image: "https://picsum.photos/id/2/900" },
  { id: 3, name: "Home interiors", image: "https://picsum.photos/id/3/900" },
  { id: 4, name: "Computer and tech", image: "https://picsum.photos/id/4/900" },
  { id: 5, name: "Tools, equipments", image: "https://picsum.photos/id/5/900" },
  {
    id: 6,
    name: "Sports and outdoor",
    image: "https://picsum.photos/id/6/900",
  },
  { id: 7, name: "Animal and pets", image: "https://picsum.photos/id/7/900" },
  { id: 8, name: "Machinery tools", image: "https://picsum.photos/id/8/900" },
  { id: 9, name: "More category", image: "https://picsum.photos/id/9/900" },
];

export function CategoriesSlide() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeCategoryClass = (categoryId: number) => {
    const cssClass = `px-2 py-2 cursor-pointer hover:bg-blue-200 ${
      activeCategory.id === categoryId ? "bg-blue-100 rounded font-bold" : ""
    }`;
    return cssClass;
  };

  const categoryClickHandler = (category: Category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const lastIndex = categories.findIndex(
        (item) => item.id === activeCategory.id,
      );
      const newIndex = categories[lastIndex + 1] ? lastIndex + 1 : 0;

      setActiveCategory(categories[newIndex]);
    }, 7000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <div className="flex max-h-[420px] w-full space-x-3 bg-white p-4">
      <div className="flex w-1/6 flex-col space-y-1 ">
        {categories.map((category) => (
          <a
            onClick={() => categoryClickHandler(category)}
            className={activeCategoryClass(category.id)}
            key={category.id}
          >
            {category.name}
          </a>
        ))}
      </div>
      <div className="relative w-4/6 overflow-hidden">
        <Image
          src={activeCategory.image!}
          style={{ objectFit: "cover" }}
          width={1200}
          height={1200}
          alt={activeCategory.name}
        />
        <div className="absolute left-10 top-12">
          <div className="rounded bg-white bg-opacity-20 p-5 text-lg">
            <p>Latest trending</p>
            <p className="text-xl font-bold">{activeCategory.name}</p>
            <button className="mt-3 rounded bg-white px-3 py-1 text-sm hover:bg-gray-400 hover:text-white">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="grid-row-3 grid w-1/6 space-y-2">
        <div className="flex flex-col items-center space-y-4 rounded bg-blue-50 p-3">
          <div className="flex space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200">
              <Profile fill="#fff" width={30} height={30} />
            </div>

            <p className="">
              Hi, user
              <br></br>
              let’s get stated
            </p>
          </div>
          <PrimaryButton title="Join now " customClass="py-1 w-full text-sm" />
          <BaseButton buttonClass="bg-white hover:bg-gray-400 hover:text-white text-blue-500 py-1 w-full text-sm">
            Login in
          </BaseButton>
          <div></div>
        </div>
        <p className="rounded bg-orange-500 p-3 text-white">
          Get US $10 off with a new supplier
        </p>
        <p className="rounded bg-teal-500 p-3 text-white">
          Send quotes with supplier preferences
        </p>
      </div>
    </div>
  );
}
