import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";

const AdminDashboard = () => {
  
  return (
    <Layout title='Admin Dashboard'>
      <ul>
      <li>
          <Link to='/user/dashboard'>Goto Profile</Link>
        </li>
        <li>
          <Link to='/create/category'>Add Category</Link>
        </li>
      </ul>      
    </Layout>
  );
}

export default AdminDashboard;