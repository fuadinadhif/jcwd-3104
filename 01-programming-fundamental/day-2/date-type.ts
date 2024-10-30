console.log(new Date());
console.log(typeof new Date());

const today = new Date();
const ceremony = new Date("2024-10-20");
console.log(today);
console.log(ceremony);
console.log(today.getFullYear());
console.log(`${today.getDate()}  ${today.getMonth()}`);
console.log(today.getDay());
console.log(today.getTime());
console.log(today.getTime());
console.log(today.getTime());
console.log(today.getTime());

const tomorrow = new Date().setDate(10);
console.log(tomorrow);
console.log(new Date(tomorrow - 1000 * 60 * 60 * 24));
