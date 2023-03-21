import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";

const AdminDashboard = () => {
  
  return (
    <Layout title='Admin Dashboard'>
      <div className="a-dash hor-c-a">
        <div className="info">
            <h4>Service Manager</h4>
            <div className="info-t">
              <div className="info-l">
                <ul>
                  <li>
                    <label>Product Manager</label>
                  </li>
                  <li>
                    <label>Category Manager</label>
                  </li>
                  <li>
                    <label>Goto Profile</label>
                  </li>
                </ul>
              </div>
              
              <div className="info-r">
                <ul>
                  <li>
                    <span><Link to='/create/product'>Add Product</Link></span>
                  </li>
                  <li>
                    <span><Link to='/create/category'>Add Category</Link></span>
                  </li>
                  <li>
                    <span><Link to='/user/dashboard'>My Profile</Link></span>
                  </li>
                </ul>  
              </div>
            </div>
          </div>
        </div> 
    </Layout>
  );
}

export default AdminDashboard;