function solution(s) {
  return s.split("").sort().reverse().join("");
}

function init() {
  const s = "Zbcdefg";
  console.log(solution(s));
}

init();
