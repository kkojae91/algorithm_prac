function sorting(hashEntries) {
  hashEntries.sort((a, b) => {
    if (a[1][0] < b[1][0]) {
      return -1;
    }
    if (a[1][0] > b[1][0]) {
      return 1;
    }
    if (a[1][0] === b[1][0]) {
      if (a[1][1] < b[1][1]) {
        return -1;
      }
      if (a[1][1] > b[1][1]) {
        return 1;
      }
      return 0;
    }
  });
  return hashEntries;
}

function solution(n, voteNum, voteList) {
  let hash = {};
  for (let i = 0; i < voteList.length; i++) {
    const vote = voteList[i];
    let hashEntries = Object.entries(hash);
    if (hash[vote]) {
      hash[vote][0] += 1;
    } else {
      if (hashEntries.length < n) {
        hash[vote] = [1, i];
      } else {
        // 사진틀의 개수와 추천받은 학생의 수가 같을 경우
        // 사진틀안에 있는 학생중 추천수가 가장 작은 경우 삭제
        // 추천수가 같은 경우가 존재할 경우 먼저 들어온애 삭제
        hashEntries = sorting(hashEntries);
        delete hash[hashEntries[0][0]];
        hash[vote] = [1, i];
      }
    }
  }
  const hashKeys = Object.keys(hash).sort((a, b) => a - b);
  return hashKeys.join(" ");
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const n = Number(stdin[0]);
  const voteNum = Number(stdin[1]);
  const voteList = stdin[2].split(" ").map((str) => Number(str));
  console.log(solution(n, voteNum, voteList));
}

main();
