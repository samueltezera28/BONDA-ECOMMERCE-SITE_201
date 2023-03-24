import React from "react";

const Dashboard = (data) => {

  const DashTable = ({info: {title, data}}) => {
    return (
      <div className="dash-table">
        <div class="bg-dark dash-head">
          <h4>{title}</h4>
        </div>
        <table class="table table-striped table-hover">
          <tbody>
            {
              data.map((data, i) => (
                <tr class="table-secondary">
                  <td>{data.name}</td>
                  <th scope="row">{data.value}</th>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="container mt-5 mb-5">
      <DashTable info={data} />
    </div>
  )
}

export default Dashboard;
