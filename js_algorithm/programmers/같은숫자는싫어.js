function solution(arr) {
  const answer = [];
  arr.reduce((prev, curr) => {
    if (prev !== curr) {
      answer.push(curr);
    }
    return curr;
  }, -1);

  return answer;
}

function init() {
  const array = [
    [1, 1, 3, 3, 0, 1, 1],
    [4, 4, 4, 3, 3],
  ];
  for (const arr of array) {
    console.log(solution(arr));
  }
}

init();
