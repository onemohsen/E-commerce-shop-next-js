import React from "react";
import Logo from "./header/Logo";
import Social from "./footer/Social";
import Image from "next/image";
import GooglePlayImage from "@/assets/images/google-play.jpg";
import AppStoreImage from "@/assets/images/app-store.jpg";
import SubFooter from "./footer/SubFooter";

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
      <div className=" container mx-auto">
        <div className=" grid grid-cols-3 gap-4 justify-items-stretch py-10">
          <div className="justify-self-start space-y-3">
            <Logo />
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <Social />
          </div>
          <div className="justify-self-center w-full flex justify-between">
            {footerLists.map((list) => (
              <ul key={list.headerTitle} className="space-y-2">
                <li className="font-bold">{list.headerTitle}</li>
                {list.items.map((item) => (
                  <li key={item.route}>{item.title}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="justify-self-end ">
            <span className="block mb-2 font-bold">Get app</span>
            <div className="space-y-3">
              <Image src={GooglePlayImage} alt="google play" />
              <Image src={AppStoreImage} alt="app store" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 ">
        <div className="container mx-auto">
          <SubFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
