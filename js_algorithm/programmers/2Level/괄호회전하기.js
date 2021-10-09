function check(sList) {
  const stack = [];

  for (const s of sList) {
    if (stack.length === 0) {
      stack.push(s);
    } else {
      const sIndex = stack.length - 1;
      if ((stack[sIndex] === "[" && s === "]") || (stack[sIndex] === "{" && s === "}") || (stack[sIndex] === "(" && s === ")")) {
        stack.pop();
      } else {
        stack.push(s);
      }
    }
  }

  return stack.length === 0 ? true : false;
}

function solution(s) {
  let answer = 0;
  const sList = s.split("");
  let count = 0;
  while (count !== s.length) {
    if (check(sList)) {
      answer++;
    }
    sList.push(sList.shift());
    count++;
  }

  return answer;
}

function main() {
  const sList = ["[](){}", "}]()[{", "[)(]", "}}}"];
  sList.forEach((s) => console.log(solution(s)));
}

main();
