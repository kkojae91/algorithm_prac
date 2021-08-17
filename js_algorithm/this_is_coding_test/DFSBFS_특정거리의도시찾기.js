/*
특정 거리의 도시 찾기
모든 도로의 거리는 1, 이때 특정한 도시 x로 부터 출발하여 도달할 수 있는 모든 도시중에서, 최단 거리가 정확히 k인
모든 도시의 번호를 출력하는 프로그램을 작성하세요.
또한 출발 도시 x에서 출발 도시 x로 가는 최단 거리는 항상 0이라고 가정합니다.(움직일 경우만 1)
4 4 2 1
1 2
1 3
2 3
2 4
4
4 3 2 1
1 2
1 3
1 4
-1
4 4 1 1
1 2
1 3
2 3
2 4
2
3
*/

class FindCity {
  constructor() {
    this.n = 0;
    this.m = 0;
    // 최단 거리
    this.k = 0;
    // 출발 도시
    this.x = 0;
    // 그래프 정보
    this.graph = [];
    this.distance = [];
    this.queue = [];
    this.answer = [];
    this.check = false;
  }

  solution() {
    // 모든 도시에 대한 최단 거리 -1로 초기화
    this.distance = Array(this.n + 1).fill(-1);
    // 시작 도시는 0부터 시작
    this.distance[this.x] = 0;
    // 시작 도시를 큐에 넣고 시작
    this.queue = [this.x];

    while (this.queue.length) {
      const currentNode = this.queue.shift();

      // 현재 도시에서 이동할 수 있는 모든 도시를 확인
      for (const nextNode of this.graph[currentNode]) {
        if (this.distance[nextNode] === -1) {
          this.distance[nextNode] = this.distance[currentNode] + 1;
          this.queue.push(nextNode);
        }
      }
    }

    for (let city = 1; city <= this.n; city++) {
      if (this.distance[city] === this.k) {
        // this.answer.push(city);
        this.check = true;
        console.log(city);
      }
    }

    if (this.check === false) {
      console.log(-1);
      // return -1;
    }
    // return this.answer;
  }

  initialize(inputList) {
    [this.n, this.m, this.k, this.x] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    // 도시의 개수만큼 graph 초기화
    this.graph = Array(this.n + 1).fill([]);
    inputList.slice(1, this.m + 1).forEach((str) => {
      const [start, end] = str.split(" ").map((s) => Number(s));
      // this.grpah[start].push(end) <- 이거는 안되더라... 이유는 모르겠음.. 누구에게 물어보고 싶음..
      this.graph[start] = [...this.graph[start], end];
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
    const findCity = new FindCity();
    findCity.initialize(inputList);
    findCity.solution();
    // console.log(findCity.solution());
    process.exit();
  });
}

main();
