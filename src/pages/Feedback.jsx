import React from "react";
import { Link, useParams } from "react-router-dom";

const Feedback = () => {
  const { feedback } = useParams();
  //   console.log(feedback);
  return (
    <div>
      {/* breadcrumb */}
      <div className="text-sm breadcrumbs px-4 pt-7 pb-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/add-class">Dashboard</Link>
          </li>
          <li>My Classes</li>
          <li>Feedback</li>
        </ul>
      </div>

      <h1 className="text-center font-bold py-28">
        {feedback === "undefined" ? "No feedback is available." : feedback}
      </h1>
    </div>
  );
};

export default Feedback;
