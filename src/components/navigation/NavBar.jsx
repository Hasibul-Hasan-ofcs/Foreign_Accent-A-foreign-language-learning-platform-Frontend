import React, { useContext, useEffect, useState } from "react";
import LOGOMAIN from "../../assets/img/mainlogo.png";
import { Link } from "react-router-dom";
import ActiveRoute from "../controllers/ActiveRoute";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../js/useUser";
import useInstructor from "../js/useInstructor";
import useAdmin from "../js/useAdmin";
import DashBoardCheck from "../private/DashBoardCheck";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const { theme, setTheme } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  // console.log(user && user.email);
  useEffect(() => {
    if (user) {
      fetch(`https://foreignaccent.vercel.app/users?email=${user?.email}`)
        .then((result) => result.json())
        .then((data) => setUserData(data));
    }
  }, [user]);

  const themeChangehandler = () => {
    console.log("click");
    if (theme === false) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };

  return (
    <div
      className={`w-full shadow ${
        theme === false ? "bg-slate-800" : "bg-white"
      }`}
      id="top"
    >
      <div
        className={`navbar container mx-auto bg-base-100 ${
          theme === false ? "bg-slate-800" : "bg-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown z-10">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke={theme === false ? "#fff" : "#000"}
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
              className={`menu menu-sm dropdown-content mt-3 p-2 shadow ${
                // theme === false ? "bg-slate-700" : "bg-white"
                "bg-white"
              } rounded-box w-52`}
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
              <li>{user && <DashBoardCheck></DashBoardCheck>}</li>
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img src={LOGOMAIN} className="h-11 pe-2" />
            <a
              className={`normal-case text-xl font-extrabold cursor-pointer font-mons const 
              ${theme === false ? "text-white" : "text-slate-900"}`}
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
            <li>{user && <DashBoardCheck></DashBoardCheck>}</li>

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
          {!user && (
            <Link
              to="/login"
              className="btn btn-outline theme-text theme-bg hover:bg-green-500"
            >
              <span className=" text-white">Get Started</span>
            </Link>
          )}
          {/* conditional */}

          {user && (
            <div className="flex-none gap-2 bg-white">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={userData && userData.img_url} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-sm dropdown-content rounded-box w-52 z-20 bg-white"
                >
                  {/* <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li> */}
                  {/* <li>
                    <label className="swap swap-rotate"> */}
                  {/* this hidden checkbox controls the state */}
                  {/* <input type="checkbox" onClick={themeChangehandler} /> */}

                  {/* sun icon */}
                  {/* <svg
                        className="swap-on fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                      </svg> */}

                  {/* moon icon */}
                  {/* <svg
                        className="swap-off fill-current w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                      </svg>
                    </label>
                  </li> */}
                  <li>
                    <button className="text-gray-900" onClick={logoutHandler}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
