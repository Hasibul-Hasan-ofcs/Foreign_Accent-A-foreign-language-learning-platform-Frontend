import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [scData, setScData] = useState(null);
  const token = localStorage.getItem("access-token");

  const handleApprove = (id) => {
    fetch(
      `https://foreignaccent.vercel.app/dashboard/admin/manage-status/${id}/approve`,
      {
        method: "PATCH",
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
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleDeny = (id) => {
    fetch(
      `https://foreignaccent.vercel.app/dashboard/admin/manage-status/${id}/deny`,
      {
        method: "PATCH",
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
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(
      //   `https://foreignaccent.vercel.app/dashboard/instructor/classes?email=${user?.email}`,
      `https://foreignaccent.vercel.app/classes?status=all`,
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
        console.log(data);
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
          <li>Manage Classes</li>
        </ul>
      </div>

      {scData &&
        scData.map((el, indx) => {
          return (
            <div
              key={el._id}
              className="border rounded-md shadow-md p-4 my-5 flex justify-between gap-5 items-center flex-col md:flex-row"
            >
              <img src={el.class_image} className="h-44 rounded aspect-img01" />
              <div className="border-l-2 border-gray-800 ps-2 flex flex-col justify-center">
                <h2 className="text-gray-700 text-2xl font-bold pt-3">
                  {el.class_name}
                </h2>
                <p className="pt-1 pb-3 text-sm text-gray-600">
                  {el.instructor_name}
                </p>
                <p className="pt-1 pb-3 text-sm text-gray-600">
                  {el.students} Students
                </p>
                <p className="pt-1 pb-3 text-sm text-gray-600">
                  {el.available_seats} Seats
                </p>
                <p className="pt-1 pb-3 theme-text text-2xl">${el.price}</p>
                <p className="pt-1 pb-3 text-sm text-gray-600 font-bold">
                  {el.status}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  disabled={el.status !== "pending" && true}
                  className="btn btn-primary"
                  onClick={() => handleApprove(el._id)}
                >
                  Approve
                </button>
                <button
                  disabled={el.status !== "pending" && true}
                  className="btn btn-neutral"
                  onClick={() => handleDeny(el._id)}
                >
                  Deny
                </button>

                <Link
                  to={`/dashboard/manage-classes/feedback/${el._id}/${el.instructor_email}`}
                  // disabled={el.status !== "pending" || el.status !== "pending" && true}
                  className="btn btn-success shadow-md w-full md:w-28 text-white"
                >
                  Send feedback
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ManageClasses;
