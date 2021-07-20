// 문제를 정확하게 파악... 정렬문제가 아니라 뒤집는 문제!!
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((num) => Number(num));
}

function init() {
  const n = 12345;
  console.log(solution(n));
}

init();
