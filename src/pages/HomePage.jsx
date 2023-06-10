import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import Header from "../components/header/Header";
import IntroComponent from "../components/intro/IntroComponent";
import CounterComponent from "../components/intro/CounterComponent";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <HelmetComponent title="Home"></HelmetComponent>
        <Header></Header>
        <IntroComponent></IntroComponent>
        <CounterComponent></CounterComponent>
      </div>
    </div>
  );
};

export default HomePage;
