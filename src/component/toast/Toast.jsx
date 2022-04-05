import "./toast.css";
import { useToast } from "context/toast-context";
import { useEffect } from "react";

export const Toast = () => {
  const {
    toastVal: { isOpen, bg, msg },
    setToastVal,
  } = useToast();
  return isOpen ? (
    <div className="snackbar show" style={{ backgroundColor: bg }}>
      {msg}
    </div>
  ) : (
    <div className="snackbar hide">{msg}</div>
  );
};
