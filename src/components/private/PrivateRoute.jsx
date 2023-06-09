import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Bars } from "react-loader-spinner";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading)
    return (
      <div className="py-5 flex justify-center">
        <Bars
          height="80"
          width="80"
          color="#ca8a04"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
