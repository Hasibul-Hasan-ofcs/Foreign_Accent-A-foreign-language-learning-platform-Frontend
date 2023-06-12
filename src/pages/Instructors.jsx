import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import InstructorsCard from "../components/Cards/InstructorsCard";
import { Link } from "react-router-dom";
import useAllInstructors from "../components/js/useAllInstructors";

const Instructors = () => {
  const [, refetch, data] = useAllInstructors();
  console.log(data);
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <HelmetComponent title="Instructors"></HelmetComponent>

        {/* breadcrumb */}
        <div className="text-sm breadcrumbs px-4 pt-7">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>Instructors</li>
          </ul>
        </div>

        <div className="flex flex-wrap py-12">
          {data &&
            data.map((el, indx) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 p-2" key={el._id}>
                  <InstructorsCard element={el}></InstructorsCard>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
