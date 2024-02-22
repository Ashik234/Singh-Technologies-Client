import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Chart from "chart.js/auto";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userJWT");
    navigate("/login");
  };

  // Sample data for the chart
  const [chartData, setChartData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: chartData,
    });
  }, [chartData]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h2">Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Wallet Balance</h5>
            <p className="card-text">0</p>
          </div>
        </div>
        <div className="col-md-6 mt-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales Chart</h5>
              <canvas id="myChart" width="400" height="200"></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User List</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jane Doe</td>
                    <td>jane@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
