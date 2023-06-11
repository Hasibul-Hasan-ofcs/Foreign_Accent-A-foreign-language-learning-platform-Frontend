import React from "react";
import TEMPIMG from "../assets/img/404.jpg";
import { Link } from "react-router-dom";

const MySelectedClasses = () => {
  return (
    <div className="py-6">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs px-4 pt-7 pb-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Dashboard</li>
          <li>My Selected Classes</li>
        </ul>
      </div>

      <div className="border rounded-md shadow-md p-4 flex justify-between items-center flex-col md:flex-row">
        <img src={TEMPIMG} className="h-44 rounded aspect-img01" />
        <div className="border-l-2 border-gray-800 ps-2 flex flex-col justify-center">
          <h2 className="text-gray-700 text-2xl font-bold pt-3">
            Japanese For Beginers
          </h2>
          <p className="pt-1 pb-3 text-sm text-gray-600">Instructor Name</p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-error w-full md:w-28 text-white">
            Delete
          </button>
          <button className="btn btn-error w-full md:w-28 text-white">
            Delete
          </button>
          <button className="btn btn-error w-full md:w-28 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySelectedClasses;
