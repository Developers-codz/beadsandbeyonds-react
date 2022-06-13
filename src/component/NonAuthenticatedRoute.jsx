import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "context/auth-context";

export const NonAuthenticatedRoute = () => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const location = useLocation();
  const path = location?.state?.from?.pathname

  return isAuthTokenPresent ? (
    <Navigate to={path === undefined ? "/products" : path} replace />
  ) : (
    <Outlet />
  );
};
