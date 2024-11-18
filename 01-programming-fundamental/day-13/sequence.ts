/* ------------------------------ Original Way ------------------------------ */
// console.log(1);
// console.log(2);
// console.log(3);
// for (let i = 0; i < 1000_000_000; i++) {}
// console.log(4);
// console.log(5);
// console.log(6);

/* ------------------------------- Sequence 1 ------------------------------- */
console.log(hiJane());
console.log(helloGraham());
console.log(hiJohn());

function helloGraham() {
  return "Hello Graham!";
}

function hiJohn() {
  return "Hi John!";
}

function hiJane() {
  return "Hi Jane";
}

/* -------------------------- Timeout and Interval -------------------------- */
// setTimeout(() => {
//   console.log("You'll see me after 3 second");
// }, 3000);

// setInterval(function () {
//   console.log("Muncul setiap 1.5 detik");
// }, 1500);

/* ------------------------------ Asynchronous ------------------------------ */
console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 0);
console.log(4);
console.log(5);
console.log(6);
for (let i = 0; i < 1000_000_000; i++) {}
console.log(7);
