class RemovePair {
  constructor() {
    this.str = "";
    this.stack = [];
    this.stackLength = 0;
  }

  solution() {
    for (const s of this.str) {
      this.stackLength = this.stack.length;
      if (this.stackLength === 0) {
        this.stack.push(s);
      } else {
        this.stack.push(s);
        this.stackLength = this.stack.length;
        const prev = this.stack[this.stackLength - 2];
        const curr = this.stack[this.stackLength - 1];
        if (prev === curr) {
          this.stack.pop();
          this.stack.pop();
        }
      }
    }
    return this.stack.length === 0 ? 1 : 0;
  }

  initialize() {
    const sList = ["baabaa", "cdcd"];
    sList.forEach((s) => {
      this.str = s;
      console.log(this.solution());
    });
  }
}

function solution(str) {
  const stack = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

function init() {
  const removePair = new RemovePair();
  // removePair.initialize();
  const sList = ["baabaa", "cdcd"];
  sList.forEach((str) => {
    console.log(solution(str));
  });
}

init();
