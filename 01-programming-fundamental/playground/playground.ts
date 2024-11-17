const date1 = new Date("2023-08-17");
// console.log(date1);
// console.log(date1.getTime());
const date2 = new Date("2023-08-20");
// console.log(date2.getTime());
const differenceDateInMS = date2.getTime() - date1.getTime();
console.log(differenceDateInMS);
const differenceDateInString = new Date(differenceDateInMS);
// console.log(differenceDateInString);

// console.log(new Date(10));

// console.log(new Date());
// console.log(new Date(new Date().setDate(1)));

console.log(differenceDateInMS / 1000 / 60 / 60 / 24);

const days = 400;
const year = days / 365;
console.log(year.toFixed());

let counter = 5;
if (counter < 10) {
  console.log("0");
} else if (counter > 10 && counter < 20) {
  console.log("1");
} else if (counter > 20) {
  console.log("2");
}

console.log(`${counter}`);

const point = 1000;
const pointInString = String(point);
const pointInArray = pointInString.split("");
console.log(pointInString);
pointInArray.splice(1, 0, ".");
console.log(pointInArray.join(""));

/* ------------------------------------ - ----------------------------------- */
