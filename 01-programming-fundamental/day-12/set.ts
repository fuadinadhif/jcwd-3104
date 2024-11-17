/* -------------------------------------------------------------------------- */
/*                                     SET                                    */
/* -------------------------------------------------------------------------- */
const emptySet = new Set();
const someSet = new Set([1, 2, 3, 4, 5, 6]);

emptySet.add(10);
emptySet.add("10");
emptySet.delete(10);

console.log(emptySet);
console.log(someSet);
console.log(typeof someSet);
