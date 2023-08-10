import React, { useEffect, useState } from "react";
import CommonTitle from "../common/CommonTitle";
import CardPI from "./CardPI";
import getInstructorsDataHome from "../js/getInstructorsDataHome";

const PopularInstructors = () => {
  const [, refetch, data] = getInstructorsDataHome();
  const [mainData, setMainData] = useState([]);
  const [rhold, setRHold] = useState([]);
  const [r2hold, setR2Hold] = useState([]);

  useEffect(() => {
    console.log(data);
    let { result2, result } = { ...data };

    setR2Hold(result2);
    setRHold(result);
  }, [data]);

  const sub = "Most popular and contributing Instructors";
  return (
    <div className="p_ins container mx-auto w-full py-28">
      <div className="container">
        <CommonTitle
          mainTitle="Popular Instructors"
          subTitle={sub}
        ></CommonTitle>

        <div className="flex flex-wrap justify-center py-12">
          {rhold &&
            rhold.map((el, indx) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={el._id}>
                  <CardPI element={el}></CardPI>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
