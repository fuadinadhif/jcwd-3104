// Time = 1 + 1 + 1 + n + 1
// 3 + n + 1
// 4 + n
// n = O(n)

// Space = 1 + 1 + 1 + 1 + 1
// n = O( n)
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let counter = 0;

  while (left < right) {
    counter++;
    const uniqueDate = new Set();
    console.log(counter);
    const mid = Math.floor((left + right) / 2);
    console.log(`Index: ${mid}, Value: ${array[mid]}`);

    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 5));
