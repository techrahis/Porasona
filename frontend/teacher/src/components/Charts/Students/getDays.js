const enrolled = [
  {
    y: 20,
  },
  {
    y: 58,
  },
  {
    y: 143,
  },
  {
    y: 283,
  },
  {
    y: 60,
  },
  {
    y: 80,
  },
  {
    y: 90,
  },
];

export const getDays = () => {
  const today = new Date();
  const currentDayofWeek = today.getDay();
  const firstDayOfCurrentWeek = new Date(today);
  firstDayOfCurrentWeek.setDate(today.getDate() - currentDayofWeek);

  const daysInaWeek = 7;
  const days = Array.from({ length: daysInaWeek }, (item, index) => {
    const currentDate = new Date(firstDayOfCurrentWeek);
    currentDate.setDate(firstDayOfCurrentWeek.getDate() - daysInaWeek + index);
    const dayOfWeek = currentDate.toLocaleString("en-US", { day:"numeric", month:"short" });
    const enrollment = enrolled[index];
    
    return {...enrollment, x:dayOfWeek}
  });

  return days
};
