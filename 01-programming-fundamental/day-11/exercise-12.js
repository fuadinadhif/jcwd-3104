/* ------------------------------------ 1 ----------------------------------- */
// Boyer-More Voting Algorithm
// It has to have an element that show at least [n/2] times to work correctly
// Time - O(n)
// Space - O(1)
function majorityElement(array) {
  let candidate = 0;
  let count = 0;

  for (let num of array) {
    console.log(candidate);
    console.log(count);

    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count = count + 1;
    } else {
      count = count - 1;
    }
  }

  return candidate;
}

// Boyer-More Completed for All Scenarios
// Time - O(n)
// Space - O(n)
function majorityElement(array) {
  let candidate = 0;
  let count = 0;

  // First pass: Find candidate
  for (let num of array) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Second pass: Count frequencies of all numbers
  let frequencies = {};
  let maxCount = 0;
  let maxNum = null;

  for (let num of array) {
    frequencies[num] = (frequencies[num] || 0) + 1;
    if (frequencies[num] > maxCount) {
      maxCount = frequencies[num];
      maxNum = num;
    }
  }

  // Check if any other number has the same frequency as maxNum
  for (let num in frequencies) {
    if (Number(num) !== maxNum && frequencies[num] === maxCount) {
      return "No Majority";
    }
  }

  return maxNum;
}

console.log(majorityElement([4, 4, 4, 3, 3, 3, 3, 2, 2, 2])); // 3
console.log(majorityElement([4, 4, 3, 3, 3, 2])); // 3
console.log(majorityElement([4, 4, 3, 3, 2])); // No Majority

/* ------------------------------------ 2 ----------------------------------- */
// Time - O(n)
// Space - O(1)
function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i + 1]];

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
