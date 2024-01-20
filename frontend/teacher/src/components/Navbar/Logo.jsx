import React from "react";
import { MdSchool } from "react-icons/md";
import LogoImage from '@/assets/logo.png'
const Logo = () => {
  return (
    <div className="flex items-center p-1 gap-x-2 font-semibold md:mt-8">
      {/* <h2 className="text-2xl">PoraSona</h2>
      <div className="text-3xl mt-[.2rem]">
        <MdSchool className=" text-blue-600" />
      </div> */}
      <img src={LogoImage} alt="" />
    </div>
  );
};

export default Logo;
