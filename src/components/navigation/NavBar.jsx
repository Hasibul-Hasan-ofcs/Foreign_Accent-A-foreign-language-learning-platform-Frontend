import React from "react";
import LOGOMAIN from "../../assets/img/mainlogo.png";
import { Link } from "react-router-dom";
import ActiveRoute from "../controllers/ActiveRoute";

const NavBar = () => {
  const temp = (
    <div className="w-full">
      <div className="navbar container mx-auto bg-base-100">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-full">
      <div className="navbar container mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveRoute to="/">Home</ActiveRoute>
              </li>
              <li>
                <ActiveRoute to="/instructors">Instructors</ActiveRoute>
              </li>
              <li>
                <ActiveRoute to="/classes">Classes</ActiveRoute>
              </li>
              <li>
                <ActiveRoute to="/dashboard">Dashboard</ActiveRoute>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img src={LOGOMAIN} className="h-11 pe-2" />
            <a
              className="normal-case text-xl font-extrabold cursor-pointer font-mons"
              href="/"
            >
              Foreign Accent
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveRoute to="/">Home</ActiveRoute>
            </li>
            <li>
              <ActiveRoute to="/instructors">Instructors</ActiveRoute>
            </li>
            <li>
              <ActiveRoute to="/classes">Classes</ActiveRoute>
            </li>
            <li>
              <ActiveRoute to="/dashboard">Dashboard</ActiveRoute>
            </li>

            {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-outline text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:border-yellow-600"
          >
            Login
          </Link>
          {/* conditional */}
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
