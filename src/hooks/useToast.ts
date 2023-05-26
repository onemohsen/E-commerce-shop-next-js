import { useState } from "react";
import { ToastOptions, toast } from "react-toastify";

type ToastifyType = "success" | "warning" | "danger";

export const useToast = () => {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (type:ToastifyType ,message:string,options?:ToastOptions) => {
    setToastMessage(message);
    const toastFunctions = {
      success: toast.success,
      warning: toast.warning,
      danger: toast.error,
    };
    toastFunctions[type](message,options);
  };

  return { toastMessage, showToast };
};