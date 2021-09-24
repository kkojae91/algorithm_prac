function recursiveFunction(n) {
  function dfs(level) {
    if (level === 0) {
      return;
    } else {
      dfs(level - 1);
      console.log(level);
    }
  }

  dfs(n);
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
    const n = Number(inputList[0]);
    recursiveFunction(n);
    process.exit();
  });
}

main();
