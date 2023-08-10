import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [scData, setScData] = useState(null);
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    fetch(
      // `https://foreignaccent.vercel.app/dashboard/user/payment?email=${user?.email}`,
      `https://foreignaccent.vercel.app/dashboard/user/payment?email=${user?.email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setScData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const dateConverter = (dateData) => {
    const date = new Date(dateData);

    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="py-6">
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs px-4 pt-7 pb-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Dashboard</li>
          <li>Payment History</li>
        </ul>
      </div>

      {scData && scData.length > 0 ? (
        scData.map((el, indx) => {
          return (
            <div key={el._id}>
              {el.transaction_id ? (
                <p className="text-center">Nothing to show</p>
              ) : (
                <div
                  className="border rounded-md shadow-md p-4 my-5 flex justify-between items-center flex-col"
                  key={indx}
                >
                  <h2 className="text-green-600 text-xl font-bold pt-3 break-words">
                    {el.transactionId}
                  </h2>
                  <p className="pt-1 pb-3 text-sm text-gray-600">{el.email}</p>
                  <p className="pt-1 pb-3 theme-text text-2xl font-bold">
                    ${el.price}
                  </p>
                  <p className="pt-1 pb-3 text-sm text-gray-600">
                    {dateConverter(el.date)}
                  </p>
                  <p className="pt-1 pb-3 text-sm text-gray-600">
                    {el.class_name}
                  </p>
                  <p className="pt-1 pb-3 text-sm text-gray-600">
                    {el.instructor_name}
                  </p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p className="text-center">Nothing to show</p>
      )}
    </div>
  );
};

export default PaymentHistory;
