import { ToastOptions, toast } from "react-toastify";

type ToastifyType = "success" | "warning" | "danger";

export const useToast = () => {
  const showToast = (
    type: ToastifyType,
    message: string,
    options?: ToastOptions,
  ) => {
    const toastFunctions = {
      success: toast.success,
      warning: toast.warning,
      danger: toast.error,
    };
    toastFunctions[type](message, options);
  };

  return { showToast };
};
