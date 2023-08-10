import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdminFeedBack = () => {
  const { id, email } = useParams();

  const token = localStorage.getItem("access-token");

  const navigate = useNavigate();

  const handleSendFeedback = (e) => {
    e.preventDefault();

    const form = e.target;
    const textfield = form.textfield.value;
    console.log(textfield);
    const feedbackBody = {
      feedback: textfield,
    };

    fetch(
      `https://foreignaccent.vercel.app/dashboard/admin/manage-status/${id}/feedback`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(feedbackBody),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("FeedBack successfully sent.");
          navigate("/dashboard/manage-classes");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full">
      <div className="container mx-auto flex items-center justify-center py-24">
        <form
          onSubmit={handleSendFeedback}
          className="flex gap-2 flex-col p-10 rounded-md border shadow-md"
        >
          <h1 className="text-green-600 feedback text-center text-xl font-bold">
            feedback
          </h1>
          <input
            type="text"
            name="textfield"
            className="border text-xl w-64 h-20"
          />
          <button className="btn theme-bg">Send feedback</button>
        </form>
      </div>
    </div>
  );
};

export default AdminFeedBack;
