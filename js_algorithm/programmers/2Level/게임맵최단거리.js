// bfs 문제.
// 벽은 0, 길은 1 최종적으로 도착해야하는 곳은 5,5 / 1,1 유저의 위치
// 벽이거나 맵을 벗어나는 경우는 움직일 수 없다.
// 예외는 도착할 수 없을 경우.. -1 출력

// 현재 유저 위치를 큐에 넣고
// 큐에서 꺼낸 후 다음으로 이동할 수 있는 모든 위치를 큐에 넣는다.
function solution(maps) {
  let n = maps.length - 1;
  let m = maps[0].length - 1;
  // 방향 벡터 (상, 하, 좌, 우)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  // 유저 위치
  let userX = 0;
  let userY = 0;

  const queue = [[userX, userY]];

  while (queue.length !== 0) {
    const [currX, currY] = queue.shift();
    // 네 방향 모두 확인
    for (let i = 0; i < 4; i++) {
      const nextX = currX + dx[i];
      const nextY = currY + dy[i];
      // 맵을 벗어날 경우 종료
      if (nextX < 0 || nextX > n || nextY < 0 || nextY > m) {
        continue;
      }
      // 벽일 경우 종료
      if (maps[nextX][nextY] === 0) {
        continue;
      }
      // 처음 방문할 경우
      if (maps[nextX][nextY] === 1) {
        maps[nextX][nextY] = 1 + maps[currX][currY];
        queue.push([nextX, nextY]);
      }
    }
  }

  if (maps[n][m] === 1) {
    // console.log(maps);
    return -1;
  } else {
    // console.log(maps);
    return maps[n][m];
  }
}

function main() {
  const mapsList = [
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 0, 1],
    ],
    [
      [1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1],
    ],
  ];
  mapsList.forEach((maps) => console.log(solution(maps)));
}

main();
