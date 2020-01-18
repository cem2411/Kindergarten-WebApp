import React, { useContext, useState, useEffect } from "react";
import Context from "../../context/user-context";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ParentDashboard from "./ParentDashboard/ParentDashboard";
import UserContext from "../../context/user-context";

const Dashboard = props => {
  const user = useContext(UserContext);

  console.log(user);
  return (
    <div className="Dashboard">
      {user.role === "admin" ? (
        <AdminDashboard user={user} />
      ) : (
        <ParentDashboard />
      )}
    </div>
  );
};

export default Dashboard;
