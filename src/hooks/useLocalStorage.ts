import { useCallback } from "react";

const isLocalStorageDefine = typeof window === "undefined" ? false : true;

export const useLocalStorage = () => {
  const set = useCallback((key: string, value: any) => {
    if (!isLocalStorageDefine) return undefined;

    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  const remove = useCallback((key: string) => {
    if (!isLocalStorageDefine) return undefined;

    const item = localStorage.getItem(key);

    if (item) {
      localStorage.removeItem(key);
    }
  }, []);

  const get = useCallback((key: string) => {
    if (!isLocalStorageDefine) return undefined;
    if (localStorage) return localStorage.getItem(key);
  }, []);

  return { set, remove, get };
};
