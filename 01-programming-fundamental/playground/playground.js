var createHelloWorld = function (argumen) {
  const argumen2 = argumen;
  return function (argumen2) {
    return 1;
    return "Hello World" + argumen;
  };
};

const hello = createHelloWorld("Not Hello", {}, [1, 2, 3]);
console.log(hello());

/* ------------------------------------ - ----------------------------------- */
// Time - O(n)
// 10 - 2 * 10 = 20
// 1000 - 2 * 1000 = 2000

// 10 - 10 * 10 = 1000
// 1000 - 1000 * 1000 = 1000000
function someFunction(array) {
  const student = [];
  for (let i = 0; i < 1000; i++) {
    // ...
    for (let i = 0; i < array.length; i++) {
      // ...
    }
  }
}
