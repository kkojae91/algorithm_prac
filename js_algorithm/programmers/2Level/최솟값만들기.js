function makeMinNumber(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  
  for (let i = 0; i < A.length; i ++) {
    answer += A[i] * B[i];
  }

  return answer;
}

function main() {
  const aList = [[1, 4, 2], [1, 2]];
  const bList = [[5, 4, 4], [3, 4]];

  for (let i = 0; i < aList.length; i++) {
    console.log(makeMinNumber2(aList[i], bList[i]));
  }
}

main();