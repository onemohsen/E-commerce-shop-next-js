import { Check, Message, ShopingBasket } from "@/components/icons/Index";
import StarIconBox from "@/components/products/RateBox";
import React, { useContext } from "react";
import { SingleProductContext } from "../contexts/SingleProductContext";

type Props = {
  className: string;
};

export default function ProductInfo({ className }: Props) {
  const { product } = useContext(SingleProductContext);

  const productAttributes = [
    [{ key: "Price", value: "Negotiable" }],
    [
      { key: "Type: ", value: "Classic  shoes" },
      { key: "Material: ", value: "Plastic material" },
      { key: "Design: ", value: "Modern nice" },
    ],
    [
      { key: "Customization: ", value: "Customization" },
      { key: "Protection: ", value: "Refund Policy" },
      { key: "Warranty: ", value: "2 years full warranty " },
    ],
  ];

  const inStock = () => {
    if (product.quantity > 0) {
      return (
        <div className="flex">
          <Check className="h-5 w-5 fill-green-700" />
          <span className="text-green-700">in stock</span>
        </div>
      );
    }
  };

  const quantityPrice = (
    index: number,
    price: number,
    minQ: number,
    maxQ?: number,
  ) => {
    const priceClass = index == 0 ? "text-red-500" : "";

    return (
      <div className="flex">
        {index != 0 && <span className="border-l border-gray-400 px-2" />}
        <div className="flex flex-col">
          <span className={`text-lg font-bold ${priceClass}`}>${price}</span>
          <span className="text-sm text-gray-500">
            {minQ}
            {maxQ ? "-" : "+"}
            {maxQ} pcs
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      {inStock()}
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <div className="flex space-x-4 ">
        <StarIconBox score={product.rate ?? 0} />
        <div className="space-x-1">
          <Message className="inline h-5 w-5 fill-gray-500" />
          <span className="text-gray-500">{product.rate} reviews</span>
        </div>
        <div className="space-x-1">
          <ShopingBasket className="inline h-5 w-5 fill-gray-500" />
          <span className="text-gray-500">154 sold</span>
        </div>
      </div>
      <div className="flex justify-between space-x-5 bg-orange-200 p-5">
        {quantityPrice(0, product.price, 50, 100)}
        {quantityPrice(1, 90, 100, 700)}
        {quantityPrice(2, 78, 700)}
      </div>
      <div className="space-y-2">
        {productAttributes.map((group, index) => (
          <React.Fragment key={index}>
            {group.map((item) => (
              <div key={item.key}>
                <span className="w-40 text-gray-500">{item.key} : </span>
                <span className="text-gray-700">{item.value}</span>
              </div>
            ))}
            <span className="mb-5 block w-full border-b border-gray-300 pt-2"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
