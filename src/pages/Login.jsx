import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LANGIMG from "../assets/img/lang_bg01.png";
import GOOGLEIMG from "../assets/img/google.png";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import HelmetComponent from "../components/controllers/HelmetComponent";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
      <HelmetComponent title="Login"></HelmetComponent>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-28">
        <div className="left-portion w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <img src={LANGIMG} className="grayscale" />
        </div>
        <div className="right-portion w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <div className="p-3 md:py-10 md:px-8 shadow-md rounded-2xl w-full min-h-full border">
            <h2 className="normal-case md:py-10 text-3xl font-extrabold cursor-pointer font-mons">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                type="email"
                placeholder="user@example.com"
                className="input input-bordered w-full"
                {...register("email", { required: true })}
              />

              {/* include validation with required or other standard HTML validation rules */}

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-transparent text-gray-600 hover:text-gray-800 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <BiShow className="h-6 w-6" />
                  ) : (
                    <BiHide className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <button
                type="submit"
                className="btn bg-yellow-600 text-white hover:bg-yellow-700"
              >
                Log in
              </button>
            </form>

            <div className="pt-12">
              <p className="text-center">
                Don't have an account? &nbsp;
                <Link to="/signup" className="font-bold">
                  Sign Up
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

export default Login;
