import { MdOutlineDashboard } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { LuCalendarPlus } from "react-icons/lu";
import { TbUserStar } from "react-icons/tb";
export const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: MdOutlineDashboard,
  },
  {
    id: 2,
    name: "My Courses",
    path: "/courses",
    icon: BsBook,
  },
  {
    id: 3,
    name: "My Schedule",
    path: "/schedule",
    icon: LuCalendarPlus,
  },
  {
    id: 4,
    name: "Reviews",
    path: "/reviews",
    icon: TbUserStar,
  },
];
