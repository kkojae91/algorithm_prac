/*
* 카카오 캐시 문제 변형
5 9
1 2 3 2 6 2 3 5 7
*/

// 내가 푼 방법!
class LeastRecentlyUsed {
  constructor() {
    this.s = 0;
    this.n = 0;
    this.array = [];
    this.answer = [];
  }

  solution() {
    // array배열 순회 하면서
    // includes()활용 원소를 포함하고 있지 않으면, push
    // 예외 처리 s만큼 공간을 초과 할 경우 shift()으로 제거
    for (const num of this.array) {
      if (!this.answer.includes(num)) {
        if (this.answer.length === this.s) {
          this.answer.shift();
        }
        this.answer.push(num);
      } else {
        let findIndex = this.answer.indexOf(num);
        while (findIndex < this.answer.length - 1) {
          [this.answer[findIndex], this.answer[findIndex + 1]] = [this.answer[findIndex + 1], this.answer[findIndex]];
          findIndex++;
        }
      }
    }
    // 선택 정렬을 활용한다면, 맨 뒤로 이동할 때까지 length-2 , length-1 자리를 교체
    // answer배열을 뒤에서부터 순회하면서 선택 정렬 실행!
    // 현재 번호가 넘이랑 같다면 가장 뒤로 갈때까지 자리 바꿈

    // 마지막에 reverse()로 배열 뒤집어 주기.
    return this.answer.reverse().join(" ");
  }

  initialize(inputList) {
    [this.s, this.n] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
  }
}

// 5 9
// 1 2 3 2 6 2 3 5 7
class LeastRecentlyUsed2 {
  constructor() {
    this.s = 0;
    this.n = 0;
    this.array = [];
    this.answer = [];
  }

  solution() {
    this.answer = Array(this.s).fill(0);

    this.array.forEach((num) => {
      let position = -1;
      for (let i = 0; i < this.s; i++) {
        if (num === this.answer[i]) {
          position = i;
        }
      }
      if (position === -1) {
        for (let i = this.s - 1; i >= 1; i--) {
          this.answer[i] = this.answer[i - 1];
        }
      } else {
        for (let i = position; i >= 1; i--) {
          this.answer[i] = this.answer[i - 1];
        }
      }
      this.answer[0] = num;
    });
    return this.answer;
  }

  solution2() {
    // this.answer = Array(this.s).fill(0);

    this.array.forEach((num) => {
      let position = -1;
      for (let i = 0; i < this.s; i++) {
        if (num === this.answer[i]) {
          position = i;
        }
      }
      if (position === -1) {
        this.answer.unshift(num);
        if (this.answer.length > this.s) {
          this.answer.pop();
        }
      } else {
        this.answer.splice(position, 1);
        this.answer.unshift(num);
      }
    });
    return this.answer;
  }

  initialize(inputList) {
    [this.s, this.n] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const lru = new LeastRecentlyUsed();
    const lru2 = new LeastRecentlyUsed2();
    lru.initialize(inputList);
    lru2.initialize(inputList);
    // console.log(lru.solution());
    // console.log(lru2.solution());
    console.log(lru2.solution2());
    process.exit();
  });
}

main();
