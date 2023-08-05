import UserLayout from "@/components/layouts/user/UserLayout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? null;

  if (getLayout) {
    return getLayout(
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>,
    );
  }

  return (
    <UserLayout>
      <Component {...pageProps} />
      <ToastContainer />
    </UserLayout>
  );
}
