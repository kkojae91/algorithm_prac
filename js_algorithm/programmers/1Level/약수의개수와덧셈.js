function aliqoutCount(number) {
  let count = 0;
  number === 1 ? (count = 1) : (count = 2);
  for (let num = 2; num < number; num++) {
    if (number % num === 0) {
      count++;
    }
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    aliqoutCount(num) % 2 === 0 ? (answer += num) : (answer -= num);
  }
  return answer;
}

function init() {
  const leftArray = [13, 24];
  const rightArray = [17, 27];

  for (let i = 0; i < leftArray.length; i++) {
    console.log(solution(leftArray[i], rightArray[i]));
  }
}

init();
