import { useQuery } from "@tanstack/react-query";

const useAllInstructors = () => {
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["instructors-page-data"],
    queryFn: async () => {
      const response = await fetch(
        "https://foreignaccent.vercel.app/instructors"
      );
      // const response = await fetch("https://foreignaccent.vercel.app/instructors");
      return response.json();
    },
  });

  console.log(data);

  return [isLoading, refetch, data];
};

export default useAllInstructors;
