/*
teachermode e
*/
class MinDistance {
  constructor() {
    this.sentence = "";
    this.text = "";
    this.obj = {};
    this.objKeys = [];
    this.distanceArray = [];
    this.answer = [];
  }

  makeObj() {
    let index = 0;
    let textIndex = 0;
    while (true) {
      if (index === -1) {
        break;
      } else if (index === 0) {
        textIndex = this.sentence.indexOf(this.text, 0);
      } else {
        textIndex = this.sentence.indexOf(this.text, index + 1);
      }

      if (textIndex !== -1) {
        this.obj[textIndex] = [];
      }
      index = textIndex;
    }

    this.objKeys = Object.keys(this.obj);

    for (const key of this.objKeys) {
      for (let i = 0; i < this.sentence.length; i++) {
        this.obj[key].push(Math.abs(i - Number(key)));
      }
    }
  }

  solution() {
    this.makeObj();

    this.distanceArray = [];
    this.objKeys.forEach((key) => {
      this.distanceArray.push(this.obj[key]);
    });

    for (let j = 0; j < this.sentence.length; j++) {
      let temp = [];
      for (let i = 0; i < this.distanceArray.length; i++) {
        temp.push(this.distanceArray[i][j]);
      }
      this.answer.push(Math.min(...temp));
    }
    return this.answer.join(" ");
  }

  initialize(inputList) {
    this.sentence = inputList.slice(0, 1)[0].split(" ")[0];
    this.text = inputList.slice(0, 1)[0].split(" ")[1];
    console.log(this.solution());
  }
}

// 문제 해결 능력 조금 더 쉽게 생각한다. 안되면 어떻게든 구현하면 되는 듯.
class MinDistance2 {
  constructor() {
    this.sentence = "";
    this.target = "";
    this.rightAnswer = [];
    this.leftAnswer = [];
    this.answer = [];
    // 문자열보다 큰 숫자로 초기화
    this.distance = 1000;
  }

  solution() {
    // target을 기준으로 오른쪽으로 몇 번째 떨어져있는지 확인,
    for (const text of this.sentence) {
      if (this.target === text) {
        this.distance = 0;
        this.rightAnswer.push(this.distance);
      } else {
        this.distance++;
        this.rightAnswer.push(this.distance);
      }
    }
    // target을 기준으로 왼쪽으로 몇 번째 떨어져 있는지 확인,
    this.distance = 1000;
    for (let i = this.sentence.length - 1; i >= 0; i--) {
      const text = this.sentence[i];
      if (this.target === text) {
        this.distance = 0;
        this.leftAnswer.push(this.distance);
      } else {
        this.distance++;
        this.leftAnswer.push(this.distance);
      }
    }
    this.leftAnswer.reverse();
    // 둘 중 가장 작은 수를 this.answer리스트에 담는다.
    for (let i = 0; i < this.sentence.length; i++) {
      const minDistance = Math.min(this.leftAnswer[i], this.rightAnswer[i]);
      this.answer.push(minDistance);
    }

    return this.answer.join(" ");
  }

  initialize(inputList) {
    [this.sentence, this.target] = inputList[0].split(" ");
    console.log(this.solution());
  }
}

function init() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const minDistance = new MinDistance();
    const minDistance2 = new MinDistance2();
    // minDistance.initialize(inputList);
    minDistance2.initialize(inputList);
    process.exit();
  });
}

init();
