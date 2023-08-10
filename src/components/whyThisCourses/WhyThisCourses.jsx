import React from "react";
import CommonTitle from "../common/CommonTitle";
import "./whyTC.css";
import Offer from "../../assets/png/offer.png";
import GHat from "../../assets/png/graduation_hat.png";
import Support from "../../assets/png/support.png";
import Assignment from "../../assets/png/assignment.png";
import { Link } from "react-router-dom";

const offerArray = [
  {
    img: GHat,
    hText: "Course Certifications",
    mText:
      "Upon successful completion of each course, we award course certificates.",
  },
  {
    img: Offer,
    hText: "70% off Courses",
    mText:
      "Courses are as less as -70%. We offer some student Courses with 100% off.",
  },
  {
    img: Support,
    hText: "24/7th Support",
    mText:
      "We offer great student support. We are there to solve any related issues!",
  },
  {
    img: Assignment,
    hText: "Assignments",
    mText:
      "Hands on speaking practice also making videos as speaking assignments.",
  },
];

const WhyThisCourses = () => {
  const sub = "What to expect from these courses";
  return (
    <div className="bg-[#F4F7FB] w-full py-28">
      <div className="container mx-auto">
        <CommonTitle
          mainTitle="Course offerings"
          subTitle={sub}
          //   colorProp="white"
        ></CommonTitle>
        <div className="flex gap-y-4 flex-wrap flex-col lg:flex-row px-5 py-10">
          {offerArray.map((el, indx) => (
            <div className="w-full lg:w-1/2 px-2 relative" key={indx}>
              <div className="coff_box cursor-pointer shadow hover:shadow-lg flex flex-col sm:flex-row gap-5 lg:gap-0 w-full h-full rounded-xl bg-gray-700 p-7">
                <div className="w-full lg:w-1/3 h-40 lg:h-full relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ">
                    <img
                      src={el?.img}
                      className="coff_img w-full md:w-36 lg:w-full"
                    />
                  </div>
                  <div className="clip_wt_card bg-white h-full w-full"></div>
                </div>
                <div className="flex flex-col w-full lg:w-2/3 items-start gap-5 px-2">
                  <span className="text-white font-medium">{el?.hText}</span>
                  <h2 className="text-white font-semibold text-2xl">
                    {el?.mText}
                  </h2>
                  <Link to="/classes">
                    <button className="bg-white font-semibold text-gray-700 py-3 px-5 transition-all hover:bg-slate-400">
                      Start Exploring
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyThisCourses;
