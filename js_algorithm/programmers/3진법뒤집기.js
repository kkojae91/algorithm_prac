function makeReverseThree(num) {
  let qoutient = num;
  let remainder = "";
  while (true) {
    if (qoutient < 3) {
      remainder += qoutient;
      break;
    }
    remainder += String(qoutient % 3);
    qoutient = parseInt(qoutient / 3);
  }
  return remainder;
}

function makeTen(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += Number(num[i]) * 3 ** i;
  }
  return result;
}

// 내가 푼 방법 직접 구현
function solution(n) {
  const reverseThree = makeReverseThree(n);
  const answer = makeTen(reverseThree.split("").reverse().join(""));
  return answer;
}

// parseInt함수, toString함수 활용
function solution2(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function init() {
  const nArray = [45, 125];
  nArray.forEach((n) => {
    console.log(solution(n));
    console.log(solution2(n));
  });
}

init();
