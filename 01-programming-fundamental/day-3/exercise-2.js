/* ------------------------------------ 1 ----------------------------------- */
const number = 24;
if (number % 2) {
  console.log(number + " is odd number");
} else {
  console.log(number + " is even number");
}

/* ------------------------------------ 2 ----------------------------------- */
const num = 13;
let isPrime = true;

// Check number below 1
if (num < 1) {
  isPrime = false;
}

// Check number after 1 => 2
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime!");
} else {
  console.log("Not Prime!");
}

/* ------------------------------------ 3 ----------------------------------- */
const n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
  console.log("Nilai I: " + i);
  console.log("Nilai Sum Before Sum: " + sum);
  sum = sum + i;
  console.log("Nilai Sum After Sum: " + sum);
}

console.log(sum);

/* ------------------------------------ 4 ----------------------------------- */
const n1 = 6;
let sum1 = 1;

for (let i = 1; i <= n1; i++) {
  sum1 = sum1 * i;
}

console.log(sum1);
