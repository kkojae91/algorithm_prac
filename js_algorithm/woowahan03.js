/*
어느 연못에 청개구리가 살고 있고, 무슨 말이든 반대로 한다.
엄마 말씀 word가 매개변수로 주어질 때, 아래 청개구리 사전을 참고하여 반대로 변환 후 return하는 프로그램 작성.
*/

function solution(words) {
  const wordsHash = {
    A: "Z",
    B: "Y",
    C: "X",
    D: "W",
    E: "V",
    F: "U",
    G: "T",
    H: "S",
    I: "R",
    J: "Q",
    K: "P",
    L: "O",
    M: "N",
    N: "M",
    O: "L",
    P: "K",
    Q: "J",
    R: "I",
    S: "H",
    T: "G",
    U: "F",
    V: "E",
    W: "D",
    X: "C",
    Y: "B",
    Z: "A",
  };
  let answer = "";
  for (const word of words) {
    const upperWord = word.toUpperCase();
    if (word === " ") {
      answer += " ";
    } else if (word === word.toUpperCase()) {
      answer += wordsHash[word];
    } else {
      answer += wordsHash[upperWord].toLowerCase();
    }
  }
  return answer;
}

function init() {
  const word = "I love you";
  console.log(solution(word));
}

init();
