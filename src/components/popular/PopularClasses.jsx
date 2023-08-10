import React from "react";
import CommonTitle from "../common/CommonTitle";
import CardPC from "./CardPC";
import getClassesDataHome from "../js/GetClassesDataHome";
import BoxReveal from "../framer/BoxReveal";

const PopularClasses = () => {
  const [, refetch, data] = getClassesDataHome();
  // console.log(data);

  const sub = "Most popular and searched classes";
  return (
    <div className="bg-[#F4F7FB]">
      <div className="container mx-auto w-full py-28 ">
        <div className="container">
          <CommonTitle mainTitle="Popular Classes" subTitle={sub}></CommonTitle>

          {/* <div className="flex flex-wrap justify-center gap-6 pt-20">
            <button className="shadow rounded-lg px-4 py-2 theme-text">
              Spanish
            </button>
            <button className="shadow rounded-lg px-4 py-2 theme-text">
              English
            </button>
            <button className="shadow rounded-lg px-4 py-2 theme-text">
              Bengali
            </button>
            <button className="shadow rounded-lg px-4 py-2 theme-text">
              Japanese
            </button>
            <button className="shadow rounded-lg px-4 py-2 theme-text">
              Arabic
            </button>
          </div> */}

          <div className="flex flex-wrap justify-center py-12">
            {data &&
              data.map((el, indx) => {
                return (
                  <div className="w-full md:w-1/3 lg:w-1/4 p-4" key={el._id}>
                    <BoxReveal delayProp={indx * 0.1}>
                      <CardPC element={el}></CardPC>
                    </BoxReveal>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
