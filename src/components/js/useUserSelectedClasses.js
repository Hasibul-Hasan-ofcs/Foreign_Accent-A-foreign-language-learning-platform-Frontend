import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const useUserSelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const { isLoading, refetch, data } = useQuery({
    queryKey: ["user-selected-classes"],
    queryFn: async () => {
      const response = await axiosSecure(
        `http://localhost:5000/dashboard?email=${user?.email}`
      );
      //   const response = await axios.get(
      //     `http://localhost:5000/dashboard?email=${user?.email}`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${localStorage.getItem("access-token")}`,
      //       },
      //     }
      //   );
      console.log("response axios");
      return response.data;
    },
  });

  //   console.log(data);

  return [isLoading, refetch, data];
};

export default useUserSelectedClasses;
