import React from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaPlay, FaUsers } from "react-icons/fa";

const InstructorsCard = ({ element }) => {
  return (
    <div className="shadow-md rounded-xl p-7 border">
      <img
        src={element.instructor_image || element.img_url}
        className="w-full aspect-img01 rounded-xl"
      />
      <h2 className="text-gray-700 text-2xl font-bold pt-5">
        {element.instructor_name || element.username}
      </h2>
      <p className="pt-5 text-sm text-gray-600">
        {element.instructor_email || element.email}
      </p>

      {/* <div className="flex justify-between py-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaPlay className="text-white"></FaPlay>
          </div>
          <span className="text-sm text-gray-500">20 Classes</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <button className="btn rounded w-full text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700">
          All Classes
        </button>
      </div> */}
    </div>
  );
};

export default InstructorsCard;
