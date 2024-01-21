export function getAcronym(inputString) {
  const words = inputString.split(" ");
  const acronym = words.map((word) => word[0].toUpperCase()).join("");

  return acronym;
}

export const getShortForm = (month)=>{
    const shortForm = new Date(`${month} 1 2000`).toLocaleString('en',{month:"short"})
    return shortForm;
}



