/* ------------------------------------ 1 ----------------------------------- */
// A -> 1
// B -> 2
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...
// AZ
// AAA

// A -> 1
// Z -> 26
// AA -> 26 + 1 = 27

// Sena Solution
const arrayOfAlphabets = "abcdefghijklmnopqrstuvwxyz".split("");
// console.log(arrayOfAlphabets);

function senaSolution(column) {
  return arrayOfAlphabets.indexOf(column.toLowerCase()) + 1;
}

// console.log(senaSolution("AA"));

// Final Solution
// Time - 1 + 1 + n + 1 + 1 -> 4 + n -> O(n)
// Space - 1 + 1 -> O(1)
function excelColumnToNumber(column) {
  let result = 0;

  // console.log(result);

  for (let i = 0; i < column.length; i++) {
    result = result * 26 + (column.charCodeAt(i) - 64);
    // console.log(`Loop ${i}: ${result}`);
  }

  // console.log(result);

  return result;
}

// console.log(excelColumnToNumber("AAA")); // 27
// "A" - 1 string -> 0 + character_index -> 0 + 1 = 1
// "AA" - 2 string -> 26 + character_index -> 26 + 1 = 27
// "AAA" - 3 string -> 702 + character_index -> 702 + 1 = 703

/* ------------------------------------ 2 ----------------------------------- */
// Bugged Solution
function singleNumberBugged(array) {
  const uniqueNums = new Set();
  // console.log(uniqueNums);

  for (let el of array) {
    // console.log(uniqueNums);
    if (uniqueNums.has(el)) {
      uniqueNums.delete(el);
    } else {
      uniqueNums.add(el);
    }
  }

  return Array.from(uniqueNums);
}

// Fixed Solution
// Time - 1 + 1 + n + 1 -> 3 + n -> O(n)
// Space - n + n + 1 -> O(n)
function singleNumber(array) {
  const unique = new Set();
  const notUnique = new Set();

  for (let el of array) {
    console.log(unique);
    console.log(notUnique);
    if (unique.has(el)) {
      unique.delete(el);
      notUnique.add(el);
    } else if (!notUnique.has(el)) {
      unique.add(el);
    }
  }

  return Array.from(unique);
}

// console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 3, 3, 3, 2, 2, 1, 4])); // 1

/* ------------------------------------ 3 ----------------------------------- */
/* 
Anagram -> "anagram" === "nagaram"
Not an Anagram -> "cars" !== "sars"
*/
// Time - O(n log n)
// Space - O(n)
function isAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) return false; // Early return

  const sortedFirstWord = firstWord
    .split("") // O(n)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)) // O(n log n)
    .join(""); // O(n)
  const sortedSecondWord = secondWord
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");

  if (sortedFirstWord === sortedSecondWord) {
    return true;
  } else {
    return false;
  }
}

// aadmm === aadmm -> true
console.log(isAnagram("madam", "damam")); // true
// acrs === arss -> false
// console.log(isAnagram("cars", "sars")); // false
// console.log(isAnagram("bed", "beed")); // false

/* ------------------------------------ 4 ----------------------------------- */
// Time - 1 + 1 + 1 + n + 1 -> O(n)
// Space - 1 + 1 + 1 + 1 -> O(1)
function climbStairs(n) {
  if (n <= 1) return 1;

  let waysOneStepBack = 1; // 0 - 1
  let waysTwoStepBack = 1; // 0 - 1

  for (let i = 2; i <= n; i++) {
    let currentWays = waysOneStepBack + waysTwoStepBack;
    waysTwoStepBack = waysOneStepBack;
    waysOneStepBack = currentWays;
  }

  return waysOneStepBack;
}

console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3

/* n = 5
1. 1 + 1 + 1 + 1 + 1
2. 2 + 1 + 1 + 1
3. 1 + 2 + 1 + 1
4. 1 + 1 + 2 + 1
5. 1 + 1 + 1 + 2
6. 2 + 2 + 1
7. 2 + 1 + 2
8. 1 + 2 + 2
*/
console.log(climbStairs(5)); // 3

/* -------------------------------------------------------------------------- */
/*                                    Notes                                   */
/* -------------------------------------------------------------------------- */
/* ------------------------------- .indexOf() ------------------------------- */
const arrayOfStudents = ["Anas", "Aldy", "Farrel"];
// console.log(arrayOfStudents.indexOf("Arya"));

/* -------------------------------- .length() ------------------------------- */
console.log([1, 2, 3].length);
// console.log("Purwadhika JKT".length);

/* ------------------------------ .charCodeAt() ----------------------------- */
const sentence = "ABC";
// console.log(sentence.charCodeAt(0) - 64);
// console.log(sentence.charCodeAt(1) - 64);
// console.log(sentence.charCodeAt(2) - 64);
// console.log(sentence.charCodeAt(sentence.length - 1));

/* ----------------------------------- Set ---------------------------------- */
const setOfNums = new Set([1, 2, 3, 4, 5, 5, 5]);
// console.log(setOfNums);
// console.log(setOfNums.has(1));
// console.log(setOfNums.has(2));
// console.log(setOfNums.has(5));
// console.log(setOfNums.has(50));

setOfNums.add(50);

// console.log(setOfNums.has(50));
// console.log(setOfNums);

setOfNums.delete(50);

// console.log(setOfNums.has(50));
// console.log(setOfNums);

/* ------------------------------ Array.from() ------------------------------ */
const greeting = "Hello!";
const arrayFromGreeting = Array.from(greeting);
// console.log(arrayFromGreeting);
