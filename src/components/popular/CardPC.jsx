import React, { useContext, useState } from "react";
import TEMPIMG from "../../assets/img/404.jpg";
import { FaStar, FaUsers } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { Bars } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CardPC = ({ element }) => {
  const { theme, setTheme, user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  // const handleSelectClass = () => {
  //   if (!user) {
  //     Swal.fire("Please Login to select course.");
  //     navigate("/login");
  //   }
  //   const { _id, ...newEl } = element;
  //   element = { ...newEl, email: user.email };

  //   console.log(element);
  //   setLoad(true);

  //   fetch(
  //     `https://foreignaccent.vercel.app/dashboard/user/classes-selection?email=${user?.email}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(element),
  //     }
  //   )
  //     .then((response) => {
  //       console.log(response);
  //       if (response) {
  //         toast.success(`Class added to your selection list`, {
  //           position: "top-center",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
  //         });
  //       }

  //       setLoad(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div
      className={`shadow-md rounded-xl p-7 ${
        theme === false ? "border-0" : "border"
      } ${theme === false ? "bg-slate-700" : "bg-white"}`}
    >
      <img
        src={element?.class_image}
        className="w-full aspect-img01 rounded-xl"
      />
      <h2 className="text-yellow-600 text-4xl font-extrabold pt-5">
        ${element?.price}
      </h2>
      <h2
        className={`text-gray-700 text-2xl font-bold pt-5 line-clamp-2 ${
          theme === false ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {element?.class_name}
      </h2>
      <p
        className={`pt-1 text-sm text-gray-600 ${
          theme === false ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {element?.instructor_name}
      </p>
      {/* <p
        className={`pt-5 text-sm  line-clamp-3 ${
          theme === false ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {element?.class_topics?.join(", ")}
      </p> */}

      <div className="flex justify-between pt-5">
        <div className="flex gap-1 items-center">
          <div className="h-10 w-10 rounded-full bg-yellow-600 flex justify-center items-center">
            <FaUsers className="text-white"></FaUsers>
          </div>
          <span
            className={`text-sm ${
              theme === false ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {element?.students} Students
          </span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex justify-between">
        {/* <div className="flex gap-1 items-center">
          <div className="">
            <FaStar className="text-2xl text-yellow-600"></FaStar>
          </div>
          <span className="text-sm text-gray-500">{element?.rating}</span>
        </div> */}

        {/* <button
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
        </button> */}
      </div>
    </div>
  );
};

export default CardPC;
