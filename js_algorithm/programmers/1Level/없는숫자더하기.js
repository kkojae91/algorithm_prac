function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
  }
  return answer;
}

function main() {
  const numbersList = [
    [1, 2, 3, 4, 6, 7, 8, 0],
    [5, 8, 4, 0, 6, 7, 9],
  ];
  for (let i = 0; i < numbersList.length; i++) {
    console.log(solution(numbersList[i]));
  }
}

main();
