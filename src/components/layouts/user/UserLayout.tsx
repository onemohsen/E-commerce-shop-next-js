import React, { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PropsInterface {
  children: JSX.Element[] | JSX.Element;
}

const UserLayout: FC<PropsInterface> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
