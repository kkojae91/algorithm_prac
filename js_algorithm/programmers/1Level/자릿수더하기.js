function solution(n) {
  const numList = String(n)
    .split("")
    .map((num) => Number(num));
  return numList.reduce((prev, curr) => prev + curr, 0);
}

// reduce를 활용하지 않고 map함수에서 모든 과정 마무리 하기.
function solution2(n) {
  let answer = 0;
  String(n)
    .split("")
    .map((num) => (answer += Number(num)));
  return answer;
}

function init() {
  const nList = [123, 987];
  for (let n of nList) {
    console.log(solution(n));
    console.log(solution2(n));
  }
}

init();
