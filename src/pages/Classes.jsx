import React from "react";
import HelmetComponent from "../components/controllers/HelmetComponent";
import ClassesCard from "../components/Cards/ClassesCard";
import { Link } from "react-router-dom";
import useAllClasses from "../components/js/useAllClasses";
import { Bars } from "react-loader-spinner";

const Classes = () => {
  const [isLoading, refetch, data] = useAllClasses();
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div className="py-5 flex justify-center bg-white">
          <Bars
            height="80"
            width="80"
            color="#32b768"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="w-full bg-white">
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

            <div className="flex flex-wrap justify-center py-12">
              {data &&
                data.map((el, indx) => {
                  return (
                    <div className="w-full md:w-1/3 lg:w-1/4 p-4" key={el._id}>
                      <ClassesCard element={el}></ClassesCard>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Classes;
