// g0en2T0s8eSoft
class GetNumber {
  constructor() {
    this.str = "";
    this.newString = "";
    this.num = 0;
  }

  // 정규 표현식 사용
  solution() {
    this.newString = this.str.toLowerCase().replace(/[a-z]/g, "");
    this.num = Number(this.newString);
    return this.num;
  }

  // 아스키코드 사용
  // a - 97, z - 122
  solution2() {
    this.str = this.str.toLowerCase();
    for (const s of this.str) {
      const ascii = s.charCodeAt();
      if (ascii <= 97 || ascii >= 122) {
        this.newString += s;
      }
    }
    this.num = Number(this.newString);
    return this.num;
  }

  // isNaN(문자열);
  solution3() {
    for (const s of this.str) {
      if (!isNaN(s)) {
        this.newString += s;
      }
    }
    this.num = Number(this.newString);
    return this.num;
  }

  initialize(inputList) {
    this.str = inputList[0];
    // console.log(this.solution());
    // console.log(this.solution2());
    console.log(this.solution3());
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
    const getNumber = new GetNumber();
    getNumber.initialize(inputList);
    process.exit();
  });
}

init();
