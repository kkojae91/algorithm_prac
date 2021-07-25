// 내가 푼 방법 (너무 복잡....)
function solution(answers) {
  const LENGTH = parseInt(answers.length / 2);

  const math1 = "12345".repeat(LENGTH);
  const math2 = "21232425".repeat(LENGTH);
  const math3 = "3311224455".repeat(LENGTH);

  const countList = [0, 0, 0];

  answers.forEach((num, index) => {
    const math1Num = Number(math1[index]);
    const math2Num = Number(math2[index]);
    const math3Num = Number(math3[index]);
    if (num === math1Num) {
      countList[0]++;
    }
    if (num === math2Num) {
      countList[1]++;
    }
    if (num === math3Num) {
      countList[2]++;
    }
  });

  const result = [];
  countList.reduce((prev, curr, index) => {
    if (prev < curr) {
      result.pop();
      result.push(++index);
      return curr;
    } else if (prev === curr) {
      result.push(++index);
      return curr;
    }
    return prev;
  }, -1);

  return result;
}

// filter 활용
function solution2(answers) {
  const LENGTH = answers.length;

  const math1 = [1, 2, 3, 4, 5];
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const correct1 = answers.filter((num, index) => num === math1[index % LENGTH]).length;
  const correct2 = answers.filter((num, index) => num === math2[index % LENGTH]).length;
  const correct3 = answers.filter((num, index) => num === math3[index % LENGTH]).length;
  const maxCorrect = Math.max(correct1, correct2, correct3);

  const result = [];

  if (maxCorrect === correct1) {
    result.push(1);
  }
  if (maxCorrect === correct2) {
    result.push(2);
  }
  if (maxCorrect === correct3) {
    result.push(3);
  }

  return result;
}

function init() {
  const answersList = [
    [1, 2, 3, 4, 5],
    [1, 3, 2, 4, 2],
  ];

  for (const answers of answersList) {
    // console.log(solution(answers));
    console.log(solution2(answers));
  }
}

init();
