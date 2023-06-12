import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const useSelectClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { user } = useContext(AuthContext);

  const { isLoading, refetch, data } = useQuery({
    queryKey: ["user-classes-selection"],
    queryFn: async () => {
      const response = await axiosSecure(
        `/dashboard/user/classes-selection?email=${user?.email}`
      );

      console.log("response axios class selection");
      return response.data;
    },
  });

  //   console.log(data);

  return [isLoading, refetch, data];
};

export default useSelectClasses;
