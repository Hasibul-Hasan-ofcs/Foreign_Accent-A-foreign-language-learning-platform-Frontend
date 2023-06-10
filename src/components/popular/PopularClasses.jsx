import React from "react";
import CommonTitle from "../common/CommonTitle";

const PopularClasses = () => {
  const sub =
    "Embark on a Multilingual Journey: Enroll in our Popular Language Classes and Experience the Magic of our Summer Camp Learning School. From Spanish to Mandarin, French to Japanese, our diverse range of classes will ignite your passion for foreign languages.";
  return (
    <div className="w-full py-28">
      <div className="container">
        <CommonTitle mainTitle="Popular Classes" subTitle={sub}></CommonTitle>
      </div>
    </div>
  );
};

export default PopularClasses;
