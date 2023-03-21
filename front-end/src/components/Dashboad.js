import React from "react";

const Dashboard = ({ name, email, role }) => {
  
  return (
    <div className="container">
      <div className="dash hor-c-a">

      <div className="info">
          <h4>My Account</h4>
          <div className="info-t">
            <div className="info-l">
              <ul>
                <li>
                  <label>Name</label>
                </li>
                <li>
                  <label>Email</label>
                </li>
                <li>
                  <label>Role</label>
                </li>
              </ul>
            </div>
            
            <div className="info-r">
              <ul>
                <li>
                  <span>{name}</span>
                </li>
                <li>
                  <span>{email}</span>
                </li>
                <li>
                  <span>{role && role === 1 ? 'Admin' : 'User'}</span>
                </li>
              </ul>  
            </div>
          </div>
        </div>

      <div className="info">
          <h4>Account Manager</h4>
          <div className="info-t">
            <div className="info-l">
              <ul>
                <li>
                  <label>Update Profile</label>
                </li>
                <li>
                  <label>Cart</label>
                </li>
                <li>
                  <label>History</label>
                </li>
              </ul>
            </div>
            
            <div className="info-r">
              <ul>
                <li>
                  <span>{name}</span>
                </li>
                <li>
                  <span>{email}</span>
                </li>
                <li>
                  <span>{role}</span>
                </li>
              </ul>  
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard;
