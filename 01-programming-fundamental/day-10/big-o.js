// Algoritma 1 - O(n)
console.time("Benchmark");
function loopNTimes(nums) {
  for (let i = 0; i < nums.length; i++) {}
}
loopNTimes(1000);
console.timeEnd("Benchmark");

// Algoritma 2 - O(n^2)
function findTheFirstElement(nums) {
  return nums[0];
}
// findTheFirstElement();

/* ------------------------------- Brute Force ------------------------------ */
// 1 + n^2 + 2
// 1 + 100 + 2 = 103
// 1 + 1000000 + 2 = 1000003
// 1 + 1000000000 + 2 = 1000000003
// O(n^2) - Quadratic Time Complexity
// O(1) - Constant Space Complexity
function checkDuplicate(array) {
  console.log("Start");
  for (let i = 0; i < array.length; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      console.log(`Array i: ${array[i]}`);
      console.log(`Array j: ${array[j]}`);
      if (array[i] === array[j]) return true;
    }
  }

  console.log("End");
  return false;
}

console.log(checkDuplicate([1, 2, 3, 1]));

/* ----------------------- Optimize With Extra Memory ----------------------- */
// 2 + n + 1
// n
// O(n) - Time Complexity

// n + 1 + 1
// O(n) - Space Complexity
function checkDuplicateOpt1(array) {
  const uniqueData = new Set();
  console.log(uniqueData);
  const x = 10;
  const y = 20;

  for (let i = 0; i < array.length; i++) {
    console.log(uniqueData);
    if (uniqueData.has(array[i])) {
      return true;
    } else {
      uniqueData.add(array[i]);
    }
  }

  return false;
}

console.log(checkDuplicateOpt1([1, 2, 3, 4]));
/* -------------------------------------------------------------------------- */
/*                                    Notes                                   */
/* -------------------------------------------------------------------------- */
/* ----------------------------------- Set ---------------------------------- */
const arrayOfNums = [1, 2, 3, 4, 5, 6, 6, 6, 9, 10];
const arrayOfStudents = [
  "Farrel",
  "Aldy",
  "Kayla",
  "Kayla",
  "Aldy",
  "Sueb",
  "aldy",
].map((el) => el.toLowerCase());
const setOfNums = new Set(arrayOfNums);
const setOfStudents = new Set(arrayOfStudents);

setOfNums.add(15);

console.log(setOfNums.has(15));
console.log(setOfNums);
console.log(setOfStudents);

/* ------------------------------ .map() Array ------------------------------ */
const scores = [10, 100, 90, 30];
const scoreAfterBonus = scores.map((el) => {
  return el + 5;
});
console.log(scores);
console.log(scoreAfterBonus);

/* ---------------------- Best, Worst, Average Scenario --------------------- */
// Best - O(1)
// Average - O(n)
// Worst - O(n)
const studentAges = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 17, 18, 19, 20,
];
let counter = 0;

function findAge(targetAge, ages) {
  for (let el of ages) {
    counter++;
    if (el === targetAge) {
      return `Run for: ${counter} times. Result: Found!`;
    }
  }

  return `Run for: ${counter} times. Result: Not Found!`;
}

console.log(findAge(11, studentAges));
