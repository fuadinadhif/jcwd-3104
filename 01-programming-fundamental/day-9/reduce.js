const array = [1, 2, 3, 4];
const result = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result);
