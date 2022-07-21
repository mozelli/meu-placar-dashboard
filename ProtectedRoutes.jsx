import { Navigate } from "react-router-dom";

import { useAuth } from "./src/contexts/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { currentUser } = useAuth();

  if(!currentUser) {
    return <Navigate to="/sign-in" />
  }

  return children;
}

export default ProtectedRoutes;