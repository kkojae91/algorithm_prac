function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

function init() {
  const seoul = ["Jane", "Kim"];
  console.log(solution(seoul));
}

init();
