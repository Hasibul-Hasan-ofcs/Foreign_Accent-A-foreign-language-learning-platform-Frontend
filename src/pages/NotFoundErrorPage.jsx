import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFoundErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404! page not found</title>
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1>404! Page not found</h1>
        <Link to="/" className="btn btn-neutral">
          &larr; Go Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFoundErrorPage;
