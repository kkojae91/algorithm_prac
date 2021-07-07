"use strict";

function solution(num) {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      arr.push(i);
    }
  }
  return arr.join(" ");
}

function init() {
  const num = 100;
  console.log(solution(Number(num)));
}

init();
