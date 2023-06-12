import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ActiveRoute = ({ to, children, classes }) => {
  const { theme, setTheme } = useContext(AuthContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `active bg-transparent text-slate-800 font-bold border border-t-0 border-x-0 border-b-yellow-600 rounded-none ${
              theme === false ? "text-white" : "text-slate-900"
            }`
          : `${theme === false ? "text-slate-300" : "text-slate-500"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
