import React, { useContext, useState } from "react";
import { FaChair, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAdmin from "../js/useAdmin";
import useUser from "../js/useUser";
import useInstructor from "../js/useInstructor";

const ClassesCard = ({ element }) => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [load, setLoad] = useState(false);

  const [isAdmin] = useAdmin();
  const [isUser] = useUser();
  const [isInstructor] = useInstructor();

  const navigate = useNavigate();

  const handleSelectClass = () => {
    if (!user) {
      Swal.fire("Please Login to select course.");
      navigate("/login");
    }

    const { _id, ...newEl } = element;
    element = { ...newEl, email: user.email };

    setLoad(true);

    fetch(
      // `https://foreignaccent.vercel.app/dashboard/user/classes-selection?email=${user?.email}`,
      `https://foreignaccent.vercel.app/dashboard/user/classes-selection?email=${user?.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(element),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);

        if (response.status === "available") {
          setLoad(false);
          return toast.error(`Class already exists`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }

        toast.success(`Class added to your selection list`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`shadow-md rounded-xl p-7 border ${
        element.available_seats == 0 && "bg-red-400"
      }`}
    >
      <img
        src={element.class_image}
        className="w-full aspect-img01 rounded-xl"
      />
      <h2 className="text-yellow-600 text-4xl font-extrabold pt-5">
        ${element.price}
      </h2>
      <h2 className="text-gray-700 text-2xl font-bold pt-5 line-clamp-2">
        {element.class_name}
      </h2>
      <p className="pt-2 text-sm text-gray-500">{element.instructor_name}</p>

      <div className="flex justify-between py-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaChair className="text-white"></FaChair>
          </div>
          <span className="text-sm text-gray-500">
            {element.available_seats} Seats available!
          </span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        <button
          disabled={isAdmin || isInstructor || element.available_seats == 0}
          onClick={handleSelectClass}
          className="btn rounded w-full text-white px-5 py-4 bg-yellow-600 hover:bg-yellow-700"
        >
          {load ? (
            <span className="flex justify-center">
              <Bars
                height="20"
                width="20"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </span>
          ) : (
            <span>Select Class</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ClassesCard;
