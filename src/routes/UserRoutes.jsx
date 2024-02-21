import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import ProtectRoutes from "./Protected/ProtectedRoutes";
import PublicRoutes from "./Protected/PublicRoutes";

function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/register" element={<PublicRoutes><Register /></PublicRoutes>} />
      <Route exact path="/login" element={<PublicRoutes><Login /></PublicRoutes>} />
      <Route exact path="/" element={<ProtectRoutes><DashBoard/></ProtectRoutes>}/>
    </Routes>
  );
}

export default UserRoutes;
