import React, { useEffect, useState } from "react";
import { courseData } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { CiUser } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { TbUserStar } from "react-icons/tb";
import { PlusCircle } from "lucide-react";
import PaginationComponent from "../shared/PaginationComponent";
const MyCourses = () => {
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState(null);
  useEffect(()=>{
    setCourses(courseData.find((course) => course.page === page));
  }, [page])

  return (
    courses && <div>
        <div className="mt-3 mb-8 flex justify-between w-full items-center">
            <h1 className="text-xl font-bold ml-">All courses</h1>
            <Button variant="add">New Course <PlusCircle /></Button>
        </div>
      <ul className="w-full gap-y-5 flex flex-col">
        {courses.data.map((course) => (
          <li
            key={course.id}
            className="bg-white h-[9rem] sm:h-fit dark:bg-black p-4 rounded-md shadow-[0rem_0rem_1rem] shadow-indigo-500/20
          dark:shadow-popover"
          >
            <div className="flex items-center gap-4 sm:flex-col h-full">
              <div className="w-[40%] h-full sm:w-full">
                <img src={course.image} alt="" className="rounded-md border h-full w-full" />
              </div>
              <div className="grid grid-rows-2 w-full h-full gap-y-2 sm:grid-rows-1 sm:gap-0">
                <div className="mt-2 sm:mt-0">
                  <h2 className="text-base font-semibold">{course.name}</h2>
                  <p className="text-sm text-gray-600 font-medium dark:text-gray-300">{course.published}</p>
                </div>

                <div className="flex justify-between mt-4 items-center w-full sm:grid sm:gap-y-4">
                  <div className="flex items-center text-sm gap-3 sm:flex-col sm:items-start">
                    <p className="flex items-center gap-1">
                      <CiUser className="text-[#9ef01a] text-base font-bold" /> {course.enrolled}
                    </p>
                    <p className="flex items-center gap-1">
                      <FiEye className="text-[#9ef01a] text-base font-bold" /> {course.views}
                    </p>
                    <p className="flex items-center gap-1">
                      <TbUserStar className="text-[#9ef01a] text-base font-bold" /> {course.rating}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                    <p className="transition-all ease-linear duration-300 
                    text-sm cursor-pointer hover:text-blue-500 underline underline-offset-4">View Course States</p>
                    
                    <Button variant="outline">Edit</Button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-[90%] m-auto my-4 sm:w-[80%">
        <PaginationComponent length={courseData.length} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default MyCourses;
