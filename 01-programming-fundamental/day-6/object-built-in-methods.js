/* ----------------------------- Object.assign() ---------------------------- */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(source, target);

console.log(result);

/* ---------------------------- Object.entries() ---------------------------- */
const object1 = { a: "Some String", b: 100 };
const arrFromObject1 = Object.entries(object1);

console.log(arrFromObject1);

/* ----------------------------- Object.freeze() ---------------------------- */
const object2 = { prop: "Some Value" };
Object.freeze(object2);

console.log(object2);

object2.prop = "Another Value";

console.log(object2);

/* ----------------------------- Object.hasOwn() ---------------------------- */
const object3 = { prop: "Existed Value", name: "Jhon" };

console.log(Object.hasOwn(object3, "prop"));
console.log(Object.hasOwn(object3, "name"));
console.log(Object.hasOwn(object3, "age"));

/* -------------------- Object.keys() and Object.values() ------------------- */
const object4 = {
  a: "Some String",
  b: 45,
  c: true,
};

console.log(Object.keys(object4));
console.log(Object.values(object4));
