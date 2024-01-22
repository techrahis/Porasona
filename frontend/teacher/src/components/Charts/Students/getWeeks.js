const enrolled = [
  {
    y: 200,
  },
  {
    y: 100,
  },
  {
    y: 143,
  },
  {
    y: 283,
  },
  {
    y:180
  }
];
export const getWeeks = () => {
  const currentDate = new Date();
  const firstDayOfCurrentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const lastDayOfPrevMonth = new Date(firstDayOfCurrentMonth);
  lastDayOfPrevMonth.setDate(0);
  const year = lastDayOfPrevMonth.getFullYear();
  const month = lastDayOfPrevMonth.getMonth();
  const lastDaysOfWeeks = [];
  for (let day = lastDayOfPrevMonth.getDate(); day > 0; day--) {
    const currentDay = new Date(year, month, day);
    if (currentDay.getDay() === 6) {
      lastDaysOfWeeks.push(currentDay);
    }
  }

  const weeks = lastDaysOfWeeks.map((day, index)=>{
    const enrollment = enrolled[index];
    return{
        ...enrollment,
        x:day.toLocaleString('default', {day:"numeric", month:"short"})
    }
  })

  return weeks.reverse();
};


