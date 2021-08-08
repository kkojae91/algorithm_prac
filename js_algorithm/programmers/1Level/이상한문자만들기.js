function solution(s) {
  const result = [];
  const wordsList = s.split(" ");
  wordsList.forEach((words) => {
    let wordStr = "";
    words.split("").forEach((word, index) => {
      index % 2 === 0 ? (wordStr += word.toUpperCase()) : (wordStr += word.toLowerCase());
    });
    result.push(wordStr);
  });
  return result.join(" ");
}

function init() {
  const s = "try hello world";
  console.log(solution(s));
}

init();
