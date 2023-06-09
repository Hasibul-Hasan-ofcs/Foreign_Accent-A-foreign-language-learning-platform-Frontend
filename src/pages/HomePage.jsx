import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import Header from "../components/header/Header";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <HelmetComponent title="Home"></HelmetComponent>
        <Header />
      </div>
    </div>
  );
};

export default HomePage;
