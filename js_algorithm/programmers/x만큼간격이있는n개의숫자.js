// 내가 푼 코드 반복문 활용
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 다른 사람 코드 map 함수 활용.
// Array객체를 활요해서 빈 배열 생성 후
// fill매서드로 x값 할당
// map 함수의 value와 index를 활용해 각각의 값을 변경
function solution2(x, n) {
  const answer = Array(n)
    .fill(x)
    .map((value, index) => (index + 1) * value);
  return answer;
}

function init() {
  x = [2, 4, -4];
  n = [5, 3, 2];
  for (let i = 0; i < x.length; i++) {
    // console.log(solution(x[i], n[i]));
    console.log(solution2(x[i], n[i]));
  }
}

init();
