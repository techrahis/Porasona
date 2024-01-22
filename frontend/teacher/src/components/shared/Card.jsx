import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white capitalize dark:bg-black p-4 rounded-md  shadow-[0rem_0rem_1rem] shadow-indigo-500/20
    dark:shadow-popover w-full">
      <div className="flex justify-between items-center">
        <div className="text-2xl md:text-3xl text-gray-400">{<data.icon1 />}</div>
        <div className="flex flex-col justify-start items-end">
          <h1 className="text-base md:text-lg font-bold">{data.number}</h1>
          <p className="text-[.8rem] text-gray-400 md:text-sm">{data.month} this month</p>
        </div>
      </div>
      <div className="mt-4 flex gap-[2rem] justify-between items-center">
        <h1 className="text-sm font-semibold md:text-lg">{data.total}</h1>
        <p className="text-2xl text-green-500">{<data.icon2 />}</p>
      </div>
    </div>
  );
};

export default Card;
