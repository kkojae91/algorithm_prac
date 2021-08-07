/*
문자열 뒤집기
0과 1로 이루어진 문자열 str을 가지고 있다.
이 문자열에 있는 모든 숫자를 전부 같게 만드려고 한다.
다솜이가 할 수 있는 행동은 연속된 하나 이상의 숫자를 잡고 모두 뒤집는 것입니다. 뒤집는 것은 0 -> 1, 1 -> 0을 의미한다.
문자열이 주어질 때 다솜이가 해야하는 행동의 최소 횟수를 출력하시오.
0001100
1
*/

class ReverseString {
  constructor() {
    this.str = "";
    this.zeroCount = 0;
    this.oneCount = 0;
    this.count = 0;
  }

  solution() {
    // 첫 번째 문자열 확인 후 count
    if (this.str[0] === "1") {
      this.zeroCount++;
    } else {
      this.oneCount++;
    }

    // 두번째 문자열 확인 후 count
    for (let i = 0; i < this.str.length - 1; i++) {
      if (this.str[i] !== this.str[i + 1]) {
        if (this.str[i + 1] === "1") {
          this.zeroCount++;
        } else {
          this.oneCount++;
        }
      }
    }

    // 만약 1111, 0000 으로 들어오는 경우는 count 0으로 처리
    if (this.zeroCount === 0 || this.oneCount === 0) {
      this.count = 0;
    } else {
      this.count = Math.min(this.zeroCount, this.oneCount);
    }

    return this.count;
  }

  initialize(inputList) {
    this.str = inputList[0];
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
    const reverseString = new ReverseString();
    reverseString.initialize(inputList);
    process.exit();
  });
}

init();
