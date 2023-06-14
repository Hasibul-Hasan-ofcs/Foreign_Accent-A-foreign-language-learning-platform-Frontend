import React from "react";
import CountUp from "react-countup";

const CounterComponent = () => {
  return (
    <div className="w-full pb-20">
      <div className="container flex flex-col md:flex-row justify-evenly">
        <div className="flex flex-col items-center  gap-4 px-5 w-full lg:w-1/3">
          <h1 className="text-6xl text-yellow-600 font-extrabold ">
            <CountUp
              start={0}
              end={10}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <p className="text-slate-500 text-2xl">Students</p>
        </div>

        <div className="divider md:divider-horizontal"></div>

        <div className="flex flex-col items-center gap-4 px-5 w-full lg:w-1/3">
          <h1 className="text-6xl text-yellow-600 font-extrabold ">
            <CountUp
              start={0}
              end={5}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <p className="text-slate-500 text-2xl">Instructors</p>
        </div>

        <div className="divider md:divider-horizontal"></div>

        <div className="flex flex-col items-center gap-4 px-5 w-full lg:w-1/3">
          <h1 className="text-6xl text-yellow-600 font-extrabold ">
            <CountUp
              start={0}
              end={10}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <p className="text-slate-500 text-2xl">Classes</p>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
