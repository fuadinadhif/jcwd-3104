/* ------------------------------- Comparisons ------------------------------ */
console.log(10 === 10);
console.log(5 > 5);
console.log(5 >= 5);
console.log("Hello" === null);
// console.log("" == 0);
console.log(Boolean("") == Boolean(0));
console.log(false == false);
// console.log("" === 0);

/* ------------------------ If Conditional Statement ------------------------ */
if (false) {
  console.log("Aku ada di sini");
  console.log("Aku tidak ada di sini");
}

const theGOAT = "Ronaldinho";

if (theGOAT.toLowerCase() == "ronalDo") {
  console.log("Yea the GOAT is Ronaldo");
} else {
  console.log("Messi!!");
}

const weather = "rain";

if (weather === "cloudy") {
  console.log("Take a jacket");
} else if (weather === "sunny") {
  console.log("Wear a thin clothes");
} else if (weather === "storm") {
  console.log("Brace yourself");
} else {
  console.log("Just pray");
}

const guest = "arrive";

if (guest === "arrive") {
  console.log("Stand up");
} else if (guest === "leaving") {
  console.log("Sit");
} else {
  console.log("Work");
}

/* ------------------------------- Switch Case ------------------------------ */
const comedian = "Sule";

switch (comedian.toLowerCase()) {
  case "Komeng":
    console.log("Uhuyyy");
    break;
  case "sule":
    console.log("Prikitiwww");
    break;
  case "Mandra":
    console.log("Sombong amat!");
    break;
  default:
    console.log("Oke gas!");
}

/* ---------------------------- Logical Operators --------------------------- */
// && - AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(5 > 4 && 5 > 10);
console.log(5 > 4 && 5 > 3 && 5 < 4);
console.log("messi" === "messi" && 10 > 7);

// || - OR
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);

// ! - NEGASI
console.log(true);
console.log(!true);
console.log("Prabowo");
console.log(Boolean("Prabowo"));
console.log(!Boolean("Prabowo"));
console.log(!"Prabowo");

// if (isUserRegistered && isUserVerified && isFemale) {
//   console.log("User signed in!");
// }

/* ---------------------------- Short Circuiting ---------------------------- */
/* && - 
If left side falsy, return left side
If left side truthy, return right side
*/
console.log("Ariel" && "Judika");
console.log(!"" || "Judika");
