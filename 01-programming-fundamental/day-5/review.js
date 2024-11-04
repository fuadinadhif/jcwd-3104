/* -------------------------------------------------------------------------- */
/*                                 Loop Review                                */
/* -------------------------------------------------------------------------- */
// For Loop
for (let counter = "0"; counter < 10; counter++) {
  console.log(counter);
  console.log("Hai");
}

/* -------------------------------------------------------------------------- */
/*                                For ..of Loop                               */
/* -------------------------------------------------------------------------- */
const alphabet = ["A", "B", "C"];

// Regular For Loop
for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet);
  console.log(alphabet[i]);
  console.log(alphabet[1]);
}

// For ..of Loop
for (let element of alphabet) {
  console.log(element);
}

/* -------------------------------------------------------------------------- */
/*                               Function Review                              */
/* -------------------------------------------------------------------------- */

/* ------------------------ Ways to Create Functions ------------------------ */
/*
1. Function Declaration 
2. Function Expression
*/

/* -------------------------- Function Declaration -------------------------- */
console.log(myFunc());

function myFunc() {
  return undefined;
  // return `That is my function`;
  /*
  1000 line of code
  */
  // return `This is my function`;
}

/* --------------------------- Function Expression -------------------------- */
// console.log(yourFunc());

const yourFunc = function () {
  return `This is your function`;
};

const hisFunc = function theirFunction() {
  return `This is his function`;
};

const herFunc = () => {
  return `This is your function`;
};

/* ----------------------------- Arrow Function ----------------------------- */
// 1.
// const arrowFunc = function theArrowFunction() {
//   return `Arrow function example`;
// };

// 2.
// const arrowFunc = function () {
//   return `Arrow function example`;
// };

// 3.
// const arrowFunc = () => {
//   return `Arrow function example`;
// };

// 4.
const arrowFunc = () => `Arrow function example`;

/* ---------------------------- Calling Function ---------------------------- */
console.log(() => {});

function sayHello() {
  return "Hello";
}

function sayHi() {
  console.log("Hi");
}

console.log(sayHi());

console.log(sayHello());

function check() {
  if (true) {
  }
  while (false) {}
  return "Checked";
}

console.log(check());
