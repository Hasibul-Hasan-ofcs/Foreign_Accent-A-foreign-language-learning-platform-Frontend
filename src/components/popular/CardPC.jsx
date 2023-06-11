import React from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaUsers } from "react-icons/fa";

const CardPC = () => {
  return (
    <div className="shadow-md rounded-xl p-7 border">
      <img src={TEMPIMG} className="w-full aspect-img01 rounded-xl" />
      <h2 className="text-yellow-600 text-4xl font-extrabold pt-5">$100</h2>
      <h2 className="text-gray-700 text-2xl font-bold pt-5">
        Japanese For Beginers
      </h2>
      <p className="pt-5 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, id neque!
        Commodi tempore deleniti ipsum facilis repudiandae esse ipsa porro.
      </p>

      <div className="flex justify-between py-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaUsers className="text-white"></FaUsers>
          </div>
          <span className="text-sm text-gray-500">20 Students</span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <span className="text-sm text-gray-500">4.5</span>
          <div className="">⭐⭐⭐⭐⭐</div>
        </div>
        <div>
          <button className="btn rounded text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPC;
