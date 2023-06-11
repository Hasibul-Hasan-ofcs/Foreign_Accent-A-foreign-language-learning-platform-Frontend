import React, { useRef } from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import { Link, Outlet } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { BsCartCheckFill, BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Dashboard = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);

  return (
    <div className="w-full">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn w-full drawer-button bg-yellow-600 hover:bg-yellow-700 rounded-none h-full"
          >
            <span>Open Dashboard Navigator</span>
            <AiFillCaretRight className="text-2xl text-white"></AiFillCaretRight>
          </label>
        </div>
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li>
              <Link
                to="selected-classes"
                className="bg-yellow-50 py-3 my-1 shadow-md"
              >
                <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                  <BsCartCheckFill className="text-white text-2xl"></BsCartCheckFill>
                </span>

                <span>My Selected Classes</span>
              </Link>
            </li>

            <li>
              <Link
                to="enrolled-classes"
                className="bg-yellow-50 py-3 my-1 shadow-md"
              >
                <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                  <BsFillCheckCircleFill className="text-white text-2xl"></BsFillCheckCircleFill>
                </span>
                <span>My Enrolled Classes</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* drawer end */}

      <div className="container mx-auto">
        <HelmetComponent title="Dashboard"></HelmetComponent>

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
