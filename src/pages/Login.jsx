import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import LANGIMG from "../assets/img/lang_bg01.png";
import GOOGLEIMG from "../assets/img/google.png";
import { Link, useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import HelmetComponent from "../components/controllers/HelmetComponent";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { login, user, googlePopUpSignIn, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
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

  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password)
      .then((userCredential) => {
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
      .catch((err) => {
        setLoading(false);
        toast.error(`Email or Password is incorrect`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
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
      <HelmetComponent title="Login"></HelmetComponent>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-28 justify-center">
        <div className="w-full lg:w-1/2 px-2 md:px-10 flex items-center justify-center">
          <div className="p-3 md:py-10 md:px-8 shadow-md rounded-2xl w-full min-h-full border">
            <h2 className="normal-case py-10 text-3xl font-extrabold cursor-pointer font-mons">
              LOG IN
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              {/* register your input into the hook by invoking the "register" function */}

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

              {/* include validation with required or other standard HTML validation rules */}

              <div>
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
                {errors.password && (
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
                  <span>Log in</span>
                )}
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
                onClick={handleGoogleLogin}
              >
                <img src={GOOGLEIMG} className="h-10" /> &nbsp; Google Sign In
                &nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
