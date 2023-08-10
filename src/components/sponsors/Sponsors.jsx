import React from "react";
import amazon from "../../assets/png/amazon.png";
import microsoft from "../../assets/png/microsoft.png";
import nvidia from "../../assets/png/nvidia.png";
import walmart from "../../assets/png/walmart.png";
import spotify from "../../assets/png/spotify.png";
import tencent from "../../assets/png/tencent.png";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className={`py-5`}>
      {/* <h2 className="text-center fw-bolder pt-5 pb-2">
            <span className={`${theme ? "text-white" : ""}`}>Our trusted</span>{" "}
            <span className="theme-color pacifico-font">Partners</span>
          </h2> */}
      <Marquee speed={10}>
        <div className="container flex  justify-between pe-28 py-5 my-5">
          <img
            src={microsoft}
            className="h-7 px-14 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src={nvidia}
            className="h-7 px-14 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src={walmart}
            className="h-7 px-14 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src={amazon}
            className="h-6 px-14 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src={spotify}
            className="h-7 px-14 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src={tencent}
            className="h-5 px-14 grayscale hover:grayscale-0 transition-all"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default Sponsors;
