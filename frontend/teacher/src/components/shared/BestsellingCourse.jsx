import React from "react";
import { FiUser } from "react-icons/fi";
const BestsellingCourse = ({ courses }) => {
  return (
    <div className="bg-white my-6 p-4 px-4 rounded-md shadow-lg shadow-indigo-500/20 dark:bg-black overflow-x-auto">
      <h1 className="font-bold">Best selling course</h1>
      <div className="grid grid-cols-[auto,10rem] border-b border-blue-500 mt-2">
        <p className="text-sm mb-1">All time</p>
        <div className="flex gap-x-4 mb-1 items-center justify-end">
          <p className="text-sm  font-semibold">Total Sales</p>
          <p className="text-sm  font-semibold">Enrolls</p>
        </div>
      </div>
      {courses.map((course) => (
        <div
          className="mb-6 last:mb-2 mt-4 grid grid-cols-[auto,10rem] gap-x-2"
          key={course.id}
        >
          <div className="flex items-center gap-x-2 w-full">
            <div className="h-[2.5rem] w-[2.5rem] rounded-md bg-[#eee] dark:bg-[#111] flex justify-center items-center p-1">
              <img src={course.image} alt="logo" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm font-bold">{course.courseName}</h2>
              <p className="text-[.7rem]">Published {course.published} ago</p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div className="flex justify-center w-full h-full items-center">
              <h2 className="text-sm font-medium ">
                <p>${course.totalSales}</p>
              </h2>
            </div>
            <div className="flex justify-center items-center ">
              <h2 className="text-sm font-medium flex justify-center items-center gap-x-1">
                <FiUser />
                <p>{course.enrollStudents}</p>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestsellingCourse;
