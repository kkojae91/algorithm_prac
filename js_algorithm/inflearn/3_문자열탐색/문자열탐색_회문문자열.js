class CircularString {
  constructor() {
    this.word = "";
    this.lowerWord = "";
    this.reverseWord = "";
    this.answer = "";
  }

  solution() {
    this.lowerWord = this.word.toLowerCase();
    this.reverseWord = this.lowerWord.split("").reverse().join("");
    if (this.lowerWord === this.reverseWord) {
      this.answer = "YES";
    } else {
      this.answer = "NO";
    }
    return this.answer;
  }

  initialize(inputList) {
    this.word = inputList[0];
    console.log(this.solution());
  }
}

class CircularString2 {
  constructor() {
    this.word = "";
    this.lowerWord = "";
    this.wordLength = 0;
    this.answer = "";
  }

  solution() {
    this.lowerWord = this.word.toLowerCase();
    this.wordLength = this.word.length;
    for (let i = 0; i < parseInt(this.wordLength / 2); i++) {
      if (this.lowerWord[i] !== this.lowerWord[this.wordLength - i - 1]) {
        this.answer = "NO";
      }
    }
    this.answer = "YES";
    return this.answer;
  }

  initialize(inputList) {
    this.word = inputList[0];
    console.log(this.solution());
  }
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
    const circularString = new CircularString();
    const circularString2 = new CircularString2();
    // circularString.initialize(inputList);
    circularString2.initialize(inputList);
    process.exit();
  });
}

init();
