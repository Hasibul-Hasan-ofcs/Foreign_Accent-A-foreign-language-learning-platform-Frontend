import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import InstructorsCard from "../components/Cards/InstructorsCard";
import { Link } from "react-router-dom";

const Instructors = () => {
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
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-2">
            <InstructorsCard></InstructorsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
