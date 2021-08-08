"use strict";

function solution(arr) {
  if (arr.length <= 1) {
    return [-1];
  } else {
    const minIndex = arr.indexOf(Math.min(...arr));
    arr.splice(minIndex, 1);
    return arr;
  }
}

function init() {
  const array = [[4, 3, 2, 1], [10]];
  for (let arr of array) {
    console.log(solution(arr));
  }
}

init();
