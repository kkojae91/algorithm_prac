// 6 11
// 1
// 1 2 2
// 1 3 5
// 1 4 1
// 2 3 3
// 2 4 2
// 3 2 3
// 3 6 5
// 4 3 3
// 4 5 1
// 5 3 1
// 5 6 2

function solution(n, m, start, nList) {
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  let graph = [];
  for (let i = 0; i <= n; i++) {
    graph.push([]);
  }

  for (let nLi of nList) {
    const [a, b, c] = nLi;
    graph[a].push([b, c]);
  }

  function getSmallestNode() {
    let minValue = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 1; i < n + 1; i++) {
      if (distance[i] < minValue && !visited[i]) {
        minValue = distance[i];
        index = i;
      }
    }
    return index;
  }

  function dijkstra(start) {
    distance[start] = 0;
    visited[start] = true;

    for (let j of graph[start]) {
      distance[j[0]] = j[1];
      // console.log(distance);
    }

    for (let i = 0; i < n - 1; i++) {
      let now = getSmallestNode();
      visited[now] = true;

      for (let j of graph[now]) {
        let cost = distance[now] + j[1];
        if (cost < distance[j[0]]) {
          distance[j[0]] = cost;
        }
      }
    }
  }

  dijkstra(start);

  // console.log(distance);
  for (let i = 1; i < n + 1; i++) {
    if (distance[i] === Number.MAX_SAFE_INTEGER) {
      console.log("INFINITY");
    } else {
      console.log(distance[i]);
    }
  }
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [n, m] = stdin[0].split(" ").map((str) => Number(str));
  const start = Number(stdin[1]);
  const nList = [];
  for (const str of stdin.slice(2, m + 2)) {
    nList.push(str.split(" ").map((s) => Number(s)));
  }
  console.log(solution(n, m, start, nList));
}

main();
