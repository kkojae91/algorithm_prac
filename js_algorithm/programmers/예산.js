// for문 활용.
function solution(d, budget) {
  let answer = 0;
  const dSortList = d.sort((a, b) => a - b);
  for (const dNum of dSortList) {
    if (dNum <= budget) {
      budget -= dNum;
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

// forEach 활용
function solution2(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b).forEach((num) => {
    if (num <= budget) {
      budget -= num;
      answer++;
    }
  });
  return answer;
}

function init() {
  const dList = [
    [1, 3, 2, 5, 4],
    [2, 2, 3, 3],
  ];
  const budgetList = [9, 10];

  for (let i = 0; i < dList.length; i++) {
    console.log(solution(dList[i], budgetList[i]));
    console.log(solution2(dList[i], budgetList[i]));
  }
}

init();
