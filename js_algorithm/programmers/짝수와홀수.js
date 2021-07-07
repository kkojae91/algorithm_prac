"use strict";

// short cut
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

function solution2(num) {
  let answer;
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

function init() {
  const number = [3, 4];
  for (let num of number) {
    console.log(solution(num));
    console.log(solution2(num));
  }
}

init();
