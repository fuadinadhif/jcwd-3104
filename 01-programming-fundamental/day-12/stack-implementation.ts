class Stack {
  #maxSize: number;
  #container: string[];

  constructor(maxSize = 10) {
    this.#maxSize = maxSize;
    this.#container = [];
  }

  isFull() {
    return this.#container.length >= this.#maxSize;
  }

  isEmpty() {
    return this.#container.length === 0;
  }

  push(element: string) {
    if (!this.isFull()) {
      this.#container.push(element);
      return;
    }

    console.log("Stack Overflow!");
  }

  pop() {
    if (!this.isEmpty()) {
      this.#container.pop();
      return;
    }

    console.log("Stack Underflow!");
  }

  getElements() {
    return this.#container;
  }

  getMaxSize() {
    return this.#maxSize;
  }
}

const browserStack = new Stack(2);
console.log(browserStack.getElements());
browserStack.push("google.com");
browserStack.push("jamal.sueb");
browserStack.push("facebook.com");
browserStack.push("purwadhika.com");
browserStack.push("admin.com");
console.log(browserStack.getElements());
browserStack.pop();
browserStack.pop();
browserStack.pop();
console.log(browserStack.getElements());

/* -------------------------------------------------------------------------- */
/*                                    Notes                                   */
/* -------------------------------------------------------------------------- */
let arrayOfStudents: string[];
let arrayOfScores: number[];
let age: number;

arrayOfStudents = ["Nadhif", "Sena"];
arrayOfScores = [1, 2, 4];
age = 70;

/* ------------------------------ Boolean Check ----------------------------- */
// console.log(Boolean("Hello")); // true
if (true) {
}

/* ------------------------------ Return Break ------------------------------ */
function returnBreak(num) {
  if (num === 10) {
    console.log("Num is 10");
  } else {
    console.log("Num is not 10");
  }
}

// console.log(returnBreak(10));
