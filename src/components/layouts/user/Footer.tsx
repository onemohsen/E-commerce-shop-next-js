import React from "react";
import Logo from "./header/Logo";
import Social from "./footer/Social";
import Image from "next/image";
import GooglePlayImage from "@/assets/images/google-play.jpg";
import AppStoreImage from "@/assets/images/app-store.jpg";
import SubFooter from "./footer/SubFooter";
import ContainerWrapper from "../../commons/wrapper/ContainerWrapper";

type footerLink = {
  title: string;
  route: string;
};

type footerList = {
  headerTitle: string;
  items: footerLink[];
};

const Footer = () => {
  const footerLists: footerList[] = [
    {
      headerTitle: "About",
      items: [
        { title: "About Us", route: "/about-us" },
        { title: "Find store", route: "/find-store" },
        { title: "Categories", route: "/categories" },
        { title: "Blogs", route: "/blogs" },
      ],
    },
    {
      headerTitle: "Partnership",
      items: [
        { title: "About Us", route: "/about-us" },
        { title: "Find store", route: "/find-store" },
        { title: "Categories", route: "/categories" },
        { title: "Blogs", route: "/blogs" },
      ],
    },
    {
      headerTitle: "Information",
      items: [
        { title: "Help Center", route: "/about-us" },
        { title: "Money Refund", route: "/find-store" },
        { title: "Shiping", route: "/categories" },
        { title: "Contact US", route: "/blogs" },
      ],
    },
    {
      headerTitle: "For users",
      items: [
        { title: "Login", route: "/login" },
        { title: "Register", route: "/register" },
        { title: "Settings", route: "/settings" },
        { title: "My Orders", route: "/my-orders" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <ContainerWrapper>
        <div className=" grid grid-cols-8 justify-items-stretch gap-4 py-10">
          <div className="col-span-2 space-y-3 justify-self-start">
            <Logo />
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <Social />
          </div>
          <div className="col-span-5 flex w-full justify-between justify-self-center px-20">
            {footerLists.map((list) => (
              <ul key={list.headerTitle} className="space-y-2">
                <li className="font-bold">{list.headerTitle}</li>
                {list.items.map((item) => (
                  <li key={item.route}>{item.title}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="col-span-1 justify-self-end ">
            <span className="mb-2 block font-bold">Get app</span>
            <div className="space-y-3">
              <Image src={GooglePlayImage} alt="google play" />
              <Image src={AppStoreImage} alt="app store" />
            </div>
          </div>
        </div>
      </ContainerWrapper>
      <div className="bg-gray-100 ">
        <ContainerWrapper>
          <SubFooter />
        </ContainerWrapper>
      </div>
    </div>
  );
};

export default Footer;
