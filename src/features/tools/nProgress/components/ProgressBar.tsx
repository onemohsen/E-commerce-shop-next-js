import "nprogress/nprogress.css";

import { useEffect } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/router";

export function ProgressBar() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router.events]);

  return (
    <style>
      {/* {`
          #nprogress .bar {
            height: 4px;
          }
       `} */}
    </style>
  );
}
