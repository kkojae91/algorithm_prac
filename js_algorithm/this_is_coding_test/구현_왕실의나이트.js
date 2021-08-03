/*
왕실의 나이트
8 x 8 좌표 정원이 있다. 나이트는 매우 충성스러운 신하로서 매일 무술을 연마한다.
나이트는 말을 타고 있기 때문에 L자 형태로만 이동할 수 있으며, 정원 밖으로 나갈 수 없다.
나이트는 특정한 위치에서 다음과 같은 2가지 경우로 이동할 수 있다.
1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
행 위치를 1 ~ 8, 열 위치를 a ~ h로 표현한다.
나이트의 위치가 주어질 때, 나이트가 이동할 수 있는 방향의 수를 출력하는 프로그램을 작성하시오.
*/

// 내가 푼 방법
function solution(knightPosition) {
  const positionObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  // direction case 왼1위2, 오1위2, 왼2위1, 오2위1, 왼1아래2, 오1아래2, 왼2아래1, 우2아래1
  const dx = [-1, 1, -2, 2, -1, 1, -2, 2];
  const dy = [-2, -2, -1, -1, 2, 2, 1, 1];
  // knight postion
  let x = positionObj[knightPosition[0]];
  let y = Number(knightPosition[1]);
  let count = 0;
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}

function solution2(knightPosition) {
  const row = Number(knightPosition[1]);
  const col = knightPosition[0].charCodeAt() - "a".charCodeAt() + 1;
  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];
  let count = 0;
  for (const step of steps) {
    const nextRow = row + step[0];
    const nextCol = col + step[1];
    if (nextRow < 1 || nextRow > 8 || nextCol < 1 || nextCol > 8) {
      continue;
    } else {
      count++;
    }
  }
  return count;
}

function init() {
  const knightPositionList = ["a1", "c2"];
  for (const knightPosition of knightPositionList) {
    // console.log(solution(knightPosition));
    console.log(solution2(knightPosition));
  }
}

init();
