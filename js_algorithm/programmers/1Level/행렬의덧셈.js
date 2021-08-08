// 내가 푼 방법 단순 for in 문 사용 index로 접근..
function solution(arr1, arr2) {
  const answer = [];
  for (const index1 in arr1) {
    const ans = [];
    for (const index2 in arr1[0]) {
      ans.push(arr1[index1][index2] + arr2[index1][index2]);
    }
    answer.push(ans);
  }
  return answer;
}

// map함수 이용
function solution2(arr1, arr2) {
  const result = arr1.map((arr, index1) => {
    return arr.map((num, index2) => {
      return num + arr2[index1][index2];
    });
  });
  return result;
}

function init() {
  const arr1List = [
    [
      [1, 2],
      [2, 3],
    ],
    [[1], [2]],
  ];
  const arr2List = [
    [
      [3, 4],
      [5, 6],
    ],
    [[3], [4]],
  ];

  for (let i = 0; i < arr1List.length; i++) {
    console.log(solution(arr1List[i], arr2List[i]));
    console.log(solution2(arr1List[i], arr2List[i]));
  }
}

init();
