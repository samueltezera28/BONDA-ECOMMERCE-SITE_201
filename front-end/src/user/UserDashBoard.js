import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

const UserDashBoard = () => {
  const { user: { name, email, role } } = isAuthenticated();

  return (
    <Layout title='Dashboard'>
    <ul>
      {/* user links */}
        {/* update profile
        my cart */}
      {/* user purchase history */}
      <li>{name}</li>
      <li>{email}</li>
      <li>{role === 0 ? 'User' : 'Admin'}</li>
    </ul>
    </Layout>
  )
}

export default UserDashBoard;
