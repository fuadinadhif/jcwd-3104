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

function expect(val) {
  return {
    toBe: function (place) {
      if (val === place) {
        return true;
      } else {
        // throw new Error("Not Equal");
        throw new Date();
        // return false;
      }
    },
    notToBe: function (holder) {
      if (val !== holder) {
        return true;
      } else {
        // throw new Error("Equal");
        throw new Date();
        // return false;
      }
    },
  };
}

function expectToBe(val) {
  return function toBe(place) {
    if (val === place) {
      return true;
    } else {
      // throw new Error("Not Equal");
      return false;
    }
  };
}

function expectNotToBe(val) {
  return function notToBe(place) {
    if (val !== place) {
      return true;
    } else {
      // throw new Error("Equal");
      return false;
    }
  };
}

console.log(expectToBe(5)(5));
console.log(expectNotToBe(5)(5));
console.log(expect("Something").toBe("Something"));
console.log(expect("Something").notToBe("Something"));
console.log("Hi");
