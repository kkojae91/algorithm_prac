function solution(numbers) {
  const Array = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      }
      Array.push(numbers[i] + numbers[j]);
    }
  }
  const resultArray = [...new Set(Array)].sort((a, b) => a - b);
  return resultArray;
}

function init() {
  const numbersList = [
    [2, 1, 3, 4, 1],
    [5, 0, 2, 7],
  ];
  for (const numbers of numbersList) {
    console.log(solution(numbers));
  }
}

init();
