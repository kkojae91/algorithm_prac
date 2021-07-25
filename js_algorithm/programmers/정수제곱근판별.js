function solution(n) {
  let answer = 0;
  Number.isInteger(Math.sqrt(n)) ? (answer = (Math.sqrt(n) + 1) ** 2) : (answer = -1);
  return answer;
}

function init() {
  const nList = [121, 3];
  for (const n of nList) {
    console.log(solution(n));
  }
}

init();
