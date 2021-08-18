/*
아나그램이란, 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 한다.
즉, 어느 한 단어를 재 배열하면 상대편 단어가 될 수 있는 것을 아나그램이라고 한다.
길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자는 구분된다.
YES, NO 출력

AbaAeCe
baeeACA
YES

abaCC
Caaab
NO
*/

class Anagram {
  constructor() {
    this.str1 = "";
    this.str2 = "";
    this.map1 = new Map();
    this.map2 = new Map();
  }

  solution() {
    for (let i = 0; i < this.str1.length; i++) {
      const text1 = this.str1[i];
      const text2 = this.str2[i];
      this.map1[text1] === undefined ? (this.map1[text1] = 1) : (this.map1[text1] += 1);
      this.map2[text2] === undefined ? (this.map2[text2] = 1) : (this.map2[text2] += 1);
    }

    const map1Entries = Object.entries(this.map1);
    const map2Entries = Object.entries(this.map2);
    map1Entries.sort();
    map2Entries.sort();

    let count = 0;
    for (let i = 0; i < map1Entries.length; i++) {
      if (map1Entries[i][0] === map2Entries[i][0] && map1Entries[i][1] === map2Entries[i][1]) {
        count++;
      }
    }

    if (count === map1Entries.length) {
      return "YES";
    } else {
      return "NO";
    }
  }

  initialize(inputList) {
    this.str1 = inputList.slice(0, 1)[0];
    this.str2 = inputList.slice(1, 2)[0];
  }
}

class Anagram2 {
  constructor() {
    this.str1 = "";
    this.str2 = "";
    this.answer = "YES";
    this.strHash = new Map();
  }

  solution() {
    for (let str of this.str1) {
      this.strHash.has(str) ? this.strHash.set(str, this.strHash.get(str) + 1) : this.strHash.set(str, 1);
    }

    for (let str of this.str2) {
      if (!this.strHash.has(str) || this.strHash.get(str) === 0) {
        return "NO";
      }
      this.strHash.set(str, this.strHash.get(str) - 1);
    }
    return this.answer;
  }

  initialize(inputList) {
    this.str1 = inputList.slice(0, 1)[0];
    this.str2 = inputList.slice(1, 2)[0];
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
    const anagram = new Anagram();
    const anagram2 = new Anagram2();
    anagram.initialize(inputList);
    anagram2.initialize(inputList);
    // console.log(anagram.solution());
    console.log(anagram2.solution());
    process.exit();
  });
}

main();
