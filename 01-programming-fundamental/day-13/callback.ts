/* ------------------------------------ - ----------------------------------- */
function plusTwo(num: number) {
  return num + 2;
}

console.log(plusTwo(10)); // 12
console.log(plusTwo(1));

/* -------------------------------- Example 1 ------------------------------- */
function timesTwo1(num: number) {
  return num * 2;
}

function printResult1(value: string | number) {
  return `The result is ${value}`;
}

const result = timesTwo1(5);
console.log(printResult1(result)); // "The result is ..."

/* -------------------------------- Example 2 ------------------------------- */
function timesTwo2(
  num: number,
  callback: (result: number | string) => string
): string {
  console.log(callback);
  const result = String(num * 2);
  return callback(result);
}

function printResult2(value: number | string) {
  return `The result is ${value}`;
}

console.log(timesTwo2(10, printResult2));

/* ------------------------------------ - ----------------------------------- */
function timesTwo3(num: number) {
  return `The result is ${num * 2}`;
}

console.log(timesTwo3(5));
