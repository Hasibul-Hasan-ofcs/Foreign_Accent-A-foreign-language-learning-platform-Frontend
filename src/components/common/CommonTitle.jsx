import React from "react";

const CommonTitle = ({ mainTitle, subTitle }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0">
      <h1 className="text-3xl font-mons text-yellow-600 w-full md:w-1/2">
        {mainTitle}
      </h1>
      <p className="text-sm text-slate-500 w-full md:w-1/2">{subTitle}</p>
    </div>
  );
};

export default CommonTitle;
