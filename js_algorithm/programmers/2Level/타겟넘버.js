function solution(numbers, target) {
  let answer = 0;
  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(level + 1, sum + numbers[level]);
    dfs(level + 1, sum - numbers[level]);
  }

  dfs(0, 0);
  return answer;
}

function main() {
  const numbers = [1, 1, 1, 1, 1];
  const target = 3;
  console.log(solution(numbers, target));
}

main();
