import { useQuery } from "@tanstack/react-query";

const getInstructorsDataHome = () => {
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["home-instructors-data"],
    queryFn: async () => {
      const response = await fetch(
        "https://foreignaccent.vercel.app/instructors?limit=8"
        // "http://localhost:5000/instructors?limit=8"
      );
      // const response = await fetch("https://foreignaccent.vercel.app/instructors?limit=8");
      return response.json();
    },
  });

  return [isLoading, refetch, data];
};

export default getInstructorsDataHome;
