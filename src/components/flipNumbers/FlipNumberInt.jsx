import React, { useEffect, useRef, useState } from "react";
import FlipNumbers from "react-flip-numbers";

const FlipNumberInt = () => {
  const timer = useRef(null);
  const [timeRemaining, setTimeRemaining] = useState(10000);

  useEffect(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => {
      setTimeRemaining((currentTime) => --currentTime);
    }, 1000);
  }, []);

  return (
    <FlipNumbers
      height={12}
      width={12}
      color="red"
      background="white"
      play
      perspective={100}
      numbers={String(timeRemaining)}
    />
  );
};

export default FlipNumberInt;
