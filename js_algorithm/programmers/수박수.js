function solution(n) {
  return n % 2 === 0 ? "수박".repeat(n / 2) : "수박".repeat(parseInt(n / 2)) + "수";
}

function init() {
  const nList = [3, 4];
  for (const n of nList) {
    console.log(solution(n));
  }
}

init();
