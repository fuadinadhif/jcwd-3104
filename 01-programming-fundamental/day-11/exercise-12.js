/* ------------------------------------ 1 ----------------------------------- */
// Boyer-More Voting Algorithm
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

  if (count > Math.floor(array.length / 2)) {
    return candidate;
  } else {
    return "No majority";
  }

  return candidate;
}

console.log(majorityElement([4, 4, 3, 3, 2])); // No majority
console.log(majorityElement([4, 4, 3, 3, 3, 2])); // 3
