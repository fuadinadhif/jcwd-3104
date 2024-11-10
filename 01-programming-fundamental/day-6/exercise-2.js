class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  products;
  total;

  constructor() {
    this.products = [];
    this.total = 0;
  }

  addToCart(item, qty) {
    this.products.push({ item, qty });
    this.total = this.total + item.price * qty;
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    const receipt = this.products.map();
  }
}

const apple = new Product("Apple", 5000);
const banana = new Product("Banana", 1000);
console.log(apple);
console.log(banana);

const farrelTransaction = new Transaction();
console.log(farrelTransaction);

farrelTransaction.addToCart(apple, 2);
farrelTransaction.addToCart(banana, 2);
farrelTransaction.addToCart(apple, 5);

console.log(farrelTransaction.showTotal());

/* ------------------------------- Map Method ------------------------------- */
const originalArray = [1, 2, 3];
const forEachResult = originalArray.forEach((element) => {
  return element / 2;
});
const mapResult = originalArray.map((element) => {
  return element / 2;
});

console.log(forEachResult);
console.log(mapResult);

/* -------------------------------- For Each -------------------------------- */
const studentArray = ["Kayla", "Janice", "Marcellina"];
studentArray.forEach(function (element) {
  console.log(`Hai ${element}`);
});
