/* -------------------------------- Benefits -------------------------------- */
const identity = { name: "Jhon" };
// const newIdentity = identity; // Pass by reference
const newIdentity = { ...identity }; // Pass by value - Copy paste the value

console.log(identity);
console.log(newIdentity);

newIdentity.name = "Jimmy";

console.log(identity);
console.log(newIdentity);

/* ------------------------------ Object Syntax ----------------------------- */
const nissan = { brand: "Nissan", engine: "v10", year: 2024, type: "GTR" };
// const toyota = { ...nissan, brand: "Toyota", color: "Black" };
const toyota = { ...nissan };
const porsche = { brand: "Porsche", engine: "v8", year: 2020, color: "Black" };
const nipo = { ...porsche, ...nissan };

toyota.brand = "Toyota";

console.log(nissan);
console.log(toyota);
console.log(nipo);

/* ------------------------------ Array Syntax ------------------------------ */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const fullArray = [...array1, ...array2, ...array3];

console.log(fullArray);
