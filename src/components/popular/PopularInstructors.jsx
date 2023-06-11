import React from "react";
import CommonTitle from "../common/CommonTitle";
import CardPI from "./CardPI";

const PopularInstructors = () => {
  const sub =
    "Unleash the Language Masters. Meet our Expert Instructors with Years of Experience in Cultivating Linguistic Proficiency. Learn from the Best to Excel in your Language Journey at our Summer Camp Learning School.";
  return (
    <div className="w-full py-28">
      <div className="container">
        <CommonTitle
          mainTitle="Popular Instructors"
          subTitle={sub}
        ></CommonTitle>

        <div className="flex flex-wrap py-12">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPI></CardPI>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
