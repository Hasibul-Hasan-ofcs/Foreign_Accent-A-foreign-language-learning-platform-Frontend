import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const useUserSelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");

  const { user } = useContext(AuthContext);

  const { isLoading, refetch, data } = useQuery({
    queryKey: ["user-selected-classes", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `https://foreignaccent.vercel.app/dashboard/user/selected-classes?email=${user?.email}`
      );
      return response.data;
    },
  });

  console.log(data);

  return [isLoading, refetch, data];
};

export default useUserSelectedClasses;

// const response = await fetch(
//   `https://foreignaccent.vercel.app/dashboard/user/selected-classes?email=${user?.email}`,
//   {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
// return response.json();
