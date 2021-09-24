function printBinaryNumber(num) {
  let answer = "";

  function dfs(num) {
    let remain = String(num % 2);
    let quotient = parseInt(num / 2);
    // 종료 조건 설정
    if (quotient === 0) {
      answer += "1";
      return;
    }
    dfs(quotient);
    answer += remain;
  }

  dfs(num);
  return answer;
}

function main() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const num = Number(inputList[0]);
    console.log(printBinaryNumber(num));
    console.log(printBinaryNumber2(num));
    process.exit();
  });
}

main();
