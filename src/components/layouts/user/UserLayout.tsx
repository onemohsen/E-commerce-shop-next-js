import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface PropsInterface {
  children: React.ReactNode;
}

const UserLayout: FC<PropsInterface> = (props) => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
