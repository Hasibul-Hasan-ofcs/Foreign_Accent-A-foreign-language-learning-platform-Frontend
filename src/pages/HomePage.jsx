import React, { useContext, useEffect, useState } from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import Header from "../components/header/Header";
import IntroComponent from "../components/intro/IntroComponent";
import CounterComponent from "../components/intro/CounterComponent";
import PopularClasses from "../components/popular/PopularClasses";
import PopularInstructors from "../components/popular/PopularInstructors";
import { AuthContext } from "../providers/AuthProvider";
import TopCategories from "../components/topCategories/TopCategories";
import InstructorIntro from "../components/intro/InstructorIntro";
import OfferTimer from "../components/offerTimer/OfferTimer";
import WhyThisCourses from "../components/whyThisCourses/WhyThisCourses";
import Sponsors from "../components/sponsors/Sponsors";
import BookSuggestion from "../components/bookSuggestion/BookSuggestion";
import NewsLetter from "../components/newsletter/NewsLetter";

const HomePage = () => {
  const { theme, setTheme } = useContext(AuthContext);

  return (
    <div
      className={`w-full ${theme === false ? "bg-slate-800" : "bg-white"}`}
      id="top"
    >
      <div className="">
        <HelmetComponent title="Home"></HelmetComponent>
        <Header></Header>
        <Sponsors></Sponsors>
        <InstructorIntro></InstructorIntro>
        <TopCategories></TopCategories>
        {/* <IntroComponent></IntroComponent> */}
        <PopularClasses></PopularClasses>
        <OfferTimer></OfferTimer>
        {/* <CounterComponent></CounterComponent> */}
        <PopularInstructors></PopularInstructors>
        <WhyThisCourses></WhyThisCourses>
        <BookSuggestion></BookSuggestion>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default HomePage;
