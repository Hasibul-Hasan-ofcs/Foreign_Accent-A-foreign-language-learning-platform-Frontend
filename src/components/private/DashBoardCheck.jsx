import React, { useContext, useEffect, useState } from "react";
import useUser from "../js/useUser";
import useInstructor from "../js/useInstructor";
import useAdmin from "../js/useAdmin";
import ActiveRoute from "../controllers/ActiveRoute";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const DashBoardCheck = () => {
  const token = localStorage.getItem("access-token");
  const { user } = useContext(AuthContext);
  const [isRole, setIsRole] = useState(undefined);

  useEffect(() => {
    (async function fetchData() {
      const { data } = await axios.get(
        `https://foreignaccent.vercel.app/users?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setIsRole(data?.role);
    })();
  }, []);

  return (
    <>
      {isRole === undefined && (
        <ActiveRoute to="/dashboard/selected-classes">Dashboard</ActiveRoute>
      )}
      {isRole === "instructor" && (
        <ActiveRoute to="/dashboard/add-class">Dashboard</ActiveRoute>
      )}
      {isRole === "admin" && (
        <ActiveRoute to="/dashboard/manage-classes">Dashboard</ActiveRoute>
      )}
    </>
  );
};

export default DashBoardCheck;
