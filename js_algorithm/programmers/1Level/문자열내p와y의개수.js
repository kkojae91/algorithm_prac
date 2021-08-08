function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let str of s) {
    if (str === "p" || str === "P") {
      pCount++;
    } else if (str === "y" || str === "Y") {
      yCount++;
    }
  }
  return pCount === yCount ? true : false;
}

// toUpperCase활용, split의 sperator활용. (다른사람이 짠 코드)
function solution2(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

function init() {
  const sentence = ["pPoooyY", "Pyy"];
  for (let s of sentence) {
    console.log(solution(s));
    console.log(solution2(s));
  }
}

init();
