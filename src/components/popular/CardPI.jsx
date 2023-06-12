import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const CardPI = ({ element }) => {
  const { theme, setTheme } = useContext(AuthContext);
  // console.log(element);
  return (
    <div
      className={`shadow-md rounded-xl p-7 border ${
        theme === false ? "border-0" : "border"
      } ${theme === false ? "bg-slate-700" : "bg-white"}`}
    >
      <img
        src={element.instructor_image}
        className="w-full aspect-img01 rounded-xl"
      />
      <h2
        className={`text-gray-700 text-2xl font-bold pt-5 ${
          theme === false ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {element.instructor_name}
      </h2>

      <div className="flex justify-between py-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaUsers className="text-white"></FaUsers>
          </div>
          <span
            className={`text-sm ${
              theme === false ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {element.students} Students
          </span>
        </div>
      </div>

      {/*<div className="divider"></div>

       <div className="flex justify-between">
        <button className="btn rounded text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700 w-full">
          View Instructor
        </button>
      </div> */}
    </div>
  );
};

export default CardPI;
