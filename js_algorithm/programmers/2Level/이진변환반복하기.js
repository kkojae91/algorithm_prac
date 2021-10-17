function getBinaryNumber(num) {
  let result = "";
  while (num > 0) {
    result += num % 2;
    num = parseInt(num / 2);
  }
  return result.split("").reverse().join("");
}

// answer = [이진변환횟수, 제거한 0의개수]
function solution(s) {
  let answer = [];
  let removeCount = 0;
  let transformCount = 0;

  function dfs(s) {
    if (s === "1") {
      answer = [transformCount, removeCount];
      return;
    }
    // 0제거
    let newS = "";
    for (const str of s) {
      if (str === "0") {
        removeCount++;
      } else {
        newS += str;
      }
    }
    // newS의 길이를 다시 이진법으로 변환
    const newSLength = newS.length;
    s = getBinaryNumber(newSLength);
    transformCount++;
    dfs(s);
  }
  dfs(s);

  return answer;
}

function main() {
  const sList = ["110010101001", "01110", "1111111"];
  for (const s of sList) {
    console.log(solution(s));
  }
}

main();
