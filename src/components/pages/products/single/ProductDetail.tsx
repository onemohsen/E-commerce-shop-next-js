import React, { useState } from "react";
import DynamicTabComponent from "./product-detail/DynamicTabComponent";

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
    <ul className="flex space-x-5 mb-4 ">
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
      className={` border-b border-spacing-3 ${
        isActive ? "text-primary cursor-default" : "cursor-pointer"
      } `}
      onClick={() => (!isActive ? clickHandler(title) : null)}
    >
      <span className="px-3">{title}</span>
      {isActive && (
        <hr className="w-full mt-2 border-2 rounded-md border-primary" />
      )}
    </li>
  );
};

export default function ProductDetail({ className }: Props) {
  const [activeTab, setActiveTab] = useState(`Description`);

  return (
    <div className={className}>
      <Tab
        activeTab={activeTab}
        clickHandler={(title) => setActiveTab(() => title)}
      />
      <DynamicTabComponent name={activeTab} />
    </div>
  );
}
