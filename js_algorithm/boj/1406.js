/*
abcd
3
P x
L
P y
*/

// 시간 초과...
function solution(str, n, nList) {
  let indexCount = str.length;
  strList = str.split("");
  nList.forEach((n) => {
    const command = n[0];
    if (command === "L" && indexCount > 0) {
      indexCount--;
    } else if (command === "D" && indexCount < strList.length) {
      indexCount++;
    } else if (command === "B") {
      if (indexCount !== 0) {
        strList.splice(indexCount - 1, 1);
        indexCount--;
      }
    } else if (command === "P") {
      const text = n[n.length - 1];
      strList.splice(indexCount, 0, text);
      indexCount++;
    }
  });
  console.log(strList.join(""));
}

// L 커서 왼쪽 한 칸 이동
// D 커서 오른쪽으로 한 칸 이동
// B 커서 왼쪽 하나 삭제
// P $ 커서 왼쪽에 $ 문자 삽입

function solution2(str, n, nList) {
  const leftStack = str.split("");
  const rightStack = [];

  for (let i = 0; i < n; i++) {
    let [command, text] = nList[i].split(" ");

    if (command === "L" && leftStack.length) {
      rightStack.push(leftStack.pop());
    } else if (command === "D" && rightStack.length) {
      leftStack.push(rightStack.pop());
    } else if (command === "B") {
      leftStack.pop();
    } else if (command === "P") {
      leftStack.push(text);
    }
  }
  const answer = [...leftStack, ...rightStack.reverse()].join("");
  console.log(answer);
}

function main() {
  const fs = require("fs");
  const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");
  const str = stdin[0];
  const n = Number(stdin[1]);
  const nList = stdin.slice(2, n + 2);
  solution2(str, n, nList);
}

main();
