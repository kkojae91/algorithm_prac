// 다른 사람 풀이... 배열 API 활용...
function solution2(arr1, arr2) {
  const answer = arr1.map((row) => {
    return arr2[0].map((val, index1) => {
      return row.reduce((prev, curr, index2) => {
        return prev + curr * arr2[index2][index1];
      }, 0);
    });
  });
  return answer;
  // return arr1.map((row) => arr2[0].map((val, index1) => row.reduce((prev, curr, index2) => prev + curr * arr2[index2][index1], 0)));
}

// 내가 푼 풀이
function solution(arr1, arr2) {
  const answer = [];
  const arr2xLength = arr2.length;
  const arr2yLength = arr2[0].length;

  const arr2Array = [];
  for (let y = 0; y < arr2yLength; y++) {
    const arr2List = [];
    for (let x = 0; x < arr2xLength; x++) {
      arr2List.push(arr2[x][y]);
    }
    arr2Array.push(arr2List);
  }

  for (const first of arr1) {
    const resultList = [];
    for (const second of arr2Array) {
      let sum = 0;
      for (let i = 0; i < first.length; i++) {
        sum += first[i] * second[i];
      }
      resultList.push(sum);
    }
    answer.push(resultList);
  }

  return answer;
}

function main() {
  const arr1List = [
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
  ];
  const arr2List = [
    [
      [3, 3],
      [3, 3],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ],
  ];
  for (let i = 0; i < arr1List.length; i++) {
    console.log(solution(arr1List[i], arr2List[i]));
    console.log(solution2(arr1List[i], arr2List[i]));
  }
}
main();
