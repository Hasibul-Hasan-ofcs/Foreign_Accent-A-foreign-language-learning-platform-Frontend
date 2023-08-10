import React, { useContext } from "react";
import { FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import "./popular.css";
import BoxScale from "../framer/BoxScale";

const CardPI = ({ element }) => {
  const { theme, setTheme } = useContext(AuthContext);
  // console.log(mainData);
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
    </div>
  );
};

export default CardPI;
