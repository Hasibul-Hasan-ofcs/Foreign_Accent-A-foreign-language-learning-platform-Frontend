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
      className={`p_box_main shadow-md hover:shadow-xl rounded-xl cursor-pointer ${
        theme === false ? "border-0" : "border"
      } ${theme === false ? "bg-slate-700" : "bg-white"}`}
    >
      <div className="relative w-full aspect-img01 rounded-t-xl">
        <div className="absolute top-4 right-4 z-10 inline-block rounded-2xl theme-bg text-white px-2">
          {element?.available_seats} seats
        </div>
        <img
          src={element?.class_image}
          className="p_ins_img w-full aspect-img01 rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h2 className="theme-text text-2xl font-medium pt-2">
          ${element?.price}
        </h2>
        <h2
          className={`main_name text-gray-900 text-xl font-normal pt-2 line-clamp-2 ${
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
          {element?.instructor_name || "Instructor"}
        </p>
        {/* <p
        className={`pt-5 text-sm  line-clamp-3 ${
          theme === false ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {element?.class_topics?.join(", ")}
      </p> */}

        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <FaUsers className="theme-text"></FaUsers>
            <span
              className={`text-sm ${
                theme === false ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {element?.students} Students
            </span>
          </div>
          <div className="flex gap-1">
            <FaStar className="text-amber-400"></FaStar>
            <span
              className={`text-sm ${
                theme === false ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {element?.rating ? element?.rating : "4.5"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        {/* <div className="flex gap-1 items-center">
          <div className="">
            <FaStar className="text-2xl theme-text"></FaStar>
          </div>
          <span className="text-sm text-gray-500">{element?.rating}</span>
        </div> */}

        {/* <button
          onClick={handleSelectClass}
          className="btn rounded w-full text-white px-5 py-4 theme-bg hover:bg-green-500"
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
