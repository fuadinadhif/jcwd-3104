/* ---------------------------- Array Destructure --------------------------- */
const array = ["A", "B", "C", "D"];
// const a = array[0];
// const b = array[1];
// const c = array[2];
const [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);

/* --------------------------- Object Destructure --------------------------- */
const car = { brand: "Nissan", engine: "v10", year: 2024 };
// const brand = car.brand;
// const engine = car.engine;
// const year = car.year;
const { engine, year, brand } = car;

console.log(brand);
console.log(engine);
console.log(year);
