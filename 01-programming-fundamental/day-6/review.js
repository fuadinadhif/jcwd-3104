/* ------------------------------ Object Review ----------------------------- */
const identity = {
  name: "Arifin",
  age: 24,
  address: {
    country: "Indonesia",
    rt: 14,
  },
  playlist: ["Coldplay", "Katy Perry"],

  sayHi() {
    return "Hellooo";
  },
};

console.log(identity.playlist[1]);
console.log(identity.playlist[1]);
console.log(identity.address.rt);
console.log(identity.sayHi());

/* ---------------------------- Ternary Operator ---------------------------- */
let result1;
const condition1 = "first condition";
if (condition1 === "first condition") {
  result1 = "First!";
} else if (condition1 === "second condition") {
  result1 = "Second";
} else {
  result1 = "Last!";
}
console.log(result1);

let result2;
condition1 === "first condition"
  ? (result2 = "First")
  : condition1 === "second condition"
  ? (result2 = "Second!")
  : "Last";

console.log(result2);
