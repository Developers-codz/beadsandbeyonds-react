import "./toast.css";
import { useToast } from "context/toast-context";

export const Toast = () => {
  const {
    toastVal: { isOpen, bg, msg },
  } = useToast();
  return isOpen ? (
    <div className="snackbar show" style={{ backgroundColor: bg }}>
      {msg}
    </div>
  ) : (
    <div className="snackbar hide">{msg}</div>
  );
};
