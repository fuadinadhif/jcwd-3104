/* --------------------------------- Single --------------------------------- */
const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: { value: null },
      },
    },
  },
};

// console.log(list.head.next.next.next.value);

/* ------------------------------------ - ----------------------------------- */
class ListNode {
  element: any;
  next: any;

  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  head: any;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: any) {
    let node = new ListNode(element);
    let current: any;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size = this.size + 1;
  }

  printList() {
    let curr = this.head;

    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList.printList());
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
linkedList.add("D");
console.log(linkedList.printList());
