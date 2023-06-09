import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";

const Dashboard = () => {
  return (
    <div className="w-full">
      <HelmetComponent title="Dashboard"></HelmetComponent>
      <div className="container mx-auto">Dashboard</div>
    </div>
  );
};

export default Dashboard;
