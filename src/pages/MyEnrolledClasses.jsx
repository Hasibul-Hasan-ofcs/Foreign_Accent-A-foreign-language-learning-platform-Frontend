import React, { useContext, useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import TEMPIMG from "../assets/img/404.jpg";
import { AuthContext } from "../providers/AuthProvider";

const MyEnrolledClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [scData, setScData] = useState(null);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    fetch(
      `https://foreignaccent.vercel.app/dashboard/user/selected-classes?email=${user?.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setScData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-6">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs px-4 pt-7 pb-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Dashboard</li>
          <li>My Enrolled Classes</li>
        </ul>
      </div>

      {scData &&
        scData.map((el, indx) => {
          return (
            <div key={el._id}>
              {!el.transaction_id ? (
                <p className="text-center">Nothing to show</p>
              ) : (
                <div className="border rounded-md shadow-md p-4 my-5 flex justify-between items-center flex-col md:flex-row">
                  <img
                    src={el.class_image}
                    className="h-44 rounded aspect-img01"
                  />
                  <div className="border-l-2 border-gray-800 ps-2 flex flex-col justify-center">
                    <h2 className="text-gray-700 text-2xl font-bold pt-3">
                      {el.class_name}
                    </h2>
                    <p className="pt-1 pb-3 text-sm text-gray-600">
                      {el.instructor_name}
                    </p>
                  </div>
                  {/* <div className="flex flex-col gap-2">
                    <Link
                      to={`/dashboard/payment/${el._id}/${el.price}/${el.transaction_id}`}
                      className="btn btn-success shadow-md w-full md:w-28 text-white"
                    >
                      Payment
                    </Link>

                    <button
                      onClick={() => handleDeleteItem(el._id)}
                      className="btn btn-error shadow-md w-full md:w-28 text-white"
                    >
                      Delete
                    </button>
                  </div> */}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default MyEnrolledClasses;
