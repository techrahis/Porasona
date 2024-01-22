import BestsellingCourse from "@/components/shared/BestsellingCourse";
import Card from "@/components/shared/Card";
import { cardData2, courses } from "@/data/bestSelling";
import React from "react";
import { Helmet } from "react-helmet-async";
import MyCourses from "@/components/Courses/MyCourses";
const Courses = () => {
  return (
    <div>
      <Helmet>
        <title>Course</title>
      </Helmet>

      <div className="h-full w-[99%] m-auto md:w-[95%] grid grid-cols-[auto,25rem] gap-6 mt-6 lg:grid-cols-1 md:mt-20">
        <div className="w-full flex flex-col gap-y-4">
          <div className="my-2 gap-x-4 flex items-center w-full md:grid md:grid-cols-2 md:gap-8 md:justify-center sm:grid-cols-1">
            <Card data={cardData2} />
            <Card data={cardData2} />
            <Card data={cardData2} />
          </div>

          <MyCourses />
          <div>
            
          </div>
        </div>
        <div className="w-full my-2">
          <BestsellingCourse courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default Courses;
