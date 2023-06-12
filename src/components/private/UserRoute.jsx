import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useUser from "../js/useUser";
import { Bars } from "react-loader-spinner";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isUser, isUserLoading] = useUser();
  const location = useLocation();

  if (loading || isUserLoading) {
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
  }

  if (isUser) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
