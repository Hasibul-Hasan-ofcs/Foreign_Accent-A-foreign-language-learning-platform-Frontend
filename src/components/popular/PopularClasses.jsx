import React from "react";
import CommonTitle from "../common/CommonTitle";
import CardPC from "./CardPC";

const PopularClasses = () => {
  const sub =
    "Embark on a Multilingual Journey: Enroll in our Popular Language Classes and Experience the Magic of our Summer Camp Learning School. From Spanish to Mandarin, French to Japanese, our diverse range of classes will ignite your passion for foreign languages.";
  return (
    <div className="w-full py-28">
      <div className="container">
        <CommonTitle mainTitle="Popular Classes" subTitle={sub}></CommonTitle>

        <div className="flex flex-wrap py-12">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <CardPC></CardPC>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
