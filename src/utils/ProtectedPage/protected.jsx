import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils/Context/useAuth.js";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user || !user.token) {
    return <Navigate to='/signin'  replace  />
    
  }

  return children;
}

export default ProtectedRoute;
