import React from "react";

const CommonTitle = ({ mainTitle, subTitle }) => {
  return (
    <>
      <h1 className="text-3xl font-mons text-center text-yellow-600">
        {mainTitle}
      </h1>
      <p className="text-center text-sm text-slate-500">{subTitle}</p>
    </>
  );
};

export default CommonTitle;
