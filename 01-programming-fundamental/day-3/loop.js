/* -------------------------------- For Loop -------------------------------- */
// for (let i = 0; i < 10; i--) {
//   console.log(i + 1);
// }

/* ------------------------------- While Loop ------------------------------- */
let counter = 0;

// while (counter <= 10) {
//   console.log(counter);
//   counter++;
// }

/* ------------------------------ Do While Loop ----------------------------- */
let tracker = 10;

// do {
//   console.log(tracker);
//   tracker++;
// } while (tracker < 10);

/* ------------------------------ Break Keyword ----------------------------- */
// let pointer = 0;

// while (pointer < 10) {
//   console.log(pointer);

//   if (pointer === 5) {
//     break;
//   }

//   pointer++;
// }

/* ---------------------------- Continue Keyword ---------------------------- */
let pointer = 0;

while (pointer < 10) {
  console.log("Loop running");
  pointer++;

  if (pointer === 5 || pointer === 7) {
    continue;
  }

  console.log(pointer);
}
