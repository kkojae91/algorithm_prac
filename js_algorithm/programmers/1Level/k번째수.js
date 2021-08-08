// 내가 푼 풀이
function solution(array, commands) {
  const answer = [];
  for (const command of commands) {
    const startIndex = command[0] - 1;
    const endIndex = command[1];
    const midIndex = command[2] - 1;
    const sortArray = array.slice(startIndex, endIndex).sort((a, b) => a - b);
    answer.push(sortArray[midIndex]);
  }
  return answer;
}

// map함수 활용
function solution2(array, commands) {
  const answer = commands.map((command) => {
    // 구조 분해 할당
    const [startIndex, endIndex, midIndex] = command;
    return array.slice(startIndex - 1, endIndex).sort((a, b) => a - b)[midIndex - 1];
  });

  return answer;
}

function init() {
  const array = [1, 5, 2, 6, 3, 7, 4];
  const commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ];
  console.log(solution(array, commands));
  console.log(solution2(array, commands));
}

init();
