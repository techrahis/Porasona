import { PlusCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { toogleSidebar } from "@/redux/Slice";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from '@/assets/avatar.jpg'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
const Header = () => {
    const dispatch = useDispatch();
  return (
    <div
      className="md:bg-white md:dark:bg-black md:fixed md:top-0 md:left-0 md:right-0 md:w-full justify-between 
    flex items-center p-3 md:shadow-[0_.5rem_1.5rem_rgba(0,0,0,0.1)]"
    >
      <div className="md:hidden">
        <h1 className="text-xl lg:text-base">
          Good AfterNoon, <span className="font-bold">Mr. Soumyaip Saha</span>
        </h1>
        <p className="text-sm text-gray-500">
          Track manage and see the latest updates here
        </p>
      </div>
      <div
        className="hidden md:block cursor-pointer"
        onClick={() => dispatch(toogleSidebar(true))}
      >
        <Menu />
      </div>
      <div className="flex gap-x-4 items-center">
        <Button variant="add" className="">
          <p className="sm:hidden">New Course</p> <PlusCircle />
        </Button>
        <div className="relative h-fit p-1">
            <p className="absolute top-[-.5rem] right-[-.2rem] bg-red-500 text-sm py-0 px-[.4rem] rounded-full
            flex justify-center items-center">2</p>
            <IoIosNotificationsOutline className="text-3xl "/>
        </div>
        <div className="flex group items-center gap-x-4 relative cursor-pointer">
            <Avatar>
                <AvatarImage src={Image}></AvatarImage>
                <AvatarFallback>TI</AvatarFallback>
            </Avatar>
            <div className="space-y-1 md:absolute md:top-[155%] md:hidden md:group-hover:block transition-all ease-linear duration-300
            md:bg-white md:dark:bg-black md:right-0 md:p-4 w-[150px]">
                <h1 className="text-base">Soumayadip Saha</h1>
                <p className="text-sm text-gray-400">Web Developer</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
