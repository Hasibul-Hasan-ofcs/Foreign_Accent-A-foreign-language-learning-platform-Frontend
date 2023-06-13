import axios from "axios";

const useSelectedClasses = async ({ email }) => {
  const token = localStorage.getItem("access-token");

  const { data } = await axios.get(
    `https://foreignaccent.vercel.app/dashboard/user/selected-classes?email=${email}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log(data);
  return { data };
};

export default useSelectedClasses;
