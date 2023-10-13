import "@/assets/styles/globals.css";
import { ProgressBar } from "@/features/tools/nProgress";
import UserLayout from "@/layouts/user/UserLayout";
import { store } from "@/state/store";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const ShareComponent = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <>
      <ProgressBar />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
};

export default function App(props: AppPropsWithLayout) {
  const getLayout = props.Component.getLayout ?? null;

  if (getLayout) {
    return getLayout(
      <Provider store={store}>
        <ShareComponent {...props} />
      </Provider>,
    );
  }

  return (
    <Provider store={store}>
      <UserLayout>
        <ShareComponent {...props} />
      </UserLayout>
    </Provider>
  );
}
