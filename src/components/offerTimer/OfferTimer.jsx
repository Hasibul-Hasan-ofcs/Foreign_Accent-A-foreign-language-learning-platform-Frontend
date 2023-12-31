import React from "react";
import Counter from "./Counter";
import moment from "moment/moment";
import "./offerTimer.css";

const OfferTimer = () => {
  const timeEnd = moment().add(30, "days").format("YYYY-MM-DD");

  return (
    <div className="min-h-16 theme-bg w-full py-20 relative overflow-hidden">
      <div className="container h-200per w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white rotate-45 rounded-2xl"></div>
      <h1 className="text-center text-4xl font-bold text-white pt-7">
        70% off Courses
      </h1>
      <p className="text-center text-base text-slate-200">Are available for</p>

      <div className="flex items-center justify-center py-8">
        <Counter timeEnd={timeEnd}></Counter>
      </div>
    </div>
  );
};

export default OfferTimer;
