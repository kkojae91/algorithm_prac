// 내가 푼 방법
function solution(arr, divisor) {
  const answer = [];

  for (const num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }
  answer.sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}

// forEach활용
function solution2(arr, divisor) {
  const answer = [];

  arr.forEach((num) => {
    if (num % divisor === 0) {
      answer.push(num);
    }
  });

  answer.sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}

// filter활용.. depth를 줄일 수 있다. 무려 2depth나
function solution3(arr, divisor) {
  const result = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  return result.length === 0 ? [-1] : result;
}

function init() {
  const array = [
    [5, 9, 7, 10],
    [2, 36, 1, 3],
    [3, 2, 6],
  ];
  const divisorArray = [5, 1, 10];

  for (let i = 0; i < array.length; i++) {
    // console.log(solution(array[i], divisorArray[i]));
    // console.log(solution2(array[i], divisorArray[i]));
    console.log(solution3(array[i], divisorArray[i]));
  }
}

init();
