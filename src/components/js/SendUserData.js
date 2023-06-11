const createUserDB = (allDataForNewUser) => {
  fetch("https://foreignaccent.vercel.app/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(allDataForNewUser),
  })
    .then((result) => result.json())
    .then((ack) => console.log(ack));
};

export { createUserDB };
