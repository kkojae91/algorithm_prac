// 규칙을 찾기위해서는 종이와 펜을...
function solution(n) {
  let answer = "";
  const states = ["4", "1", "2"];
  while (n > 0) {
    answer = states[n % 3] + answer;
    if (n % 3 === 0) {
      n = parseInt(n / 3) - 1;
    } else {
      n = parseInt(n / 3);
    }
  }
  return answer;
}

function main() {
  const nList = [1, 2, 3, 4];
  nList.forEach((n) => console.log(solution(n)));
}

main();
