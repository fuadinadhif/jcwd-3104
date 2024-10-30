/* ---------------------------- String Conversion --------------------------- */
const scoreNumber = 123;
console.log(String(scoreNumber));
const scoreString = String(scoreNumber);
console.log(scoreNumber, scoreString);

/* --------------------------- Numeric Conversion --------------------------- */
const pointString = "456";
const pointNumber1 = +pointString;
const pointNumber2 = Number(pointString);
console.log(pointString, pointNumber1, pointNumber2);

/* --------------------------- Boolean Conversion --------------------------- */
// Falsy
// 1. Number 0
console.log(Boolean(0));

// 2. Empty String
console.log(Boolean(""));

// 3. Null
console.log(Boolean(null));

// 4. Undefined
console.log(Boolean(undefined));

// Truthy
console.log(Boolean(-1));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(new Date()));

const width1 = 10;
const length1 = 5;
const rectangleArea = width1 * length1;
console.log(rectangleArea);
