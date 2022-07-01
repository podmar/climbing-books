import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  return loading ? <p>Loading</p> : user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
