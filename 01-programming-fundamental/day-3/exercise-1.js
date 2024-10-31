/* ------------------------------------ 1 ----------------------------------- */
const width = 3;
const length = 5;
const rectangleArea = width * length;

console.log(rectangleArea);

/* ------------------------------------ 2 ----------------------------------- */
let perimeterRectangle = 2 * (length + width);
console.log(perimeterRectangle);

/* ------------------------------------ 3 ----------------------------------- */
const radius = 5;
const diameter = radius * 2;
const circumference = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;
console.log(
  `diameter = ${diameter}, circumference = ${circumference.toFixed(
    4
  )}, area = ${area.toFixed(3)}`
);

/* ------------------------------------ 4 ----------------------------------- */
let angle1 = 80;
let angle2 = 65;
let angle3 = 180 - (angle1 + angle2);
console.log(angle3);

/* ------------------------------------ 5 ----------------------------------- */
const totalDays = 400;
const years = Math.floor(totalDays / 365);
const remainingDays = totalDays - 365 * years;
const months = Math.floor(remainingDays / 30);
const days = remainingDays % 30;

console.log(`${years} year, ${months} month, ${days} day`);

/*
() - regular bracket
{} - curly bracket
[] - square bracket
<> - angle bracket
*/

/* ------------------------------------ 6 ----------------------------------- */
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const differenceInMS = Math.abs(date1 - date2);
console.log(differenceInMS);
const differenceInDays = differenceInMS / (1000 * 60 * 60 * 24);
console.log(differenceInDays);

console.log(new Date(1));
