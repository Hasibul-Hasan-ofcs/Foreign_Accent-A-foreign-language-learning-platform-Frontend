import React from "react";

const ThemeButton = ({ text1 = "", text2 = "", imgurl }) => {
  return (
    <button className="theme-button w-52 h-14 text-gray-800 font-semibold shadow-lg hover:shadow-md active:shadow rounded-full border flex overflow-hidden">
      <div className="w-1/2 h-full bg-white">
        <div className="theme-button-left h-full w-full theme-bg"></div>
      </div>
      <div
        className={`h-full w-full bg-white flex flex-row items-center justify-center ${
          !imgurl && "gap-1"
        }`}
      >
        <span>{text1}</span>
        <span>{text2}</span>
        {imgurl && <img src={imgurl} className="h-6" />}
      </div>
      <div className="w-1/2 h-full bg-white">
        <div className="theme-button-right h-full w-full theme-bg"></div>
      </div>
    </button>
  );
};

export default ThemeButton;
