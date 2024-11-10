/* -------------------------------------------------------------------------- */
/*                                 First Page                                 */
/* -------------------------------------------------------------------------- */
/* ------------------------------------ 1 ----------------------------------- */
// Without Sort Method
function getStats(array) {
  let lowest = Infinity;
  let highest = -Infinity;
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }

    if (array[i] > highest) {
      highest = array[i];
    }

    sum = sum + array[i];
  }

  const average = (sum / array.length).toFixed(2);

  return {
    lowest: lowest,
    highest: highest,
    average: average,
  };
}

console.log(getStats([1, 2, 5, 10, 3, 9, -5])); // {lowest: -5, highest: 10, average: - }

// With Built In Method
function getStatsWithSort(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const totalValue = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const average = totalValue / array.length;

  return {
    lowest: sortedArray[0],
    highest: sortedArray[array.length - 1],
    // average: average
    average,
  };
}
console.log(getStatsWithSort([10, -5, -100, -20])); // {lowest: -5, highest: 10, average: - }

/* ------------------------------ Array Reduce ------------------------------ */
const array = [1, 2, 3, 4, 5];
const reduceResult = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);

/* ------------------------------------ 2 ----------------------------------- */
function concatenateWords(array) {
  let lastWord = array.pop();
  return `${array.join(", ")}, and ${lastWord}`;
}

// "apple, banana, cherry, and date"
console.log(concatenateWords(["apple", "banana", "cherry", "date", "mango"]));

/* ------------------------------------ 3 ----------------------------------- */
function arrayNumbers(arrays) {
  // const sortedArrays = arrays.sort((a, b) => a - b);
  const sortedArrays = arrays.sort((a, b) => {
    return a - b;
  });

  console.log(sortedArrays);

  return sortedArrays[1];
}

console.log(arrayNumbers([10, 9000, 30, 3000, 1, 2]));

/* ----------------------------- Arrow Function ----------------------------- */
// function arrowFunction() {
//   return "Arrow";
// }

// const arrowFunction = () => {
//   return "Arrow";
// };

const arrowFunction = () => "Arrow";

/* ------------------------------------ 4 ----------------------------------- */
function sumArrays(array1, array2) {
  return array1.map((element, index) => element + array2[index]);
}

console.log(sumArrays([1, 2, 3], [8, 2, 7]));

/* ------------------------------------ 5 ----------------------------------- */

/* -------------------------------- Includes -------------------------------- */
const students = ["Farrel", "Charles", "Arnold", "Jamal"];
console.log(
  students.map((element) => element.toLowerCase()).includes("farrel")
);

/* -------------------------------------------------------------------------- */
/*                                 Second Page                                */
/* -------------------------------------------------------------------------- */
/* ------------------------------------ 1 ----------------------------------- */
function sumNumbers(mixedArray) {
  let result = 0;

  for (let element of mixedArray) {
    console.log(`Element: ${element}. Type: ${typeof element}`);
    if (typeof element === "number") {
      result = result + element;
    }
  }

  return result;
}

console.log(sumNumbers(["A", null, {}, [], 5, 1, "1000"])); // 6

/* ------------------------------------ 2 ----------------------------------- */
function insertWithMaxSize(maxSize, ...givenInteger) {
  let result = [];

  for (let i = 0; i < maxSize; i++) {
    result.push(givenInteger[i]);
  }

  return result;
}

console.log(insertWithMaxSize(1, 4, 5, 1, 2, 3, 5, 6)); // [4, 5, 1]

/* ------------------------------------ 3 ----------------------------------- */
function combineArrays(array1, array2) {
  // return [...array1, ...array2];
  return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3], [9, 10, 11])); // [1, 2, 3, 9, 10, 11]

/* ------------------------------------ 4 ----------------------------------- */
function findDuplicate(array) {
  const status = {};
  const result = [];

  for (let element of array) {
    if (status[element]) {
      status[element] = status[element] + 1;
    } else {
      status[element] = 1;
    }
  }

  for (let key in status) {
    if (status[key] > 1) {
      // result.push(Number(key));
      result.push(+key);
    }
  }

  return result;
}

// { 1: 1 }
// { 1: 2 }
// { 1: 3 }
// { 1: 3, 2: 1 }
// { 1: 3, 2: 1, 3: 1 }
// { 1: 3, 2: 1, 3: 2 }
// { 1: 3, 2: 1, 3: 2, 4: 1 }
// { 1: 3, 2: 1, 3: 2, 4: 2 }
// { 1: 3, 2: 1, 3: 2, 4: 2, 5: 1 }

console.log(findDuplicate([1, 1, 1, 2, 3, 3, 4, 4, 5])); // [1, 3, 4]

/* ------------------------------------ - ----------------------------------- */
const identity = {
  name: "Jane",
  age: 50,
};

console.log(identity.name);
console.log(identity["name"]);

identity["name"] = "Caroline";
identity["address"] = "Canada";

console.log(identity);

/* ------------------------------------ - ----------------------------------- */
// 1. For of - Only for array
// 2. For in - Array & Object

const anotherArray = ["A", "B", "C"];
const anotherObject = { name: "Julia", age: 50, address: "Cirebon" };

for (let element of anotherArray) {
  console.log(element);
}

for (let element in anotherArray) {
  console.log(element);
}

for (let x in anotherObject) {
  console.log(x);
  console.log(anotherObject[x]);
}
