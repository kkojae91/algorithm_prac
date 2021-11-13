function solution(s, e) {
  let answer = 0;
  let check = Array(10001).fill(0);
  let distance = Array(10001).fill(0);
  let queue = [];
  check[s] = 1;
  queue.push(s);
  distance[s] = 0;

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) {
        return distance[x] + 1;
      }
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        distance[nx] = distance[x] + 1;
      }
    }
  }

  return answer;
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const [s, e] = stdin[0].split(" ").map((str) => Number(str));
  console.log(solution(s, e));
}

main();
