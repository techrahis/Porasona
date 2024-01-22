import { getDays } from "@/components/Charts/Students/getDays";
import { getWeeks } from "@/components/Charts/Students/getWeeks";
const days = getDays();
const weeks = getWeeks();

export const weeklyData = [
  {
    id: new Date().toLocaleString("deafult", { month: "long" }),
    data: days.map((day) => ({ x: day.x, y: day.y })),
  },
];

export const monthlyData = [
  {
    id: (new Date().getMonth() - 1).toLocaleString("default", {
      month: "long",
    }),
    data: weeks.map((week) => ({ x: week.x, y: week.y })),
  },
];
