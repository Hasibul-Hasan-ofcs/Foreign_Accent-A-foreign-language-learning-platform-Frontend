import React from "react";
import FlipNumbers from "react-flip-numbers";

const Digit = ({ digit, timeUnit }) => (
  <div className="flex flex-col items-center">
    <div className="relative p-4">
      <div className="absolute left_divider w-1/2 h-full top-0 left-0"></div>
      <div className="absolute right_divider w-1/2 h-full top-0 right-0"></div>
      <FlipNumbers
        play
        color="#fff"
        width={50}
        height={60}
        numbers={digit <= 9 ? `0${digit}` : `${digit}`}
      />
    </div>
    <span className="text-white">{timeUnit.toUpperCase()}</span>
  </div>
);

export default Digit;
