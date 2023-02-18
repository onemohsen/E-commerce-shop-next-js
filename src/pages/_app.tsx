import UserLayout from "@/components/layouts/user/UserLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? null;

  if (getLayout) {
    return getLayout(<Component {...pageProps} />);
  }

  return (
    <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
  );
}
