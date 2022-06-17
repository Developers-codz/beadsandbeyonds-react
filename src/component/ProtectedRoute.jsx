import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "context/auth-context";
const ProtectedRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  const location = useLocation();
  return authToken !== "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
export { ProtectedRoute };
