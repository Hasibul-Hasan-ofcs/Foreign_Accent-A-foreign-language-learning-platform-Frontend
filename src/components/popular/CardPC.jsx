import React, { useContext } from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaStar, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const CardPC = ({ element }) => {
  const { theme, setTheme } = useContext(AuthContext);
  return (
    <div
      className={`shadow-md rounded-xl p-7 ${
        theme === false ? "border-0" : "border"
      } ${theme === false ? "bg-slate-700" : "bg-white"}`}
    >
      <img
        src={element?.class_image}
        className="w-full aspect-img01 rounded-xl"
      />
      <h2 className="text-yellow-600 text-4xl font-extrabold pt-5">
        ${element?.price}
      </h2>
      <h2
        className={`text-gray-700 text-2xl font-bold pt-5 line-clamp-2 ${
          theme === false ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {element?.class_name}
      </h2>
      <p
        className={`pt-1 text-sm text-gray-600 ${
          theme === false ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {element?.instructor_name}
      </p>
      <p
        className={`pt-5 text-sm  line-clamp-3 ${
          theme === false ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {element?.class_topics?.join(", ")}
      </p>

      <div className="flex justify-between pt-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaUsers className="text-white"></FaUsers>
          </div>
          <span
            className={`text-sm ${
              theme === false ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {element?.students} Students
          </span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        {/* <div className="flex gap-1 items-center">
          <div className="">
            <FaStar className="text-2xl text-yellow-600"></FaStar>
          </div>
          <span className="text-sm text-gray-500">{element?.rating}</span>
        </div> */}

        <button className="btn rounded w-full text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700">
          Select Class
        </button>
      </div>
    </div>
  );
};

export default CardPC;
