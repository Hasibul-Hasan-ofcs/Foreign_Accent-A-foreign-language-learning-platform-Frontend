import { useQuery } from "@tanstack/react-query";

const getClassesDataHome = () => {
  const { isLoading, refetch, data } = useQuery({
    queryKey: ["home-classes-data"],
    queryFn: async () => {
      const response = await fetch(
        "https://foreignaccent.vercel.app/classes?limit=6"
      );
      // const response = await fetch("https://foreignaccent.vercel.app/classes?limit=6");
      return response.json();
    },
  });

  return [isLoading, refetch, data];
};

export default getClassesDataHome;
