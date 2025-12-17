import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth.js"; 

function PublicRoute({ children }) {
  const { user } = useAuth();

  // إذا كان المستخدم موجوداً (مسجل دخول)، نمنعه من رؤية هذه الصفحة ونحوله للداشبورد
  if (user && user.token) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}

export default PublicRoute;