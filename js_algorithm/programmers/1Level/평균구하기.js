"use strict";

// 반복문 활용
function solution(arr) {
  let answer = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    answer += arr[i];
  }
  answer /= arrLength;
  return answer;
}

// reduce 활용
function solution2(arr) {
  let answer = 0;
  const result = arr.reduce((prev, curr) => prev + curr, 0);
  answer = result / arr.length;
  return answer;
}

function init() {
  const array = [
    [1, 2, 3, 4],
    [5, 5],
  ];
  for (let arr of array) {
    // console.log(solution(arr));
    console.log(solution2(arr));
  }
}

init();
