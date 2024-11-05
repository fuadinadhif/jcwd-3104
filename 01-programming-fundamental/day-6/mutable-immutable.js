/* ------------------------- Assignment vs Mutation ------------------------- */
const a = 10;
const b = [];
const c = {};

console.log(a);
console.log(b);
console.log(c);

// a = "10"
// b = [1, 2, 3]
// c = {name: "Jhonny"}

let d = 20;
let e = [];
let f = {};

console.log(d);
console.log(e);
console.log(f);

d = "20";
e = [1, 2, 3];
f = { name: "Jhonny" };

console.log(d);
console.log(e);
console.log(f);

/* -------------------------- Mutable vs Immutable -------------------------- */
const a1 = "A";
const b1 = [];
b1[0] = 1;
b1[1] = 2;
b1[2] = 3;

console.log(b1);

/* ------------------------------ Pass By Value ----------------------------- */
let name = "John";
let newName = name;

console.log(name);
console.log(newName);

newName = "Jimmy";

console.log(name);
console.log(newName);

/* ---------------------------- Pass By Reference --------------------------- */
let identity = { name: "John" };
let newIdentity = identity;

console.log(identity);
console.log(newIdentity);

newIdentity.name = "Rosa";

console.log(identity);
console.log(newIdentity);

identity.name = "Ahmad Dhani";

console.log(identity);
console.log(newIdentity);

const array1 = [1, 2, 3];
const array2 = array1;

console.log(array1);
console.log(array2);

array1[0] = 10;
array2[1] = 20;

console.log(array1);
console.log(array2);
