/*
 * 영어 끝말잇기
 */

function solution(n, words) {
  let answer = [0, 0];
  let count = 0;
  const wordsHash = {};
  // reduce함수 시작 값으로 사용할 것 미리 준비
  const firstText = words[0][0];

  // wordsHash에 word: 0 으로 초기화
  words.forEach((word) => {
    wordsHash[word] = 0;
  });

  words.reduce((prev, curr, index) => {
    let currPeopleNum = (index + 1) % n;
    let peopleTurnNum = Math.ceil((index + 1) / n);
    currPeopleNum === 0 ? (currPeopleNum = n) : (currPeopleNum = currPeopleNum);
    const prevLastText = prev[prev.length - 1];
    const currFirstText = curr[0];
    // reduce에서는 break가 통하지 않으니 count++을 통해 break 역할을 대신해준다.
    if (wordsHash[curr] !== 0 && count === 0) {
      answer = [currPeopleNum, peopleTurnNum];
      count++;
    } else if (wordsHash[curr] === 0) {
      wordsHash[curr] = 1;
    }

    if (prevLastText !== currFirstText && count === 0) {
      answer = [currPeopleNum, peopleTurnNum];
      count++;
    }
    return curr;
  }, firstText);

  return answer;
}

function main() {
  const nList = [3, 5, 2];
  const wordsList = [
    ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"],
    [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ],
    ["hello", "one", "even", "never", "now", "world", "draw"],
  ];
  for (let i = 0; i < nList.length; i++) {
    console.log(solution(nList[i], wordsList[i]));
  }
}
main();
