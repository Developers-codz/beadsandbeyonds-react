import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastVal, setToastVal] = useState({
    msg: "",
    isOpen: false,
    bg: "",
  });
  return (
    <ToastContext.Provider
      value={{
        toastVal,
        setToastVal,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
