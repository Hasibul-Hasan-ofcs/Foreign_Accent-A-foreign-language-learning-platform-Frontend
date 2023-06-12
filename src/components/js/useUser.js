import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useUser = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  // use axios secure with react query
  const { data: isUser, isLoading: isUserLoading } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user?.email}`);
      return res.data.user;
    },
  });
  return [isUser, isUserLoading];
};
export default useUser;
