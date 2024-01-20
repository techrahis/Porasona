import React from "react";

const Card = ({ data }) => {
  return (
    <div className="bg-white capitalize dark:bg-black px-6 py-4 rounded-md shadow-lg shadow-indigo-500/20 w-fit">
      <div className="flex justify-between items-center gap-[5rem]">
        <div className="text-3xl text-gray-400">{<data.icon1 />}</div>
        <div className="flex flex-col justify-start items-end">
          <h1 className="text-xl font-bold">${data.number}</h1>
          <p className="text-sm text-gray-400">${data.month} this month</p>
        </div>
      </div>
      <div className="mt-4 flex gap-[2rem] justify-between items-center">
        <h1 className="text-base font-semibold">{data.total}</h1>
        <p className="text-2xl text-green-500">{<data.icon2 />}</p>
      </div>
    </div>
  );
};

export default Card;
