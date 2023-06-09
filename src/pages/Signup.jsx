import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import LANGIMG from "../assets/img/lang_bg01.png";
import GOOGLEIMG from "../assets/img/google.png";
import { Link, useNavigate } from "react-router-dom";
import HelmetComponent from "../components/controllers/HelmetComponent";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const image_upload_api_key = import.meta.env.VITE_Image_Upload_Api_Key;

const Signup = () => {
  const { createUser, user, googlePopUpSignIn, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // react-form-hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_api_key}`;

  const onSubmit = (data) => {
    const {
      username,
      email,
      password,
      confirmPassword,
      phone,
      address,
      gender,
      imgFile,
    } = data;

    const formData = new FormData();
    formData.append("image", imgFile[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        console.log(imgRes);
        if (imgRes.success) {
          const img_url = imgRes.data.display_url;

          const allDataForNewUser = {
            username,
            email,
            password,
            confirmPassword,
            phone,
            address,
            gender,
            img_url,
          };

          fetch("https://foreignaccent.vercel.app/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(allDataForNewUser),
          })
            .then((result) => result.json())
            .then((ack) => console.log(ack));
        }
      });

    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential);

        const userCurrent = userCredential.user;

        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome to foreign language learning platform ${
            userCurrent?.displayName
              ? userCurrent.displayName
              : userCurrent.email
          }`,
          showConfirmButton: true,
        });

        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    googlePopUpSignIn()
      .then((result) => {
        const userCurrent = result.user;

        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome to foreign language learning platform ${
            userCurrent?.displayName
              ? userCurrent.displayName
              : userCurrent.email
          }`,
          showConfirmButton: true,
          // timer: 1500,
        });

        navigate("/");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="w-full ">
      <HelmetComponent title="Signup"></HelmetComponent>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-28 justify-center">
        <div className="w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <div className="p-3 md:py-10 md:px-8 shadow-md rounded-2xl w-full min-h-full border">
            <h2 className="normal-case py-10 text-3xl font-extrabold cursor-pointer font-mons">
              Sign Up
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full"
                  {...register("username", { required: true })}
                />

                {errors.username && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="user@example.com"
                  className="input input-bordered w-full"
                  {...register("email", { required: true })}
                />

                {errors.email && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{6,15}$/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password should be atleast of 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700">Password length exceeded</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-700">
                    Password should be minimum of 6 characters, maximum of 15
                    characters, at least one lowercase, one uppercase, one
                    number and one special character
                  </span>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="confirm-password"
                  className="input input-bordered w-full"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 15,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{6,15}$/,
                  })}
                />
                {errors.confirmPassword?.type === "required" && (
                  <span className="text-red-700">Password is required</span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <span className="text-red-700">
                    Password should be atleast of 6 characters
                  </span>
                )}
                {errors.confirmPassword?.type === "maxLength" && (
                  <span className="text-red-700">Password length exceeded</span>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <span className="text-red-700">
                    Password should be minimum of 6 characters, maximum of 15
                    characters, at least one lowercase, one uppercase, one
                    number and one special character
                  </span>
                )}
              </div>

              <input
                type="text"
                placeholder="phone no."
                className="input input-bordered w-full"
                {...register("phone")}
              />

              <input
                type="text"
                placeholder="address"
                className="input input-bordered w-full"
                {...register("address")}
              />

              <select
                {...register("gender")}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose gender
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>

              <div>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  {...register("imgFile", { required: true })}
                />

                {errors.imgFile && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-yellow-600 text-white hover:bg-yellow-700"
              >
                Sign Up
              </button>
            </form>

            <div className="pt-12">
              <p className="text-center">
                Don't have an account? &nbsp;
                <Link to="/login" className="font-bold">
                  Log in
                </Link>
              </p>

              <div className="divider py-10">OR</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className="google_login_button btn rounded-full p-1 shadow-md flex justify-center items-center border w-fit"
                onClick={handleGoogleLogin}
              >
                <img src={GOOGLEIMG} className="h-10" /> &nbsp; Google Sign In
                &nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
