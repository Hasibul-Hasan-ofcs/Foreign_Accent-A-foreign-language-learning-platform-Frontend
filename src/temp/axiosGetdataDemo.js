// useEffect(() => {
//   (async function fetchData() {
//     const { data } = await axios.get(
//       // `https://foreignaccent.vercel.app/dashboard/user/selected-class/${id}`,
//       `http://localhost:5000/dashboard/user/selected-class/${id}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     console.log(data?.price);

//     setClassPrice(data?.price);
//   })();
// }, []);
