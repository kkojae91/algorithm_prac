// 내가 푼 풀이 방법 map함수, reduce함수를 활용한 풀이
function solution(absolutes, signs) {
  return absolutes
    .map((num, index) => {
      return signs[index] === true ? num : -num;
    })
    .reduce((prev, curr) => prev + curr, 0);
}

// reduce 하나로 마무리 reduce 3번째 인자는 index!
function solution2(absolutes, signs) {
  return absolutes.reduce((prev, curr, index) => {
    return prev + (signs[index] ? curr : -curr);
  }, 0);
}

function init() {
  const absolutesList = [
    [4, 7, 12],
    [1, 2, 3],
  ];
  const signsList = [
    [true, false, true],
    [false, false, true],
  ];

  for (let i = 0; i < absolutesList.length; i++) {
    const absolutes = absolutesList[i];
    const signs = signsList[i];
    console.log(solution(absolutes, signs));
    console.log(solution2(absolutes, signs));
  }
}

init();
