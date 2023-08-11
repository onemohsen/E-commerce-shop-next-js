import { Cart, Lock, Message } from "@/components/commons/icons/Index";
import React from "react";

type FeatureProps = {
  title: string;
  description: string;
  IconComponent: JSX.Element;
};

const Feature = ({ title, description, IconComponent }: FeatureProps) => {
  return (
    <div className="flex w-1/3  space-x-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
        {IconComponent}
      </div>
      <div>
        <span className=" block text-zinc-900">{title}</span>
        <span className=" block text-zinc-400">{description}</span>
      </div>
    </div>
  );
};

export default function CartFeatures() {
  const features: FeatureProps[] = [
    {
      title: "Secure payment",
      description: "Have you ever finally just ",
      IconComponent: <Lock className="h-6 w-6 fill-gray-500" />,
    },
    {
      title: "Customer support",
      description: "Have you ever finally just ",
      IconComponent: <Message className="h-6 w-6 fill-gray-500" />,
    },
    {
      title: "Free delivery",
      description: "Have you ever finally just ",
      IconComponent: <Cart className="h-6 w-6 fill-gray-500" />,
    },
  ];

  return (
    <div className="flex w-9/12 py-5">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
}
