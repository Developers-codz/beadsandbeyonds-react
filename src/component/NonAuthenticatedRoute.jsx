import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { Profile } from "pages";

export const NonAuthenticatedRoute = () => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();

  return isAuthTokenPresent ? <Navigate to="/profile" /> : <Outlet />;
};
