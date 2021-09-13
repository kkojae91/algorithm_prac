/*
* 뮤직 비디오 (결정 알고리즘)
9 3
1 2 3 4 5 6 7 8 9
17
*/

class MusicVideo {
  constructor() {
    this.n = 0;
    this.m = 0;
    this.array = [];
    this.answer = 0;
  }

  countSongs(capacity) {
    let cnt = 1;
    let sum = 0;
    for (const song of this.array) {
      if (sum + song > capacity) {
        cnt++;
        sum = song;
      } else {
        sum += song;
      }
    }
    return cnt;
  }

  solution() {
    let left = Math.max(...this.array);
    let right = this.array.reduce((prev, curr) => prev + curr, 0);

    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (this.countSongs(mid) <= this.m) {
        this.answer = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return this.answer;
  }

  initialize(inputList) {
    [this.n, this.m] = inputList
      .slice(0, 1)[0]
      .split(" ")
      .map((str) => Number(str));
    this.array = inputList
      .slice(1, 2)[0]
      .split(" ")
      .map((str) => Number(str));
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
    const musicVideo = new MusicVideo();
    musicVideo.initialize(inputList);
    console.log(musicVideo.solution());
    process.exit();
  });
}

main();
