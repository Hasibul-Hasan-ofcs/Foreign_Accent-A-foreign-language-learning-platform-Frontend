import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Bars } from "react-loader-spinner";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { addNewClass } from "../components/js/useAddClass";

const image_upload_api_key = import.meta.env.VITE_Image_Upload_Api_Key;

const AddAClass = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    (async function fetchData() {
      const { data } = await axios.get(
        `https://foreignaccent.vercel.app/users?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserName(data?.username);
    })();
  }, []);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_api_key}`;
  const onSubmit = async (dataFound) => {
    setLoading(true);
    const {
      class_name,
      image,
      instructor_name,
      instructor_email,
      available_seats,
      price,
    } = dataFound;
    // const extraData = { status: "pending", students: 0 };

    const formData = new FormData();
    formData.append("image", image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        // console.log(imgRes);
        if (imgRes.success) {
          const class_image = imgRes.data.display_url;

          console.log(class_image);

          const allDataForNewClass = {
            class_name,
            class_image,
            instructor_name,
            instructor_email,
            available_seats,
            price,
          };

          // backend
          const replyData = addNewClass(allDataForNewClass, user?.email, token);
          console.log(replyData);
          setLoading(false);
        }
      });
  };

  return (
    <div className="w-full">
      <div className="container mx-auto flex flex-col items-center justify-center py-24">
        <h1 className="text-yellow-600 text-xl text-center py-10">
          Please be patient while uploading the data as ImgBB is taking longer
          time than expected sometimes.
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 border rounded shadow-md p-5 md:p-10"
        >
          <h2 className="normal-case py-5 text-3xl text-center font-extrabold cursor-pointer font-mons">
            Add A Class
          </h2>
          <div>
            <input
              type="text"
              placeholder="class_name"
              className="input input-bordered w-full"
              {...register("class_name", { required: true })}
            />

            {errors.class_name && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("image", { required: true })}
            />

            {errors.image && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="instructor_name"
              className="input input-bordered w-full"
              readOnly={true}
              value={userName}
              {...register("instructor_name")}
            />

            {errors.instructor_name && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="instructor_email"
              className="input input-bordered w-full"
              readOnly={true}
              value={user?.email}
              {...register("instructor_email")}
            />

            {errors.instructor_email && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="available_seats"
              className="input input-bordered w-full"
              {...register("available_seats", { required: true })}
            />

            {errors.available_seats && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="price"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />

            {errors.price && (
              <span className="text-red-700">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="btn bg-yellow-600 text-white hover:bg-yellow-700"
          >
            {loading ? (
              <Bars
                height="20"
                width="20"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              <span>Add Class</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAClass;
