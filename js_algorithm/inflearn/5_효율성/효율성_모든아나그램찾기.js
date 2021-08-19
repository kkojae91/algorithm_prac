/*
s문자열에서 t문자열과 아나그램이 되는 s의 부분문자열의 개수를 구하는 프로그램을 작성하시오.
아나그램 판별시 대소문자는 구분한다. 부분문자열은 연속된 문자열이어야 합니다.
bacaAacba
abc
3
*/

class AllAnagram {
  constructor() {
    this.strS = "";
    this.strT = "";
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    this.map = new Map();
  }

  isAnagram(sliceStr) {
    for (const str of sliceStr) {
      if (!this.map.has(str) || this.map.get(str) === 0) {
        return false;
      } else {
        this.map.set(str, this.map.get(str) - 1);
      }
    }
    return true;
  }

  // strT의 맴 객체 세팅
  initializeMap() {
    for (const str of this.strT) {
      if (this.map.has(str)) {
        this.map.set(str, this.map.get(str) + 1);
      } else {
        this.map.set(str, 1);
      }
    }
  }

  solution() {
    // rear 초기값 세팅
    this.rear = this.strT.length;

    while (this.rear <= this.strS.length) {
      this.initializeMap();
      const sliceStr = this.strS.slice(this.front, this.rear);
      if (this.isAnagram(sliceStr)) {
        this.count++;
      }
      this.front++;
      this.rear++;
    }
    console.log(this.count);
  }

  initialize(inputList) {
    this.strS = inputList.slice(0, 1)[0];
    this.strT = inputList.slice(1, 2)[0];
  }
}

class AllAnagram2 {
  constructor() {
    this.strS = "";
    this.strT = "";
    this.answer = 0;
    this.mapS = new Map();
    this.mapT = new Map();
    this.length = 0;
    this.front = 0;
  }

  compareMaps(mapS, mapT) {
    if (mapS.size !== mapT.size) {
      return false;
    }

    for (const [key, value] of mapS) {
      if (!mapT.has(key) || mapT.get(key) !== value) {
        return false;
      }
    }
    return true;
  }

  solution() {
    // mapT setting
    for (const str of this.strT) {
      this.mapT.has(str) ? this.mapT.set(str, this.mapT.get(str) + 1) : this.mapT.set(str, 1);
    }

    this.length = this.strT.length - 1;

    // 초기값 세팅
    for (let i = 0; i < this.length; i++) {
      const str = this.strS[i];
      this.mapS.has(str) ? this.mapS.set(str, this.mapS.get(str) + 1) : this.mapS.set(str, 1);
    }

    for (let rear = this.length; rear < this.strS.length; rear++) {
      const rearStr = this.strS[rear];
      this.mapS.has(rearStr) ? this.mapS.set(rearStr, this.mapS.get(rearStr) + 1) : this.mapS.set(rearStr, 1);

      if (this.compareMaps(this.mapS, this.mapT)) {
        this.answer++;
      }

      const frontStr = this.strS[this.front];
      this.mapS.set(frontStr, this.mapS.get(frontStr) - 1);
      if (this.mapS.get(frontStr) === 0) {
        this.mapS.delete(frontStr);
      }

      this.front++;
    }
    return this.answer;
  }

  initialize(inputList) {
    this.strS = inputList.slice(0, 1)[0];
    this.strT = inputList.slice(1, 2)[0];
  }
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
    const allAnagram = new AllAnagram();
    const allAnagram2 = new AllAnagram2();
    allAnagram.initialize(inputList);
    allAnagram2.initialize(inputList);
    // console.log(allAnagram.solution());
    console.log(allAnagram2.solution());
    process.exit();
  });
}

main();
