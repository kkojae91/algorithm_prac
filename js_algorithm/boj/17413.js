// 단어 뒤집기2

// stack <시작과 >끝을 찾아서 따로 저장
// < 시작되기전까지 따로 저장

function solution(str) {
  let answer = "";
  let pStack = [];
  let sStack = [];
  for (const s of str) {
    if (s === "<") {
      pStack.push(s);
      if (sStack.length > 0) {
        const strList = sStack.join("").split(" ");
        strList.forEach((str, index) => {
          if (index === strList.length - 1) {
            answer += str.split("").reverse().join("");
          } else {
            answer += str.split("").reverse().join("") + " ";
          }
        });
        sStack = [];
      }
    } else if (s === ">") {
      pStack.push(s);
      answer += pStack.join("");
      pStack = [];
    } else if (pStack.length > 0) {
      pStack.push(s);
    } else {
      sStack.push(s);
    }
  }

  if (sStack.length > 0) {
    const strList = sStack.join("").split(" ");
    strList.forEach((str, index) => {
      if (index === strList.length - 1) {
        answer += str.split("").reverse().join("");
      } else {
        answer += str.split("").reverse().join("") + " ";
      }
    });
  }
  console.log(answer);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().trim();
  solution(stdin);
}

main();
