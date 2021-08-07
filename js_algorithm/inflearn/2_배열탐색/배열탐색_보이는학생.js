/*
8
130 135 148 140 145 150 150 153
5
*/

class Student {
  constructor() {
    this.n;
    this.students;
    this.count = 0;
    this.maxHeight = 0;
  }

  solution = () => {
    this.students.reduce((prev, curr) => {
      if (prev < curr) {
        this.count++;
        return curr;
      }
      return prev;
    }, -1);
    return this.count;
  };

  solution2 = () => {
    this.count++;
    for (let i = 1; i < this.students.length; i++) {
      if (this.maxHeight < this.students[i]) {
        this.maxHeight = this.students[i];
        this.count++;
      }
    }
    return this.count;
  };

  preprocess = (inputList) => {
    this.n = Number(inputList.splice(0, 1)[0]);
    this.students = inputList[0].split(" ").map((num) => Number(num));
    // console.log(this.solution());
    console.log(this.solution2());
  };
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const student = new Student();
    student.preprocess(inputList);
    process.exit();
  });
}

init();
