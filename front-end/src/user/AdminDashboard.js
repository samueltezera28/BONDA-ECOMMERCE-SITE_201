import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import Dashboard from "../components/Dashboad";

const AdminDashboard = () => {
  

  const ServiceManager = {
    title: 'Service Manager',
    data: [
      {name: 'Product Manager', value: <><Link to='/create/product'>Add</Link></> },
      {name: 'Category Manager', value: <><Link to='/create/category'>Add</Link></>},
      {name: 'Profile', value: <><Link to='/user/dashboard'>My Profile</Link></> },
    ],
  }

  return (
    <Layout title='Admin Dashboard'>
      {Dashboard(ServiceManager)}
    </Layout>
  );
}

export default AdminDashboard;