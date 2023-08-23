// Stacks
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  remove() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    temp.next = null;

    this.size--;

    return temp.val;
  }
}

let stack = new Stack();

stack.add("First");
stack.add("Second");
stack.add("Third");

console.log(stack);

console.log(stack.remove());
console.log(stack.remove());
console.log(stack.remove());

console.log(stack);

// Queues

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}
