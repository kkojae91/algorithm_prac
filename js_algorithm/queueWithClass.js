class Queue {
  constructor() {
    this.queueList = [];
    this.queueSize = 0;
  }

  push = (num) => {
    this.queueList.push(Number(num));
    this.queueSize++;
  };

  pop = () => {
    if (this.queueList.length === 0) {
      return -1;
    }
    this.queueSize--;
    return this.queueList.shift();
  };

  size = () => {
    return this.queueSize;
  };

  empty = () => {
    if (this.queueSize === 0) {
      return 1;
    }
    return 0;
  };

  front = () => {
    if (this.queueSize === 0) {
      return -1;
    }
    return this.queueList[0];
  };

  back = () => {
    if (this.queueSize === 0) {
      return -1;
    }
    return this.queueList[this.queueSize - 1];
  };
}

function preprocessInput(inputList) {
  const n = Number(inputList.splice(0, 1)[0]);
  const commands = inputList;
  const queue = new Queue();
  console.log(inputList);
  commands.forEach((command) => {
    command = command.split(" ");
    const commandType = command[0];
    if (commandType === "push") {
      queue.push(command[1]);
    } else if (commandType === "pop") {
      console.log(queue.pop());
    } else if (commandType === "size") {
      console.log(queue.size());
    } else if (commandType === "empty") {
      console.log(queue.empty());
    } else if (commandType === "front") {
      console.log(queue.front());
    } else if (commandType === "back") {
      console.log(queue.back());
    }
  });
}

function init() {
  const fs = require("fs");
  // const inputList = fs.readFileSync('/dev/stdin').toString().split('\n');
  const inputList = fs.readFileSync("./queueText.txt").toString().split("\n");
  preprocessInput(inputList);
}

init();
