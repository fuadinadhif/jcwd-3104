function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swapped = false;

    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        // const temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
        console.log(`${array}`);
      }
    }

    if (swapped === false) {
      break;
    }

    console.log(`${array}`);
    console.log("-------");
  }

  return array;
}

console.log(bubbleSort([100, 9, 10, 5, 3, 8, 4, 6])); // 3, 4, 5, 6, 8

/* --------------------------------- Swapped -------------------------------- */
const array = [2, 1, 3, 4, 5];

// Traditional Way
// const temp = array[0];
// array[0] = array[1];
// array[1] = temp;

// Destructure
[array[0], array[1]] = [array[1], array[0]];

console.log(array);

for (let i = 0; i < 100; i++) {
  console.log("Hi");
}
