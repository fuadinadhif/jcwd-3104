// // POJO - Plain Old JavaScript Object
// // const jamalProfile = {
// //   name: "Jamal Sueb",
// //   age: 15,
// //   address: "Meruya",
// // };

// const fadhilProfile = {
//   name: "Fadhil",
//   age: 25,
//   address: "Senayan",
// };

// const arifinProfile = {
//   name: "Arifin",
//   age: 30,
//   address: "Medan",
// };

// /* ---------------------------------- Class --------------------------------- */
// class StudentProfile {
//   name;
//   age;
//   address;

//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   detail() {
//     return `My name is ${this.name}, my age is ${this.age}, and I live in ${this.address}`;
//   }
// }

// // const jamalProfile = {
// //   name: "Jamal Sueb",
// //   age: 15,
// //   address: "Meruya",
// // };
// const jamalProfile = StudentProfile("Jamal Sueb", 15, "Meruya");
// console.log(jamalProfile);

// console.log(jamalProfile.detail());
// // My name is Jamal Sueb, my age is 15 and I live in Meruya

// /* ---------------------------- Factory Function ---------------------------- */
// function Profile(name, age, address) {
//   return {
//     name: name,
//     age: age,
//     address: address,
//   };
// }

// const kaylaProfile = Profile("Kayla", 15, "Jakarta");
// console.log(kaylaProfile);

const birthday = new Date("2020-01-01");
console.log(birthday instanceof Date);
birthday instanceof Date;

/* ------------------------------------ - ----------------------------------- */

const students = [{ name: "Jhon" }, { name: "Susi" }];

console.log(students.slice(0, 1));

console.log(students);

/* ------------------------------------ - ----------------------------------- */
const array = [1, 2, 3, 4, 5];
const resultFind = array.find((element) => {
  if (element > 2) {
    return true;
  } else {
    return false;
  }
});

const resultFilter = array.filter((element) => {
  if (element > 2) {
    return true;
  } else {
    return false;
  }
});

console.log(resultFind);
console.log(resultFilter);
