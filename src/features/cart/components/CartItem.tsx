import { ProductType } from "@/models/Product";
import Image from "next/image";
import React from "react";

type Props = {
  item: ProductType;
  removeHandler: (id: number) => void;
  quantityChangeHandler: (id: number, quantity: string) => void;
};

export default function CartItem({
  item,
  removeHandler,
  quantityChangeHandler,
}: Props) {
  return (
    <div className="flex space-x-4 border-b border-zinc-200 pb-5">
      <div className="flex  h-20 w-20 justify-center rounded border bg-gray-50 p-2">
        <Image src={item.image} width={60} height={60} alt={item.title} />
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <h3 className=" text-base font-medium leading-snug text-zinc-900">
              {item.title}
            </h3>
            <p className="w-96  text-base font-normal leading-normal text-gray-400">
              {item.summary}
            </p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => removeHandler(item.id)}
                className="rounded-md border border-b border-zinc-200 bg-white px-2.5 py-1 text-center text-xs font-medium text-red-500 shadow"
              >
                Remove
              </button>
              <button className="rounded-md border border-zinc-200 bg-white px-2.5  py-1 text-center text-xs font-medium text-blue-600 shadow">
                Save for later
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-right text-base font-medium text-zinc-900">
              ${item.price}
            </span>
            <select
              name="quantity"
              className="mt-2 h-10 w-32 rounded-md border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              id=""
              onChange={(e) => quantityChangeHandler(item.id, e.target.value)}
              value={item.quantity}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
              <option value="9">Qty: 9</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
