import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <HelmetComponent title="Home"></HelmetComponent>
        hi this is home
      </div>
    </div>
  );
};

export default HomePage;
