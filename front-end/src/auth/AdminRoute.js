import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from '.' 

const AdminRoute = ({children}) => {
  const { user } = isAuthenticated();
  console.log(user);
  if (user !== null && user.role === 1) {
    return children;
  } else {
    return <Navigate to='/signin' />
  }
}

export default AdminRoute;
