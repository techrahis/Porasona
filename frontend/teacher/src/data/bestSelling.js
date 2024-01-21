import { AiOutlineDollar } from "react-icons/ai";
import { IoIosTrendingUp } from "react-icons/io";
import webdev from '@/assets/webdev.png';
import java from '@/assets/java.png';
import photoshop from '@/assets/photoshop.png'
export const courses = [
  {
    id:1,
    image: webdev,
    courseName: "Web Developement",
    published: "2 months",
    totalSales: "1500",
    enrollStudents: "200",
  },

  {
    id:2,
    image: java,
    courseName: "Java",
    published: "3 months",
    totalSales: "2500",
    enrollStudents: "800",
  },

  {
    id:3,
    image: photoshop,
    courseName: "Photoshop",
    published: "4 months",
    totalSales: "500",
    enrollStudents: "200",
  },
];

export const cardData = {
  number: "5000",
  month: "100",
  total: "total enrollments",
  icon1: AiOutlineDollar,
  icon2: IoIosTrendingUp,
};
