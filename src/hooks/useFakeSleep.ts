import { useEffect } from "react";

export const useFakeSleep = () => {
  let timer: undefined | ReturnType<typeof setTimeout> = undefined;

  const sleep = async (ms: number) => {
    return new Promise((resolve) => {
      timer = setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  return { sleep };
};
