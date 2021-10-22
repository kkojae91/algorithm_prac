// js는 확실히 인풋값 받고 정리하는게 번거롭다.
function solution(n, nList) {
  const scores = [[], [], []];
  let answer = "";
  for (const nStr of nList) {
    const [card1, card2, card3] = nStr.split(" ").map((s) => Number(s));
    scores[0].push(card1);
    scores[1].push(card2);
    scores[2].push(card3);
  }
  // console.log(scores);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      // console.log(scores[j], scores[j][i]);
      let count = scores[j].filter((score) => score === scores[j][i]).length;
      if (count === 1) {
        sum += scores[j][i];
      }
    }
    answer += `${sum}\n`;
  }
  return answer.trim();
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const nList = stdin.slice(1, n + 1);
  console.log(solution(n, nList));
}

main();
