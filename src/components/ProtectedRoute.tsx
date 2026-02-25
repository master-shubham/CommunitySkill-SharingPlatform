import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps{
    children:ReactNode
}
const ProtectedRoute = ({ children }:ProtectedRouteProps) => {
    const {isLoggedIn} = useAuth()
  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace/>
  }

  return <>{children}</>
};

export default ProtectedRoute
