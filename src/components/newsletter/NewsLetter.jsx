import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const subInputref = useRef(null);

  const subscribeHandler = (e) => {
    e.preventDefault();
    const form = e.target;

    toast.success(
      `Dear ${subInputref.current.value}, Thank you for subscribing to our newsletter`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );

    form.reset();
  };
  return (
    <div className="py-24 relative flex flex-col">
      <div className="h-1/2 bg-white"></div>
      <div className="h-1/2 bg-[#0E2A47]"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-10 rounded-2xl bg-[#F4F7FB] shadow-lg border p-8 w-[90%]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-gray-900 text-center font-bold text-2xl">
            Newsletter
          </h1>
          <div className="form-control w-80">
            <p className="text-center py-7 text-gray-700">
              Please Enter your email address
            </p>
            <div className="relative">
              <form onSubmit={subscribeHandler}>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="input input-bordered w-full pr-16 bg-white"
                  ref={subInputref}
                  required
                />
                <button
                  className="btn theme-bg theme-border absolute top-0 right-0 rounded-l-none hover:bg-green-500 text-white"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
