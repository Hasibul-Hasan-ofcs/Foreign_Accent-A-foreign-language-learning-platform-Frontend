import { useQuery } from "@tanstack/react-query";

const useAllClasses = () => {
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["classes-page-data"],
    queryFn: async () => {
      const response = await fetch("https://foreignaccent.vercel.app/classes");
      // const response = await fetch("http://localhost:5000/classes");
      return response.json();
    },
  });

  return [isLoading, refetch, data];
};

export default useAllClasses;
