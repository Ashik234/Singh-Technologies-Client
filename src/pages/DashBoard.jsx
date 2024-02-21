import React from "react";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userJWT");
    navigate("/login");
  };

  return (
    <div className=" mx-auto p-4">
      <div className="flex justify-between mx-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <h1 className="text-2xl font-bold mb-4 cursor-pointer" onClick={handleLogout}>
          Logout
        </h1>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Wallet Balance</h2>
        <div className="text-xl font-bold">0</div>
      </div>
    </div>
  );
}

export default Dashboard;
