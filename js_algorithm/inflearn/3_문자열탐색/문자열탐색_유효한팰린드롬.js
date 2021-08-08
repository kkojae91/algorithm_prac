// found7, time: study; Yduts; emit, 7Dnuof

class Palindrome {
  constructor() {
    this.str = "";
    this.newString = "";
    this.reverseString = "";
    this.answer = "";
  }

  solution() {
    // 아스키 코드로 문자열 check 문자열로만 이루어진 새로운 문자열을 생성
    // a -> 97, z -> 122
    this.str = this.str.toLowerCase();
    for (const s of this.str) {
      const ascii = s.charCodeAt();
      if (ascii >= 97 && ascii <= 122) {
        this.newString += s;
      }
    }
    this.reverseString = this.newString.split("").reverse().join("");
    if (this.newString === this.reverseString) {
      this.answer = "YES";
    } else {
      this.answer = "NO";
    }
    return this.answer;
  }

  solution2() {
    // 정규표현식을 활용해서 간단하게 풀 수 있다. 정규표현식 공부 필요.
    this.newString = this.str.toLowerCase().replace(/[^a-z]/g, "");
    this.reverseString = this.newString.split("").reverse().join("");
    if (this.newString === this.reverseString) {
      this.answer = "YES";
    } else {
      this.answer = "NO";
    }
    return this.answer;
  }

  initialize(inputList) {
    this.str = inputList[0];
    // console.log(this.solution());
    console.log(this.solution2());
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
    const palindrome = new Palindrome();
    palindrome.initialize(inputList);
    process.exit();
  });
}

init();
