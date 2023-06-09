import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PNF from "../assets/img/404.png";

const NotFoundErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404! page not found</title>
      </Helmet>

      <div className="min-h-screen ">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <div className="w-full flex justify-start py-8">
            <Link to="/" className="btn btn-neutral  py-0">
              &larr; Go Back to Homepage
            </Link>
          </div>
          <img src={PNF} />
          <h1 className="font-extrabold text-3xl text-center text-zinc-700 ">
            OOPS! Looks like the page you are looking for is not found! <br />{" "}
            Please go back to continue browsing.
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundErrorPage;
