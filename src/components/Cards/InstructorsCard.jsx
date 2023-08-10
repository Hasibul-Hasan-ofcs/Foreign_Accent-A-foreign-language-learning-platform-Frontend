import React from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaPlay, FaUsers } from "react-icons/fa";
import BoxScale from "../framer/BoxScale";

const InstructorsCard = ({ element }) => {
  return (
    <div className={``}>
      <BoxScale delayProp={0.1}>
        <div className="splash_bg h-[380px]">
          <img
            src={element?.instructor_image || element?.img_url}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p_ins_img h-[380px] w-[250px] aspect-img01 rounded-t-xl z-10"
          />
        </div>
      </BoxScale>

      <h2 className={`text-2xl font-bold main_name text-gray-900 text-center`}>
        {element?.instructor_name || element?.username}
      </h2>
      <p className="pt-5 text-sm text-gray-600 text-center">
        {element.instructor_email || element.email}
      </p>
    </div>
  );
};

export default InstructorsCard;
