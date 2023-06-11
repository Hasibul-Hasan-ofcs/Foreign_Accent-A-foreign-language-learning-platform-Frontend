import React, { useEffect } from "react";
import { FaHeadset, FaPlay } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const IntroComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center px-2 py-28 gap-2">
      <div
        data-aos="fade-up"
        data-aos-duration="4000"
        className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3"
      >
        <div className="">
          <div className="flex flex-col">
            <FaPlay className="h-14 w-14 mr-2 mb-5 bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></FaPlay>
            <h2 className="text-2xl font-semibold">Learn New Languages</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Expand your horizons and learn new languages with our experienced
            instructors and achieve cultural understanding.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="5000"
        className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3"
      >
        <div className="">
          <div className="flex flex-col">
            <FaHeadset className="h-14 w-14 mr-2 mb-5 bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></FaHeadset>
            <h2 className="text-2xl font-semibold">Interactive Learning</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Participate in conversations, role-plays, and language games to
            enhance your skills in a fun and supportive environment.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="6000"
        className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3"
      >
        <div className="">
          <div className="flex flex-col">
            <MdMoreTime className="h-14 w-14 mr-2 mb-5 bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></MdMoreTime>
            <h2 className="text-2xl font-semibold">Flexible Schedule</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Choose from morning, afternoon, or evening classes and progress at
            your own pace. to fit your busy lifestyle
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
