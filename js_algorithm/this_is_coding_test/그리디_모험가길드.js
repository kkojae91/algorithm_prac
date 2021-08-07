/*
모험가 길드
공포도가 x인 모험가는 반드시 x명 이상으로 구성한 모험가 그룹에 참여해야 여행을 떠날 수 있다.
최대 몇개의 모험가 그룹을 만들 수 있는지 확인하는 프로그램을 작성하시오.
5
2 3 1 2 2
2
*/

class Guild {
  constructor() {
    this.n = 0;
    this.members = [];
    this.answer = 0;
    this.count = 0;
  }

  solution() {
    // 오름차순 정렬.
    this.members.sort((a, b) => a - b);
    this.members.forEach((member) => {
      // 맴버 수 카운트
      this.count++;
      // 맴버 수가 맴버의 공포도보다 크거나 같은 경우 그룹 결성 후 맴버 수 초기화
      if (this.count >= member) {
        this.answer++;
        this.count = 0;
      }
    });
    return this.answer;
  }

  initialize(inputList) {
    this.n = Number(inputList.slice(0, 1)[0]);
    this.members = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((num) => Number(num));
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
    const guild = new Guild();
    guild.initialize(inputList);
    process.exit();
  });
}

init();
