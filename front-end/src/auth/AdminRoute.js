import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from '.' 

const AdminRoute = ({children}) => {
  const data = isAuthenticated();
  if (data !== null && data.user.role === 1) {
    return children;
  } else {
    return <Navigate to='/signin' />
  }
}

export default AdminRoute;
