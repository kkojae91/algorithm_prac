// 모든 경우의 수를 구하고, 그 경우의 수의 순열을 구한후 그게 소수인지 체크!
// 순열 구하는 함수
function permutation(arr, len) {
  const answer = [];
  const checkArray = Array(len).fill(0);
  const tempArray = Array(len).fill(0);
  function dfs(level) {
    if (level === len) {
      answer.push(Number(tempArray.join("")));
      return;
    }
    for (let i = 0; i < len; i++) {
      if (checkArray[i] === 0) {
        checkArray[i] = 1;
        tempArray[level] = arr[i];
        dfs(level + 1);
        checkArray[i] = 0;
      }
    }
  }
  dfs(0);
  return answer;
}

// 소수 판별 후 카운팅 하는 함수
function checkPrimaryNumber(arr) {
  let count = 0;
  function isPrimeNumber(num) {
    if (num < 2) {
      return false;
    }

    if (num === 2) {
      return true;
    }

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (const number of arr) {
    if (isPrimeNumber(number)) {
      count++;
    }
  }
  return count;
}

// 메인 함수
function solution(numbers) {
  const answer = [];
  // 모든 경우의 수 구하기
  function dfs(level, str) {
    if (level === numbers.length) {
      if (str) {
        const numberList = permutation(str.split(""), str.length);
        for (const number of numberList) {
          if (answer.indexOf(number) === -1) {
            answer.push(number);
          }
        }
      }
      return;
    }
    // 포함하는 경우
    dfs(level + 1, str + numbers[level]);
    // 포함하지 않는 경우
    dfs(level + 1, str);
  }

  dfs(0, "");
  return checkPrimaryNumber(answer);
}

function main() {
  const numbersList = ["17", "011"];
  for (const numbers of numbersList) {
    console.log(solution(numbers));
  }
}

main();
