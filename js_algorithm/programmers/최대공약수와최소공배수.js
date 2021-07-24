function solution(a, b) {
  let maxNum = Math.max(a, b);
  let minNum = Math.min(a, b);

  let lcm = 0;
  let gcd = 0;
  let count = 0;

  while (true) {
    if (maxNum % minNum === 0 && count === 0) {
      gcd = minNum;
      break;
    } else if (maxNum % minNum === 0) {
      break;
    }
    gcd = maxNum % minNum;
    maxNum = minNum;
    minNum = gcd;
    count++;
  }
  lcm = (a * b) / gcd;
  return [gcd, lcm];
}

function init() {
  const nList = [3, 2];
  const mList = [12, 5];

  for (let i = 0; i < nList.length; i++) {
    console.log(solution(nList[i], mList[i]));
  }
}

init();
