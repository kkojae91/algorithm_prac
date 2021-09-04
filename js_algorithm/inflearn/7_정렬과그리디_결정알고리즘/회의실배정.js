/*
* 회의실 배정
한개의 회의실이 있는 이 회의실을 사용하려는 n개의 회의들에 대하여 사용표를 만드려한다.
각 회의에 대한 시작 시간과 종료시간이 주어질때, 회의실을 최대한 이용할 수 회의 수를 출력하는 프로그램을 작성하시오.
단, 회의는 한 번 시작되면 중단될 수 없으며, 한 회의가 끝나는 동시에 다른 회의가 시작할 수 있다.

5
1 4
2 3
3 5
4 6
5 7
3

3
3 3
1 3
2 3
2
*/

class MeetingRoom {
  constructor() {
    this.n = 0;
    this.array = [];
    this.count = 0;
  }

  // reduce사용 x for 문 이용.
  solution2() {
    this.array.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });
    let endTime = 0;
    this.array.forEach((time) => {
      if (time[0] >= endTime) {
        this.count++;
        endTime = time[1];
      }
    });
    return this.count;
  }

  // reduce 이용
  solution() {
    // 회의가 가장 먼저 끝나는 순서를 먼저 정렬, 그 다음 회의가 빨리 시작하는 순서로 정렬!
    this.array.sort((a, b) => {
      return a[1] - b[1] || a[0] - b[0];
    });
    // console.log(this.array);
    // 이전 회의의 끝나는 시간과, 현재 회의의 시작하는 시간을 비교 후 카운팅
    this.array.reduce(
      (prev, curr) => {
        // console.log(prev[1], curr[0]);
        if (prev[1] <= curr[0]) {
          this.count++;
          return curr;
        }
        return prev;
      },
      [0, 0]
    );
    return this.count;
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
    const meetingRoom = new MeetingRoom();
    meetingRoom.initialize(inputList);
    // console.log(meetingRoom.solution());
    console.log(meetingRoom.solution2());
    process.exit();
  });
}

main();
