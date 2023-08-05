import React, { useState } from "react";
import DynamicTabComponent from "./product-detail/DynamicTabComponent";
import BoxWrapper from "@/components/commons/wrapper/BoxWrapper";

type TabType = {
  activeTab: string;
  clickHandler: (title: string) => void;
};

type LiType = {
  title: string;
  isActive: boolean;
  clickHandler: (title: string) => void;
};

type Props = {
  className?: string;
};

const Tab = ({ activeTab, clickHandler }: TabType) => {
  const tabs = ["Description", "Reviews", "Shipping", "AboutCompany"];

  return (
    <ul className="mb-4 flex space-x-5 ">
      {tabs.map((tab, index) => (
        <Li
          title={tab}
          isActive={tab === activeTab}
          key={index}
          clickHandler={(title) => clickHandler(title)}
        />
      ))}
    </ul>
  );
};

const Li = ({ title, isActive, clickHandler }: LiType) => {
  return (
    <li
      className={` border-spacing-3 border-b ${
        isActive ? "cursor-default text-primary" : "cursor-pointer"
      } `}
      onClick={() => (!isActive ? clickHandler(title) : null)}
    >
      <span className="px-3">{title}</span>
      {isActive && (
        <hr className="mt-2 w-full rounded-md border-2 border-primary" />
      )}
    </li>
  );
};

export default function ProductDetail({ className }: Props) {
  const [activeTab, setActiveTab] = useState(`Description`);

  return (
    <BoxWrapper className={className}>
      <Tab
        activeTab={activeTab}
        clickHandler={(title) => setActiveTab(() => title)}
      />
      <DynamicTabComponent name={activeTab} />
    </BoxWrapper>
  );
}
