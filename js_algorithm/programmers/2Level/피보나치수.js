function solution(n) {
  let answer = 0;
  let arr = Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr[1] = 1 % 1234567;
    } else {
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
  }
  answer = arr[n];
  // console.log(arr);
  return answer;
}

function main() {
  const nList = [3, 5, 8];
  nList.forEach((n) => console.log(solution(n)));
}

main();
