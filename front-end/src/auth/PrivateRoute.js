import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from '.' 

const PrivateRoute = ({children}) => {
  const user = isAuthenticated();
  if (user !== null) {
    return children;
  } else {
    return <Navigate to='/signin' />
  }
}

export default PrivateRoute;
