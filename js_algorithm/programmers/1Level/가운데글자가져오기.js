function solution(s) {
  const sLength = s.length;
  let startIndex = 0;
  let endIndex = 0;
  if (sLength % 2 === 0) {
    startIndex = sLength / 2 - 1;
    endIndex = sLength / 2 + 1;
    return s.slice(startIndex, endIndex);
  } else {
    startIndex = parseInt(sLength / 2);
    endIndex = startIndex + 1;
    return s.slice(startIndex, endIndex);
  }
}

function init() {
  const string = ["abcde", "qwer"];
  for (let s of string) {
    console.log(solution(s));
  }
}

init();
