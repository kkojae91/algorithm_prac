// 내가 푼 방법
function solution(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }
  return answer;
}

// Math.min, Math.max 함수 활용
// 한눈에 보기 좋게 코드 짜기... 조금만 생각하면 된다.
function solution2(a, b) {
  let answer = 0;
  const minValue = Math.min(a, b);
  const maxValue = Math.max(a, b);
  for (let i = minValue; i <= maxValue; i++) {
    answer += i;
  }
  return answer;
}

function init() {
  const aList = [3, 3, 5];
  const bList = [5, 3, 3];
  for (let i = 0; i < aList.length; i++) {
    console.log(solution(aList[i], bList[i]));
    console.log(solution2(aList[i], bList[i]));
  }
}

init();
