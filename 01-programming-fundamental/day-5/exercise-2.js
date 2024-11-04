/* ------------------------------------ 1 ----------------------------------- */
function createTrianglePattern(height) {
  let currentNumber = 1;
  let pattern = "";

  for (let i = 1; i <= height; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      if (currentNumber < 10) {
        row = row + `0${currentNumber}`;
      } else {
        row = row + currentNumber;
      }
      // console.log(`i = ${i}, j = ${j}: ${row}`);
      row = row + " ";
      currentNumber++;
    }

    pattern = pattern + row + "\n";
  }

  return pattern;
}

console.log(createTrianglePattern(4));

/* ------------------------------------ 2 ----------------------------------- */
function fizzBuzz(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(15));
