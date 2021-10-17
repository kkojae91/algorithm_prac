function solution2(n, left, right) {
  let answer = [];
  // 좌표로 접근하는 방법 (left~ right의 값을 좌표로 바로 구해서 시간 복잡도를 낮춘다.)
  while (left <= right) {
    let row = Math.floor(left / n);
    let col = left % n;
    const maxNum = Math.max(row, col) + 1;
    answer.push(maxNum);
    left++;
  }

  // console.log(answer);
  return answer;
}

// 시간초과... 일일이 만들어 확인.. 입력값에 10^7 임으로 시간복잡도 너무너무 많이 잡아 먹음.
function solution(n, left, right) {
  let answer = [];
  // 2차원 array 생성, 1차원 array변환
  for (let i = 1; i < n + 1; i++) {
    const arr1 = [];
    for (let j = 1; j < n + 1; j++) {
      arr1.push(Math.max(i, j));
    }
    answer = [...answer, ...arr1];
  }
  console.log(answer);
  // slice(left, right +1)
  return answer.slice(left, right + 1);
}

function main() {
  const nList = [3, 4];
  const leftList = [2, 7];
  const rightList = [5, 14];
  for (let i = 0; i < nList.length; i++) {
    // console.log(solution(nList[i], leftList[i], rightList[i]));
    console.log(solution2(nList[i], leftList[i], rightList[i]));
  }
}

main();
