/*
학급 회장을 뽑는데 후보로 기호 a, b, c, d, e 후보가 등록을 했습니다.
투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)이 쓰여져 있으며, 선생님은 그 기호를 발표하고 있습니다.
선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
15
BACBACCACCBDEDE
C
*/

class IsPresident {
  constructor() {
    this.n = 0;
    this.str = "";
    this.voteObj = {};
    this.array = [];
    this.answer = "";
  }

  solution() {
    for (const string of this.str) {
      if (this.voteObj[string] === undefined) {
        this.voteObj[string] = 1;
      } else {
        this.voteObj[string] += 1;
      }
    }
    this.array = Object.entries(this.voteObj);
    this.answer = this.array.sort((a, b) => b[1] - a[1])[0][0];
    return this.answer;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.str = inputList.slice(1, 2)[0];
  }
}

class IsPresident2 {
  constructor() {
    this.n = 0;
    this.str = "";
    this.strHash = new Map();
    this.max = Number.MIN_SAFE_INTEGER;
    this.answer = "";
  }

  solution() {
    for (const string of this.str) {
      if (this.strHash.has(string)) {
        const update = this.strHash.get(string) + 1;
        this.strHash.set(string, update);
      } else {
        this.strHash.set(string, 1);
      }
    }

    for (const [key, value] of this.strHash) {
      if (value > this.max) {
        this.max = value;
        this.answer = key;
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.str = inputList.slice(1, 2)[0];
  }
}

function main() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const isPresident = new IsPresident();
    const isPresident2 = new IsPresident2();
    isPresident.initialize(inputList);
    isPresident2.initialize(inputList);
    // console.log(isPresident.solution());
    console.log(isPresident2.solution());
    process.exit();
  });
}

main();
