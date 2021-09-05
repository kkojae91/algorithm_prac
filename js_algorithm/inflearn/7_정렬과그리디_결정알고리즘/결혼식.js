/*
* 결혼식
5
14 18
12 15
15 20
20 30
5 14
2

5
13 18
12 15
14 20
20 30
5 14
3
*/

class Wedding {
  constructor() {
    this.n = 0;
    this.array = [];
    this.answer = 0;
    this.timeLine = [];
  }

  // timeLine 생성후 문제 풀이
  solution2() {
    // start와 end를 구분하여 timeLine에 푸시
    for (const time of this.array) {
      this.timeLine.push([time[0], "s"]);
      this.timeLine.push([time[1], "e"]);
    }

    // endTime과 startTime이 같을 경우 endTime을 먼저 정렬
    this.timeLine.sort((a, b) => {
      // 문자를 기준으로 정렬을 해야할 경우 아스키코드를 활용!
      if (a[0] === b[0]) {
        return a[1].charCodeAt() - b[1].charCodeAt();
      }
      return a[0] - b[0];
    });

    let count = 0;
    for (let i = 0; i < this.timeLine.length; i++) {
      if (this.timeLine[i][1] === "s") {
        count++;
      } else {
        count--;
      }
      this.answer = Math.max(this.answer, count);
    }
    return this.answer;
  }

  // 내가 푼 방법!
  solution() {
    // 가는 시간을 기준으로 정렬 후 오는 시간을 기준으로 정렬
    this.array.sort((a, b) => {
      return (a[1] - b[1]) | (a[0] - b[0]);
    });
    // 그리디?!
    // this.array[1] 값을 가지고 모든 상황 탐색?! cnt 갱신
    for (let i = 0; i < this.n; i++) {
      // 각각의 endTime 체크
      const endTime = this.array[i][1];
      let count = 1;
      for (let j = i + 1; j < this.n; j++) {
        const startTime = this.array[j][0];
        if (endTime <= startTime) {
          break;
        } else {
          count++;
        }
      }
      this.answer = Math.max(this.answer, count);
    }
    return this.answer;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    inputList.slice(1, this.n + 1).forEach((str) => {
      this.array.push(str.split(" ").map((s) => Number(s)));
    });
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
    const wedding = new Wedding();
    wedding.initialize(inputList);
    // console.log(wedding.solution());
    console.log(wedding.solution2());
    process.exit();
  });
}

main();
