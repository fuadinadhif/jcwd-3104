// /* ------------------------------ For of For in ----------------------------- */
// const arrayOfAlphabets = ["A", "B", "C"];

// for (let element of arrayOfAlphabets) {
//   console.log(element);
// }

// for (let element in arrayOfAlphabets) {
//   console.log(element);
// }

// /* ------------------------------ Create Object ----------------------------- */
// // Manual
// const object = { prop: "value" };
// console.log(object);

// // Factory Function
// function IdentityFactory(firstName, lastName, age, address) {
//   return {
//     theName: {
//       theFirstName: firstName,
//       theLastName: lastName,
//     },
//     theAge: age,
//     theAddress: address,
//   };
// }

// const joniIdentity = IdentityFactory("Joni", "Jono", 25, "Bogor");
// console.log(joniIdentity);
// console.log(IdentityFactory("Fatah", 25, "Cibaduyut"));

// console.log(joniIdentity.theName);

// // Using Class
// class IdentityClass {
//   constructor(name, age, address) {
//     this.theName = name;
//     this.theAge = age;
//     this.theAddress = address;
//   }
// }

// const bowoIdentity = new IdentityClass("Bowo", 75, "Jagakarsa");
// console.log(bowoIdentity);

// /* ------------------------- Statement vs Expression ------------------------ */
// console.log(
//   (() => {
//     return "Hello";
//   })()
// );

// /* ------------------------------- Instanceof ------------------------------- */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const anas = { name: "Anas" };
// console.log(anas);
// const angga = new User("Angga");
// console.log(angga);

// console.log(anas instanceof User);
// console.log(angga instanceof User);

// const birthday = new Date("2000-01-01");
// console.log(birthday instanceof Date);

// /* -------------------------------- Oret-oret ------------------------------- */
// if (true) {
//   console.log("Yippi");
// } else {
//   console.log("Yippa");
// }

// /* --------------------------- While Infinite Loop -------------------------- */
// const counter = 0;

// while (true) {
//   console.log(counter);
//   counter = counter + 1;
// }

// /* ----------------------------- Ternary Console ---------------------------- */
const userId = 10;
const isVerified = false;
const hasPermission = true;
const permissionLevel = 2;

if (
  userId && isVerified && hasPermission && permissionLevel === 3
    ? true
    : permissionLevel === 2
    ? true
    : permissionLevel === 1
    ? true
    : permissionLevel === 0
    ? true
    : false
) {
  console.log("Access granted!");
}

// Falsy Value
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

/* ------------------- Function Declaration vs Expression ------------------- */
// console.log(multiplyTwo(5, 5));
// console.log(sumTwo(10, 50));

// const multiplyTwo = (a, b) => {
//   return a * b;
// };

// function sumTwo(a, b) {
//   return a + b;
// }

/* -------------------------- Slice and Find Method ------------------------- */
const students = [
  { name: "Joko", score: 10 },
  { name: "Nissa", score: 40 },
  { name: "Andi", score: 30 },
  { name: "Galang", score: 20 },
  { name: "Nissa", score: 50 },
  { name: "Alexander", score: 10 },
];

students.slice(0, 1).find((el) => el.name !== "Andi");

console.log(students);

/* ----------------------------- Access Property ---------------------------- */
const data = [[[{ score: 1000 }]], 10, 20, 30, [1, 2, 3]];
console.log(data[0][0][0]["score"]);
console.log(data[0][0][0].score);

const object = { prop1: "Value 1  ", prop2: "Value 2" };
const prop2 = "prop1";

console.log(object.prop1);
console.log(object["prop2"]);

/* ----------------------------- Returned Value ----------------------------- */
const resultSumTwo = sumTwo(10, 5);

const multiplyTwo = (a, b) => {
  console.log(a * b);
  return a * b;
};

const resultMultiplyTwo = multiplyTwo(10, 5);

function sumTwo(a, b) {
  console.log(a + b);
  return a + b;
}

console.log(resultSumTwo);
console.log(resultMultiplyTwo);

/* ------------------------------- Arithmetic ------------------------------- */
let points = 1000;

// points = points * 1000
points *= points;
console.log(points);

points = Math.sqrt(points);
console.log(points);

points = points / (points - 10);
// points /= points - 10;
console.log(points);

points = points.toFixed(2);
console.log(points);

/* --------------------- Access Object in Another Scope --------------------- */

// --> Global Scope
{
  // --> Lv. 1 Scope
  const car = { brand: "Toyota", year: 2020 };
  function plane() {
    return "Plane";
  }
  const ship = () => {
    return "Ship";
  };
}

console.log(plane());
// console.log(ship());
// console.log(car);

/* ----------------------------- Arrow Function ----------------------------- */
// 1.
// function myFunction() {
//   return "My Function";
// }

// 2.
// const myFunction = function myFunctionToo() {
//   return "My Function Too";
// };

// 3.
// const myFunction = function () {
//   return "My Function Too";
// };

// 4.
// const myFunction = () => {
//   return "My Function Too";
// };

// 5.
const myFunction = () => "My Function Too";

/* --------------------------- Boolean Conversion --------------------------- */
console.log(Boolean(10));

console.log(Boolean(("Z" && 0) || 1 || true));
