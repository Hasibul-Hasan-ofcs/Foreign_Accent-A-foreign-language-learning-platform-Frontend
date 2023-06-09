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
            <Link to="/" className="btn btn-link  py-0">
              &larr; Go Back to Homepage
            </Link>
          </div>
          <img src={PNF} />
          <h1 className="font-extrabold text-4xl text-center text-violet-800 ">
            OOPS! Looks like the page you are looking for is not found!
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundErrorPage;
