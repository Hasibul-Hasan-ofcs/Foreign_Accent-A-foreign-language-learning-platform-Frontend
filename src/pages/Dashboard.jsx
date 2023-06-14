import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import { Link, Outlet } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import {
  BsCartCheckFill,
  BsFillCheckCircleFill,
  BsFillFileEarmarkSpreadsheetFill,
  BsWallet,
  BsWallet2,
  BsWalletFill,
} from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import useUser from "../components/js/useUser";
import { FaBookReader, FaMoneyBill, FaUser } from "react-icons/fa";
import useInstructor from "../components/js/useInstructor";
import useAdmin from "../components/js/useAdmin";

const Dashboard = () => {
  // const [isLoading, refetch, data] = useUserSelectedClasses();
  // console.log(data);

  const [isUser] = useUser();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();

  console.log(isUser && "user");
  console.log(isInstructor && "instructor");
  console.log(isAdmin && "admin");

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
            <span>Click to Open Dashboard Navigator</span>
            <AiFillCaretRight className="text-2xl text-white"></AiFillCaretRight>
          </label>
        </div>
        <div className="drawer-side z-20">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            <li>
              {isAdmin && (
                <Link
                  to="manage-classes"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <BsFillFileEarmarkSpreadsheetFill className="text-white text-2xl"></BsFillFileEarmarkSpreadsheetFill>
                  </span>

                  <span>Manage Classes</span>
                </Link>
              )}
              {isInstructor && (
                <Link
                  to="add-class"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <IoMdAddCircle className="text-white text-2xl"></IoMdAddCircle>
                  </span>

                  <span>Add a New Class</span>
                </Link>
              )}
              {isUser && (
                <Link
                  to="selected-classes"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <BsCartCheckFill className="text-white text-2xl"></BsCartCheckFill>
                  </span>

                  <span>My Selected Classes</span>
                </Link>
              )}
            </li>

            <li>
              {isAdmin && (
                <Link
                  to="manage-users"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <FaUser className="text-white text-2xl"></FaUser>
                  </span>

                  <span>Manage Users</span>
                </Link>
              )}
              {isInstructor && (
                <Link
                  to="my-classes"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <FaBookReader className="text-white text-2xl"></FaBookReader>
                  </span>

                  <span>My Classes</span>
                </Link>
              )}
              {isUser && (
                <Link
                  to="enrolled-classes"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <BsFillCheckCircleFill className="text-white text-2xl"></BsFillCheckCircleFill>
                  </span>
                  <span>My Enrolled Classes</span>
                </Link>
              )}
            </li>

            <li>
              {isUser && (
                <Link
                  to="payment-history"
                  className="bg-yellow-50 py-3 my-1 shadow-md"
                >
                  <span className="h-8 w-8 bg-yellow-600 flex items-center rounded justify-center">
                    <BsWalletFill className="text-white text-2xl"></BsWalletFill>
                  </span>
                  <span>Payment history</span>
                </Link>
              )}
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
