import React from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({ to, children, classes }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `active bg-transparent text-slate-800 font-bold border border-t-0 border-x-0 border-b-yellow-600`
          : `text-slate-500`
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveRoute;
