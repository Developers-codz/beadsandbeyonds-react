import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastMsg, setToastMsg] = useState("");
  const [toastState, setToastState] = useState(false);
  const [toastBg, setToastBg] = useState("");
  return (
    <ToastContext.Provider
      value={{
        toastMsg,
        setToastMsg,
        toastState,
        setToastState,
        toastBg,
        setToastBg,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
