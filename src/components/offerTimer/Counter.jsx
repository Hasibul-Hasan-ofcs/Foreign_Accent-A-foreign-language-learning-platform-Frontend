import moment from "moment";
import React, { useEffect, useState } from "react";
import Digit from "./Digit";

const Counter = ({ timeEnd }) => {
  const today = moment();
  const deadline = moment(timeEnd, "YYYY-MM-DD", true);

  const milliseconds = deadline.diff(moment(), "milliseconds");
  const days = moment.duration(milliseconds).days();
  const hours = moment.duration(milliseconds).hours();
  const minutes = moment.duration(milliseconds).minutes();
  const seconds = moment.duration(milliseconds).seconds();
  const [time, setTime] = useState([days, hours, minutes, seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      const milliseconds = deadline.diff(moment(), "milliseconds");
      const days = moment.duration(milliseconds).days();
      const hours = moment.duration(milliseconds).hours();
      const minutes = moment.duration(milliseconds).minutes();
      const seconds = moment.duration(milliseconds).seconds();
      setTime([days, hours, minutes, seconds]);
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (deadline.isBefore(today)) {
    return <></>;
  }

  return (
    <div className="flex gap-5 flex-wrap justify-center">
      <Digit digit={time[0]} timeUnit="Days" />
      <Digit digit={time[1]} timeUnit="Hours" />
      <Digit digit={time[2]} timeUnit="Minutes" />
      <Digit digit={time[3]} timeUnit="Seconds" />
    </div>
  );
};

export default Counter;
