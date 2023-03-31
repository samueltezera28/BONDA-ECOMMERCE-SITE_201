import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import Dashboard from "../components/Dashboad";

const AdminDashboard = () => {
  const ServiceManager = {
    title: 'Service Manager',
    data: [
      {name: 'Product Manager', value: <>
      <Link to='/create/product'><button className="btn btn-warning mb-2 mx-1">Add</button></Link>
      </> },
      {name: 'Category Manager', value:<>
      <Link to='/create/category'><button className="btn btn-warning mb-2 mx-1">Add</button></Link>
      </>},
      {name: 'Profile', value: <>
      <Link to='/user/dashboard'><button className="btn btn-info mb-2 mx-1">My Profile</button></Link>
      </> },
    ],
  }

  return (
    <Layout title='Admin Dashboard'>
      <div className="container mt-5 mb-5">
        {Dashboard(ServiceManager)}
      </div>
    </Layout>
  );
}

export default AdminDashboard;