import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "context/auth-context";

export const NonAuthenticatedRoute = () => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const location = useLocation();
  console.log(location);

  return isAuthTokenPresent ? (
    <Navigate to={location.state.from.pathname} replace />
  ) : (
    <Outlet />
  );
};
