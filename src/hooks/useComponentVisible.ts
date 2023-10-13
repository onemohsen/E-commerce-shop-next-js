import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const ref = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current?.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
