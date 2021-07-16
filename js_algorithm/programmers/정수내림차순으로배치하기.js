function solution(n) {
  const numString = String(n);
  const numList = numString.split("").map((num) => Number(num));
  return Number(numList.sort((a, b) => b - a).join(""));
}

function init() {
  console.log(solution(118372));
}

init();
