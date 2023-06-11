import React from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaChair, FaUsers } from "react-icons/fa";

const ClassesCard = () => {
  return (
    <div className="shadow-md rounded-xl p-7 border">
      <img src={TEMPIMG} className="w-full aspect-img01 rounded-xl" />
      <h2 className="text-yellow-600 text-4xl font-extrabold pt-5">$100</h2>
      <h2 className="text-gray-700 text-2xl font-bold pt-5">
        Japanese For Beginers
      </h2>
      <p className="pt-2 text-sm text-gray-500">Instructor Name</p>

      <div className="flex justify-between py-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaChair className="text-white"></FaChair>
          </div>
          <span className="text-sm text-gray-500">20 Seats available!</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <button className="btn rounded w-full text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700">
          Select Class
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
