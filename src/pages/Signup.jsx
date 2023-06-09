import React from "react";
import { useForm } from "react-hook-form";
import LANGIMG from "../assets/img/lang_bg01.png";
import GOOGLEIMG from "../assets/img/google.png";
import { Link } from "react-router-dom";
import HelmetComponent from "../components/controllers/HelmetComponent";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="w-full ">
      <HelmetComponent title="Signup"></HelmetComponent>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-28">
        <div className="left-portion w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <img src={LANGIMG} className="grayscale" />
        </div>
        <div className="right-portion w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <div className="p-3 md:py-10 md:px-8 shadow-md rounded-2xl w-full min-h-full border">
            <h2 className="normal-case md:py-10 text-3xl font-extrabold cursor-pointer font-mons">
              Sign Up
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full"
                {...register("username", { required: true })}
              />

              <input
                type="email"
                placeholder="user@example.com"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />

              <input
                type="password"
                placeholder="confirm-password"
                className="input input-bordered w-full"
                {...register("confirmPassword", { required: true })}
              />

              <input
                type="text"
                placeholder="phone no."
                className="input input-bordered w-full"
                {...register("phone", { required: true })}
              />
              <input
                type="text"
                placeholder="address"
                className="input input-bordered w-full"
                {...register("address", { required: true })}
              />

              <select
                {...register("gender")}
                className="select select-bordered w-full"
              >
                <option disabled selected className="text-slate-200">
                  Choose gender
                </option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>

              <input
                type="file"
                className="file-input file-input-bordered w-full"
                {...register("imgFile", { required: true })}
              />

              {errors.exampleRequired && <span>This field is required</span>}

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
                // onClick={handleGooglePopUpLogin}
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
