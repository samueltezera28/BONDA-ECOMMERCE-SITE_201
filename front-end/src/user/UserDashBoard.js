import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import Dashboard from "../components/Dashboad";

const UserDashboard = () => {
  const { user } = isAuthenticated();

  return (
    <Layout title='User Dashboard'>
      {Dashboard(user)}
    </Layout>
  )
}

export default UserDashboard;
