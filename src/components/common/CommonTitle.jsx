import React from "react";

const CommonTitle = ({ mainTitle, subTitle, colorProp = null }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-0">
      <h1
        className={`text-3xl text-center font-mons ${
          colorProp ? "text-white" : "text-gray-900 "
        } w-full md:w-1/2`}
      >
        {mainTitle}
      </h1>
      <p
        className={`text-sm text-center ${
          colorProp ? "text-slate-300" : "text-slate-500"
        }  w-full`}
      >
        {subTitle}
      </p>
    </div>
  );
};

export default CommonTitle;
