import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { useEffect } from "react";
const ProtectedRoute = () => {

  const {
    authState: { isAuthTokenPresent },
  } = useAuth();
  // console.log(isAuthTokenPresent);
  return isAuthTokenPresent ? <Outlet /> : <Navigate to="/login" />;
};
export { ProtectedRoute };
