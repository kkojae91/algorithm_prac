function solution(n) {
  const array = [1, n];
  for (let i = 2; i <= parseInt(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0) {
      array.push(parseInt(n / i));
      array.push(i);
    }
  }
  const setArray = [...new Set(array)];
  return n === 0 ? 0 : setArray.reduce((prev, curr) => prev + curr, 0);
}

function solution2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function init() {
  const nArray = [12, 5];
  nArray.forEach((num) => {
    console.log(solution(num));
    console.log(solution2(num));
  });
}

init();
