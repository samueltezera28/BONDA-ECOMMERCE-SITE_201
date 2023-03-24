import React from "react";

const Dashboard = (data) => {

  const DashTable = ({info: {title, data}}) => {
    return (
      <div className="dash-table">
        <div className="bg-dark dash-head">
          <h4>{title}</h4>
        </div>
        <table className="table table-striped table-hover">
          <tbody>
            {
              data.map((data, i) => (
                <tr className="table-secondary" key={i}>
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
      <DashTable info={data} />
  )
}

export default Dashboard;
