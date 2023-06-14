import Swal from "sweetalert2";

const addNewClass = (allDataForNewClass, email, token) => {
  fetch(
    // `https://foreignaccent.vercel.app/dashboard/instructor/classes?email=${email}`,
    `https://foreignaccent.vercel.app/dashboard/instructor/classes?email=${email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(allDataForNewClass),
    }
  )
    .then((result) => result.json())
    .then((ack) => {
      console.log(ack);
      if (ack.acknowledged) {
        Swal.fire("Class added Successfully.");
      } else {
        Swal.fire(ack.response);
      }
    });
};

export { addNewClass };
