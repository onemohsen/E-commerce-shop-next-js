import React from "react";
import dynamic from "next/dynamic";

type Props = {
  name: string;
};

const getDynamicComponent = (name: string) =>
  dynamic(() => import(`./Product${name}`), {
    ssr: true,
    loading: () => <div>Loading...</div>,
  });

export default function DynamicTabComponent({ name }: Props) {
  const DynamicComponent = getDynamicComponent(name);

  return <DynamicComponent />;
}
