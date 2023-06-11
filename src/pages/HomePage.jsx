import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import Header from "../components/header/Header";
import IntroComponent from "../components/intro/IntroComponent";
import CounterComponent from "../components/intro/CounterComponent";
import PopularClasses from "../components/popular/PopularClasses";
import PopularInstructors from "../components/popular/PopularInstructors";

const HomePage = () => {
  return (
    <div className="w-full" id="top">
      <div className="container mx-auto">
        <HelmetComponent title="Home"></HelmetComponent>
        <Header></Header>
        <IntroComponent></IntroComponent>
        <CounterComponent></CounterComponent>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
    </div>
  );
};

export default HomePage;
