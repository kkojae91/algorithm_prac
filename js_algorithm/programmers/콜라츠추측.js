// 내가 푼 풀이
function solution(num) {
  let answer = 0;

  while (true) {
    if (num === 1) {
      return answer;
    }

    if (answer === 500) {
      return -1;
    }

    num = num % 2 === 0 ? parseInt(num / 2) : num * 3 + 1;
    answer++;
  }
}

// 다른사람 풀이 while 문에 조건을 넣어주는 것.
function solution2(num) {
  let answer = 0;

  while (answer < 500) {
    if (num === 1) {
      return answer;
    }

    num = num % 2 === 0 ? parseInt(num / 2) : num * 3 + 1;
    answer++;
  }

  return -1;
}

function init() {
  n_list = [6, 16, 626331];
  for (let num of n_list) {
    console.log(solution(num));
    console.log(solution2(num));
  }
}

init();
