import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "context/auth-context";
const ProtectedRoute = () => {
  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  const location = useLocation();
  return isAuthTokenPresent ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export { ProtectedRoute };
