// forEach활용 내가 푼 방법 1
function solution(a, b) {
  let answer = 0;
  a.forEach((num, index) => (answer += num * b[index]));
  return answer;
}

// reduce 활용 내가 푼 방법 2
function solution2(a, b) {
  return a.reduce((prev, curr, index) => {
    let result = prev + curr * b[index];
    return result;
  }, 0);
}

function init() {
  aList = [
    [1, 2, 3, 4],
    [-1, 0, 1],
  ];
  bList = [
    [-3, -1, 0, 2],
    [1, 0, -1],
  ];
  for (let i = 0; i < aList.length; i++) {
    console.log(solution(aList[i], bList[i]));
    console.log(solution2(aList[i], bList[i]));
  }
}

init();
