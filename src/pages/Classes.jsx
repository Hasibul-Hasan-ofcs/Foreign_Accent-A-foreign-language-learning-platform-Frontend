import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import ClassesCard from "../components/Cards/ClassesCard";
import { Link } from "react-router-dom";
import useAllClasses from "../components/js/useAllClasses";

const Classes = () => {
  const [, refetch, data] = useAllClasses();
  console.log(data);
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <HelmetComponent title="Classes"></HelmetComponent>

        {/* breadcrumb */}
        <div className="text-sm breadcrumbs px-4 pt-7">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>Classes</li>
          </ul>
        </div>

        <div className="flex flex-wrap py-12">
          {data &&
            data.map((el, indx) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={el._id}>
                  <ClassesCard element={el}></ClassesCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Classes;
