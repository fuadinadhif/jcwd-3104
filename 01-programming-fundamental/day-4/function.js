// /* -------------------------- Function Declaration -------------------------- */
// const width = 10;
// const length = 5;
// const result = width * length;
// // console.log(result);

// const width1 = 5;
// const length1 = 50;
// const result1 = width1 * length1;
// // console.log(result1);

// // function calculateRectangleArea() {
// //   const width = 10;
// //   const length = 5;
// //   const area = width * length;
// //   return area;
// // }

// // console.log(calculateRectangleArea());

// // function circleCircumference(radius = 10) {
// //   const pi = 3.14;
// //   const area = 2 * pi * radius;
// //   return area;
// // }

// // console.log(circleCircumference(5));
// // console.log(circleCircumference(15));
// // console.log(circleCircumference(25));
// // console.log(circleCircumference());

// function sayHi() {
//   const greeting = "Hi";
//   return greeting;
// }

// function sayHola() {
//   const greeting = "Hola";
// }

// function sayHello() {
//   console.log("Hello");
// }

// console.log(sayHi());
// console.log("-------------");
// console.log(sayHola());
// console.log("-------------");
// console.log(sayHello());

// const GDPIndonesia = 10000000000;

// function calculateTax(price) {
//   const taxPercentage = 10 / 100;
//   const result = taxPercentage * price;
//   return `Pajak dari ${price} adalah ${result}. Penduduk Indonesia memiliki GDP: ${GDPIndonesia}`;
// }

// console.log(calculateTax(5000)); // 500
// console.log(calculateTax(2000)); // 200
// console.log(calculateTax(1000)); // 100

// /* ------------------------- Function Variable Scope ------------------------ */
// // console.log(something);

// function somethingHere() {
//   const something = "This is the thing";
// }

// // console.log(something);

// /* ---------------------------- Scope Rules in JS --------------------------- */
// /*
// 1. Can only be accessed after the variable has been created
// 2. A variable can only be accessed by other code in the same scope or deeper scope
// */
// {
//   // Lv. 1
//   // console.log(`Lv 1: ${theThing}`);
//   {
//     // Lv. 2
//     const theThing = "This is the thing!";
//     console.log(`Lv 2: ${theThing}`);
//     {
//       // Lv. 3
//       console.log(`Lv 3: ${theThing}`);
//     }
//   }

//   // console.log(`Lv 1: ${theThing}`);
// }

/* ----------------------------- Default Params ----------------------------- */
function saySalam(salam = "Salam untukmu") {
  return salam;
}

// console.log(saySalam("Salam alayka"));
// console.log(saySalam());

/* ------------------------------- Rest Params ------------------------------ */
function greetingPeople(person1, person2, ...otherPerson) {
  let greeting = "";

  for (let person of otherPerson) {
    console.log(greeting);
    greeting = greeting + " " + `Hai ${person} \n`;
  }

  return greeting;
}

console.log(greetingPeople("Adam", "Eve", "Hawa", "Sarah", "Bowo", "Joko"));

/* --------------------------- Function Expression -------------------------- */
function myFunction() {}
const yourFunction = function () {};
