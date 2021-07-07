"use strict";
/*
배열이 주어지면 [1, 2, 100, 3, 30] 최댓값 최솟값 순서대로 출력하는 프로그램을 작성하시오.
출력 : 100 1
*/

// max min 내장함수 사용
function solution(num_list) {
  return [Math.max(...num_list), Math.min(...num_list)].join(" ");
}

// max min 함수 사용 x 반복문 활용
function solution2(num_list) {
  let max_num = num_list[0];
  let min_num = num_list[0];

  for (let i = 1; i < num_list.length; i++) {
    const num = num_list[i];
    if (max_num < num) {
      max_num = num;
    }
    if (min_num > num) {
      min_num = num;
    }
  }
  return [max_num, min_num].join(" ");
}

function init() {
  const num_list = [1, 2, 100, 3, 30];
  console.log(solution(num_list));
  console.log(solution2(num_list));
}

init();
