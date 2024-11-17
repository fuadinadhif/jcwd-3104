class Queue {
  #container: any[];

  constructor() {
    this.#container = [];
  }

  enqueue(element: any) {
    this.#container.push(element);
  }

  dequeue() {
    this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}

// const taskQueue = new Queue();
// console.log(taskQueue.getElements());
// taskQueue.enqueue("Chrome");
// taskQueue.enqueue("Chrome");
// taskQueue.enqueue("Safari");
// taskQueue.enqueue("VSCode");
// taskQueue.enqueue("Discord");
// console.log(taskQueue.getElements());
// taskQueue.dequeue();
// taskQueue.dequeue();
// taskQueue.dequeue();
// console.log(taskQueue.getElements());

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------- undefined vs Error --------------------------- */
// function returnUndefined() {
//   // throw new Error("Intetional error");
//   const name = "Nadhif";
//   name = "Erlangga";
// }

// console.log(returnUndefined());

/* -------------------------------- Interface ------------------------------- */
interface SomeInterface {
  name: string;
  age: number;
}

// function someFunc(object: { name: string; age: number }) {}
function someFunc(object: SomeInterface) {}

console.log(someFunc({ name: "Kayla", age: 16 }));
