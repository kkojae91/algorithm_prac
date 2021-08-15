class Queue {
  constructor() {
    this.obj = {};
    this.left = 0;
    this.right = 0;
  }

  add(num) {
    this.obj[this.right] = num;
    this.right++;
  }

  leftPop() {
    const left = this.obj[this.left];
    this.left++;
    return left;
  }

  list() {
    const values = Object.values(this.obj);
    const array = values.filter((value, index) => index >= this.left);
    return array;
  }

  top() {
    return this.obj[this.right - 1];
  }

  size() {
    const values = Object.values(this.obj);
    const array = values.filter((value, index) => index >= this.left);
    return array.length;
  }

  initialize() {
    this.obj = {};
    this.left = 0;
    this.right = 0;
  }
}

function main() {
  const queue = new Queue();
  queue.add(5);
  queue.list();
  queue.add(6);
  queue.top();
  // queue.list();
  // queue.add(7);
  // queue.list();
  // queue.leftPop();
  // queue.list();
  // queue.leftPop();
  // queue.list();
  // queue.initialize();
  // queue.list();
}

main();
