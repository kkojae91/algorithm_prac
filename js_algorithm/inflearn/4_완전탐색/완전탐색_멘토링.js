/*
멘토링
멘토링은 멘토(도와주는 학생), 멘티(도움을 받는 학생)가 한짝이 되어 멘토가 멘티의 수학 공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
M번의 수학 성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.

4 3
3 4 1 2
4 3 2 1
3 1 4 2
*/

class Mentoring {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    this.answer = 0;
  }

  solution() {
    // 멘토와 멘티의 모든 경우의 수
    for (let mento = 1; mento <= this.n; mento++) {
      for (let menti = 1; menti <= this.n; menti++) {
        let count = 0;
        for (let row = 0; row < this.m; row++) {
          let mentoGrade = 0;
          let mentiGrade = 0;
          for (let col = 0; col < this.n; col++) {
            if (this.array[row][col] === mento) {
              mentoGrade = col;
            }
            if (this.array[row][col] === menti) {
              mentiGrade = col;
            }
          }
          if (mentoGrade < mentiGrade) {
            count++;
          }
        }
        if (count === this.m) {
          this.answer++;
        }
      }
    }
    console.log(this.answer);
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    inputList.slice(1, this.m + 1).forEach((str) => {
      this.array.push(str.split(" ").map((str) => Number(str)));
    });
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
    const mentoring = new Mentoring();
    mentoring.initialize(inputList);
    process.exit();
  });
}

init();
