function solution(s) {
  let answer = "";
  const wordHash = { zero: "0", one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9" };
  let stack = [];
  for (const str of s) {
    if (isNaN(str)) {
      stack.push(str);
      if (wordHash[stack.join("")]) {
        answer += wordHash[stack.join("")];
        stack = [];
      }
    } else {
      answer += str;
    }
  }

  return Number(answer);
}

function main() {
  const sList = ["one4seveneight", "23four5six7", "2three45sixseven", "123"];
  for (let i = 0; i < sList.length; i++) {
    console.log(solution(sList[i]));
  }
}

main();
