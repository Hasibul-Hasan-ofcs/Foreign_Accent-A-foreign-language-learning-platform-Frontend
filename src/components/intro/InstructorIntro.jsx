import React from "react";
import INS_3 from "../../assets/img/ins_3.jpg";
import INS_4 from "../../assets/img/ins_4.jpg";
import Person from "../../assets/png/person.png";
import Language from "../../assets/png/hindi_india.png";
import Assignment from "../../assets/png/assignment.png";
import Video from "../../assets/png/video.png";
import "./intro.css";
import FlipNumberInt from "../flipNumbers/FlipNumberInt";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import BoxReveal from "../framer/BoxReveal";
import { Parallax } from "react-scroll-parallax";
import { MouseParallax } from "react-just-parallax";

const InstructorIntro = () => {
  return (
    <div
      className="container mx-auto flex flex-col-reverse lg:flex-row py-20 overflow-hidden"
      id="insIntro"
    >
      <div className="w-full lg:w-1/2 pe-2 lg:pe-8 py-7 lg:py-0 flex flex-col items-center lg:items-start">
        <BoxReveal delayProp={0.2}>
          <h1 className="font-semibold text-4xl text-gray-900  text-center lg:text-start">
            Find the best <span className="theme-text">language</span>
            <br /> courses from best <br />
            <span className="theme-text">Mentors</span>
          </h1>
        </BoxReveal>
        <BoxReveal delayProp={0.4}>
          <p className="text-center lg:text-start py-5">
            Discover the pinnacle of language courses, guided by the expertise
            of the finest mentors in the field. Our carefully crafted curriculum
            ensures immersive and interactive sessions, allowing you to grasp
            the intricacies of the language effortlessly. Experience a
            supportive and dynamic environment, where your growth as a linguist
            is our utmost priority. Join us today for the best language courses,
            led by the best mentors, and embark on a path towards linguistic
            excellence.
          </p>
        </BoxReveal>

        <div className="flex gap-y-3 py-7 justify-between w-full">
          <div className="flex flex-col gap-3 w-1/2 items-center">
            <CountUp
              start={0}
              end={20}
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            >
              {({ countUpRef, start }) => (
                <h2 className="text-4xl font-medium text-gray-900">
                  <span ref={countUpRef}></span>+
                </h2>
              )}
            </CountUp>

            <h3 className="text-lg font-medium text-gray-900 text-center">
              Professional <br /> Instructors
            </h3>
          </div>
          <div className="flex flex-col gap-3 w-1/2 items-center">
            <CountUp
              start={0}
              end={50}
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            >
              {({ countUpRef, start }) => (
                <h2 className="text-4xl font-medium text-gray-900">
                  <span ref={countUpRef}></span>+
                </h2>
              )}
            </CountUp>

            <h3 className="text-lg font-medium text-gray-900 text-center">
              Language <br /> Courses
            </h3>
          </div>
          <div className="flex flex-col gap-3 w-1/2 items-center">
            <CountUp
              start={0}
              end={1000}
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            >
              {({ countUpRef, start }) => (
                <h2 className="text-4xl font-medium text-gray-900">
                  <span ref={countUpRef}></span>+
                </h2>
              )}
            </CountUp>

            <h3 className="text-lg font-medium text-gray-900 text-center">
              Latest <br /> Videos
            </h3>
          </div>
        </div>

        <BoxReveal delayProp={0.6}>
          <Link to="/classes">
            <button className="theme-bg text-white font-bold rounded-lg mt-7 p-5 hover:opacity-80">
              Start Exploring &rarr;
            </button>
          </Link>
        </BoxReveal>
      </div>
      <div className="w-full lg:w-1/2 relative min-h-screen">
        <MouseParallax
          strength={0.02}
          enableOnTouchDevice
          isAbsolutelyPositioned
        >
          <div className="back-box-shape absolute top-0 right-0 theme-bg h-full w-full"></div>
        </MouseParallax>

        <Parallax speed={10}>
          <div className="exp-box border absolute top-32 right-8 p-6 shadow-2xl rounded-2xl bg-white w-60 h-48 flex justify-center items-center">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              Expert Language Instructors
            </h1>
          </div>
        </Parallax>

        {/* <Parallax speed={-5}> */}
        <MouseParallax
          strength={0.02}
          enableOnTouchDevice
          isAbsolutelyPositioned
        >
          <div className="inline-block rounded-3xl p-4 shadow-2xl absolute top-0 left-0 z-0 lg:z-10 perspective-left">
            <img src={INS_4} className="h-500px rounded-2xl" />
          </div>
        </MouseParallax>
        {/* </Parallax> */}

        {/* <Parallax speed={5}> */}
        <MouseParallax
          strength={0.07}
          enableOnTouchDevice
          isAbsolutelyPositioned
        >
          <div className="inline-block rounded-3xl p-4 bg-white shadow-2xl absolute bottom-0 right-0 z-10 lg:z-0 perspective-right">
            <img src={INS_3} className="h-64 rounded-2xl" />
          </div>
        </MouseParallax>
        {/* </Parallax> */}
      </div>
    </div>
  );
};

export default InstructorIntro;
