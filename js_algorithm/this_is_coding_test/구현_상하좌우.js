/*
상하좌우
여행가 a는 n x n 크기의 정사각형 공간 위에 서 있다.
가장 왼쪽 위 좌표는 (1, 1), 가장 오른쪽 아래 좌표는 (n, n)에 해당한다.
여행가는 상 하 좌 우로 이동할 수 있다. 시작 좌표는 항상 (1, 1)
L: 왼쪽으로 한 칸 이동
R: 오른쪽으로 한 칸 이동
U: 위로 한 칸 이동
D: 아래로 한 칸 이동
공간을 벗어나는 경우 무시한다.
여행가 A가 최종적으로 도착할 지점을 출력하는 프로그램을 작성하시오.
5
R R R U D D
3 4
*/

function directionCheck(position, direct) {
  // 상(U) 하(D) 좌(L) 우(R)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let nextX = position[0];
  let nextY = position[1];

  if (direct === "U") {
    nextX += dx[0];
  } else if (direct === "D") {
    nextX += dx[1];
  } else if (direct === "L") {
    nextY += dy[2];
  } else {
    nextY += dy[3];
  }
  console.log(nextX, nextY);
  return [nextX, nextY];
}

function solution(n, directionList) {
  const position = [1, 1];
  for (const direct of directionList) {
    const [nextX, nextY] = directionCheck(position, direct);
    // 맵의 크기는 1 ~ n, position이 0이 되거나, n+1이 될 경우 무시
    if (nextX < 1 || nextX > n || nextY < 1 || nextY > n) {
      continue;
    } else {
      position[0] = nextX;
      position[1] = nextY;
    }
  }
  console.log(position);
  return -1;
}

function preprocessInput(inputList) {
  const n = Number(inputList[0]);
  const directionList = inputList[1].split(" ");
  console.log(solution(n, directionList));
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
    preprocessInput(inputList);
    process.exit();
  });
}

init();
