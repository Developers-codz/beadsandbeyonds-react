import "./toast.css";
import { useToast } from "context/toast-context";

export const Toast = () => {
  const { toastMsg, toastState, toastBg } = useToast();
  return toastState ? (
    <div className="snackbar show" style={{ backgroundColor: toastBg }}>
      {toastMsg}
    </div>
  ) : (
    <div className="snackbar hide">{toastMsg}</div>
  );
};
