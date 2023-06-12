import React, { useContext, useEffect, useState } from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import Header from "../components/header/Header";
import IntroComponent from "../components/intro/IntroComponent";
import CounterComponent from "../components/intro/CounterComponent";
import PopularClasses from "../components/popular/PopularClasses";
import PopularInstructors from "../components/popular/PopularInstructors";
import { AuthContext } from "../providers/AuthProvider";

const HomePage = () => {
  const { theme, setTheme } = useContext(AuthContext);

  return (
    <div
      className={`w-full ${theme === false ? "bg-slate-800" : "bg-white"}`}
      id="top"
    >
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
