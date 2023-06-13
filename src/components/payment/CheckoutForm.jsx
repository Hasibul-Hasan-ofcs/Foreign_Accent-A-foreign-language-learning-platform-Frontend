import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({
  price,
  token,
  userName,
  email,
  classId,
  transaction_id,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [paid, setpaid] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axios
        .post(
          "http://localhost:5000/create-payment-intent",
          { price },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email || "email_less",
            name: userName || "nameless",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment information to the server
      const payment = {
        transactionId: paymentIntent.id,
      };

      axios
        .patch(
          `http://localhost:5000/dashboard/user/payment/${classId}`,
          payment,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          // if (res.data.result.insertedId) {
          //   // display confirm
          // }
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="w-full md:w-2/4 p-5 m-10 flex flex-col shadow-md rounded border"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-yellow-600 hover:bg-yellow-700 text-white btn-sm mt-4"
          type="submit"
          disabled={
            !stripe ||
            !clientSecret ||
            processing ||
            transaction_id !== "undefined"
          }
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ps-7">{cardError}</p>}
      {(transaction_id !== "undefined" || transactionId) && (
        <p className="text-green-500">
          Transaction complete with transactionId:{" "}
          {transaction_id || transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
