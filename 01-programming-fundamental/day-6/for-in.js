const array = ["A", "B", "C"];

for (let element in array) {
  console.log(element);
}

const identity = { name: "John Doe", age: "alm", gender: "Male" };

for (let key in identity) {
  console.log(key);
  if (key === "name") {
    console.log(identity[key]);
  }
}
