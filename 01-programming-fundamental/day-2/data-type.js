/* -------------------------------------------------------------------------- */
/*                            Primitive Data Types                            */
/* -------------------------------------------------------------------------- */
/* --------------------------------- String --------------------------------- */
const string1 = "This is a string!";
const string2 = "!@#$$%";
const phoneNumber = "+6289890970";
const age = "70";
const creditCardNumber = "21312398080123";
console.log(string1);
console.log(string2);
console.log(5 + 5);
console.log("5" + 5);

/* --------------------------------- Number --------------------------------- */
const credit = 100;
const score = 100;
console.log(credit ** 2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(9007199254740992 === 9007199254740992 + 1);
console.log(10 === 10 + 1);

/* --------------------------------- BigInt --------------------------------- */
const bigCredit = 1n;
console.log(9007199254740992n === 9007199254740992n + 1n);

/* --------------------------------- Boolean -------------------------------- */
console.log(true);
console.log(false);
let isLoading = true;
let isSignIn = false;

/* ---------------------------------- Null ---------------------------------- */
const empty = null;

/* -------------------------------- Undefined ------------------------------- */
const undefined1 = undefined;
console.log(undefined1);
let undefined2;
console.log(undefined2);

/* -------------------------------------------------------------------------- */
/*                          Non Primitive Data Types                          */
/* -------------------------------------------------------------------------- */
/* --------------------------------- Object --------------------------------- */
const personName = "John Doe";
const personAge = 70;
const personHeight = "170 cm";
const personIdentity1 = { name: "John Doe", age: 70, height: "170 cm" };
const personIdentity2 = { name: "Jane Smith", age: 70, height: "170 cm" };
const personIdentity3 = { name: "Fulan", age: 70, height: "170 cm" };
const height = "name";
console.log(personIdentity1);
console.log(personIdentity1.name);
console.log(personIdentity1["age"]);
console.log(personIdentity1[height]);
console.log(personIdentity2[height]);
console.log(personIdentity3[height]);
console.log(personIdentity1.name + ", " + personIdentity2.name);
console.log(personIdentity1.name, personIdentity1.age);
console.log(
  `Nama saya adalah ${personIdentity1.name}, umur saya adalah ${personIdentity1.age} tahun, dan tinggi saya adalah ${personIdentity1.height}`
);

/* ---------------------------------- Array --------------------------------- */
const array1 = [];
const array2 = [
  [345, 678],
  123,
  "Pramono",
  "Ridho",
  true,
  Infinity,
  undefined,
  personIdentity1,
];
console.log(array2[0][1]);
console.log(array2[7].name);
const favoritBand = [
  "Coldplay",
  "Bernadya",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
  "Wali",
];
console.log(favoritBand);
console.log(favoritBand[0]);
console.log(favoritBand[1]);
console.log(favoritBand[2]);

/* ------------------------- How to Check Data Types ------------------------ */
console.log(typeof Infinity);
console.log(typeof true);
console.log(typeof "Text");
console.log(typeof bigCredit);
console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
