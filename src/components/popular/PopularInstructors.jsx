import React from "react";
import CommonTitle from "../common/CommonTitle";

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
      </div>
    </div>
  );
};

export default PopularInstructors;
