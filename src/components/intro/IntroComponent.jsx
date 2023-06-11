import React, { useEffect, useRef } from "react";
import { FaHeadset, FaPlay } from "react-icons/fa";
import { MdMoreTime } from "react-icons/md";

import { motion } from "framer-motion";

const IntroComponent = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);

  return (
    <div className="flex flex-col lg:flex-row justify-center px-2 py-28 gap-2">
      <div className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3">
        <motion.div className="container" ref={constraintsRef1}>
          {/* <div className=""> */}
          <div className="flex flex-col">
            <motion.div className="item" drag dragConstraints={constraintsRef1}>
              <FaPlay className="h-14 w-14 mr-2 mb-5 cursor-grab bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></FaPlay>
            </motion.div>

            <h2 className="text-2xl font-semibold">Learn New Languages</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Expand your horizons and learn new languages with our experienced
            instructors and achieve cultural understanding.
          </p>
        </motion.div>
        {/* </div> */}
      </div>

      <div className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3">
        {/* <div className=""> */}
        <motion.div className="container" ref={constraintsRef2}>
          <div className="flex flex-col">
            <motion.div className="item" drag dragConstraints={constraintsRef2}>
              <FaHeadset className="h-14 w-14 mr-2 mb-5 cursor-grab bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></FaHeadset>
            </motion.div>
            <h2 className="text-2xl font-semibold">Interactive Learning</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Participate in conversations, role-plays, and language games to
            enhance your skills in a fun and supportive environment.
          </p>
        </motion.div>
        {/* </div> */}
      </div>

      <div className="rounded-lg shadow-md bg-white p-5 border w-full lg:w-1/3">
        {/* <div className=""> */}
        <motion.div className="container" ref={constraintsRef3}>
          <div className="flex flex-col">
            <motion.div className="item" drag dragConstraints={constraintsRef3}>
              <MdMoreTime className="h-14 w-14 mr-2 mb-5 cursor-grab bg-yellow-600 text-white p-2 rounded-lg border shadow-md"></MdMoreTime>
            </motion.div>
            <h2 className="text-2xl font-semibold">Flexible Schedule</h2>
          </div>
          <p className="mt-2 text-slate-500 text-sm">
            Choose from morning, afternoon, or evening classes and progress at
            your own pace. to fit your busy lifestyle
          </p>
        </motion.div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default IntroComponent;
