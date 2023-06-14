import { Elements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../providers/AuthProvider";
import useSelectedClasses from "../js/useSelectedClasses";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  let {
    id,
    price,
    transaction_id,
    class_name,
    instructor_name,
    instructor_email,
  } = useParams();
  const { user } = useContext(AuthContext);
  const [userName, setUsername] = useState(null);
  const token = localStorage.getItem("access-token");

  price = parseInt(price);

  useEffect(() => {
    (async function fetchData() {
      const { data } = await axios.get(
        // `https://foreignaccent.vercel.app/dashboard/user/selected-class/${id}`,
        `https://foreignaccent.vercel.app/users?email=${user?.email}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsername(data?.username);
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          token={token}
          userName={userName}
          email={user.email}
          classId={id}
          transaction_id={transaction_id}
          class_name={class_name}
          instructor_name={instructor_name}
          instructor_email={instructor_email}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
