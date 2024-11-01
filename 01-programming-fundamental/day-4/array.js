/* --------------------------- Array Introduction --------------------------- */
const array = [];
console.log(array);
console.log(typeof []);
console.log(array.length);

const newArray = new Array();
console.log(newArray);
console.log(newArray.length);

const newArray1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);
console.log(newArray1.length);
console.log(newArray1[0]);
console.log(newArray1[newArray1.length - 2]);

for (let i = 0; i < newArray1.length; i++) {
  console.log(newArray1[i]);
}

const newArray2 = [
  1,
  2,
  3,
  ["A", "B", "C", ["A1", "A2", "A3", [{ name: "John Doe" }]]],
];

console.log(newArray2[3][3][3][0].name);

/* ------------------------------ Array Methods ----------------------------- */
// Add and Change Elements
const array1 = [1, 2, 3];
console.log(array1);
array1.push(4);
console.log(array1);
array1.unshift(0);
console.log(array1);
array1[0] = 0.5;
array1[2] = 20;
console.log(array1);
array1[0] = "Half";
console.log(array1);
array1.push("Seribu");
console.log(array1);
// array1.push(function hello() {});
// console.log(array1);

// Remove Elements
console.log(array1);
array1.pop();
console.log(array1);
array1.shift();
console.log(array1);
// Remove Elements - SPLICE Method
const array2 = ["A", "B", "C", "D", "E", "F"];
array2.splice(2, 2);
console.log(array2);
array2.splice(2, 0, [1, 2, 3], "D", "E");
console.log(array2);
// Remove Elements - SLICE Method
const array3 = ["A", "B", "C", "D", "E", "F"];
const sliceResult = array3.slice(2, 4);
console.log(sliceResult);
console.log(array3);
array3.push(array3.slice(1, 3));
console.log(array3);
// Remove Elements - FILTER Method
const array4 = ["A", "B", "C", "C", "C", "D", "E", "F"];
const filterResult = array4.filter(
  (element) => element === "C" || element === "A"
);
console.log(filterResult);

// Sorting Elements
const array5 = [10, 5, 90, 1, 2, 3, 7, 8, 4, 41];
array5.sort();
console.log(array5);
array5.sort((a, b) => b - a);
console.log(array5);
const array6 = ["Y", "l", "a", "b", "c", "z", "A", "X", 1];
array6.sort();
console.log(array6);

/* ------------------------------- Array Loop ------------------------------- */
const array7 = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < array7.length; i++) {
  console.log(array7[i]);
}

for (let el of array7) {
  console.log(el);
}

/*
for in
.map()
.forEach()
*/
