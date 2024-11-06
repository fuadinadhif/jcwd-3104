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

console.log(farrelTransaction);
